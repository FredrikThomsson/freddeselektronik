import { client } from '../lib/sanity';

export async function fetchProducts() {
  const query = `*[_type == "product"]`;
  return await client.fetch(query);
}