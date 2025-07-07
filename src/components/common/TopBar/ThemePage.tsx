import { useUpdateBirthday } from '@/hooks'
import { m } from '@/paraglide/messages'
import { useUser } from '@clerk/clerk-react'
import { useForm } from '@tanstack/react-form'
import { format } from 'date-fns'
import { type FC } from 'react'
import { DayPicker } from 'react-day-picker'
import { MdOutlineCalendarMonth, MdOutlineSave } from 'react-icons/md'

interface Props {}

export const ThemePage: FC<Props> = () => {
  const { user } = useUser()

  const { mutate, isPending } = useUpdateBirthday()

  const form = useForm({
    defaultValues: {
      date: user?.unsafeMetadata.cupcake?.birthday ?? new Date(),
    },
    onSubmit: async ({ value }) => {
      if (!user) return

      const date = value.date

      const prev = user.unsafeMetadata

      type UpdateUserParams = Parameters<typeof user.update>[0]

      const body: UpdateUserParams = {
        unsafeMetadata: { ...prev, cupcake: { birthday: date } },
      }

      mutate(body)
    },
  })

  if (!user) return <></>

  return (
    <div className="flex flex-col gap-3">
      <div>
        <h1 className="text-xl font-bold">{m['app.profile.title']()}</h1>

        <p className="text-sm text-gray-500">{m['app.profile.subtitle']()}</p>
      </div>

      <form
        className="flex flex-col gap-1"
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
                  {m['app.profile.form.date.label']()}
                </legend>

                <button
                  type="button"
                  popoverTarget="rdp-popover"
                  className="input input-border w-full"
                  style={{ anchorName: '--rdp' } as React.CSSProperties}
                >
                  <MdOutlineCalendarMonth className="icon-button" />
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

        <button
          type="submit"
          className="btn btn-primary self-end"
          disabled={isPending}
        >
          <MdOutlineSave className="icon-button" />

          {m['common.save']()}
        </button>
      </form>
    </div>
  )
}
