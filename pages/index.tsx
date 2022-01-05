import { GetServerSideProps } from 'next/types';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import ProductList from '@/components/Product/ProductList';
import storeFront from '@/libs/storeFront';

const Home = ({ products, collections, user }) => {
    console.log(products);
    return (
        <DefaultLayout>
            <ProductList products={products} />
        </DefaultLayout>
    );
};

export default Home;

const gql = String.raw;
const query = gql`
    {
        products(first: 8) {
            edges {
                node {
                    title
                    handle
                    tags
                    priceRange {
                        minVariantPrice {
                            amount
                            currencyCode
                        }
                    }
                    featuredImage {
                        altText
                        url
                    }
                }
            }
        }
        collections(first: 3) {
            edges {
                node {
                    id
                    title
                    handle
                    description
                    image {
                        altText
                        url
                    }
                }
            }
        }
    }
`;

export const getStaticProps: GetServerSideProps = async ({ req, res }) => {
    const {
        data: { products, collections },
    } = await storeFront(query);
    return {
        props: {
            products: products.edges.map((edge) => edge.node),
            collections: collections.edges.map((edge) => edge.node),
        },
        revalidate: 10,
    };
};
