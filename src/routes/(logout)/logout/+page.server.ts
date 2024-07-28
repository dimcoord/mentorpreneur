import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ cookies }) => {
	cookies.delete('user', { path: '/' });
	redirect(303, '/');
}) satisfies PageServerLoad;
