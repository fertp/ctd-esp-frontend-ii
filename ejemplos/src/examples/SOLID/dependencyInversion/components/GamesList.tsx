import { Dispatch, SetStateAction } from 'react'

interface Props {
  games: string[]
  setSelectedGame: Dispatch<SetStateAction<string>>
}

export default function GamesList({ games, setSelectedGame }: Props) {
  const handleGameSelection = (game: string) => {
    setSelectedGame(game)
  }

  return (
    <div>
      <ul>
        {games.length &&
          games.map((game, index) => (
            <li key={`${game}-index`}>
              <button onClick={() => handleGameSelection(game)}>{game}</button>
            </li>
          ))}
      </ul>
    </div>
  )
}
