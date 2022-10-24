<script>
	import BottomCards from '$lib/bottom-cards.svelte';
	import MobileAside from '$lib/mobile-aside.svelte';
	import SideContentLink from '$lib/side-content-link.svelte';
	import { isOpen } from '$lib/stores';

	const onAsideOpen = () => {
		$isOpen = true
	}
</script>

<h1 class="sr-only">Web 3.0</h1>
<main class="w-screen min-h-screen grid grid-cols-[minmax(0,1100px)] justify-center">
	<div class="w-full grid grid-rows-[max-content,max-content] pt-[28px] pb-[75px] md:pt-[90px] md:pb-[130px] px-4">
		<nav class="grid gap-[40px] grid-cols-[max-content,1fr] md:grid-cols-[max-content,1fr,repeat(3,max-content)] mb-[55px]">
			<img src="W..svg" alt="W." />

			<a class="justify-self-end" href="/home">Home</a>
			<a href="/news">New</a>
			<a href="/trending">Trending</a>
			<a href="/categores">Catgories</a>

			<button on:click={onAsideOpen} class="justify-self-end">
				<img src="/hamburger.svg" alt="">
			</button>
		</nav>

		<section
			class="grid grid-cols-1 grid-rows-[repeat(3,max-content)] md:grid-cols-[minmax(0,730px),1fr] md:grid-rows-[1fr,max-content] gap-x-[30px] gap-y-[71px]"
		>
			<div class="grid grid-cols-1 md:grid-cols-2 font-inter grid-rows-[repeat(2,max-content)] gap-[30px]">
				<img class="md:col-start-1 md:col-end-3 h-[300px] object-cover" src="/main-card.png" alt="lego blocks" />
				<h2 class="text-[56px] leading-[56px] font-extrabold text-blue">The Bright Future of Web 3.0?</h2>

				<div class="flex flex-col gap-[30px] items-start">
					<p class="text-[15px] leading-[26px] text-grey items-start">
						We dive into the next evolution of the web that claims to put the power of
						the platforms back into the hands of the people. But is it really fulfilling
						its promise?
					</p>

					<button class="px-8 py-[12px] bg-red text-white-300 font-inter font-bold text-[14px] leading-[24px] tracking-[4px]">
						Read more
					</button>
				</div>
			</div>

			<div class="bg-blue px-6 py-8">
				<h2 class="text-yellow font-inter font-bold text-[40px] leading-[40px] mb-[34px]">
					New
				</h2>

				<SideContentLink
					title="Hydrogen VS Electric Cars"
					description="Will hydrogen-fueled cars ever catch up to EVs?"
				/>
				<SideContentLink
					title="The Downsides of AI Artistry"
					description="What are the possible adverse effects of on-demand AI image generation?"
				/>
				<SideContentLink
					title="Is VC Funding Drying Up?"
					description="Private funding by VC firms is down 50% YOY. We take a look at what that means."
				/>
			</div>

			<div class="md:col-start-1 md:col-end-3 grid grid-cols-1 md:grid-cols-3 gap-[30px]">
				<BottomCards
					num="01"
					title="Reviving Retro PCs"
					description="What happens when old PCs are given modern upgrades?"
					src="/bottom-card-1.png"
					alt=""
					href="/"
				/>

				<BottomCards
					num="02"
					title="Top 10 Laptops of 2022"
					description="Our best picks for various needs and budgets."
					src="/bottom-card-2.png"
					alt=""
					href="/"
				/>

				<BottomCards
					num="03"
					title="Reviving Retro PCs"
					description="How the pandemic has sparked fresh opportunities."
					src="/bottom-card-3.png"
					alt=""
					href="/"
				/>
			</div>
		</section>
	</div>
</main>

<MobileAside />

<style>
	nav a {
		@apply text-grey font-inter text-[15px] leading-[26px] hidden md:inline;
	}

	nav a:hover {
		@apply text-red;
	}

	nav button {
		@apply md:hidden;
	}
</style>
