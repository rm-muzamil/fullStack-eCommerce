import { useNavigate } from "react-router-dom";

export default function ProductCard({ products }) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/product/${5}`)}>
      {products.map((product) => (
        <div key={product.id} className="group relative max-w-[15rem]">
          <img
            alt={product.imageAlt}
            src={product.thumbnail}
            className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
          />
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700">
                <a href={product.href}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.title}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.color}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
