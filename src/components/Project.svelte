<script lang="ts">
  export let name: string;
	export let src: string;
</script>

<div class="project-preview relative rounded transition duration-200 cursor-pointer overflow-hidden">
	<img class="shadow-lg rounded transition duration-200 opacity-60" {src} alt="Project 1" />
	<div class="tooltip transform translate-y-48 p-2 absolute bottom-0 z-10">
		<div class="glass border p-4 rounded-xl text-xs text-white">
			<h3 class="font-bold text-white text-opacity-90">{name}</h3>
			<p class="text-opacity-70 text-white my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Adipisci id fugit totam expedita minus! Esse sed tenetur deleniti quos culpa, fugit officiis eos veniam commodi facilis.
				Dolores provident consequatur aliquam!
			</p>
			<div class="flex flex-wrap font-bold items-center text-white text-opacity-70 ">
				<span class="mr-3">JavaScript</span>
				<span class="mr-3">Vue.js</span>
				<span>PHP</span>
			</div>
		</div>
	</div>
	
	<div class="absolute top-0 w-full h-full flex justify-center items-center">
		<span class="sun shadow-lg z-10 bg-purple-900 rounded-full w-28 p-10 h-28 flex items-center justify-center text-center uppercase font-semibold font-kiona text-white">View project</span>
	</div>
</div>

<style lang="css" scoped>
	.glass * {
		border-color: rgba(255, 255, 255, 0.125);
	}

	.glass {
    backdrop-filter: blur(14px) saturate(170%);
    -webkit-backdrop-filter: blur(14px) saturate(170%);
    /* background-color: rgba(35, 30, 72, 0.4); */
    /* background-color: rgba(57, 49, 117, 0.55);  */
		background-color: rgba(255, 255, 255, 0.04);
    border-color: rgba(255, 255, 255, 0.06);
		transition: .2s all ease-in;
	}
	
	.project-preview:hover .sun {
		transform: scale(1);
		transition: .2s all ease-in;
	}

	.tooltip {
		transition: .3s all ease-out;
	}

	.project-preview:hover .tooltip {
		transform: translateY(0);
		transition: .3s all ease-in;
	}

	.project-preview:hover img {
		transform: scale(1.1);
	}

	.sun {
		transform: scale(0);
		transition: .2s all ease-out;
		background: linear-gradient(180deg, #e4a11e 8.99%, #ea1ab4 81.42%);
	}

	.font-kiona {
		font-family: 'Kiona';
	}
</style>