<script lang="ts">
	import type { PageData } from './$types';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';

	export let data: PageData;
	let { mentors } = data;
</script>

<h1 class="col-span-12 text-5xl font-bold">Mentorpreneur</h1>
<form method="get" class="flex gap-2 mt-8 col-span-6">
	<Input name="search" class="rounded-2xl" placeholder="Search Mentors..." />
	<Button variant="outline" type="submit">Search</Button>
</form>

<code class="col-start-1 col-span-12">
	{JSON.stringify(mentors, null, 4)}
</code>
