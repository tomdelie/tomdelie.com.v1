<script lang="ts">
	import WaveSeparator from '../components/WaveSeparator.svelte';
	import Skill from '../components/Skill.svelte';
	import Project from '../components/Project.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<main>
	<svg
		class="hidden hair z-10 opacity-70 w-full absolute left-0"
		width="1440"
		height="3012"
		viewBox="0 0 1440 3012"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g filter="url(#filter0_d)">
			<path
				d="M362.5 0.5C362.5 460 533.5 656.5 707 752.5C880.5 848.5 1382.5 709 1450 1156.5C1517.5 1604 1260 1792 823.5 1897.5C387 2003 -69.5 2228.5 -210.5 2519.5C-351.5 2810.5 -508.5 2881 -912 2969"
				stroke="white"
				stroke-linecap="round"
			/>
		</g>
		<g filter="url(#filter1_d)">
			<path
				d="M412 0C341.5 785 571 752 756.5 752C942 752 1407 691 1474.5 1138.5C1542 1586 1021 1786.8 563.5 1930.5C106 2074.2 -76 2276.5 -138 2484C-200 2691.5 -323 2872 -852.5 2991"
				stroke="white"
				stroke-linecap="round"
			/>
		</g>
		<defs>
			<filter
				id="filter0_d"
				x="-914.5"
				y="-2"
				width="2377.68"
				height="2973.5"
				filterUnits="userSpaceOnUse"
				color-interpolation-filters="sRGB"
			>
				<feFlood flood-opacity="0" result="BackgroundImageFix" />
				<feColorMatrix
					in="SourceAlpha"
					type="matrix"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					result="hardAlpha"
				/>
				<feOffset />
				<feGaussianBlur stdDeviation="1" />
				<feComposite in2="hardAlpha" operator="out" />
				<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
				<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
				<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
			</filter>
			<filter
				id="filter1_d"
				x="-855"
				y="-2.50006"
				width="2337.94"
				height="2996"
				filterUnits="userSpaceOnUse"
				color-interpolation-filters="sRGB"
			>
				<feFlood flood-opacity="0" result="BackgroundImageFix" />
				<feColorMatrix
					in="SourceAlpha"
					type="matrix"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					result="hardAlpha"
				/>
				<feOffset />
				<feGaussianBlur stdDeviation="1" />
				<feComposite in2="hardAlpha" operator="out" />
				<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
				<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
				<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
			</filter>
		</defs>
	</svg>

	<section class="h-screen w-full">
		<div id="cover-page" class="h-screen relative overflow-hidden">
			<svg
				class="cloud absolute top-52 left-20"
				width="315"
				height="160"
				viewBox="0 0 315 160"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M32.4343 75.5192C14.9343 84.5192 12.4343 110.519 12.4343 110.519C12.4343 110.519 2.87164 113 0.471636 121C-1.92837 129 4.97152 135.519 17.9716 138.519C30.9716 141.519 53.4343 138.519 53.4343 138.519C53.4343 138.519 64.9342 152.019 85.4343 155.519C105.934 159.019 129.934 155.519 129.934 155.519C129.934 155.519 151.934 162.519 177.434 159.019C202.934 155.519 222.934 145.519 222.934 145.519C222.934 145.519 252.577 148.098 278.434 141.519C299.521 136.154 314.934 129.019 314.934 108.019C314.934 96.5676 310.934 90.0192 298.934 86.0192C286.934 82.0191 278.434 86.0192 278.434 86.0192C278.434 86.0192 278.434 78.3317 271.434 73.5192C264.434 68.7067 256.934 69.5192 256.934 69.5192C256.934 69.5192 255.934 53.2919 242.934 45.0192C229.934 36.7465 214.434 40.5192 214.434 40.5192C214.434 40.5192 201.934 1.36916 142.434 0.0191745C114.548 -0.613532 93.9344 14.5193 80.9344 29.5192C66.5851 47.8003 62.4344 68.5192 62.4344 68.5192C62.4344 68.5192 49.9343 66.5192 32.4343 75.5192Z"
					fill="url(#paint1_linear)"
				/>
				<defs>
					<linearGradient
						id="paint1_linear"
						x1="155.703"
						y1="0"
						x2="155.703"
						y2="159.999"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#2F285B" stop-opacity="0.6" />
						<stop offset="0.489583" stop-color="#2F285B" stop-opacity="0.07" />
					</linearGradient>
				</defs>
			</svg>

			<svg
				class="cloud absolute top-10 left-1/4"
				width="461"
				height="212"
				viewBox="0 0 461 212"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M90.4651 83.0349C66.9194 90.4688 59.4839 114.01 59.4839 114.01C59.4839 114.01 37.6751 109.823 21.0672 117.727C8.50534 123.705 0 139.251 0 153.658C0 187.11 25.8669 194.167 34.6989 197.022C43.531 199.878 62.7988 201.305 79.2121 201.305C95.6254 201.305 123.305 197.022 123.305 197.022C123.305 197.022 166.988 211.375 206.237 211.97C245.486 212.565 291.872 204.161 291.872 204.161C291.872 204.161 313.994 207.73 342.539 204.161C371.084 200.592 389.638 189.884 389.638 189.884C389.638 189.884 461 194.544 461 128.878C461 102.965 446.75 82.8534 432.497 73.1229C410.632 58.1952 385.406 61.972 385.406 61.972C385.406 61.972 369.296 1.2613 303.616 0.0223015C237.935 -1.21669 219.347 49.582 219.347 49.582C219.347 49.582 184.648 42.1481 164.82 53.299C144.992 64.45 133.839 83.0349 133.839 83.0349C133.839 83.0349 114.011 75.6009 90.4651 83.0349Z"
					fill="url(#paint2_linear)"
				/>
				<defs>
					<linearGradient
						id="paint2_linear"
						x1="230.5"
						y1="0"
						x2="230.5"
						y2="212"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#2F285B" stop-opacity="0.6" />
						<stop offset="0.729167" stop-color="#2F285B" stop-opacity="0.05" />
					</linearGradient>
				</defs>
			</svg>

			<svg
				class="cloud absolute right-48 bottom-1/2"
				width="199"
				height="98"
				viewBox="0 0 199 98"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M40.2922 23.5092C28.7922 29.061 24.2922 42.5092 24.2922 42.5092C24.2922 42.5092 16.1102 41.2457 9.29218 45.5092C4.71213 48.3733 0.747572 55.5937 0.292185 59.0092C-0.841108 67.5092 0.792193 79.5092 14.7922 83.5092C28.7922 87.5092 34.2922 81.0092 34.2922 81.0092C34.2922 81.0092 43.2922 87.3729 52.2922 89.0092C61.2922 90.6456 72.2922 87.0092 72.2922 87.0092C72.2922 87.0092 83.2922 97.5092 104.292 97.5092C125.292 97.5092 135.792 87.0092 135.792 87.0092C135.792 87.0092 145.792 89.0092 153.292 89.0092C160.792 89.0092 169.292 84.0092 169.292 84.0092C169.292 84.0092 180.792 88.8959 188.292 84.9526C195.792 81.0092 199.792 73.0092 197.792 62.0092C195.792 51.0092 181.792 49.0092 181.792 49.0092C181.792 49.0092 180.292 40.5092 171.292 32.0092C162.292 23.5092 147.792 27.5092 147.792 27.5092C147.792 27.5092 136.792 0.509224 105.792 0.00922125C74.7922 -0.490782 62.7922 19.5092 62.7922 19.5092C62.7922 19.5092 51.7922 17.9575 40.2922 23.5092Z"
					fill="url(#paint3_linear)"
				/>
				<defs>
					<linearGradient
						id="paint3_linear"
						x1="99.1522"
						y1="0"
						x2="99.1522"
						y2="97.5092"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#2F285B" stop-opacity="0.6" />
						<stop offset="0.760417" stop-color="#2F285B" stop-opacity="0.05" />
					</linearGradient>
				</defs>
			</svg>

			<div
				id="sun"
				class="z-20 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 absolute bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
			/>

			<svg
				class="z-20 mountain absolute 2xl:hidden"
				viewBox="0 0 1440 873"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M44 54L6.10352e-05 86V873H1440V73.607L1402.96 62.6673L1351.91 73.507L1287.34 55.5537L1209.26 33.5355L1146.19 67.4097L1051.6 73.507L978.019 46.7464L924.964 33.5355L876.914 55.5537L827.362 33.5355C804.728 37.0858 792.317 39.8974 770.803 46.7464L723.754 21.6795L665.193 16.2596L617.143 55.5537L554.578 78.2494L504.526 62.6673C474.654 48.2929 411.978 22.6044 410.785 24.5357C402.262 38.333 357.451 76.7402 346.861 78.2494L260.772 46.7464L197.456 0.547691C197.033 0.238923 196.456 0.294171 196.116 0.692582C177.655 22.3175 137.164 63.9166 118.123 62.6673L44 54Z"
					fill="url(#paint0_linear)"
				/>
				<defs>
					<linearGradient
						id="paint0_linear"
						x1="720"
						y1="-3.84753e-08"
						x2="719.74"
						y2="661"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#3A0366" />
						<stop offset="1" stop-color="#97089A" />
					</linearGradient>
				</defs>
			</svg>

			<svg
				class="z-20 mountain absolute 2xl:hidden"
				viewBox="0 0 1440 866"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M42.3621 121.464C27.8621 119.928 21.5288 92 0.528834 84.5C-20.4712 77 7.62939e-06 866 7.62939e-06 866H1440V115.5C1351.15 113.399 1372.03 105 1288.53 82C1288.53 82 1205.86 42.3689 1200.03 40.5C1194.2 38.6311 1088.36 26.4979 1088.36 26.4979L1043.36 10.5L994.362 67.0032L913.862 73.1842L870.862 70.0666L843.362 84.2009L812.362 106.517L776.862 115.337L756.362 97.6374L651.529 73.1842L611.529 40.5C559.269 22.0885 556.927 27.3368 513.529 0L451.529 33L435.029 58.5L389.529 78L344.529 121.464L315.029 116.018L279.529 134L241.029 116.018L202.529 104.5L145.529 137.5L106.362 116.018L79.8621 110.471C79.8621 110.471 56.8621 123 42.3621 121.464Z"
					fill="#240145"
				/>
			</svg>

			<svg
				class="z-20 absolute bottom-0 w-full hidden 2xl:block"
				viewBox="0 0 1440 247"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M46 54L0 88V247H1440V73.5L1404.96 62.6673L1353.91 73.507L1289.34 55.5537L1211.26 33.5355L1148.19 67.4097L1053.6 73.507L980.019 46.7464L926.963 33.5355L878.913 55.5537L829.362 33.5355C806.728 37.0858 794.317 39.8974 772.803 46.7464L725.754 21.6795L667.193 16.2596L619.143 55.5537L556.578 78.2494L506.526 62.6673C476.654 48.2929 413.978 22.6044 412.785 24.5357C404.262 38.333 359.451 76.7402 348.861 78.2494L262.772 46.7464L199.456 0.547691C199.032 0.238923 198.456 0.294171 198.115 0.692582C179.655 22.3175 139.164 63.9166 120.123 62.6673L46 54Z"
					fill="url(#paint5_linear)"
				/>
				<defs>
					<linearGradient
						id="paint5_linear"
						x1="722"
						y1="4.11319e-08"
						x2="721.865"
						y2="343.999"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#3A0366" />
						<stop offset="1" stop-color="#400141" />
					</linearGradient>
				</defs>
			</svg>

			<svg
				class="z-30 absolute bottom-0 w-full hidden 2xl:block"
				viewBox="0 0 1440 247"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M43.3333 121.464C28.8333 119.928 22.5 92 1.50005 84.5C-19.5 77 0 247 0 247H1440V115.5C1351.15 113.399 1373 105 1289.5 82C1289.5 82 1206.83 42.3689 1201 40.5C1195.17 38.6311 1089.33 26.4979 1089.33 26.4979L1044.33 10.5L995.333 67.0032L914.833 73.1842L871.833 70.0666L844.333 84.2009L813.333 106.517L777.833 115.337L757.333 97.6374L652.5 73.1842L612.5 40.5C560.24 22.0885 557.898 27.3368 514.5 0L452.5 33L436 58.5L390.5 78L345.5 121.464L316 116.018L280.5 134L242 116.018L203.5 104.5L146.5 137.5L107.333 116.018L80.8333 110.471C80.8333 110.471 57.8333 123 43.3333 121.464Z"
					fill="#240145"
				/>
			</svg>

			<div class="h-full w-full flex flex-col items-center justify-center">
				<h1 class="z-30 main-title font-streamster">Tom Délié</h1>
				<span
					class="z-30 main-subtitle text-lg uppercase font-kiona font-bold text-black text-sm bg-white -m-2 px-3"
					>Full Stack Web Developer</span
				>
			</div>
		</div>
	</section>
	<WaveSeparator top="#240145" bottom="rgba(0, 0, 0, 0)" />
	<section class="z-20 container lg:w-3/5 mx-auto px-4 lg:px-0 mt-56 relative">
		<h2>
			<span class="font-semibold font-kiona mr-2 text-cyber-100 shadow-pink">01.</span><span
				class="font-kiona font-semibold text-white text-opacity-90">About me</span
			>
		</h2>
		<p class="text-white text-opacity-80 my-6">
			Hey, I'm Tom Délié a 23 years old french full-stack developer that recently graduated in
			software engineering (July 2021). I worked as an internship student during 3 years, mainly as
			a Node.js back-end developer. I'm currently working as a freelance developer.
		</p>
	</section>

	<section class="z-20 container mx-auto px-4 lg:px-0 lg:w-3/5 mt-28">
		<h2 class="mb-6">
			<span class="font-semibold font-kiona mr-2 text-cyber-100 shadow-pink">02.</span><span
				class="font-kiona font-semibold text-white text-opacity-90">Projects</span
			>
		</h2>
		<div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
			<Project name="Symfonax" src="/images/mockup.png" />
			<Project name="E-Furrax" src="/images/efurrax-5.png" />
			<Project name="Developer Skill Tree" src="/images/dev-skill-tree.png" />
			<Project name="Pixel World" src="/images/pixel-world.png" />
		</div>
	</section>

	<section class="z-20 container lg:w-3/5 mx-auto px-4 lg:px-0 mt-28 relative">
		<h2 class="mb-6">
			<span class="font-semibold font-kiona mr-2 text-cyber-100 shadow-pink">03.</span><span
				class="font-kiona font-semibold text-white text-opacity-90">Skills</span
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
				/>
				<Skill
					moreClass="border-b"
					src="/images/icons/javascript/vuejs.svg"
					name="Vue.js"
					level={2}
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
				<h3 class="text-xs text-white font-semibold text-opacity-80 mb-2">Automation</h3>
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
				<h3 class="text-xs text-white font-semibold mb-2 text-opacity-80">Others</h3>
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

	<section class="container mx-auto px-4 lg:px-0 mt-28">
		<div class="flex flex-col items-center justify-center">
			<h2>
				<span class="font-semibold font-kiona mr-2 text-cyber-100 shadow-pink">04.</span><span
					class="font-kiona font-semibold text-white opacity-90">Contact</span
				>
			</h2>
			<h3 class="text-white opacity-80 text-4xl md:text-5xl font-kiona font-semibold my-6">
				Drop a line
			</h3>
			<p class="text-sm text-white opacity-80 text-center" style="max-width: 450px;">
				Want to know more? Have a talk about your project? Drop me a line and let's talk about it.
			</p>
			<button
				class="mt-6 text-sm border border-cyber-100 rounded-sm px-6 py-3 bg-graypurple-900 text-cyber-100 transition duration-200 font-bold hover:bg-cyber-100 hover:bg-opacity-10"
				>CONTACT ME</button
			>
		</div>
	</section>
