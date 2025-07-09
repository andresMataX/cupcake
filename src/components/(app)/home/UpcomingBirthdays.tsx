import type { FC } from 'react'
import { MdOpenInNew, MdOutlineCalendarMonth } from 'react-icons/md'

interface Props {}

export const UpcomingBirthdays: FC<Props> = () => {
  return (
    <div className="card card-side bg-base-100 card-border">
      <figure className="bg-secondary text-secondary-content w-28">
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-extrabold">218</p>

          <p className="text-lg">días</p>
        </div>
      </figure>

      <div className="card-body gap-4">
        <h1 className="card-title">
          <MdOutlineCalendarMonth className="size-6" />
          Próximos Cumpleaños
        </h1>

        <div className="card card-sm bg-primary text-primary-content">
          <div className="card-body flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-3">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src="https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yelBrbWIwWUZlMUhwY0g0dWh2SkFSRVFFODgiLCJyaWQiOiJ1c2VyXzJ6UG40NGhKNHd3WUxSa0c2VWsyS2U4VEg4eSJ9" />
                </div>
              </div>

              <div>
                <p className="text-lg font-extrabold">gatuto</p>

                <p>Lunes 11 de febrero, 24 años</p>
              </div>
            </div>

            <button className="btn btn-secondary">
              <MdOpenInNew className="button-icon" />
              Votar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
