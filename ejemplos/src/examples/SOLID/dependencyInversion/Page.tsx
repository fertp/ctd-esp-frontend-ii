import { useState } from 'react'
import ConsolesList from './components/ConsolesList'
import consolesData from './data/consoles'
import { ConsoleData } from './interfaces'
import ConsoleCard from './components/ConsoleCard'

export const DependencyInversionPage = () => {
  const [selectedConsole, setSelectedConsole] = useState<
    ConsoleData | undefined
  >(undefined)

  return (
    <main style={{ maxWidth: '960px', marginInline: 'auto', padding: '30px' }}>
      <h1>Dependencies Inversion</h1>
      <ConsolesList
        consolesData={consolesData}
        setSelectedConsole={setSelectedConsole}
      />

      {selectedConsole && <ConsoleCard selectedConsole={selectedConsole} />}
    </main>
  )
}
