<script lang="ts">
	import type { PageData } from './$types';
	import { User } from 'lucide-svelte';

	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';

	export let data: PageData;
	let { mentors, disciplines, expertises } = data;
</script>

<h1 class="col-span-12 text-5xl font-bold">Mentorpreneur</h1>

<form method="get" class="flex gap-2 mt-8 mb-4 col-span-12 w-2/3">
	<Input name="search" class="rounded-2xl" placeholder="Search Mentors..." />
	<Button variant="outline" type="submit">Search</Button>
</form>

<div class="mb-4 grid grid-col-1 col-span-12 gap-2">
	<div class="flex gap-2 items-baseline">
		<p>Discipline:</p>
		{#each disciplines as discipline}
			<Button size="sm" variant="outline">{discipline}</Button>
		{/each}
	</div>
	<div class="flex gap-2 items-baseline">
		<p>Expertise:</p>
		{#each expertises as expertise}
			<Button size="sm" variant="outline">{expertise}</Button>
		{/each}
	</div>
</div>

{#each mentors as mentor}
	<a href={`/mentors/${mentor.username}`} class="col-span-3 hover:shadow-lg">
		<Card.Root>
			<Card.Header></Card.Header>
			<Card.Content>
				<User class="w-full text-center my-2 size-24" />
				<p class="text-lg font-semibold">{mentor.User?.name ?? 'N/A'}</p>
				<p>{mentor.Experience.at(-1)?.position} @ {mentor.Experience.at(-1)?.company}</p>
			</Card.Content>
			<Card.Footer class="grid grid-cols-1 gap-2">
				<div class="flex gap-2">
					{#each mentor.Category as category}
						<Button size="sm" class="px-3 py-0">{category.discipline}</Button>
					{/each}
				</div>
				<div class="flex gap-2">
					{#each mentor.Category as category}
						<Button size="sm" class="px-3 py-0">{category.expertise}</Button>
					{/each}
				</div>
			</Card.Footer>
		</Card.Root>
	</a>
{/each}
