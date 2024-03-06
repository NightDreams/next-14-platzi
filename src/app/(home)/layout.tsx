import { Description } from '@/components/Home/Description';
import { Hero } from '@/components/Home/Hero';

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<Hero />
			<Description />
			{children}
		</div>
	);
}
