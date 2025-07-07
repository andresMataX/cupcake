import { UserButton } from '@clerk/clerk-react'
import { Link } from '@tanstack/react-router'
import type { FC } from 'react'
import { GiCupcake } from 'react-icons/gi'

const DotIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
    >
      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </svg>
  )
}

const CustomPage = () => {
  return (
    <div>
      <h1>Custom page</h1>
      <p>This is the content of the custom page.</p>
      <input
        type="text"
        placeholder="Type here"
        className="input input-primary"
      />
    </div>
  )
}

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

        <UserButton>
          {/* You can pass the content as a component */}
          <UserButton.UserProfilePage
            label="Custom Page"
            url="custom"
            labelIcon={<DotIcon />}
          >
            <CustomPage />
          </UserButton.UserProfilePage>

          {/* You can also pass the content as direct children */}
          <UserButton.UserProfilePage
            label="Terms"
            labelIcon={<DotIcon />}
            url="terms"
          >
            <div>
              <h1>Custom Terms Page</h1>
              <p>This is the content of the custom terms page.</p>
            </div>
          </UserButton.UserProfilePage>
        </UserButton>
      </div>
    </div>
  )
}
