<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';

	import { Toaster } from '$lib/components/ui/sonner';
	import { Button } from '$lib/components/ui/button';

	$: hasLogoOnHeader = $page.route.id !== '/' && $page.route.id !== '/mentors';
	$: isAboutPage = $page.route.id === '/about';
</script>

<svelte:head>
	<title>Mentorpreneur</title>
</svelte:head>

<Toaster />

<div class="font-sans mx-2 md:mx-4 my-2 grid grid-cols-12">
	<div class="col-span-12 flex gap-1 md:gap-2 justify-end items-baseline">
		{#if hasLogoOnHeader}
			<Button variant="link" href="/" class="font-bold text-lg px-2">Mentorpreneur</Button>
		{/if}
		<Button size="sm" href="/register" class="text-xs">Register</Button>
		<Button size="sm" href="/login" class="text-xs">Login</Button>
		{#if !isAboutPage}
			<Button size="sm" href="/about" class="text-xs">About Us</Button>
		{/if}
	</div>
	<slot />
</div>
