import type { PageServerLoad, Actions } from './$types';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

/** @type {import('./$types').Actions} */
export const actions = {
	register: async ({ request }) => {
		const data = await request.formData();
		// if(data.get('password') !== data.get('confirm-password')){
		// 	throw console.error();
		// }
		await prisma.user.create({
			data: {
				email: data.get('email') as string,
				password: data.get('password') as string,
				name: data.get('name') as string,
				bio: data.get('bio') as string
				//   Experience: {
				// 	create: {
				// 		company: data.get('experience-company') as string,
				// 		position: data.get('experience-position') as string
				// 	}
				//   },
				//   Category: {
				// 	create: {
				// 		industry: [data.get('industry') as string],
				// 		discipline: [data.get('discipline') as string],
				// 		expertise: [data.get('expertise') as string]
				// 	}
				//   },
				//   Schedule: {
				// 	create: {
				// 		topic: data.get('schedule-topic') as string
				// 	}
				//   }
			}
		});
	}
};