</main>
<Footer />

<style lang="css">
	.shadow-pink {
		text-shadow: #ea1ab4 0px 0px 6px;
	}

	.separator > .line {
		background: linear-gradient(90deg, rgba(234, 26, 180, 0.8) 0%, rgba(234, 26, 180, 0.2) 80%);
	}

	.main-title {
		font-size: 6rem;
		color: #fbfdf8;
		text-shadow: white 0px 0px 20px;
	}

	.font-kiona {
		font-family: 'Kiona';
	}

	.font-streamster {
		font-family: 'Streamster';
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

	/* MOUNTAINS RESPONSIVE */
	.mountain {
		bottom: 0rem;
	}

	@media (min-width: 380px) {
		.mountain {
			bottom: -2rem;
		}
	}

	@media (min-width: 450px) {
		.mountain {
			bottom: -4rem;
		}
	}

	@media (min-width: 520px) {
		.mountain {
			bottom: -6rem;
		}
	}

	@media (min-width: 590px) {
		.mountain {
			bottom: -7.5rem;
		}
	}

	@media (min-width: 640px) {
		.mountain {
			bottom: -9.5rem;
		}
	}

	@media (min-width: 680px) {
		.mountain {
			bottom: -10.5rem;
		}
	}

	@media (min-width: 768px) {
		.mountain {
			bottom: -13rem;
		}

		.separator > .line {
			background: linear-gradient(180deg, rgba(234, 26, 180, 0.8) 0%, rgba(234, 26, 180, 0.2) 80%);
		}

		.separator > .title {
			writing-mode: vertical-rl;
		}
	}

	@media (min-width: 840px) {
		.mountain {
			bottom: -16rem;
		}
	}

	@media (min-width: 930px) {
		.mountain {
			bottom: -19rem;
		}
	}

	@media (min-width: 1024px) {
		.mountain {
			bottom: -21.5rem;
		}

		.hair {
			top: -29rem;
			display: block;
		}
	}

	@media (min-width: 1100px) {
		.mountain {
			bottom: -24rem;
		}

		.hair {
			top: -23.5rem;
		}
	}

	@media (min-width: 1200px) {
		.mountain {
			bottom: -28rem;
		}

		.hair {
			top: -17rem;
		}
	}

	@media (min-width: 1280px) {
		.mountain {
			bottom: -30rem;
		}

		.hair {
			top: -16rem;
		}
	}

	@media (min-width: 1340px) {
		.mountain {
			bottom: -32rem;
		}

		.hair {
			top: -10rem;
		}
	}

	@media (min-width: 1460px) {
		.mountain {
			bottom: -35rem;
		}

		.hair {
			top: 0rem;
		}
	}

	@keyframes glitch-a {
		10%,
		30%,
		50%,
		70%,
		90% {
			--top: 0;
			--left: 0;
		}
		0% {
			--v-height: 15%;
		}
		20% {
			--left: 0.005;
		}
		40% {
			--left: 0.01;
			--v-height: 20%;
			--top: 3;
		}
		60% {
			--left: 0.03;
			--v-height: 25%;
			--top: 6;
		}
		80% {
			--left: 0.07;
			--v-height: 5%;
			--top: 8;
		}
		100% {
			--left: 0.083;
			--v-height: 30%;
			--top: 1;
		}
	}

	@keyframes glitch-b {
		10%,
		30%,
		50%,
		70%,
		90% {
			--top: 0;
			--left: 0;
		}
		0% {
			--v-height: 15%;
			--top: 10;
		}
		20% {
			--left: -0.005;
		}
		40% {
			--left: -0.01;
			--v-height: 17%;
			--top: 3;
		}
		60% {
			--left: -0.03;
			--v-height: 35%;
			--top: 6;
		}
		80% {
			--left: -0.07;
			--v-height: 5%;
			--top: 8;
		}
		100% {
			--left: -0.083;
			--v-height: 30%;
			--top: 1;
		}
	}
</style>
