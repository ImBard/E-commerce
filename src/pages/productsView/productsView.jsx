import { FilterBar } from "../../components/filterBar/filterBar";
import { Header } from "../../components/header/header";
import { ProductCard } from "../../components/products/productCard";
import { ContainerList, MainList } from "./style";

export function ProductsView() {

  const produtos = [
    {img: "../../assets/imgModels/prada.jpg", name: "Moletom", price: "189"},
    {img: "../../assets/imgModels/prada1.jpg", name: "Vestido", price: "700"},
    {img: "../../assets/imgModels/prada2.jpg", name: "Bolsa", price: "250"},
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