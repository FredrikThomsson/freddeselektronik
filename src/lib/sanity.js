import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient ({
    projectId: '0zsmvis5',
    dataset: 'production',
    apiVersion: '2024-02-21',
    token: 'skfiUgvjFxZWFmKIr5z0HoVCRRPqg06u3boBGGeuGSo97cRDsCrxbImKQNdr8Qp3NwrJOjkLC43uw0w36crhnRHmR91Aqno0HRYPSaLGZPiylrO5Pq6JeUb5yq40mN9h1yAqzENS5L29BxAUG1Psko7o4ItlpzxG9DiGOqhMBKw5MkBaqjrE',
    useCdn: true,
});

const builder = imageUrlBuilder(client)

export function urlFor(source) {
    return builder.image(source);
}