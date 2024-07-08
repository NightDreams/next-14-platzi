import { validateAccessToken } from '@/utils/auth/validateAccessToken';

export default async function MyAccountPage() {
	const customer = await validateAccessToken();

	return (
		<div>
			<h2>Your info</h2>
			<section>
				<p>Nombre: {customer?.firstName}</p>
				<p>Email: {customer?.email}</p>
			</section>
		</div>
	);
}
