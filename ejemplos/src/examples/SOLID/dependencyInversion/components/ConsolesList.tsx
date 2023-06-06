import { Dispatch, SetStateAction, useState } from 'react'
import { ConsoleData } from '../interfaces'

interface Props {
  consolesData: ConsoleData[]
  setSelectedConsole: Dispatch<SetStateAction<ConsoleData | undefined>>
}

export default function ConsolesList({
  consolesData,
  setSelectedConsole
}: Props) {
  const [showButtons, setShowButtons] = useState(true)

  const handleConsoleSelection = (consola: ConsoleData) => {
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
      {consolesData.length &&
        showButtons &&
        consolesData.map((item, index) => (
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
