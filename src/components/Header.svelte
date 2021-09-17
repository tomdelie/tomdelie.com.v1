<script lang="ts">
	import Links from './Links.svelte';
	import TranslationEN from '../translations/fr';

	const translation = TranslationEN;
</script>

<header class="w-full z-50 fixed">
	<div class="glass px-6 h-10 flex items-center justify-between">
		<div
			class="sun w-6 h-6 rounded-full cursor-pointer hover:shadow"
			on:click="{() => window.location.reload()}"
		/>
		<nav class="h-full flex items-center">
			<ol class="hidden md:flex items-center mr-10 text-xs text-white text-opacity-90 h-full">
				<li class="mr-6">{translation.about_title}</li>
				<li class="mr-6">{translation.projects_title}</li>
				<li class="mr-6">{translation.skills_title}</li>
				<li>{translation.contact_title}</li>
			</ol>
			<div class="hidden md:flex items-center">
				<img
					class="mr-3 opacity-90 cursor-pointer"
					src="/images/icons/language/fr.svg"
					width="24"
          alt="French"
				/>
				<img class="opacity-90 cursor-pointer" src="/images/icons/language/en.svg" alt="English" width="24" />
			</div>
			<img
				class="block md:hidden cursor-pointer hover:bg-white hover:bg-opacity-10 rounded-full p-0.5"
				src="/images/icons/menu.svg"
				width="28"
        alt="Menu"
			/>
		</nav>
	</div>
	<div style="background-color: #3A3272;" class="mobile hidden p-6 fixed top-0 right-0 w-52 h-full">
		<nav>
			<div class="hidden md:flex items-center">
				<img
					class="mr-3 opacity-90 cursor-pointer"
					src="/images/icons/language/fr.svg"
					width="24"
          alt="French"
				/>
				<img class="opacity-90 cursor-pointer" src="/images/icons/language/en.svg" alt="English" width="24" />
			</div>
			<ol class="flex flex-col items-start text-white text-sm my-6">
				<li class="pb-0.5"><span>{translation.about_title}</span></li>
				<li class="mt-5 pb-0.5"><span>{translation.projects_title}</span></li>
				<li class="mt-5 pb-0.5"><span>{translation.skills_title}</span></li>
				<li class="mt-5 pb-0.5"><span>{translation.contact_title}</span></li>
			</ol>
			<Links size={20} />
		</nav>
	</div>
</header>

<style lang="postcss">
	.mobile nav > ol > li::before {
		@apply h-full rounded-full absolute left-0 top-0 bg-transparent transition duration-200;
		content: '';
		width: 2px;
	}
	.mobile nav > ol > li span {
		@apply transition duration-200;
	}

	.mobile nav > ol > li:hover span {
		@apply transform translate-x-2 transition duration-200;
	}

	.mobile nav > ol > li:hover::before {
		box-shadow: rgb(255, 99, 200) 1px 0px 8px;
	}

	nav > ol > li {
		@apply relative h-full flex items-center cursor-pointer text-white text-opacity-90;
	}

	nav > ol > li::before {
		@apply w-full rounded-full absolute bottom-0 left-0 bg-transparent transition duration-200;
		content: '';
		height: 2px;
	}

	nav > ol > li:hover::before {
		background-color: #fdace0;
		box-shadow: rgb(255, 99, 200) 0px -1px 8px;
		transition: 0.2s all ease-in;
	}

	.sun {
		background: linear-gradient(180deg, #e4a11e 8.99%, #ea1ab4 81.42%);
	}

	.glass {
		@apply transition duration-200;
		backdrop-filter: blur(10px) saturate(170%);
		-webkit-backdrop-filter: blur(10px) saturate(170%);
		background-color: rgba(255, 255, 255, 0.1);
		border-color: rgba(255, 255, 255, 0.06);
	}
</style>
