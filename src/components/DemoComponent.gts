import Component from '@glimmer/component';

export default class Demo extends Component {
  myMap = new Map([['a', 1], ['b', 2]]);
  name = 'World!';

  <template>
    <h1>Hello {{this.name}}!</h1>

    {{#each this.myMap as |k v|}}
      {{k}} {{v}}
      <br>
    {{/each}}
  </template>
}
