import { BirthdayInfo } from '@/components/common'
import { useBirthdays } from '@/hooks/birthdays'
import { m } from '@/paraglide/messages'
import { getLocale } from '@/paraglide/runtime'
import { Link } from '@tanstack/react-router'
import { formatDistanceToNowStrict } from 'date-fns'
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

          {m['app.home.upcoming_birthdays.title']()}
        </h1>

        {upcoming.birthdays.map((birthday) => (
          <BirthdayInfo
            key={birthday.id}
            birthday={birthday}
            date={upcoming.date}
            action={
              <Link
                to="/voting-room/$id"
                params={{ id: birthday.id }}
                className="btn btn-secondary"
              >
                <MdOpenInNew className="button-icon" />

                {m['common.vote']()}
              </Link>
            }
          />
        ))}
      </div>
    </div>
  )
}
