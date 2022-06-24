import SanityClientConstructor from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = SanityClientConstructor({
    projectId: 'a6jo1v83',
    dataset: 'production',
    apiVersion: '2022-06-23',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN!
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: SanityImageSource) => builder.image(source)
