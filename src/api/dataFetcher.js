import { client } from '../lib/sanity';

export async function fetchProducts() {
  const productsQuery = `*[_type == "product"]`;
  return await client.fetch(productsQuery);
}

export async function fetchOrderId() {
  const orderIdQuery = `*[_type == "order"] | order(orderId desc) [0] {
    orderId
  }
  `;
  return await client.fetch(orderIdQuery);
}

export async function fetchLatestOrder() {
  const latestOrderQuery = `*[_type == "order"] | order(_createdAt desc) [0]`;
  return await client.fetch(latestOrderQuery);
}