import { getLocale } from '@/paraglide/runtime'
import { format, formatDistanceStrict } from 'date-fns'
import { enUS, es } from 'date-fns/locale'
import type { FC } from 'react'

interface Props {}

export const Header: FC<Props> = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* TODO: Add translation */}
      <h1 className="text-center text-5xl font-black">Sala de votación</h1>

      <div className="card card-sm bg-primary text-primary-content">
        <div className="card-body flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-3">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img
                  src={
                    'https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yelBrbWIwWUZlMUhwY0g0dWh2SkFSRVFFODgiLCJyaWQiOiJ1c2VyXzJ6UG40NGhKNHd3WUxSa0c2VWsyS2U4VEg4eSJ9'
                  }
                />
              </div>
            </div>

            <div>
              <p className="text-lg font-extrabold">cadereyta</p>

              <p>
                {`${format(new Date(), 'PPPP', {
                  locale: getLocale() === 'es' ? es : enUS,
                })}, ${formatDistanceStrict(new Date(), new Date(), {
                  locale: getLocale() === 'es' ? es : enUS,
                })}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
