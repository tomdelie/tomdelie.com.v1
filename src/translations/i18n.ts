import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

register('fr', () => import('./fr.json'));
register('en-US', () => import('./en-US.json'));

init({
  fallbackLocale: 'en-US',
  initialLocale: getLocaleFromNavigator()
});