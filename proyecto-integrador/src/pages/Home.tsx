import { useEffect, type FC } from 'react'
import { LocationsComponent } from '@/features/locations'
import useTracking from '@/features/tracking/tracking.context'
import { KeyupEvent } from '@/features/tracking'

/**
 * HomePage
 *
 * Usage:
 * ``` <HomePage /> ```
 *
 * @returns the home page
 */
const Home: FC = () => {
  const { trackEvent } = useTracking()

  const handleKeyup = (e: KeyboardEvent): void => {
    const event = new KeyupEvent('Keyup', '/path/to/location', e.key)
    trackEvent(event)
  }

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)
    return () => {
      window.removeEventListener('keyup', handleKeyup)
    }
  }, [])

  return (
    <div className={'container'}>
      <LocationsComponent />
    </div>
  )
}

export default Home
