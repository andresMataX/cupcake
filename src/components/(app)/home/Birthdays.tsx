import { useBirthdays } from '@/hooks'
import { getLocale } from '@/paraglide/runtime'
import { format, formatDistanceStrict } from 'date-fns'
import { enUS, es } from 'date-fns/locale'
import type { FC } from 'react'
import { MdOutlineCalendarMonth } from 'react-icons/md'

interface Props {}

export const Birthdays: FC<Props> = () => {
  const upcoming = useBirthdays()

  return (
    <div className="card bg-base-100 card-border">
      <div className="card-body gap-3">
        <h1 className="card-title">
          <MdOutlineCalendarMonth className="size-6" />
          {/* TODO: Add translation */}
          Todos los Cumpleaños
        </h1>

        <div className="divider divider-secondary my-0" />

        {upcoming.slice(1).map(({ date, birthdays }, i) => (
          <div
            key={i}
            className="flex flex-col gap-3"
          >
            {birthdays.map((user) => (
              <div
                key={user.id}
                className="card card-sm bg-primary text-primary-content"
              >
                <div className="card-body flex-row items-center justify-between">
                  <div className="flex flex-row items-center gap-3">
                    <div className="avatar">
                      <div className="w-10 rounded-full">
                        <img src={user.imageUrl} />
                      </div>
                    </div>

                    <div>
                      <p className="text-lg font-extrabold">{user.username}</p>

                      <p>
                        {`${format(date, 'PPPP', {
                          locale: getLocale() === 'es' ? es : enUS,
                        })}, ${formatDistanceStrict(user.birthday, new Date(), {
                          locale: getLocale() === 'es' ? es : enUS,
                        })}`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {i < upcoming.length - 2 && (
              <div className="divider divider-secondary my-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
