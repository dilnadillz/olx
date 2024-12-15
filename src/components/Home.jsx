import { Link } from "react-router-dom"

const Home = ({products}) => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
         <Link to="/details" key={product.id} state={{data:product}}> 
         <div  className="border p-4 rounded-lg shadow-lg">
            <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-4" />
            <h2 className="text-lg font-bold mb-2">{product.title}</h2>
            <p className="text-gray-700 mb-4">${product.price}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
          </div></Link>
        ))}
      </div>
    </div>
  )
}

export default Home
