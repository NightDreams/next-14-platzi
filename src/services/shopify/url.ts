import { env } from '@/config/env';

const Api_2023_10 = 'admin/api/2023-10';

export const shopifyUrls = {
	products: {
		all: `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`,
		// mainProducts: `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/275045580898/products.json`,
		mainProducts: `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/collections/275045580898/products.json`,
	},
	collections: {
		all: `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/smart_collections.json`,
		products: (id: string) =>
			`${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/collections/${id}/products.json`,
	},
};
