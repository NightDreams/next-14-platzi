import { ProductsWrapper } from '@/components/store/ProductsWrapper';
import { getProducts } from '@/services/shopify';

type CategoryProps = {
	params: {
		categories: string[];
	};
	searchParams?: string;
};

export default async function Category({ params }: CategoryProps) {
	const products = await getProducts();
	return <ProductsWrapper products={products} />;
}
