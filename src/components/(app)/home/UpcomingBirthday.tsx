import { UserButton } from '@clerk/clerk-react'
import type { FC } from 'react'
import { MdOutlineCalendarMonth } from 'react-icons/md'

interface Props {}

export const UpcomingBirthday: FC<Props> = () => {
  return (
    <div className="card bg-base-100 card-border">
      <div className="card-body gap-4">
        <h1 className="card-title">
          <MdOutlineCalendarMonth className="size-6" />
          Próximo Cumpleaños
        </h1>

        <div className="card card-sm bg-primary text-primary-content">
          <div className="card-body flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-3">
              <UserButton />

              <p className="text-lg font-extrabold">gatuto</p>
            </div>

            <button className="btn btn-secondary">Ver más</button>
          </div>
        </div>
      </div>
    </div>
  )
}
