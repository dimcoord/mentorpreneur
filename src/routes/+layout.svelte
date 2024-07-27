<script lang="ts">
	// import type { LayoutData } from './$types';
	import '../app.css';
	import { Toaster } from '$lib/components/ui/sonner';
	import { Button } from '$lib/components/ui/button';

	// export let data: LayoutData;
</script>

<Toaster />

<div class="font-sans mx-2 md:mx-4 my-2 grid grid-cols-12">
	<div class="col-span-12 flex gap-1 md:gap-2 justify-end">
		<Button size="sm" href="/register" class="text-xs">Register</Button>
		<Button size="sm" href="/login" class="text-xs">Login</Button>
		<Button size="sm" href="/about" class="text-xs">About Us</Button>
	</div>
	<slot />
</div>
