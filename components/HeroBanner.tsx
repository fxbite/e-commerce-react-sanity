import React from 'react'
import Link from 'next/link'
import { urlFor} from '../lib/client'

interface Props {
    heroBanner: {
        smallText: string | undefined | null
        midText: string | undefined | null
        buttonText: string | undefined | null
        largeText1: string | undefined | null
        image: string | undefined
        product: string | undefined | null
        desc: string | undefined | null
    }
}

const HeroBanner: React.FC<Props> = ({heroBanner: {smallText, midText, largeText1, image, product, buttonText, desc}}) => {
  return (
    <div className='hero-banner-container'>
        <div>
            <p className='beats-solo'>{smallText}</p>
            <h3>{midText}</h3>
            <h1>{largeText1}</h1>
            <img src={urlFor(image!).url()} alt='headphones' className='hero-banner-image'/>

            <div>
                <Link href={`/product/${product}`}>
                    <button type='button'>{buttonText}</button>
                </Link>
            </div>

            <div className='desc'>
                <h5>Description</h5>
                <p>{desc}</p>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner