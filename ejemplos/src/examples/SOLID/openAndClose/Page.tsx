import { useRef, useState } from 'react'
import Lamborghini from './vehicles/Lamborghini'

export const OpenAndClosePage = () => {
  const [isEngineStarted, setIsEngineStarted] = useState<boolean>(false)
  const [speed, setSpeed] = useState<number>(0)

  const { current: vehicle } = useRef(new Lamborghini())

  const startEngine = () => {
    vehicle.start()
    setIsEngineStarted(vehicle.getEngineStarted())
  }

  const stopEngine = () => {
    vehicle.stop()
    vehicle.setSpeed(0)
    setIsEngineStarted(vehicle.getEngineStarted())
  }

  const accelerate = (speed: number) => {
    vehicle.accelerate(speed)
    setSpeed(vehicle.getSpeed())
  }

  return (
    <main style={{ maxWidth: '960px', marginInline: 'auto', padding: '30px' }}>
      <h1>Open and Close</h1>
      <p>Engine: {isEngineStarted ? 'Started' : 'Off'}</p>
      <p>Speed: {speed}</p>
      <button onClick={() => startEngine()}>Start engine</button>
      <br />
      <button onClick={() => stopEngine()}>Stop engine</button>
      <br />
      <button onClick={() => accelerate(25)}>Accelerate</button>
    </main>
  )
}
