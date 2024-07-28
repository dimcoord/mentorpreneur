// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user?: {
				id: string;
				email: string;
				isMentor: boolean;
				name: string | null;
				categories: {
					id: number;
					industry: string[];
					discipline: string[];
					expertise: string[];
					userId: string | null;
				}[];
				experiences: {
					id: number;
					userId: string | null;
					company: string | null;
					position: string | null;
					startDate: Date | null;
					endDate: Date | null;
				}[];
			};
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
