import Product from './Product';

export default function ProductList({
    products,
    title = 'Hot products in the store',
}: {
    products: any;
    title?: string;
}) {
    return (
        <div className='bg-white'>
            <div className='max-w-2xl px-4 pt-6 pb-16 mx-auto sm:px-6 lg:max-w-7xl lg:px-8'>
                <h2 className='text-xl font-bold text-gray-900'>{title}</h2>
                <div className='grid grid-cols-1 mt-8 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8'>
                    {products.map((product: any) => (
                        <Product product={product} key={product.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}
