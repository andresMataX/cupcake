import { useUser } from '@clerk/clerk-react'
import { useForm } from '@tanstack/react-form'
import { format } from 'date-fns'
import { type FC } from 'react'

import { DayPicker } from 'react-day-picker'
import { MdOutlineCalendarMonth } from 'react-icons/md'

interface Props {}

export const ThemePage: FC<Props> = () => {
  const { user } = useUser()

  const form = useForm({
    defaultValues: {
      date: user?.unsafeMetadata.cupcake?.birthday ?? new Date(),
    },
    onSubmit: async ({ value }) => {
      console.log(value)
    },
  })

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

      <form
        onSubmit={(e) => {
          e.preventDefault()
          form.handleSubmit()
        }}
      >
        <form.Field
          name="date"
          children={(field) => (
            <>
              <fieldset className="fieldset">
                <legend className="fieldset-legend pb-1">
                  Fecha de nacimiento
                </legend>

                <button
                  type="button"
                  popoverTarget="rdp-popover"
                  className="input input-border w-full"
                  style={{ anchorName: '--rdp' } as React.CSSProperties}
                >
                  <MdOutlineCalendarMonth className="mr-1" />
                  {format(
                    field.state.value,
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
                  selected={field.state.value}
                  defaultMonth={field.state.value}
                  onSelect={field.handleChange}
                  className="react-day-picker"
                  captionLayout="dropdown"
                  mode="single"
                  required
                />
              </div>
            </>
          )}
        />
      </form>
    </div>
  )
}
