import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load = (async ({ locals: { user }, cookies }) => {
	const profile = await prisma.user.findUnique({
		where: {
			email: cookies.get('user')
		}
	})
	if (!profile) error(404, 'User Not Found')
	const mentor = await prisma.mentor.findUnique({
		where: {
			username: profile.mentorUsername

		}
	})
	console.log(mentor, cookies.get('user'))
	
	return { profile };
}) satisfies PageServerLoad;
