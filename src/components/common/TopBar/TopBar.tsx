import { UserButton } from '@clerk/clerk-react'
import { Link } from '@tanstack/react-router'
import type { FC } from 'react'
import { GiCupcake } from 'react-icons/gi'
import { Language } from '../Language'
import { ThemePage } from './ThemePage'

interface Props {}

export const TopBar: FC<Props> = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="btn btn-primary"
        >
          <GiCupcake className="icon-button" />

          <span>Cupcake</span>
        </Link>

        <div className="flex items-center gap-3">
          <Language />

          <UserButton>
            <UserButton.UserProfilePage
              label="Settings"
              url="custom"
              labelIcon={<GiCupcake />}
            >
              <ThemePage />
            </UserButton.UserProfilePage>

            <UserButton.UserProfilePage label="account" />

            <UserButton.UserProfilePage label="security" />
          </UserButton>
        </div>
      </div>
    </div>
  )
}
