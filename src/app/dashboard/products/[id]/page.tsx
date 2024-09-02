import axios from "axios";

interface Product {
  _id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  desc: string;
}

const fetchProduct = async (id: string) => {
  console.log("id::: ", id);
  try {
    const response = await axios.get(
      `http://localhost:3000/api/products/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching the product data:", error);
  }
};

const SingleProductPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const productData = await fetchProduct(id);

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto bg-cyan-200 h-full p-6">
      <div className="bg-white items-center content-center shadow-md rounded-lg p-4 mb-4">
        <div className="text-gray-700 text-lg font-semibold mb-2">
          Title: <span className="font-normal">{productData.name}</span>
        </div>
      </div>
      <div className="bg-white items-center content-center shadow-md rounded-lg p-4 mb-4">
        <div className="text-gray-700 text-lg font-semibold mb-2">
          Category: <span className="font-normal">{productData.category}</span>
        </div>
      </div>
      <div className="bg-white items-center content-center shadow-md rounded-lg p-4 mb-4">
        <div className="text-gray-700 text-lg font-semibold mb-2">
          Price: <span className="font-normal">{productData.price}</span>
        </div>
      </div>
      <div className="bg-white items-center content-center shadow-md rounded-lg p-4 mb-4">
        <div className="text-gray-700 text-lg font-semibold mb-2">
          Stock: <span className="font-normal">{productData.stock}</span>
        </div>
      </div>

      <div className="bg-white items-center content-center shadow-md rounded-lg p-4 mb-4">
        <div className="text-gray-700 text-lg font-semibold mb-2">
          Desc:
          <span className="font-normal">{productData.desc}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
