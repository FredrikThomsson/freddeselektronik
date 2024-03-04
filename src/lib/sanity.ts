import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient ({
    projectId: '0zsmvis5',
    dataset: 'production',
    apiVersion: '2024-02-21',
    useCdn: true,
});

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source);
}