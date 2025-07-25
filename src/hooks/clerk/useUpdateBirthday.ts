import { DEFAULT_TOAST_ID } from '@/lib'
import { m } from '@/paraglide/messages'
import { useUser } from '@clerk/clerk-react'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

export const useUpdateBirthday = () => {
  const { user } = useUser()

  const mutation = useMutation({
    mutationFn: user!.update,

    onSuccess: () => {
      toast.success(m['app.profile.feedback_success'](), {
        id: DEFAULT_TOAST_ID,
      })
    },
  })

  return mutation
}
