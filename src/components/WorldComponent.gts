import Component, { hbs, tracked } from '@glimmerx/component';

export default class WorldComponent extends Component {
  @tracked
  count: number = 0;
  interval: number | null = null;

  constructor(owner, args = {}) {
    super(owner, args);
    this.interval = window.setInterval(() => {
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
