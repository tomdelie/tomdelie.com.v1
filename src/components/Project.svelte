<script lang="ts">
  export let name: string;
	export let src: string;
</script>

<div class="project-preview relative rounded-sm hover:transform hover:scale-105 transition duration-200 opacity-75 hover:opacity-100 cursor-pointer">
	<img class="shadow-lg rounded-sm img" {src} alt="Project 1" />
	<div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
		<div class="bg-purple-900 rounded-full w-36 h-36 flex items-center justify-center text-center"><span>Click to learn more</span></div>
	</div>
</div>

<style lang="css" scoped>
</style>