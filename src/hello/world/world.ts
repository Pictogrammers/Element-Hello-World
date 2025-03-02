// @ts-ignore
import { Component, Prop, Part, Test } from '@pictogrammers/element';

import template from './world.html';
import style from './world.css';

const DEFAULT_MESSAGE = 'Empty';

@Component({
  selector: 'hello-world',
  style,
  template
})
export default class HelloWorld extends HTMLElement {
  @Prop() message: string = DEFAULT_MESSAGE;
  @Prop() count: number = 0;

  @Part() $message: HTMLSpanElement;
  @Part() $count: HTMLSpanElement;

  render(changes) {
    if (changes.message) {
      this.$message.textContent = this.message;
    }
    if (changes.count) {
      this.$count.textContent = `${this.count}`;
    }
  }
}