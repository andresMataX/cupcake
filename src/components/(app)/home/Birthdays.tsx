import { BirthdayInfo } from '@/components/common'
import { useBirthdays } from '@/hooks'
import { m } from '@/paraglide/messages'
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

          {m['app.home.birthdays.title']()}
        </h1>

        <div className="divider divider-secondary my-0" />

        {upcoming.slice(1).map(({ date, birthdays }, i) => (
          <div
            key={i}
            className="flex flex-col gap-3"
          >
            {birthdays.map((user) => (
              <BirthdayInfo
                key={user.id}
                birthday={user}
                date={date}
              />
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
