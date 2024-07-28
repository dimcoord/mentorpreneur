<script lang="ts">
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button';
</script>

<div class="h-dvh col-span-12 flex flex-col justify-center gap-4 text-center">
	<h1 class="text-4xl font-bold">{$page.status}: {$page.error?.message}</h1>
	<Button href="/" variant="link">Go Back to Homepage</Button>
</div>
