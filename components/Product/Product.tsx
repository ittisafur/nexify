import React from 'react';
import Link from 'next/link';

const Product = ({ product }) => {
    return (
        <div>
            <div className='relative'>
                <div className='relative w-full overflow-hidden rounded-lg h-72'>
                    <a className='bg-red-400 '>
                        <img
                            src={product.featuredImage.url}
                            alt={product.featuredImage.altText}
                            className='object-cover object-center w-full h-full'
                        />
                    </a>
                </div>
                <div className='relative mt-4'>
                    <h3 className='text-sm font-medium text-gray-900'>
                        <Link href='/products/[handle]' as={`/products/${product.handle}`}>
                            {product.title}
                        </Link>
                    </h3>
                    <p className='mt-1 text-sm text-gray-500'>{product.tags.join(', ')}</p>
                </div>
                <Link href='/products/[handle]' as={`/products/${product.handle}`}>
                    <a>
                        <div className='absolute inset-x-0 top-0 flex items-end justify-end p-4 overflow-hidden rounded-lg h-72'>
                            <div
                                aria-hidden='true'
                                className='absolute inset-x-0 bottom-0 opacity-50 h-36 bg-gradient-to-t from-black'
                            />
                            <p className='relative text-lg font-semibold text-white'>
                                {product.priceRange.minVariantPrice.currencyCode}{' '}
                                {product.priceRange.minVariantPrice.amount}
                            </p>
                        </div>
                    </a>
                </Link>
            </div>
            {/* <div className="mt-6">
        <button className="relative flex items-center justify-center w-full px-8 py-2 text-sm font-medium text-gray-900 bg-gray-100 border border-transparent rounded-md hover:bg-gray-200">
          Add to bag<span className="sr-only">, {product.title}</span>
        </button>
      </div> */}
        </div>
    );
};

export default Product;
