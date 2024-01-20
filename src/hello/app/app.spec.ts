import { selectComponent, getProps } from '@pictogrammers/element';

import './app';
import HelloApp from './app';

const HELLO_APP = 'hello-app';

describe('hello-app', () => {

  beforeEach(() => {
    var c = document.createElement(HELLO_APP);
    document.body.appendChild(c);
  });

  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('should be registered', () => {
    expect(customElements.get(HELLO_APP)).toBeDefined();
  });

  it('should only expose known props', () => {
    const props = getProps(HELLO_APP);
    expect(props.length).toBe(0);
    // Ex: expect(props).toContain('attribute');
  });

  it('should have a title set', () => {
    const component = selectComponent<HelloApp>(HELLO_APP);
    const { $title } = component;
    expect($title.textContent).toEqual('Sample App');
  });

});
