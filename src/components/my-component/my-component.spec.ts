import { newSpecPage } from '@stencil/core/testing';
import { screen } from '@testing-library/dom';

import '@testing-library/jest-dom';
import { TestComponent } from './my-component';

describe('test component', () => {
  it('can find button using getByRole', async () => {
    await newSpecPage({
      components: [TestComponent],
      html: `<test-component/>`,
    });
    const button = screen.getByRole('button');
    expect(button).toEqualHtml('<button>test</button>');
  });
});
