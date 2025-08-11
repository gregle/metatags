import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { tags } from '$lib/data/tags';

export const load = (({ params }) => {
	const tag = tags[params.slug as keyof typeof tags];
	if (tag) return tag;
	redirect(301, '/');
}) satisfies PageServerLoad;
