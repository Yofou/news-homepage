<script lang="ts">
	export let num: string
	export let title: string
	export let description: string
	export let src: string
	export let alt: string
	export let href: string
</script>

<div class="relative grid grid-cols-[100px,1fr] font-inter grid-rows-[repeat(3,max-content)] gap-x-[24px]">
	<img class="row-start-1 row-end-[-1] col-start-1 col-end-2" {src} {alt}>

	<h2 class="text-white-600 text-[32px] leading-[32px] font-bold">{num}</h2>
	<a class="before:contents before:absolute before:inset-0 text-[18px] leading-[24px] text-blue hover:text-red mb-[9px] mt-[12px] font-extrabold" href={href}>{title}</a>
	<p class="text-[15px] leading-[26px] text-grey">{description}</p>
</div>
