import Image from 'next/image';
import styles from './MainProducts.module.sass';

interface MainProductsProps {}

export const MainProducts = async ({}: MainProductsProps) => {
	const reponse = await fetch('http://localhost:3000/api');
	const { products } = await reponse.json();

	return (
		<section className={styles.MainProducts}>
			<h3>✨ New products released!</h3>
			<div className={styles.MainProducts__grid}>
				{products?.map(product => {
					const imageSrc = product.images[0].src;
					return (
						<article key={product.id}>
							<p>{product.title}</p>
							<Image src={imageSrc} fill alt={product.title} loading="eager" />
						</article>
					);
				})}
			</div>

			<h1>MainProducts</h1>
		</section>
	);
};
