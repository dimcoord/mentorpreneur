<script lang="ts">
	import type { PageData } from './$types';
	import { User } from 'lucide-svelte';

	import { Button } from '$lib/components/ui/button';

	export let data: PageData;
	let { mentor, reviewers } = data;
	let currentJob = mentor.Experience.at(-1);
	let formatter = Intl.DateTimeFormat('us-US', { month: 'long', year: 'numeric' }).format;
</script>

<!-- Left Section -->
<section class="col-span-7 mt-4">
	<div class="flex gap-4 items-center">
		<User class="size-36" />
		<div class="w-[80%]">
			<h1 class="font-bold">{mentor.User?.name ?? mentor.username}</h1>
			<p>{currentJob?.position ?? 'N/A'} @ {currentJob?.company ?? 'N/A'}</p>
		</div>
	</div>
	<h2 class="mt-4 mb-2 text-2xl font-bold">About</h2>
	<p>{mentor.bio}</p>
	<h2 class="mt-4 mb-2 text-2xl font-bold">Expertise</h2>
	<div class="w-full grid grid-rows-2 gap-2">
		<div class="flex gap-2">
			{#each mentor.Category as category}
				<Button variant="outline" size="sm">{category.discipline}</Button>
			{/each}
		</div>
		<div class="flex gap-2">
			{#each mentor.Category as category}
				<Button variant="outline" size="sm">{category.expertise}</Button>
			{/each}
		</div>
	</div>
	<h2 class="mt-4 mb-2 text-2xl font-bold">Experience</h2>
	<div class="grid grid-cols-2 gap-4 items-center">
		{#each mentor.Experience as exp}
			<div class="border border-black p-4">
				<p>{exp.position}</p>
				<p>{exp.company}</p>
			</div>
			<p>{formatter(exp.startDate ?? new Date(0))} - {formatter(exp.endDate ?? new Date(0))}</p>
		{/each}
	</div>
</section>

<!-- Right Span -->
<section class="col-span-5 mt-4 space-y-8">
	<div class="border border-black p-4 space-y-2">
		<h2 class="text-2xl font-bold">Available Sessions</h2>
		<p>Date</p>
		<div class="grid grid-cols-3 gap-4">
			<Button>a</Button>
			<Button>b</Button>
			<Button>c</Button>
			<Button>d</Button>
			<Button>e</Button>
			<Button>f</Button>
		</div>
		<p>Time</p>
		<div class="grid grid-cols-3 gap-4">
			<Button>a</Button>
			<Button>b</Button>
			<Button>c</Button>
			<Button>d</Button>
		</div>
		<Button variant="ghost" class="w-full">Book A Session</Button>
	</div>
	<div class="border border-black p-4 space-y-2">
		<h2 class="text-2xl font-bold">Reviews</h2>
		{#each mentor.Review as review}
			<div class="space-y-2">
				<div class="flex gap-4">
					<User />
					<p>{reviewers.find((r) => r.id === review.reviewerId)?.name ?? 'N/A'}</p>
				</div>
				<p class="font-thin"><i>" {review.messsage} "</i></p>
			</div>
		{/each}
	</div>
</section>
