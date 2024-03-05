import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

// components
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import '../sass/globals.sass';
import { Hero } from '@/components/Home/Hero';
import { Description } from '@/components/Home/Description';

const roboto = Roboto({
	weight: ['100', '300', '500', '700'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Future World',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={roboto.className}>
				<Header />
				<Hero />
				<Description />
				{children}
				<Footer />
			</body>
		</html>
	);
}
