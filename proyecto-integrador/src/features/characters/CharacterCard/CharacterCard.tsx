import { type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const CharacterCard = ({ children }: Props) => {
  return <div className={'card'}>{children}</div>
}
