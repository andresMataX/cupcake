import type { Birthday } from '@/interfaces'
import { getLocale } from '@/paraglide/runtime'
import { format, formatDistanceStrict } from 'date-fns'
import { enUS, es } from 'date-fns/locale'
import type { FC } from 'react'

interface Props {
  date: Date
  birthday: Birthday
}

export const BirthdayInfo: FC<Props> = ({ birthday, date }) => {
  return (
    <div className="card card-sm bg-primary text-primary-content">
      <div className="card-body flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={birthday.imageUrl} />
            </div>
          </div>

          <div>
            <p className="text-lg font-extrabold">{birthday.username}</p>

            <p>
              {`${format(date, 'PPPP', {
                locale: getLocale() === 'es' ? es : enUS,
              })}, ${formatDistanceStrict(birthday.birthday, new Date(), {
                locale: getLocale() === 'es' ? es : enUS,
              })}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
