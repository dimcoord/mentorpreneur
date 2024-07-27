<script lang="ts">
	import type { PageData } from './$types';


	export let data: PageData;
</script>

<form method="POST">
	<label>
		email:
		<input
			name="email"
			type="email"
			autocomplete="off"
		/>
	</label>
	<label>
		password:
		<input
			name="password"
			type="password"
			autocomplete="off"
		/>
	</label>
	<label>
		name:
		<input
			name="name"
			type="name"
			autocomplete="off"
		/>
	</label>
	<label>
		bio:
		<input
			name="bio"
			type="text"
			autocomplete="off"
		/>
	</label>
	<button>Submit</button>
</form>