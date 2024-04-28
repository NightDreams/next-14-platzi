import { env } from '@/config/env';
import { revalidateTag } from 'next/cache';

export async function POST(request: Request) {
	const body = await request.json();
	const { tag, token } = body;
	// case - undefined tag or token
	if (!tag || !token) {
		return Response.json({ error: 'Missing tag or token' }, { status: 400 });
	}
	// case - roken incorrect
	if (token !== env.CACHE_TOKEN) {
		return Response.json({ error: 'Invalid token' }, { status: 401 });
	}

	revalidateTag(tag);

	return Response.json({ success: true });
}
