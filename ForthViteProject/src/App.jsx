// import { useState } from 'react';

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [multiply, setMultiply] = useState(2);
//   const [divider, setDivide] = useState(1000);
//   const [string, setString] = useState('banana');
//   const [array,setArray]= useState([])


//   return (
//     <div>
//       <p>count:{count}</p>
//       <p>Multiply:{multiply}</p>
//       <p>Divide:{divider}</p>
//       <p>String:{string}</p>
//       <p>Array:{array}</p>
//       <button onClick={() => setCount(prev => prev +1)}>Increment</button>
//       <button onClick={() => setCount(prev => prev -1)}>Decrement</button>
//       <button onClick ={() => setCount(0)}>Reset</button>
//       <button onClick={() => setCount(prev => prev * 2)}>Multiply</button>
//       <button onClick={() => setCount(prev => prev / 2)}>Divide</button>
//       <button onClick={() =>setString('Urja Tech')}>String</button>
//       <button onClick={() => setArray(prev => [...prev, 'apple'])}>Array</button>
//       <button onClick={() => setStudent}></button>

//       <button onClick={console.log,('Button is clicked')}> Console Clicked</button>
//     </div>  
//   );
// };

// export default App;  

import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);

  const limit = 10;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const url = search
          ? `https://dummyjson.com/products/search?q=${search}`
          : `https://dummyjson.com/products?limit=${limit}&skip=${page * limit}`;

        const res = await fetch(url);

        if (!res.ok) {
          throw new Error("Something went wrong");
        }

        const data = await res.json();
        console.log(data)
        setProducts(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [search, page]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Store</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(0);
        }}
      />

      {/* States */}
      {loading && <p>The product are loading</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Products */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
        {products.map((p) => (
          <div key={p.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
            <img src={p.thumbnail} alt={p.title} width="100%" />
            <h3>{p.title}</h3>
            <p>Rating: {p.rating}</p>
            <p>Brand name: {p.brand}</p>
            <p>${p.price}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {!search && (
        <div style={{ marginTop: "20px" }}>
          <button onClick={() => setPage((p) => p - 1)} disabled={page === 0}>
            Prev
          </button>

          <span> Page {page + 1} </span>

          <button onClick={() => setPage((p) => p + 1)}>Next</button>
        </div>
      )}
    </div>
  );
}

export default App;