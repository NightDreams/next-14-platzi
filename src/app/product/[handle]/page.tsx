import { ProductView } from '@/components/product/ProductView';
import { getProducts } from '@/services/shopify/products';
import { redirect } from 'next/navigation';
interface ProductPageProps {
	searchParams: {
		id: string;
	};
}
export default async function ProductPage({ searchParams }: ProductPageProps) {
	const id = searchParams.id;
	const products = await getProducts(id);
	const product = products[0];

	if (!id) {
		redirect('/');
	}

	console.log('searchParams', id);
	return <ProductView product={product} />;
}
