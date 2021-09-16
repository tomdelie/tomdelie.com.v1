<script lang="ts">
	import TranslationEN from '../translations/fr';

	const translation = TranslationEN;
	export let name: string;
	export let src: string;
	export let description: string = '';
	export let tags: string[] = [];
</script>

<div class="project-preview z-20 border-2 rounded-lg transition duration-200 cursor-pointer bg-graypurple-900" style="background-color: #1E1A3C;">
	<div class="overflow-hidden relative rounded-t-lg">
		<img class="transition duration-200 opacity-70" {src} alt="Project 1" />

		<div class="absolute top-0 w-full h-full flex justify-center items-center">
			<span class="sun shadow-lg z-30 bg-purple-900 rounded-full w-28 p-10 h-28 flex items-center justify-center text-center uppercase font-semibold font-kiona text-white">
				{translation.projects_viewproject}
			</span>
		</div>
	</div>

	<div class="p-4 text-xs text-white border-t" >
		<h3 class="font-bold text-white text-opacity-90">{name}</h3>
		<p class="description text-opacity-70 text-white my-2">
			{description}
		</p>
		<div class="flex flex-wrap font-bold items-center text-white text-opacity-70">
			{#each tags as tag}
				<span class="mr-3">{tag}</span>
			{/each}
		</div>
	</div>
</div>

<style lang="css" scoped>
	.description {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

	.project-preview,
	.project-preview * {
		border-color: rgba(255, 255, 255, 0.06);
	}

	.glass * {
		border-color: rgba(255, 255, 255, 0.125);
	}

	.glass {
		backdrop-filter: blur(14px) saturate(170%);
		-webkit-backdrop-filter: blur(14px) saturate(170%);
		background-color: rgba(255, 255, 255, 0.04);
		border-color: rgba(255, 255, 255, 0.06);
		transition: 0.2s all ease-in;
	}

	.project-preview:hover .sun {
		transform: scale(1);
		transition: 0.2s all ease-in;
	}

	.tooltip {
		transition: 0.3s all ease-out;
	}

	.project-preview:hover img {
		transform: scale(1.1);
		opacity: 1;
	}

	.sun {
		transform: scale(0);
		transition: 0.2s all ease-out;
		background: linear-gradient(180deg, #e4a11e 8.99%, #ea1ab4 81.42%);
	}

	.font-kiona {
		font-family: 'Kiona';
	}
</style>
