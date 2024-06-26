import { validateAccessToken } from '@/utils/auth/validateAccessToken';
import Link from 'next/link';
import styles from './Header.module.sass';
interface HeaderProps {}

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
					<p>Hola! {customer.firstName}</p>
				) : (
					<Link href="/login">Login</Link>
				)}
			</div>
		</header>
	);
};
