<script lang="typescript">
  	import TranslationEN from '../translations/fr';
    const translation = TranslationEN;

  export let level: number = 1;
  export let name: string = '?';
  export let src: string = '';
  export let moreClass: string = '';
  export let favorite: boolean = false;
</script>

<div class="skill relative {moreClass} border-white border-opacity-10 py-1.5 flex items-center justify-between opacity-80 transition duration-600">
  <div class="info flex items-center transition duration-200">
    <img {src} width="16" alt="JavaScript" />
    <span class="text-white ml-2 text-xs">{name}</span>
    <img class="{favorite ? '' : 'hidden'} cursor-help ml-2" src="/images/icons/favorite.svg" width="14" title="Favorite technology" alt="Favorite" />
  </div>
  <div class="h-1 flex items-center ml-4">
    <div class="{level >= 1 ? 'bg-pinky' : 'border border-white opacity-80'} w-6 h-full rounded-full cursor-help" title={translation.beginner}></div>
    <div class="{level >= 2 ? 'bg-pinky' : 'border border-white opacity-80'} w-6 h-full rounded-full ml-1 cursor-help" title={translation.intermediate}></div>
    <div class="{level >= 3 ? 'bg-pinky' : 'border border-white opacity-80'} w-6 h-full rounded-full ml-1 cursor-help" title={translation.advanced}></div>
  </div>
</div>

<style lang="postcss">
  .bg-pinky {
    background-color: #FB4DBE;
  }
  .skill {
    @apply transition duration-200;
  }

  .skill:hover {
    background: linear-gradient(-90deg, rgba(253, 25, 173, 0) 20%, rgba(255, 99, 200, 0.07) 100%);
  }

  .skill::before {
    @apply absolute left-0 top-0 bg-transparent h-full transition duration-200;
    content: "";
    width: 2px;
  }

  .skill:hover::before {
    @apply transition duration-200;
    background-color: #FDACE0;
    box-shadow: rgb(255, 99, 200) 1px 0px 8px;
  }

  .skill:hover > .info {
    transform: translateX(0.5rem);
  }
</style>