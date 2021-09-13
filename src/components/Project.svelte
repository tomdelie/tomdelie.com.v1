<script lang="ts">
  export let name: string;
	export let src: string;
</script>

<div class="project-preview relative rounded-sm transition duration-200 overflow-hidden opacity-60 hover:opacity-100 cursor-pointer">
	<img class="shadow-lg rounded-sm transition duration-200" {src} alt="Project 1" />
	<div class="absolute top-0 left-0 w-full h-full flex justify-center items-center">
		<span class="sun z-10 bg-purple-900 rounded-full w-28 p-10 h-28 flex items-center justify-center text-center uppercase font-semibold font-kiona text-white">View project</span>
	</div>
</div>

<style lang="css" scoped>
	.project-preview:hover .sun {
		transform: scale(1);
		transition: .2s all ease-in;
	}

	.project-preview:hover img {
		transform: scale(1.1);
	}

	.sun {
		transform: scale(0);
		transition: .2s all ease-out;
		background: linear-gradient(180deg, #e4a11e 8.99%, #ea1ab4 81.42%);
	}

	.sun-reflection {
		transform: rotate3d(0, 3.2, 5, 180deg) scale(1.3) translateX(38%);
		filter: blur(2px);
		opacity: .5;
	}

	.font-kiona {
		font-family: 'Kiona';
	}
</style>