import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();
		const password = data.get('password');
		const user = await prisma.user.findUnique({
			where: {
				email: data.get('email') as string
			}
		});
		console.log(user);
		if (!user) {
			console.log('user not found');
			error(404, 'User Not Found');
		}
		if (password !== user?.password) {
			console.log('wrong password!');
			error(404, 'Incorrect Password');
		}
		cookies.set('user', user.email, { path: '/' });
		console.log('logged in!');
	}
};
