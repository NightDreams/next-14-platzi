'use server';
/// [graphql]
import { GraphQLClientSingleton } from '@/graphql';
import { createCartMutation } from '@/graphql/mutations/createCartMutation';
import { createUserMutation } from '@/graphql/mutations/createUserMutation';
/// [utils]
import { createAccessToken } from '@/utils/auth/createAccessToken';
import { validateAccessToken } from '@/utils/auth/validateAccessToken';
/// [next-apis]
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export interface TCustomerCreate {
	customerCreate: CustomerCreate;
}

export interface CustomerCreate {
	customer: Customer;
	customerUserErrors: CustomerUserError;
}

export interface CustomerUserError {
	code: string;
	field: string;
	message: string;
}

export interface Customer {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	acceptsMarketing: boolean;
}

export const handleCreateUser = async (formData: FormData) => {
	const formDataObject = Object.fromEntries(formData);

	delete formDataObject['password_confirmation'];

	const graphqlClient = GraphQLClientSingleton.getInstance().getClient();

	const variables = {
		input: {
			...formDataObject,
			phone: '+52' + formDataObject.phone,
		},
	};

	const {
		customerCreate,
	}: {
		customerCreate: {
			customer: {
				firstName: string;
				email: string;
			};
		};
	} = await graphqlClient.request(createUserMutation, variables);
	const { customer } = customerCreate;

	if (!customer) {
		await createAccessToken(
			formDataObject.email as string,
			formDataObject.password as string
		);
		redirect('/store');
	}
};

export const handleLogin = async (formData: FormData) => {
	const formDataObject = Object.fromEntries(formData);
	const accesToken = await createAccessToken(
		formDataObject.email as string,
		formDataObject.password as string
	);
	if (accesToken) {
		redirect('/store');
	}
};
export const handleCreateCart = async (items: CartItem[]) => {
	const cookiesStore = cookies();
	const accesToken = cookiesStore.get('accessToken')?.value as string;

	if (!accesToken) redirect('/login');

	const graphqlClient = GraphQLClientSingleton.getInstance().getClient();
	const customer = await validateAccessToken();
	const variables = {
		input: {
			buyerIdentity: {
				customerAccessToken: accesToken,
				email: customer?.email,
			},
			lines: items.map(item => ({
				merchandiseId: item.merchandiseId,
				quantity: item.quantity,
			})),
		},
	};

	const {
		cartCreate,
	}: {
		cartCreate?: {
			cart?: {
				checkoutUrl: string;
			};
		};
	} = await graphqlClient.request(createCartMutation, variables);

	return cartCreate?.cart?.checkoutUrl;
};
