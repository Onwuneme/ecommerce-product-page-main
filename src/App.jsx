import { createContext, useState } from "react";
import img1 from "../public/image-product-1.jpg";
import img2 from "../public/image-product-2.jpg";
import img3 from "../public/image-product-3.jpg";
import img4 from "../public/image-product-4.jpg";
import thumbnail1 from "../public/image-product-1-thumbnail.jpg";
import thumbnail2 from "../public/image-product-2-thumbnail.jpg";
import thumbnail3 from "../public/image-product-3-thumbnail.jpg";
import thumbnail4 from "../public/image-product-4-thumbnail.jpg";
import "./App.css";
import Nav from "./Component/Nav";
import Product from "./Component/Product";
export const Context = createContext();
const items = {
  name: "Fall Limited Edition Sneakers",
  image: [img1, img2, img3, img4],
  thumbnail: [thumbnail1, thumbnail2, thumbnail3, thumbnail4],
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
