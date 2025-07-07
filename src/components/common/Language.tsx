import { getLocale, setLocale } from '@/paraglide/runtime'
import type { FC } from 'react'

const flag = {
  es: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg',
  en: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/250px-Flag_of_the_United_States_%28Pantone%29.svg.png',
}

interface Props {}

export const Language: FC<Props> = () => {
  const locale = getLocale()

  const onSwitchLanguage = () => {
    if (locale === 'es') {
      setLocale('en')
    } else {
      setLocale('es')
    }
  }

  return (
    <div
      className="tooltip tooltip-bottom"
      data-tip="Switch language"
    >
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
    </div>
  )
}
