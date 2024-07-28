<script lang="ts">
	import type { PageData } from './$types';
	import { User } from 'lucide-svelte';

	import { Button } from '$lib/components/ui/button';

	export let data: PageData;
	let { mentor } = data;
	let currentJob = mentor.Experience.reduce((a, c) =>
		(a.endDate?.getTime() ?? 0) > (c.endDate?.getTime() ?? 0) ? a : c
	);
</script>

<!-- Left Section -->
<section class="col-span-8">
	<div class="flex gap-4 items-center">
		<User class="size-36" />
		<div class="w-[80%]">
			<h1 class="font-bold">{mentor.name}</h1>
			<p>{currentJob.position} @ {currentJob.company}</p>
		</div>
	</div>
	<h2 class="mt-4 mb-2 text-2xl font-bold">About</h2>
	<p>{mentor.bio}</p>
	<h2 class="mt-4 mb-2 text-2xl font-bold">Expertise</h2>
	<div class="w-full grid grid-rows-2 gap-2">
		<div class="flex gap-2">
			{#each mentor.Category as category}
				{#each category.discipline as discipline}
					<Button variant="outline" size="sm">{discipline}</Button>
				{/each}
			{/each}
		</div>
		<div class="flex gap-2">
			{#each mentor.Category as category}
				{#each category.expertise as expertise}
					<Button variant="outline" size="sm">{expertise}</Button>
				{/each}
			{/each}
		</div>
	</div>
</section>

<!-- Right Span -->
<section class="col-span-4"></section>
