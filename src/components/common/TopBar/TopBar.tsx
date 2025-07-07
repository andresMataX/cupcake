import { getLocale, setLocale } from '@/paraglide/runtime'
import { UserButton } from '@clerk/clerk-react'
import { Link } from '@tanstack/react-router'
import type { FC } from 'react'
import { GiCupcake } from 'react-icons/gi'
import { ThemePage } from './ThemePage'

const flag = {
  es: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg',
  en: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/250px-Flag_of_the_United_States_%28Pantone%29.svg.png',
}

interface Props {}

export const TopBar: FC<Props> = () => {
  const locale = getLocale()

  const onSwitchLanguage = () => {
    if (locale === 'es') {
      setLocale('en')
    } else {
      setLocale('es')
    }
  }

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
          <button
            className="btn btn-dash btn-primary btn-circle btn-sm"
            onClick={onSwitchLanguage}
          >
            <div className="avatar">
              <div className="w-5 rounded-full">
                <img src={flag[locale]} />
              </div>
            </div>
          </button>

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
