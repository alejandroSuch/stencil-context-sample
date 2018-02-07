import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrls: {
    ios: 'my-component.ios.scss',
    wp: 'my-component.wp.scss',
    md: 'my-component.md.scss',
    desktop: 'my-component.scss',
  },
  shadow: true
})
export class MyComponent {

  @Prop() first: string;
  @Prop() last: string;

  render() {
    return (
      <div class="my-component">
        Hello, World! I'm {this.first} {this.last}
      </div>
    );
  }
}
