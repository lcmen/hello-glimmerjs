import Component, { hbs, tracked } from '@glimmerx/component';
import { on, action } from '@glimmerx/modifier';

export default class HelloComponent extends Component {
  @tracked
  count: number = 1;

  @action
  increment() {
    this.count += 1;
  }

  static template = hbs`
    <h1>Clicked {{this.count}}</h1>
    <button {{on "click" this.increment}}>Click</button>
  `;
}
