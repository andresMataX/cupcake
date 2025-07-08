import { useUser } from '@clerk/clerk-react'
import type { FC } from 'react'
import { MdOutlineWarningAmber } from 'react-icons/md'

interface Props {}

export const MissingBirthday: FC<Props> = () => {
  const { user } = useUser()

  if (user?.unsafeMetadata.cupcake?.birthday) return <></>

  return (
    <div className="alert alert-warning alert-vertical sm:alert-horizontal alert-soft">
      <MdOutlineWarningAmber className="size-6" />

      <div>
        {/* TODO: Add translation */}
        <h3 className="font-bold">Información faltante</h3>

        {/* TODO: Add translation */}
        <div className="text-xs">
          No has configurado tu cumpleaños. Para que tus amigos puedan escoger
          tu regalo, por favor, añade tu fecha de nacimiento en la sección de
          perfil.
        </div>
      </div>
    </div>
  )
}
