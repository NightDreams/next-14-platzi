import Link from 'next/link';
import styles from './Header.module.css';
import { cookies } from 'next/headers';
interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
	const cookiesStore = cookies();
	const token = cookiesStore.get('accessToken')?.value;

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
					<li>{token ? <p>Hola!</p> : <Link href="/login">Login</Link>}</li>
				</ul>
			</nav>
		</header>
	);
};
