import { useState, type FC } from 'react'
import { DayPicker } from 'react-day-picker'

interface Props {}

export const ThemePage: FC<Props> = () => {
  const [date, setDate] = useState<Date>()

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-semibold">Información de Cupcake</h1>

      <p className="text-sm">
        Aquí puedes cambiar la información relacionada a la aplicación Cupcake.
      </p>

      <fieldset className="fieldset">
        <legend className="fieldset-legend pb-1">Fecha de nacimiento</legend>

        <button
          popoverTarget="rdp-popover"
          className="input input-border w-full"
          style={{ anchorName: '--rdp' } as React.CSSProperties}
        >
          {date ? date.toLocaleDateString() : 'Pick a date'}
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
          onSelect={setDate}
          className="react-day-picker"
          captionLayout="dropdown"
          mode="single"
        />
      </div>
    </div>
  )
}
