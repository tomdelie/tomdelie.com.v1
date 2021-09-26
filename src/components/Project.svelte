<script lang="ts">
	import TranslationEN from '../translations/fr';

	const translation = TranslationEN;
	export let name: string;
	export let src: string;
	export let description: string = '';
	export let tags: string[] = [];
	export let github: string = '';
</script>

<div class="project-preview z-20 border shadow-lg hover:shadow-xl transform hover:-translate-y-2 rounded-sm transition duration-700 bg-graypurple-900" style="background-color: #1E1A3C;">
	<div class="cover-image cursor-pointer overflow-hidden relative rounded-t-sm">
		<img class="project-background transition duration-200 opacity-70" {src} alt="Project 1" />

		<div class="absolute top-0 w-full h-full flex justify-center items-center">
			<span class="sun shadow-lg z-30 bg-purple-900 rounded-full w-28 p-10 h-28 flex items-center justify-center text-center uppercase font-semibold font-kiona text-white">
				{translation.projects_viewproject}
			</span>
		</div>
	</div>

	<div class="relative p-4 text-xs text-white border-t" >
		<div class="flex items-center justify-between">
			<h3 class="font-bold text-white text-opacity-90">{name}</h3>
			
			{#if github !== ''}
				<a href={github} class="github z-20 absolute top-4 right-4 transition duration-200">
					<svg
						class="text-white opacity-90 fill-current transition duration-200"
						role="img"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						><title>GitHub</title><path
							d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
						/></svg
					>
				</a>
			{/if}
		</div>
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
	.github:hover svg {
		color: #fdace0;
  }

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

	.project-preview .cover-image:hover:hover .sun {
		transform: scale(1);
		transition: 0.2s all ease-in;
	}

	.tooltip {
		transition: 0.3s all ease-out;
	}

	.project-preview .cover-image:hover .project-background {
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
