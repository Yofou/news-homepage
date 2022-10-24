<script lang="ts">
	import { clickOutside } from "./useClickOutside"
	import { isOpen } from './stores';

	const onAsideClose = () => {
		$isOpen = false
	}

	const onClickOutside = () => {
		$isOpen = false
	}
</script>

{#if $isOpen}
	<aside class="fixed top-0 left-0 w-full h-full bg-blue/50">
		<div
			class="max-w-[256px] w-full h-full absolute top-0 bg-white-300 px-[24px] py-[27px] right-0 grid grid-flow-row auto-rows-max"
			use:clickOutside
			on:outclick={onClickOutside}
		>
			<button on:click={onAsideClose} class="justify-self-end">
				<img src="/close.svg" alt="" />
			</button>

			<a href="/home" class="mt-[86px]">Home</a>
			<a href="/new">New</a>
			<a href="/popular">Popular</a>
			<a href="/trending">Trending</a>
			<a href="/categories">Catergories</a>
		</div>
	</aside>
{/if}

<style>
	a {
		@apply font-inter text-blue text-[18px] leading-[24px] mb-[24px];
	}
</style>
