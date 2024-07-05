import { getCustomerOrders } from '@/services/shopify/graphql/customer';
import React from 'react';

export default async function page() {
	const ordersInfo = await getCustomerOrders();
	return (
		<div>
			<section>
				<h2>Orders</h2>
				{ordersInfo.orders?.map(order => (
					<p key={order.orderNumber}>{order.orderNumber}</p>
				))}
			</section>
		</div>
	);
}
