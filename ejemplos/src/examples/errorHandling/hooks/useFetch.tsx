import { useEffect, useState } from 'react'

export const useFetch = <T,>(url: string) => {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  const fetchData = async ({ signal }: { signal: AbortSignal }) => {
    setIsLoading(true)

    try {
      const resp = await fetch(url, { signal })
      if (resp.status !== 200) {
        return setHasError(true)
      }

      const data = await resp.json()
      setData(data)
    } catch (error) {
      if (signal.aborted) return

      if (error instanceof Error) {
        setHasError(true)
        console.log(error.message)
      }
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const controller = new AbortController()
    const { signal } = controller
    setIsLoading(true)
    setTimeout(() => {
      fetchData({ signal })
    }, 1000)

    return () => {
      controller.abort()
    }
  }, [])

  return { data, isLoading, hasError }
}
