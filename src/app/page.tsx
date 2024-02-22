// apis
import Image from 'next/image';
// components
import { Hero } from '@/components/Home/Hero';
import { Description } from '@/components/Home/Description';
import { MainProducts } from '@/components/Home/MainProducts';

export default function Home() {
	console.log('Hola mundo pagina de inicio');
	return (
		<main>
			<Hero />
			<Description />
			<MainProducts />
		</main>
	);
}
