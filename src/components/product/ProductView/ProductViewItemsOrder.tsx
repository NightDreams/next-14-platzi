'use client';
import { SyntheticEvent, useState } from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import styles from './ProductViewItemsOrder.module.sass';
import { useShoppingCart } from '@/hooks/useShoppingCart';

interface ProductViewItemsOrderProps {
	maxQuantity: number;
	product: ProductType;
}

export const ProductViewItemsOrder = ({
	maxQuantity,
	product,
}: ProductViewItemsOrderProps) => {
	const [counter, setCounter] = useState(1);
	const { addToCart } = useShoppingCart();
	const { title, id, price, quantity } = product;

	const handleAddToCart = (event: SyntheticEvent) => {
		event.preventDefault();
		addToCart({
			title,
			id,
			price,
			quantity,
			image: product.image,
		});
	};
	const handleSubmit = (event: SyntheticEvent) => {
		event.preventDefault();
	};

	const handleSubtract = (event: SyntheticEvent) => {
		event.preventDefault();
		if (counter === 1) return;
		setCounter(counter - 1);
	};

	const handleAdd = (event: SyntheticEvent) => {
		event.preventDefault();
		if (counter === maxQuantity) return;
		setCounter(counter + 1);
	};

	return (
		<div className={styles.ProductViewItemsOrder}>
			<div className={styles.ProductViewItemsOrder__itemsCount}>
				<button onClick={handleSubtract}>-</button>
				<p>{counter}</p>
				<button onClick={handleAdd}>+</button>
			</div>
			<form
				onSubmit={handleAddToCart}
				className={styles.ProductViewItemsOrder__form}
			>
				<button className={styles.ProductViewItemsOrder__submit} type="submit">
					<FaCartShopping />
					<span>Add to cart</span>
				</button>
			</form>
		</div>
	);
};
