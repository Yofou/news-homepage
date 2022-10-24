<script lang="ts">
	export let title: string
	export let description: string
</script>

<div class="font-inter first-of-type:pt-0 pt-[31px] pb-[29px] border-b border-b-grey last-of-type:pb-[0px] last-of-type:border-b-0 relative">
	<a class="text-[20px] leading-[24px] text-white-300 font-extrabold mb-2 hover:text-yellow transition-colors before:contents before:absolute before:inset-0" href="/">{title}</a>
	<p class="text-white-600 text-[15px] leading-[26px]">{description}</p>
</div>
