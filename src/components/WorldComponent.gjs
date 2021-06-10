import Component, { tracked } from '@glimmerx/component';

export default class WorldComponent extends Component {
  @tracked
  count = 0;

  constructor() {
    super(...arguments);
    this.interval = setInterval(() => {
      this.count += 1;
    }, 1000);
  }

  willDestroy() {
    clearInterval(this.interval)
  }

  <template>
    <h1>Hello World!</h1>
    <p>{{this.count}} seconds passed.</p>
  </template>
}
