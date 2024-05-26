import { ProductsWrapper } from '@/components/store/ProductsWrapper';
import {
	getCollectionProducts,
	getCollections,
} from '@/services/shopify/collections';
import { getProducts } from '@/services/shopify/products';

type CategoryProps = {
	params: {
		categories: string[];
	};
	searchParams?: string;
};

export default async function Category({
	params: { categories },
}: CategoryProps) {
	let products = [];
	const collections = await getCollections();

	if (categories?.length > 0) {
		const selectedCollectionId = collections.find(
			collection => collection.handle === categories[0]
		).id;
		products = await getCollectionProducts(selectedCollectionId);
	} else {
		products = await getProducts();
	}

	return <ProductsWrapper products={products} />;
}
