import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load = (async ({ params }) => {
	let { mentorUsername } = params;
	const mentor = await prisma.mentor.findUnique({
		where: { username: mentorUsername },
		include: {
			User: true,
			Experience: true,
			Category: true,
			Schedule: true,
			Review: true
		}
	});
	const reviewers = await prisma.user.findMany({
		where: {
			id: { in: mentor?.Review.map((r) => r.reviewerId) }
		}
	});
	if (!mentor) error(404, 'Mentor Not Found');
	return {
		mentor,
		reviewers
	};
}) satisfies PageServerLoad;
