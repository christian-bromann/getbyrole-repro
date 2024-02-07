import { Component, h } from '@stencil/core';

@Component({
  tag: 'test-component',
  shadow: false,
})
export class TestComponent {
  render() {
    return <button>test</button>;
  }
}
