type CategoryProps = {
	params: {
		categories: string[];
	};
	searchParams?: string;
};

export default function Category({ params }: CategoryProps) {
	const { categories } = params;
	throw new Error('Error: Boom');

	return <h1>categoria dinamica: {categories}</h1>;
}
