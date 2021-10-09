<script lang="ts">
	import { _, json } from 'svelte-i18n';
	import Home from '../components/Home/index.svelte';

	import Skill from '../components/Skill.svelte';
	import Project from '../components/Project.svelte';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
</script>

<Header />
<main id="home">
	<Home />
	<section id="about" class="z-20 container lg:w-3/5 mx-auto px-4 lg:px-0 pt-20 md:pt-56 relative">
		<h2>
			<span class="font-semibold font-kiona mr-2 shadow-pink">01.</span>
			<span class="font-kiona font-semibold text-white text-opacity-90">{$_('about_title')}</span>
		</h2>
		<p class="text-white text-opacity-80 my-6">{$_('about_paragraph')}</p>
	</section>

	<section id="projects" class="z-20 container mx-auto px-4 lg:px-0 lg:w-3/5 pt-20 md:pt-28">
		<h2 class="mb-6">
			<span class="font-semibold font-kiona mr-2 shadow-pink">02.</span><span
				class="font-kiona font-semibold text-white text-opacity-90">{$_('projects_title')}</span
			>
		</h2>
		<div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
			<Project
				name="Symfonax"
				src="/images/mockup.png"
				description={$_('projects_symfonax_description')}
				tags={$json('projects_symfonax_tags')}
			/>
			<Project
				name="E-Furrax"
				src="/images/efurrax-5.png"
				description={$_('projects_efurrax_description')}
				tags={$json('projects_efurrax_tags')}
				github="https://github.com/e-furrax"
			/>
			<Project 
				name="Developer Skill Tree" 
				src="/images/dev-skill-tree.png"
				description={$_('projects_dst_description')}
				tags={$json('projects_dst_tags')}
				github="https://github.com/tomdelie/developer-skill-tree"
			/>
			<Project 
				name="Pixel World" 
				src="/images/pixel-world.png"
				description={$_('projects_pixelworld_description')}
				tags={$json('projects_pixelworld_tags')}
				github="https://github.com/godot-pour-les-nuls/pixel-world"
			/>
		</div>
	</section>

	<section id="skills" class="z-20 container lg:w-3/5 mx-auto px-4 lg:px-0 pt-20 md:pt-28 relative">
		<h2 class="mb-6">
			<span class="font-semibold font-kiona mr-2 shadow-pink">03.</span><span
				class="font-kiona font-semibold text-white text-opacity-90">{$_('skills_title')}</span
			>
		</h2>

		<div class="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
			<div>
				<h3 class="text-xs text-white text-opacity-80 font-semibold mb-2">JavaScript</h3>
				<Skill
					moreClass="border-b"
					src="/images/icons/javascript/javascript.svg"
					name="JavaScript"
					level={3}
				/>
				<Skill
					moreClass="border-b"
					src="/images/icons/javascript/typescript.svg"
					name="TypeScript"
					level={3}
					favorite={true}
				/>
				<Skill
					moreClass="border-b"
					src="/images/icons/javascript/nodedotjs.svg"
					name="Node.js"
					level={2}
					favorite={true}
				/>
				<Skill
					moreClass="border-b"
					src="/images/icons/javascript/vuejs.svg"
					name="Vue.js"
					level={2}
					favorite={true}
				/>
				<Skill
					moreClass="border-b"
					src="/images/icons/javascript/express.svg"
					name="Express"
					level={2}
				/>
				<Skill moreClass="border-b" src="/images/icons/javascript/hapi.png" name="hapi" level={2} />
				<Skill
					moreClass="border-b"
					src="/images/icons/javascript/svelte.svg"
					name="Svelte"
					level={1}
					favorite={true}
				/>
				<Skill src="/images/icons/javascript/react.svg" name="React" level={1} />
			</div>

			<div>
				<h3 class="text-xs text-white font-semibold text-opacity-80 mb-2">PHP</h3>
				<Skill moreClass="border-b" src="/images/icons/php/php.svg" name="PHP 7" level={2} />
				<Skill moreClass="border-b" src="/images/icons/php/laravel.svg" name="Laravel" level={2} />
				<Skill src="/images/icons/php/symfony.svg" name="Symfony" level={2} />
			</div>

			<div>
				<h3 class="text-xs text-white font-semibold text-opacity-80 mb-2">{$_('skills_title_automation')}</h3>
				<Skill
					moreClass="border-b"
					src="/images/icons/automation/docker.svg"
					name="Docker"
					level={3}
				/>
				<Skill
					moreClass="border-b"
					src="/images/icons/automation/githubactions.svg"
					name="GitHub Actions"
					level={3}
				/>
				<Skill
					moreClass="border-b"
					src="/images/icons/automation/terraform.svg"
					name="Terraform"
					level={2}
				/>
				<Skill
					moreClass="border-b"
					src="/images/icons/automation/ansible.svg"
					name="Ansible"
					level={2}
				/>
				<Skill src="/images/icons/automation/gitlab.svg" name="GitLab CI" level={1} />
			</div>

			<div>
				<h3 class="text-xs text-white font-semibold mb-2 text-opacity-80">{$_('skills_title_others')}</h3>
				<Skill moreClass="border-b" src="/images/icons/git.svg" name="Git" level={3} />
				<Skill moreClass="border-b" src="/images/icons/figma.svg" name="Figma" level={2} />
				<Skill
					moreClass="border-b"
					src="/images/icons/godotengine.svg"
					name="Godot Engine"
					level={2}
				/>
				<Skill src="/images/icons/go.svg" name="Go" level={1} />
			</div>
		</div>
	</section>

	<section id="contact" class="container mx-auto px-4 lg:px-0 pt-40">
		<div class="flex flex-col items-center justify-center">
			<h2>
				<span class="font-semibold font-kiona mr-2 shadow-pink">04.</span><span
					class="font-kiona font-semibold text-white opacity-90">{$_('contact_title')}</span
				>
			</h2>
			<h3 class="text-white opacity-80 text-4xl md:text-5xl font-kiona font-semibold my-6">
				{$_('contact_headline')}
			</h3>
			<p class="text-sm text-white opacity-80 text-center" style="max-width: 450px;">
				{$_('contact_paragraph')}
			</p>
			<button
				class="contact-button overflow-hidden z-10 hover:shadow-xl transform hover:-translate-y-1 relative mt-6 text-sm rounded-sm px-6 py-3 text-white font-bold transition duration-700"
				>{$_('contact_button')}</button
			>
		</div>
	</section>
