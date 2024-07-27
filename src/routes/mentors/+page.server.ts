import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const mentors = await prisma.user.findMany({
		where: {
			email: 'test3@example.com'
		},
		include: {
			Category: true
		}
	});
	return {
		mentors
	};
}) satisfies PageServerLoad;
