<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Links from './Links.svelte';
</script>

<footer class="flex flex-col items-center justify-center mt-20 pb-6 pt-20 relative">
	<span class="text-white opacity-90 italic pt-4 tracking-widest text-xs mb-2"
		>{$_('footer_credits')} <span class="font-semibold">Tom Délié</span></span
	>
	<Links />
	<svg style="z-index: -1" class="absolute bottom-0 w-full transform rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1685.86 387.16">
		<polygon points="1683.97 0.5 1005.34 386.66 645.6 386.66 1.81 0.5 1683.97 0.5" fill="none" stroke="#513068"></polygon>
		<path d="M282.17.5,705.55,386.66" fill="none" stroke="#513068"></path>
		<path d="M562.53.5l203,386.16" fill="none" stroke="#513068"></path>
		<path d="M842.89.5,825.47,386.66" fill="none" stroke="#513068"></path>
		<path d="M1123.25.5,885.43,386.66" fill="none" stroke="#513068"></path>
		<path d="M1403.61.5,945.39,386.66" fill="none" stroke="#513068"></path>
		<path d="M1033.64,370.69h-414" fill="none" stroke="#513068"></path>
		<path d="M1071.64,349.69h-488" fill="none" stroke="#513068"></path>
		<path d="M1125.64,318.69h-593" fill="none" stroke="#513068"></path>
		<path d="M1208.64,270.69h-756" fill="none" stroke="#513068"></path>
	</svg>
</footer>

<style lang="css" scoped>
	footer {
		background: linear-gradient(180deg, rgba(253, 25, 173, 0) 0%, rgba(253, 25, 173, 0.1) 100%);
	}
</style>
