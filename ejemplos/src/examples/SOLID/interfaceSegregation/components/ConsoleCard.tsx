import { useState } from 'react'
import Screen from './Screen'
import consoles from '../data/consoles'
import entities from '../entities'
import { Console, Method } from '../interfaces'

interface Props {
  selectedConsole: Console
}

export default function ConsoleCard({ selectedConsole }: Props) {
  const [consoleOn, setConsoleOn] = useState(false)
  const console = new entities[selectedConsole.name]()

  const selectedConsoleImg = consoles.find(
    item => item.name === selectedConsole?.name
  )

  const handleMethods = (method: Method) => {
    if (method.name === 'encender' || method.name === 'apagar') {
      const isTurnedOn = method.execute()
      setConsoleOn(isTurnedOn)
      return
    }
    method.execute()
  }

  return (
    <div>
      {selectedConsoleImg && (
        <img
          src={selectedConsoleImg.img}
          alt={`${selectedConsole.name}`}
          style={{ maxWidth: '300px' }}
        />
      )}
      {console.methods &&
        (console.methods as Method[]).map((method, index) => (
          <button
            key={`${method.name}-${index}`}
            onClick={() => handleMethods(method)}
          >
            {method.name}
          </button>
        ))}

      {selectedConsole && consoleOn && (
        <Screen selectedConsole={selectedConsole} />
      )}
    </div>
  )
}
