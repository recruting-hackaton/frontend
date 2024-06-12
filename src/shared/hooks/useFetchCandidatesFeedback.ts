import { useEffect, useState } from 'react'

import { UserCandidate } from '@/entities/auth/dto'
import { baseApi } from '@/shared/lib/baseApi'

export const useFetchCandidatesFeedback = (vacancyId: string | undefined) => {
  const [feedbacks, setFeedbacks] = useState<UserCandidate[]>([])
  const [loading, setLoading] = useState(false)

  const fetchFeedbacks = async () => {
    setLoading(true)
    try {
      const response = await baseApi.get(
        `/candidates/candidates-feedback/${vacancyId}`,
      )
      const data = response.data
      setFeedbacks(data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (vacancyId) fetchFeedbacks()
  }, [])

  return {
    feedbacks,
    loading,
  }
}
