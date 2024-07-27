<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="col-span-12 text-center flex flex-col justify-center items-center gap-6 mt-24">
	<h1 class="text-6xl font-bold text-center">Mentorpreneur</h1>
	<p class="text-3xl text-center mb-4">Connect. Mentor. Grow.</p>
	<form method="POST" class="flex flex-col gap-4">
		<input
			class="w-80 h-8 text-center bg-white border-2 border-black rounded-full placeholder:text-black"
			name="email"
			type="email"
			placeholder="email"
		/>
		<input
			class="w-80 h-8 text-center bg-white border-2 border-black rounded-full placeholder:text-black"
			name="password"
			type="password"
			placeholder="password"
		/>
	</form>
	<button class="mt-4 py-2 px-4 bg-black text-white rounded-full">Login</button>
</div>


