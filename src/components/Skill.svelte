<script lang="typescript">
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
    <div class="{level >= 1 ? 'bg-cyber-100' : 'border border-white opacity-80'} w-6 h-full rounded-full cursor-help" title="Beginner"></div>
    <div class="{level >= 2 ? 'bg-cyber-100' : 'border border-white opacity-80'} w-6 h-full rounded-full ml-1 cursor-help" title="Intermediate"></div>
    <div class="{level >= 3 ? 'bg-cyber-100' : 'border border-white opacity-80'} w-6 h-full rounded-full ml-1 cursor-help" title="Advanced"></div>
  </div>
</div>

<style lang="css">
  .skill {
    transition: .2s all ease-out;
  }

  .skill:hover {
    background: linear-gradient(-90deg, rgba(253, 25, 173, 0) 20%, rgba(253, 25, 173, 0.1) 100%);
  }

  .skill::before {
    content: "";
    width: 2px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color:transparent;
  }

  .skill:hover::before {
    content: "";
    display: block;
    width: 2px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #FDACE0;
    box-shadow: rgba(253, 25, 173, 1) 1px 0px 8px;
    transition: .2s all ease-in;
  }

  .skill:hover > .info {
    transform: translateX(0.5rem);
  }
</style>