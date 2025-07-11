import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import type { FC } from 'react'

interface Props {}

export const LoadingPage: FC<Props> = () => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="size-32">
        <DotLottieReact
          src="https://lottie.host/f0ed2910-b21b-487e-8003-b69e7594b6ab/EnfxQDhbOY.lottie"
          loop
          autoplay
        />
      </div>
    </div>
  )
}
