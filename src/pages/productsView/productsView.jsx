import { FilterBar } from "../../components/filterBar/filterBar";
import { Header } from "../../components/header/header";
import { ProductCard } from "../../components/products/productCard";
import { ContainerList, MainList } from "./style";

export function ProductsView() {

  const produtos = [
    {img: "https://github.com/ImBard/E-commerce/blob/main/src/assets/imgModels/prada.jpg?raw=true", name: "Moletom", price: "189"},
    {img: "https://github.com/ImBard/E-commerce/blob/main/src/assets/imgModels/prada1.jpg?raw=true", name: "Vestido", price: "700"},
    {img: "https://github.com/ImBard/E-commerce/blob/main/src/assets/imgModels/prada2.jpg?raw=true", name: "Bolsa", price: "250"},
  ]

  return (

    <>
      <Header/>

      <MainList>
        <FilterBar/>

        <ContainerList>
          {produtos.map((item) => {
            return (
              <ProductCard
                key={item.name}
                src={item.img}
                name={item.name}
                price={item.price}
              />
            )
          })}
          
        </ContainerList>

      </MainList>
    </>
  );
}