import Component from './Component'

export default class Button extends Component {
    readonly element: HTMLButtonElement

  constructor (text: string) {
    super()
    this.element = document.createElement('button')
    this.element.textContent = text
  }

}