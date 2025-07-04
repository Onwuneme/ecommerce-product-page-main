import { createContext, useState } from "react";
import "./App.css";
import Nav from "./Component/Nav";
import Product from "./Component/Product";
export const Context = createContext();
const items = {
  name: "Fall Limited Edition Sneakers",
  image: [
    "./src/assets/image-product-1.jpg",
    "./src/assets/image-product-2.jpg",
    "./src/assets/image-product-3.jpg",
    "./src/assets/image-product-4.jpg",
  ],
  thumbnail: [
    "./src/assets/image-product-1-thumbnail.jpg",
    "./src/assets/image-product-2-thumbnail.jpg",
    "./src/assets/image-product-3-thumbnail.jpg",
    "./src/assets/image-product-4-thumbnail.jpg",
  ],
  price: 250.0,
};

function App() {
  const [openCart, setOpenCart] = useState(false);
  const [addToCart, setAddToCart] = useState({ quantity: 0 });
  const [product] = useState(items);

  return (
    <>
      <div>
        <Context.Provider
          value={{ product, openCart, setOpenCart, addToCart, setAddToCart }}
        >
          <Nav />
          <Product />
        </Context.Provider>
      </div>
    </>
  );
}

export default App;
