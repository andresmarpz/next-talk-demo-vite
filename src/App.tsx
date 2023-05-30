import { useQuery } from '@tanstack/react-query';
import { getProducts } from "./lib/get-products";
import ProductItem from "./product";

export default function App() {
  const { isLoading, error, data } = useQuery(['products'], getProducts);

  if (isLoading) return <div>Loading...</div>;

  if (error || !data) return <div>Error: {JSON.stringify(error)}</div>;

  return (
    <main className="container mx-auto mt-20">
      <h1 className="text-3xl font-bold">Products</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.products.map(product => <ProductItem key={product.id} product={product} />)}
      </ul>
    </main>
  )
}
