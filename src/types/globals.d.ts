export {}

declare global {
  interface Window {
    Clerk: unknown
  }

  interface UserUnsafeMetadata {
    cupcake?: { birthday?: Date | undefined }
  }
}
