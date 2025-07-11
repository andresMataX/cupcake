import { useBirthdays } from '@/hooks/birthdays'
import { getLocale } from '@/paraglide/runtime'
import {
  format,
  formatDistanceStrict,
  formatDistanceToNowStrict,
} from 'date-fns'
import { enUS, es } from 'date-fns/locale'
import type { FC } from 'react'
import { MdOpenInNew, MdOutlineCalendarMonth } from 'react-icons/md'

interface Props {}

export const UpcomingBirthdays: FC<Props> = () => {
  const [upcoming] = useBirthdays()

  return (
    <div className="card card-side bg-base-100 card-border">
      <figure className="bg-secondary text-secondary-content w-28">
        <div className="flex flex-col items-center justify-center">
          <p className="text-center text-2xl font-extrabold">
            {formatDistanceToNowStrict(upcoming.date, {
              locale: getLocale() === 'es' ? es : enUS,
            })}
          </p>
        </div>
      </figure>

      <div className="card-body gap-4">
        <h1 className="card-title">
          <MdOutlineCalendarMonth className="size-6" />
          {/* TODO: Add translation */}
          Próximos Cumpleaños
        </h1>

        {upcoming.birthdays.map((user) => (
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
                    {`${format(upcoming.date, 'PPPP', {
                      locale: getLocale() === 'es' ? es : enUS,
                    })}, ${formatDistanceStrict(user.birthday, new Date(), {
                      locale: getLocale() === 'es' ? es : enUS,
                    })}`}
                  </p>
                </div>
              </div>

              <button className="btn btn-secondary">
                <MdOpenInNew className="button-icon" />
                {/* TODO: Add translation */}
                Votar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
