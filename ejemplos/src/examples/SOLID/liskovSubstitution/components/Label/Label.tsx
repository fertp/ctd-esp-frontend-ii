import React, { Component } from 'react'
import styles from './Page.module.css'

// Liskov Substitution Principle
// En el siguiente ejemplo, la superclase Label
// va a ser extendidad por distintas clases hijas
// Sin alterar su funcionabilidad

interface Props {
  className?: string
  children: React.ReactNode
}

export class Label extends Component<Props> {
  className: string

  constructor(props: Props) {
    super(props)
    this.className = `${styles.defaultLabel} `
  }
  render() {
    return <label className={this.className}>{this.props.children}</label>
  }
}

export class SuccessLabel extends Label {
  constructor(props: Props) {
    super(props)
    this.className = this.className + styles.successLabel
  }
}

export class AlertLabel extends Label {
  constructor(props: Props) {
    super(props)
    this.className = this.className + styles.alertLabel
  }
}

export class ErrorLabel extends Label {
  constructor(props: Props) {
    super(props)
    this.className = this.className + styles.errorLabel
  }
}
