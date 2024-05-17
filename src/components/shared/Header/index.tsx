import { validateAccessToken } from '@/utils/auth/validateAccessToken';
import Link from 'next/link';
import styles from './Header.module.css';
interface HeaderProps {}

export const Header = async ({}: HeaderProps) => {
	const customer = await validateAccessToken();

	return (
		<header>
			<nav>
				<ul className={styles.Header__list}>
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/store">Store</Link>
					</li>
					<li>
						{customer?.firstName ? (
							<p>Hola! {customer.firstName}</p>
						) : (
							<Link href="/login">Login</Link>
						)}
					</li>
				</ul>
			</nav>
		</header>
	);
};
