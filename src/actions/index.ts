'use server';
import { GraphQLClientSingleton } from '@/graphql';
import { createUserMutation } from '@/graphql/mutations/createUserMutation';

import { createAccessToken } from '@/utils/auth/createAccessToken';
import { Enum } from 'graphql-request/alpha/schema';
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

	const { customerCreate } = await graphqlClient.request<TCustomerCreate>(
		createUserMutation,
		variables
	);
	// log data
	const { customerUserErrors, customer } = customerCreate;
	if (!customer) {
		await createAccessToken(
			formDataObject.email as string,
			formDataObject.password as string
		);
		redirect('/store');
	}
};