</main>
<Footer />

<style lang="css">
	.contact-button::before {
		content: "";
		z-index: -1;
		position: absolute;
		top: 50%;
		left: 50%;
		width: 200%;
		height: 400%;
		background: linear-gradient(-130deg, #e4a11e 30%, #ea1ab4 60%);
		transition: all 0.7s;
		transform: translate(-50%, -50%);
	}

	.contact-button:hover::before {
		transition: all 0.7s;
		transform: translate(-50%, -50%) rotate(-200deg);
	}

	.shadow-pink {
		color: #FB4DBE;
		text-shadow: rgb(251, 77, 190) 1px 0px 8px;
	}

	.separator > .line {
		background: linear-gradient(90deg, rgba(234, 26, 180, 0.8) 0%, rgba(234, 26, 180, 0.2) 80%);
	}

	.font-kiona {
		font-family: 'Kiona';
	}

	#cover-page {
		background: linear-gradient(360deg, #fd19ad 0%, #231e48 35%);
	}

	#sun {
		background: linear-gradient(180deg, #e4a11e 8.99%, #ea1ab4 81.42%);
	}

	#logo > div {
		background: linear-gradient(180deg, #e4a11e -3.41%, #fd19ad 81.42%);
		width: 30px;
		height: 30px;
	}

	#logo > span {
		background: -webkit-linear-gradient(-90deg, #e4a11e -10%, #fd19ad 90%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
