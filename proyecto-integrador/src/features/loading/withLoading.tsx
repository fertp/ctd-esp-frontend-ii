import { type FC } from 'react'

interface WrappedComponentProps {
  isLoading: boolean
  onFailedToLoad: boolean
}

export const withLoading = <T,>(WrappedComponent: FC<T>) => {
  return function (props: T & WrappedComponentProps) {
    if (props.onFailedToLoad) return <p>Error</p>

    if (props.isLoading) return <p>Loading...</p>

    return <WrappedComponent {...props} />
  }
}
