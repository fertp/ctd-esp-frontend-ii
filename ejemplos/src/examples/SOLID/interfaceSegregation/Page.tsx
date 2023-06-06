import { useState } from 'react'
import ConsolesList from './components/ConsolesList'
import consoles from './data/consoles'
import ConsoleCard from './components/ConsoleCard'
import { Console } from './interfaces'

export const InterfaceSegregationPage = () => {
  const [selectedConsole, setSelectedConsole] = useState<Console | undefined>(
    undefined
  )

  return (
    <main style={{ maxWidth: '960px', marginInline: 'auto', padding: '30px' }}>
      <h1>Interface segregation</h1>
      <ConsolesList
        consoles={consoles}
        setSelectedConsole={setSelectedConsole}
      />

      {selectedConsole && <ConsoleCard selectedConsole={selectedConsole} />}
    </main>
  )
}
