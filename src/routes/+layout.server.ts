import prisma from '$lib/prisma';
import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals: { user }, cookies }) => {
	const email = cookies.get('user');
	if (email && !user) {
		let foundUser = await prisma.user.findUnique({
			where: { email }
		});

		if (!foundUser) error(404, 'User Not Found');
		user = {
			id: foundUser.id,
			email: foundUser.email,
			isMentor: Boolean(foundUser.mentorUsername),
			name: foundUser.name
		};
		// user = foundUser;
	}
	return { user };
}) satisfies LayoutServerLoad;
