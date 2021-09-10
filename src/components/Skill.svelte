<script lang="typescript">
  export let level: number = 1;
  export let name: string = '?';
  export let src: string = '';
  export let moreClass: string = '';
</script>

<div class="{moreClass} border-white border-opacity-10 py-1.5 flex items-center justify-between">
  <div class="flex items-center">
    <img {src} width="16" alt="JavaScript" />
    <span class="text-white ml-2 text-sm">{name}</span>
  </div>
  <div class="h-1 flex items-center ml-4">
    <div class="{level >= 1 ? 'bg-cyber-300' : 'border border-cyber-300'} w-6 h-full rounded-full"></div>
    <div class="{level >= 2 ? 'bg-cyber-300' : 'border border-cyber-300'} w-6 h-full rounded-full ml-1"></div>
    <div class="{level >= 3 ? 'bg-cyber-300' : 'border border-cyber-300'} w-6 h-full rounded-full ml-1"></div>
  </div>
</div>