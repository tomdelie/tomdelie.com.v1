<header class="w-full z-50 fixed">
	<div class="glass px-6 h-10 flex items-center justify-between">
		<div
			class="sun w-6 h-6 rounded-full cursor-pointer hover:shadow"
			on:click={() => window.location.reload(false)}
		/>
		<div class="h-full flex items-center">
			<ol class="hidden md:flex items-center mr-10 text-xs text-white text-opacity-90 h-full">
				<li class="mr-6"><span>01.</span>About</li>
				<li class="mr-6"><span>02.</span>Projects</li>
				<li class="mr-6"><span>03.</span>Skills</li>
				<li><span>04.</span>Contact</li>
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
		</div>
	</div>
</header>

<style lang="postcss">
	ol > li {
		@apply relative h-full flex items-center cursor-pointer text-white text-opacity-90;
	}

	ol > li > span {
		@apply mr-1 text-cyber-100 text-opacity-90 font-semibold;
	}

	ol > li::before {
		@apply w-full rounded-full absolute bottom-0 left-0 bg-transparent transition duration-200;
		content: '';
		height: 2px;
	}

	ol > li:hover::before {
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
