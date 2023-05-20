import { FC } from 'react'
import { ErrorHandlingPage } from './examples'

interface route {
  name: string
  path: string
  Component: FC
}

export const routes: route[] = [
  {
    name: 'Error handling',
    path: 'error-handling',
    Component: ErrorHandlingPage
  }
]
