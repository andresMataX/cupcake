import { useUser } from '@clerk/clerk-react'
import { format } from 'date-fns'
import { useState, type FC } from 'react'

import { DayPicker } from 'react-day-picker'
import { MdOutlineCalendarMonth } from 'react-icons/md'

interface Props {}

export const ThemePage: FC<Props> = () => {
  const { user } = useUser()

  const [date, setDate] = useState<Date>(
    user?.unsafeMetadata.cupcake?.birthday ?? new Date(),
  )

  if (!user) return <></>

  return (
    <div className="flex flex-col gap-3">
      <div>
        <h1 className="text-xl font-bold">Información de Cupcake</h1>

        <p className="text-sm text-gray-500">
          Aquí puedes cambiar la información relacionada a la aplicación
          Cupcake.
        </p>
      </div>

      <fieldset className="fieldset">
        <legend className="fieldset-legend pb-1">Fecha de nacimiento</legend>

        <button
          popoverTarget="rdp-popover"
          className="input input-border w-full"
          style={{ anchorName: '--rdp' } as React.CSSProperties}
        >
          <MdOutlineCalendarMonth className="mr-1" />
          {format(
            date,
            user.unsafeMetadata.general?.date_format || 'dd/MM/yyyy',
          )}
        </button>
      </fieldset>

      <div
        popover="auto"
        id="rdp-popover"
        className="dropdown"
        style={{ positionAnchor: '--rdp' } as React.CSSProperties}
      >
        <DayPicker
          selected={date}
          defaultMonth={date}
          onSelect={setDate}
          className="react-day-picker"
          captionLayout="dropdown"
          mode="single"
          required
        />
      </div>
    </div>
  )
}
