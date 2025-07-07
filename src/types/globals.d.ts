export {}

declare global {
  interface Window {
    Clerk: unknown
  }

  interface UserUnsafeMetadata {
    cupcake?: { birthday?: Date | undefined }
    general?: { time_zone?: string; date_format?: string }
  }
}
