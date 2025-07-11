import type { useAuth } from '@clerk/clerk-react'

export {}

declare global {
  interface Window {
    Clerk: unknown
  }

  interface UserUnsafeMetadata {
    cupcake?: { birthday?: Date | undefined }
  }

  type GetToken = ReturnType<typeof useAuth>['getToken']
}
