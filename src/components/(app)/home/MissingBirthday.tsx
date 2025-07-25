import { m } from '@/paraglide/messages'
import { useUser } from '@clerk/clerk-react'
import type { FC } from 'react'
import { MdOutlineWarningAmber } from 'react-icons/md'

interface Props {}

export const MissingBirthday: FC<Props> = () => {
  const { user } = useUser()

  if (user!.unsafeMetadata.cupcake?.birthday) return <></>

  return (
    <div className="alert alert-warning alert-vertical sm:alert-horizontal alert-soft">
      <MdOutlineWarningAmber className="size-6" />

      <div>
        <h3 className="font-bold">{m['common.missing_info']()}</h3>

        <div className="text-xs">
          {m['app.home.missing_birthday.description']()}
        </div>
      </div>
    </div>
  )
}
