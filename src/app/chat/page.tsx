import { Chat } from '@/components/chat';
import { getProducts } from '@/services/shopify/products';
import { createAgent } from '@/utils/chatbot/createAgent';

export default async function ChatPage() {
	const products = await getProducts();
	const productTitles = products.map(product => product.title);
	const flatProductTitles = productTitles.join('\n');
	const agent = createAgent(flatProductTitles);

	return (
		<>
			<Chat agent={agent} />
		</>
	);
}
