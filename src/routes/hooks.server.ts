import prisma from '$lib/prisma';
import { error, type Handle } from '@sveltejs/kit';

export const handle: Handle = async function ({ event, resolve }) {
	let {
		route: { id },
		locals: { user }
	} = event;
	const isProtectedRoute: boolean = Boolean(id) && id !== '/' && !id?.startsWith('/mentors');
	if (isProtectedRoute && !user) {
		error(403, 'User not authenticated. Please login first');
	}
	return await resolve(event);
};
