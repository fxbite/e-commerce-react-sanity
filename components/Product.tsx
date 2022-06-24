import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

interface Props {
  product: {
    image: string | undefined
    name: string | undefined | null
    slug: {
      current: string
    }
    price: string | undefined | null
  }
}

const Product: React.FC<Props> = ({product: {image, name, slug, price}}) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='product-card'>
          <img src={urlFor(image! && image[0]!).url()} 
          alt="product" 
          width={250}
          height={250}
          className='product-image'
          />
          <p className='product-name'>{name}</p>
          <p className='product-price'>${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product