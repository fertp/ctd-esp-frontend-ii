import { useState } from 'react'
import Screen from './Screen'
import consolesData from '../data/consoles'
import gamesData from '../data/games'
import consoles from '../entities/console'
import { ConsoleData, Method } from '../interfaces'
import Game from '../entities/game/Game'
import GamesList from './GamesList'

interface Props {
  selectedConsole: ConsoleData
}

export default function ConsoleCard({ selectedConsole }: Props) {
  const [consoleOn, setConsoleOn] = useState(false)
  const [selectedGame, setSelectedGame] = useState<string>('')

  const selectedConsoleGames = gamesData.find(
    data => data.platform === selectedConsole.name
  )

  if (!selectedConsoleGames?.games) return <p>Error: No hay juegos</p>

  const gamesList = selectedConsoleGames?.games.map(game => new Game(game))

  const console = new consoles[selectedConsole.name](
    gamesList,
    selectedConsole.name
  )

  const selectedConsoleImg = consolesData.find(
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

      {gamesList && (
        <GamesList
          games={selectedConsoleGames.games}
          setSelectedGame={setSelectedGame}
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
        <Screen
          selectedConsole={selectedConsole}
          selectedGame={selectedGame}
        />
      )}
    </div>
  )
}
