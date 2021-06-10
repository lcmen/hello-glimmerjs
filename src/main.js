import { renderComponent } from '@glimmerx/core';
import HelloComponent from './components/HelloComponent';
import WorldComponent from './components/WorldComponent';

renderComponent(HelloComponent, document.getElementById('app1'));
renderComponent(WorldComponent, document.getElementById('app2'));
