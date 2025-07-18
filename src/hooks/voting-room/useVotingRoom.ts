import api from '@/api/api'
import { queryOptions } from '@tanstack/react-query'

export const votingRoomQueryOptions = (id: string, getToken: GetToken) => {
  return queryOptions({
    queryKey: ['voting-room', { id }],
    queryFn: async () => {
      const token = await getToken()

      const { data } = await api.get(`voting-room/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })

      return data
    },
  })
}

export const useVotingRoom = () => {}
