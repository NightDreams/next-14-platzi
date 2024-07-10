import Image from 'next/image';
import styles from './MainProducts.module.sass';
import { getMainProducts } from '@/services/shopify/products';

interface MainProductsProps {}
interface Tproducts {
	id: string;
	title: string;
	images: {
		src: string;
	}[];
}
export const MainProducts = async ({}: MainProductsProps) => {
	const products = await getMainProducts();

	return (
		<section className={styles.MainProducts}>
			<h3>✨ New products released!</h3>
			<div className={styles.MainProducts__grid}>
				{products?.map((product: Tproducts) => {
					const imageSrc = product.images[0].src;
					return (
						<article key={product.id}>
							<p>{product.title}</p>
							<Image src={imageSrc} fill alt={product.title} loading="eager" />
						</article>
					);
				})}
			</div>
		</section>
	);
};
