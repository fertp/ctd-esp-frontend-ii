import { useState, useEffect } from 'react'
import { createUseStyles } from 'react-jss'

interface Character {
  id: number
  image: string
  name: string
  status: 'alive' | 'dead'
  species: string
  gender: string
}

interface Props {
  status: Character['status']
}

const styles = createUseStyles({
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    marginBlock: '32px'
  },
  item: {
    backgroundColor: props => (props.status === 'alive' ? 'green' : 'gray'),
    color: 'yellow'
  },
  text: {
    textAlign: 'center',
    paddingBlock: '16px'
  }
})

const Character = ({ status }: Props) => {
  const [character, setCharacter] = useState([])

  const selectors = styles({ status })

  useEffect(() => {
    const fetchCharacter = (status: string) =>
      fetch(
        `https://rickandmortyapi.com/api/character?name=rick&status=${status}`
      )
        .then(response => response.json())
        .then(character => {
          setCharacter(character.results)
        })
    fetchCharacter(status)
  }, [status])

  return (
    <section className={selectors.list}>
      {character.map((data: Character) => {
        return (
          <article
            key={data.id}
            className={selectors.item}
          >
            <img
              src={data.image}
              alt={data.name}
            />
            <div className={selectors.text}>
              <h2>{data.name}</h2>
              <p>Status: {data.status}</p>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default Character
