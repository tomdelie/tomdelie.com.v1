<script lang="ts">
	import { _, locale } from 'svelte-i18n';
	import Links from './Links.svelte';

	let menuRef;
	let navRef;
	let opened = false;

	const handleMenu = () => {
		if (opened) {
			navRef.classList.add('translate-x-52');
			menuRef.classList.remove('bg-black');
			menuRef.classList.remove('bg-opacity-20');
			menuRef.classList.add('pointer-events-none');
		} else {
			navRef.classList.remove('translate-x-52');
			menuRef.classList.add('bg-black');
			menuRef.classList.add('bg-opacity-20');
			menuRef.classList.remove('pointer-events-none');

		}
		opened = !opened;
	};

	const handleClick = (event) => {
		if (event.target.classList.contains('mobile')) {
			handleMenu();
		}
	};

	let scrolled = false;
	const handleScroll = () => {
		scrolled = !!window.scrollY;
	};

	const handleLocaleChange = (event) => {
		const lang = event.target.dataset.lang;
		$locale = lang;
	}
</script>

<svelte:window on:scroll={handleScroll}/>
<header class="{scrolled ? 'translate-y-0' : '-translate-y-12' } backdrop-filter shadow-sm backdrop-blur transform fixed w-full transition duration-700" style="z-index: 1000; background-color: rgba(58, 50, 114, 0.5);">
	<div class="glass px-6 h-12 flex items-center justify-between">
		<div class=" flex items-center">
			<a href="#home"><div class="sun w-6 h-6 rounded-full cursor-pointer hover:shadow"></div></a>
			<div class="flex items-center text-white text-sm ml-4">
				<span class="{ $locale === 'en-US' ? 'font-bold' : '' } cursor-pointer" on:click={handleLocaleChange} data-lang="en-US">en</span>
				<span class="mx-2">|</span>
				<span class="{ $locale !== 'en-US' ? 'font-bold' : '' } cursor-pointer" on:click={handleLocaleChange} data-lang="fr">fr</span>
			</div>
		</div>
		<nav class="h-full flex items-center">
			<ol class="hidden md:flex items-center text-xs text-white text-opacity-90 h-full">
				<a href="#about" class="mr-6"><li>{$_('about_title')}</li></a>
				<a href="#projects" class="mr-6"><li>{$_('projects_title')}</li></a>
				<a href="#skills" class="mr-6"><li>{$_('skills_title')}</li></a>
				<a href="#contact"><li>{$_('contact_title')}</li></a>
			</ol>
			<img
				on:click={handleMenu}
				class="block md:hidden cursor-pointer hover:bg-white hover:bg-opacity-10 rounded-full p-0.5"
				src="/images/icons/menu.svg"
				width="28"
        alt="Menu"
			/>
		</nav>
	</div>
</header>
<header bind:this={menuRef} on:click={handleClick} class="pointer-events-none mobile flex top-0 left-0 justify-end md:hidden fixed w-full h-full transition duration-700" style="z-index: 1001;">
	<nav bind:this={navRef} class="w-52 p-6 h-full transform translate-x-52 transition duration-700 backdrop-filter shadow-sm backdrop-blur" style="background-color: rgba(58, 50, 114, 1);">
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
			<a on:click={handleMenu} href="#about" class="pb-0.5"><li><span>{$_('about_title')}</span></li></a>
			<a on:click={handleMenu} href="#projects" class="mt-5 pb-0.5"><li><span>{$_('projects_title')}</span></li></a>
			<a on:click={handleMenu} href="#skills" class="mt-5 pb-0.5"><li><span>{$_('skills_title')}</span></li></a>
			<a on:click={handleMenu} href="#contact" class="mt-5 pb-0.5"><li><span>{$_('contact_title')}</span></li></a>
		</ol>
		<Links size={20} />
	</nav>
</header>

<style lang="postcss">
	.mobile nav > ol > a::before {
		@apply h-full rounded-full absolute left-0 top-0 bg-transparent transition duration-200;
		content: '';
		width: 2px;
	}
	.mobile nav > ol > a li {
		@apply transition duration-200;
	}

	.mobile nav > ol > a:hover li {
		@apply transform translate-x-2 transition duration-200;
	}

	.mobile nav > ol > a:hover::before {
		box-shadow: rgb(255, 99, 200) 1px 0px 8px;
	}

	nav > ol > a {
		@apply relative h-full flex items-center cursor-pointer text-white text-opacity-90;
	}

	nav > ol > a::before {
		@apply w-full rounded-full absolute bottom-0 left-0 bg-transparent transition duration-200;
		content: '';
		height: 2px;
	}

	nav > ol > a:hover::before {
		background-color: #fdace0;
		box-shadow: rgb(255, 99, 200) 0px -1px 8px;
		transition: 0.2s all ease-in;
	}

	.sun {
		background: linear-gradient(180deg, #e4a11e 8.99%, #ea1ab4 81.42%);
	}

	.glass {
		/* backdrop-filter: blur(10px) saturate(170%); */
		/* background-color: rgba(255, 255, 255, 0.1); */
	}
</style>
