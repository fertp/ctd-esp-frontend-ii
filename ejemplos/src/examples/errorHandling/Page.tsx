import { ErrorBoundary } from './ErrorBoundary'
import { CharactersList } from './components/CharactersList'
import { EspisodesList } from './components/EpisodesList'
import { Error } from './components/Error'
import { LocationsList } from './components/LocationsList'

export const ErrorHandlingPage = () => {
  return (
    <main style={{ maxWidth: '960px', marginInline: 'auto', padding: '30px' }}>
      <h1>Error handling</h1>

      <ErrorBoundary fallback={<Error />}>
        <CharactersList />
      </ErrorBoundary>

      <ErrorBoundary fallback={<Error />}>
        <LocationsList />
      </ErrorBoundary>

      <ErrorBoundary fallback={<Error />}>
        <EspisodesList />
      </ErrorBoundary>
    </main>
  )
}
