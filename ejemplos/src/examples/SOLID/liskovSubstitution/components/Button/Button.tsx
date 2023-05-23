import { CSSProperties, ReactNode } from 'react'
import styles from './Page.module.css'

interface Props {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

export const Button = ({ children, className, style }: Props) => {
  return (
    <button
      className={`${styles.defaultLabel} ${className}`}
      style={style}
    >
      {children}
    </button>
  )
}

export const PrimaryButton = ({ children }: { children: ReactNode }) => {
  return (
    <Button
      className={styles.primaryButton}
      style={{ border: '2px solid blue' }}
    >
      {children}
    </Button>
  )
}

export const DangerButton = ({ children }: { children: ReactNode }) => {
  return <Button className={styles.dangerButton}>{children}</Button>
}
