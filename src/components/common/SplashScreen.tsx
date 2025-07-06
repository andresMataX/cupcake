import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import type { FC } from 'react'

interface Props {}

export const SplashScreen: FC<Props> = () => {
  return (
    <div className="bg-base-100 flex h-screen w-screen flex-col items-center justify-center p-2">
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
