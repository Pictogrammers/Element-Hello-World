import { selectComponent, getProps } from '@pictogrammers/element';

import './world';
import HelloWorld from './world';

const HELLO_WORLD = 'hello-world';

describe('hello-world', () => {

  const DEFAULT_MESSAGE = 'Empty';

  beforeEach(() => {
    var c = document.createElement(HELLO_WORLD);
    document.body.appendChild(c);
  });

  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('should be registered', () => {
    expect(customElements.get(HELLO_WORLD)).toBeDefined();
  });

  it('should only expose known props', () => {
    const props = getProps(HELLO_WORLD);
    expect(props.length).toBe(2);
    expect(props).toContain('message');
    expect(props).toContain('count');
  });

  it('should default message', () => {
    const component = selectComponent<HelloWorld>(HELLO_WORLD);
    const { $message } = component;
    expect($message.textContent).toBe(DEFAULT_MESSAGE);
  });

  it('should set message to "Hello World!"', () => {
    const component = selectComponent<HelloWorld>(HELLO_WORLD);
    const { $message } = component;

    const message = 'Hello World!';
    component.message = message;
    expect($message.textContent).toBe(message);
  });

});
