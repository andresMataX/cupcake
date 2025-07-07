import { useUser } from '@clerk/clerk-react'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

const toastId = 'update-birthday'

export const useUpdateBirthday = () => {
  const { user } = useUser()

  const mutation = useMutation({
    mutationFn: user!.update,

    onMutate: () => {
      toast.loading('Loading...', { id: toastId })
    },

    onSuccess: () => {
      toast.success('Birthday updated successfully!', { id: toastId })
    },

    onError: (error) => {
      console.error('Error updating birthday:', error)
    },
  })

  return mutation
}
