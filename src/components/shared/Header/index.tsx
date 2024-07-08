import { validateAccessToken } from '@/utils/auth/validateAccessToken';
import Link from 'next/link';
import styles from './Header.module.sass';
import dynamic from 'next/dynamic';
interface HeaderProps {}

const NoSSRShoppingCart = dynamic(() => import('../ShoppingCart'), {
	ssr: false,
});

// const NoSSRShoppingCart = dynamic(() => import('../ShoppingCart'), { ssr: false })

export const Header = async ({}: HeaderProps) => {
	const customer = await validateAccessToken();

	return (
		<header className={styles.Header}>
			<nav>
				<ul className={styles.Header__list}>
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/store">Store</Link>
					</li>
				</ul>
			</nav>
			<div className={styles.Header__user}>
				{customer?.firstName ? (
					<Link href="/my-account">Hola! {customer.firstName}</Link>
				) : (
					<Link href="/login">Login</Link>
				)}
				<NoSSRShoppingCart />
			</div>
		</header>
	);
};
