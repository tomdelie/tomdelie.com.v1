import { init, addMessages } from 'svelte-i18n';
import fr from './fr.json';
import en from './en.json';

addMessages('en', en);
addMessages('fr', fr);

init({
  fallbackLocale: 'en',
  initialLocale: 'en'
});