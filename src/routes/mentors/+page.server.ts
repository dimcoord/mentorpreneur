import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const mentors = await prisma.mentor.findMany({
		include: {
			User: true,
			Category: true,
			Experience: true
		}
	});
	const categories = await prisma.category.findMany();
	const disciplines = Array.from(new Set(categories.map((c) => c.discipline)));
	const expertises = categories.map((c) => c.expertise);
	return {
		mentors,
		disciplines,
		expertises
	};
}) satisfies PageServerLoad;
