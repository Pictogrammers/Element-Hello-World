// @ts-ignore
import { Component, Part, Test } from '@pictogrammers/element';

import template from './app.html';
import style from './app.css';

import HelloWorld from './../world/world';

@Component({
  selector: 'hello-app',
  style,
  template
})
export default class HelloApp extends HTMLElement {
  @Part() $title: HTMLSpanElement;
  @Part() $button: HTMLButtonElement;
  @Part() $helloWorld: HelloWorld;

  connectedCallback() {
    this.$title.textContent = 'Sample App';
    this.$button.addEventListener('click', () => {
      this.$helloWorld.count++;
    });
  }

  render(changes) {

  }
}