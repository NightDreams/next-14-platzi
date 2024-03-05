'use client';

const getProducts = async () => {
	const response = await fetch(
		`${process.env.SHOPIFY_HOSTNAME}admin/api/2023-10/products.json`,
		{
			headers: new Headers({
				'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY || '',
			}),
		}
	);
	const data = await response.json();
	return data;
};

interface MainProductsProps {}

export const MainProducts = async ({}: MainProductsProps) => {
	const products = await getProducts();
	console.log('🚀 ~ MainProducts ~ products:', products);

	return (
		<section>
			<h1>MainProducts</h1>
		</section>
	);
};
