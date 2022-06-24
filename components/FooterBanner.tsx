import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

interface Props {
  footerBanner: {
    discount: string | undefined | null
    largeText1: string | undefined | null
    largeText2: string | undefined | null
    saleTime: string | undefined | null
    smallText: string | undefined | null
    midText: string | undefined | null
    product: string | undefined |  null
    buttonText: string | undefined | null
    image: string | undefined
  }
}

const FooterBanner: React.FC<Props> = ({footerBanner: {
  discount, largeText1, largeText2, saleTime, smallText, midText, product, buttonText, image}}) => {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className='right'>

        </div>
      </div>
    </div>
  )
}

export default FooterBanner