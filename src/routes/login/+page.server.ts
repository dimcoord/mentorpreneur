import type { PageServerLoad } from './$types';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({request}) => {
		const data = await request.formData()
		const password = data.get('password')
		const user = await prisma.user.findUnique({
			where: {
				email: data.get('email') as string,
			}
		})
		console.log(user)
		if (!user) {
			console.log("user not found")
		}
		if (password !== user?.password) {
			console.log("wrong password!")
		}
		console.log('logged in!')
	}
}