import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load = (async ({ params }) => {
	let { mentorUsername } = params;
	const mentor = await prisma.mentor.findUnique({
		where: { username: mentorUsername }
	});
	if (!mentor) error(404, 'Mentor Not Found');
	return {
		mentor
	};
}) satisfies PageServerLoad;
