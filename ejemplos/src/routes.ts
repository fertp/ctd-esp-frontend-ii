import { FC } from 'react'
import {
  ErrorHandlingPage,
  LiskovSubstitutionPage,
  OpenAndClosePage,
  SingleResponsabilityPage
} from './examples'

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
  },
  {
    name: 'SOLID: Single Responsability Principle',
    path: 'solid-single-responsability',
    Component: SingleResponsabilityPage
  },
  {
    name: 'SOLID: Open And Close',
    path: 'solid-open-and-close',
    Component: OpenAndClosePage
  },
  {
    name: 'SOLID: Liskov Substitution',
    path: 'solid-liskov-substitution',
    Component: LiskovSubstitutionPage
  }
]
