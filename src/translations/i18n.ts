import { init, addMessages } from 'svelte-i18n';
import fr from './fr.json';
import en from './en-US.json';

addMessages('en-US', en);
addMessages('fr', fr);

init({
  fallbackLocale: 'en-US',
  initialLocale: 'en-US'
});