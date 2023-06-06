import { Dispatch, SetStateAction, useState } from 'react'
import { Console } from '../interfaces'

interface Props {
  consoles: Console[]
  setSelectedConsole: Dispatch<SetStateAction<Console | undefined>>
}

export default function ConsolesList({ consoles, setSelectedConsole }: Props) {
  const [showButtons, setShowButtons] = useState(true)
  const availableConsoles = consoles

  const handleConsoleSelection = (consola: Console) => {
    setSelectedConsole(consola)
    setShowButtons(false)
  }

  const handleReset = () => {
    setShowButtons(true)
    setSelectedConsole(undefined)
  }

  return (
    <div
      style={{
        width: '200px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      {availableConsoles.length &&
        showButtons &&
        availableConsoles.map((item, index) => (
          <button
            key={`${item}-${index}`}
            onClick={() => handleConsoleSelection(item)}
          >
            {item.name}
          </button>
        ))}
      {!showButtons && <button onClick={handleReset}>cambiar consola</button>}
    </div>
  )
}
