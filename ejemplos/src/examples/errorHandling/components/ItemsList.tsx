import { Error } from './Error'
import { Loading } from './Loading'

interface Props<T> {
  title: string
  data: T[]
  isLoading: boolean
  hasError: boolean
  children: (item: T) => JSX.Element
}

const styles = {
  container: {
    border: '1px solid gray',
    marginTop: '32px',
    backgroundColor: 'lightGreen'
  },
  list: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '24px'
  }
}

export const ItemsList = <T,>({
  title,
  data,
  isLoading,
  hasError,
  children
}: Props<T>) => {
  return (
    <div style={styles.container}>
      {hasError && <Error />}

      {isLoading && <Loading />}

      {!!data.length && (
        <>
          <h2>{title}</h2>
          <ul style={styles.list}>{data?.map(item => children(item))}</ul>
        </>
      )}
    </div>
  )
}
