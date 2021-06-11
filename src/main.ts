import { renderComponent } from '@glimmerx/core';
import DemoComponent from './components/DemoComponent';
import HelloComponent from './components/HelloComponent';
import WorldComponent from './components/WorldComponent';

renderComponent(HelloComponent, document.getElementById('app1')!);
renderComponent(WorldComponent, document.getElementById('app2')!);
renderComponent(DemoComponent, document.getElementById('app3')!);
