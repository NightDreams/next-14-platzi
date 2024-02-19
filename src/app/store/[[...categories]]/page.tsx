type CategoryProps = {
	params: {
		categories: string[];
	};
	searchParams?: string;
};

export default function Category({ params }: CategoryProps) {
	console.log('🚀 ~ Category ~ params:', params);

	const { categories } = params;
	console.log('🚀 ~ Category ~ categories:', categories);

	return <h1>categoria dinamica: {categories}</h1>;
}