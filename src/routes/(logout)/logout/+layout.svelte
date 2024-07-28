<script lang="ts">
	import { invalidateAll, onNavigate } from '$app/navigation';
	import { redirect } from '@sveltejs/kit';
	import type { LayoutData } from './$types';
	import { tick } from 'svelte';

	export let data: LayoutData;
	tick()
		.then(() => invalidateAll())
		.finally(() => redirect(303, '/'));
</script>

<slot />
