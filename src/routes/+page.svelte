<script lang="ts">
	import { Button } from '$lib/components/ui/button';
</script>

<div class="col-span-12 h-[90dvh] flex flex-col justify-between">
	<div class="min-h-[75dvh] flex flex-col justify-center gap-4">
		<h1 class="font-bold text-4xl md:text-6xl">Mentorpreneur</h1>
		<p class="text-lg md:text-2xl">Connect. Mentor. Grow.</p>
	</div>
	<div class="flex flex-col items-start gap-2">
		<Button href="/mentors" class="md:text-lg md:px-8 md:py-6 w-fit">Find Mentors</Button>
		<Button variant="link" size="sm" href="/login" class="col-start-1 px-2">I'm a mentor</Button>
	</div>
</div>
