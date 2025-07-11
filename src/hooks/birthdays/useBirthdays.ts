import api from '@/api/api'
import type { GetBirthdays } from '@/interfaces'
import { useAuth } from '@clerk/clerk-react'
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'

export const birthdaysQueryOptions = (getToken: GetToken) => {
  return queryOptions({
    queryKey: ['birthdays'],
    queryFn: async () => {
      const token = await getToken()

      const { data } = await api.get<GetBirthdays[]>('birthdays', {
        headers: { Authorization: `Bearer ${token}` },
      })

      return data
    },
  })
}

export const useBirthdays = () => {
  const { getToken } = useAuth()

  const query = useSuspenseQuery(birthdaysQueryOptions(getToken))

  return query.data
}
