<script lang="ts">
	import type { PageData } from './$types';


	export let data: PageData;
</script>

<div class="col-span-12 text-center flex flex-col justify-center items-center gap-6 mt-16">
	<h1 class="text-6xl font-bold text-center">Mentorpreneur</h1>
	<p class="text-3xl text-center mb-4">Connect. Mentor. Grow.</p>
	<form method="POST" class="flex flex-col gap-4">
		<input
			class="w-80 h-8 text-center bg-white border-2 border-black rounded-full placeholder:text-black"
			name="name"
			type="text"
			placeholder="full name"
			required
		/>
		<input
			class="w-80 h-8 text-center bg-white border-2 border-black rounded-full placeholder:text-black"
			name="email"
			type="email"
			placeholder="email"
			required
		/>
		<input
			class="w-80 h-8 text-center bg-white border-2 border-black rounded-full placeholder:text-black"
			name="password"
			type="password"
			placeholder="password"
			required
		/>
		<!-- <input
			class="w-80 h-8 text-center bg-white border-2 border-black rounded-full placeholder:text-black"
			name="confirm-password"
			type="password"
			placeholder="confirm password"
			required
		/> -->
		<div class="flex gap-4 justify-center items-center">
			<input class="size-4" name="isMentor" type="checkbox" value="true"><label for="isMentor">Are you registering as a mentor?</label>
		</div>
		<button type="submit" class="mt-4 py-2 px-4 bg-black text-white rounded-full">Register</button>
	</form>
</div>