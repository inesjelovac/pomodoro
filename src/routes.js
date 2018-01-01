import About from './components/About';
import HomeCounters from './components/HomeCounters';
import Settings from './components/Settings';
import Statistics from './components/Statistics';

export default [
  { path: '/about', component: About, name: 'about' },
  { path: '/settings', component: Settings, name: 'settings' },
  { path: '/statistics', component: Statistics, name: 'statistics' },
  { path: '', component: HomeCounters, name: 'home' },
];
