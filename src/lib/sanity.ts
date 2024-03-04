import { createClient } from '@sanity/client';


export const client = createClient ({
    projectId: '0zsmvis5',
    dataset: 'production',
    apiVersion: '2024-02-21',
    useCdn: true,
});

