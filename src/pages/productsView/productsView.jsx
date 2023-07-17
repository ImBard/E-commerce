import { useEffect, useState } from "react";
import { FilterBar } from "../../components/filterBar/filterBar";
import { Header } from "../../components/header/header";
import { ProductCard } from "../../components/products/productCard";
import { ContainerList, MainList } from "./style";
import productServices from "../../services/products";

export function ProductsView() {
  const [products, setProducts] = useState([{}]);

  useEffect(() => {
    getProducts();
  }, [])

  async function getProducts() {
    productServices.getAllProducts()
    .then((response) => {
      setProducts(response.data);
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    })
  }


  // const produtos = [
  //   {img: "https://github.com/ImBard/E-commerce/blob/main/src/assets/imgModels/prada.jpg?raw=true", name: "Moletom", price: "189"},
  //   {img: "https://github.com/ImBard/E-commerce/blob/main/src/assets/imgModels/prada1.jpg?raw=true", name: "Vestido", price: "700"},
  //   {img: "https://github.com/ImBard/E-commerce/blob/main/src/assets/imgModels/prada2.jpg?raw=true", name: "Bolsa", price: "250"},
  //   {img: "https://raw.githubusercontent.com/ImBard/E-commerce/main/src/assets/imgModels/prada3.webp", name: "Conjunto Social", price: "75"},
  // ]

  return (

    <>
      <Header/>

      <MainList>
        <FilterBar/>

        <ContainerList>
          {products?.map((item) => {
            if (item.imagesEntity && item.imagesEntity.length > 0)
            return (
              <ProductCard
                key={item.id}
                code={item.code}
                src={`http://localhost:3000/static/product/`+item.imagesEntity[0].path}
                name={item.name}
                price={item.price}
                showDescs={true}
              />
            )
          })}
          
        </ContainerList>

      </MainList>
    </>
  );
}