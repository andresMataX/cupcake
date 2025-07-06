import { UserButton } from '@clerk/clerk-react'
import { Link } from '@tanstack/react-router'
import type { FC } from 'react'
import { GiCupcake } from 'react-icons/gi'

interface Props {}

export const TopBar: FC<Props> = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="btn btn-primary"
        >
          <span>Cupcake</span>

          <GiCupcake className="size-5" />
        </Link>

        <UserButton />
      </div>
    </div>
  )
}
