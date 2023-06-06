import useModal from './hooks/useModal/useModal.tsx'
import Modal from './components/Modal/Modal'
import Character from './components/Character/Character.tsx'
import logo from './assets/logo.svg'
import { createUseStyles } from 'react-jss'
import './styles.css'

const useStyles = createUseStyles({
  myButton: {
    backgroundColor: 'rgb(0, 190, 171)',
    cursor: 'pointer',
    padding: '1rem 2rem',
    textTransform: 'uppercase',
    border: 'none',
    fontSize: '18px',
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: 'rgb(0, 212, 191)'
    },
    '&:not(:first-child)': {
      marginLeft: '24px'
    }
  }
})

export const CssInJsPage = () => {
  const { isShowing: isAliveShowed, toggle: toggleAlive } = useModal()
  const { isShowing: isDeadShowed, toggle: toggleDead } = useModal()
  const classes = useStyles()

  return (
    <div className='CssInJsExample'>
      <img
        src={logo}
        alt='logo rick and morty'
      />
      <div>
        <button
          className={classes.myButton}
          onClick={toggleAlive}
        >
          Rick's vivos
        </button>

        <button
          className={classes.myButton}
          onClick={toggleDead}
        >
          Rick's muertos
        </button>
      </div>

      <Modal
        isShowing={isAliveShowed}
        hide={toggleAlive}
        title="Rick's vivos"
      >
        <Character status='alive' />
      </Modal>

      <Modal
        isShowing={isDeadShowed}
        hide={toggleDead}
        title="Rick's muertos"
      >
        <Character status='dead' />
      </Modal>
    </div>
  )
}
