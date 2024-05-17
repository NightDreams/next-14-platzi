import { GraphQLClientSingleton } from '@/graphql';
import { customerAccessTokenCreateMutation } from '@/graphql/mutations/customerAcessTokenCreate';
import { cookies } from 'next/headers';

export interface AccessToken {
	customerAccessTokenCreate: {
		customerAccessToken: CustomerAccessToken;
		customerUserErrors: any[];
	};
}

export interface CustomerAccessTokenCreate {
	customerAccessToken: CustomerAccessToken;
	customerUserErrors: any[];
}

export interface CustomerAccessToken {
	accessToken: string;
	expiresAt: Date;
}

export const createAccessToken = async (email: string, password: string) => {
	const cookiesStore = cookies();
	const graphqlClient = GraphQLClientSingleton.getInstance().getClient();

	// mutation
	const { customerAccessTokenCreate } =
		await graphqlClient.request<AccessToken>(
			customerAccessTokenCreateMutation,
			{
				email: email,
				password: password,
			}
		);

	const { accessToken, expiresAt } =
		customerAccessTokenCreate?.customerAccessToken;

	if (accessToken) {
		cookiesStore.set('accessToken', accessToken, {
			path: '/',
			expires: new Date(expiresAt),
			httpOnly: true,
			sameSite: 'strict',
		});
	}
	return accessToken;
};
