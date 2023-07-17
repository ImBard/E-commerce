// import { useParams } from "react-router-dom";
import { Header } from "../../components/header/header";
import { AddCart, Bold, ButtonSelectorColor, ButtonSelectorSize, Imgs, Infos, LiImg, LiSelector, List, LittleImg, MainImg, Name, Price, Product, Rating, Recommended, ReviewQtd, Selector, Share, Stars, TextGray, Title, UlImg, UlSelector } from "./style";
import { useEffect, useState } from "react";
import { Accordion } from "../../components/accordion/accordion";
import { ProductCard } from "../../components/products/productCard";
import productServices from "../../services/products";
import { Star } from "@phosphor-icons/react";
import { useParams } from "react-router-dom";

export function ProductDetails() {
  const { slug } = useParams()
  const [mainImg, setMainImg] = useState("");
  const [produto, setProduto] = useState({});
  const [accordion, setAccordion] = useState([]);
  useEffect(() => {
    getProduto(slug);
  }, []);

  async function getProduto(code) {
    console.log(code)
    productServices.detailsProduct(code)
      .then((response) => {
        setProduto(response.data);
        handleImg(response.data.imagesEntity[0].path);
        createAccordionStructure(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function createAccordionStructure(data) {
    const infos = [
      {
        title: "PRODUCT DETAILS",
        content: data.details
      },
      {
        title: "SIZE & FIT",
        content: data.sizeAndFit
      },
      {
        title: "COMPOSITION",
        content: data.composition
      }
    ]
    setAccordion(infos);
  }


  function handleImg(img) {
    setMainImg(img);
  }


  const produtos = [
    {
      img: "https://github.com/ImBard/E-commerce/blob/main/src/assets/imgModels/prada.jpg?raw=true", name: "Moletom",
      price: "189"
    },
    {
      img: "https://github.com/ImBard/E-commerce/blob/main/src/assets/imgModels/prada1.jpg?raw=true", name: "Vestido",
      price: "700"
    },
    {
      img: "https://github.com/ImBard/E-commerce/blob/main/src/assets/imgModels/prada2.jpg?raw=true", name: "Bolsa",
      price: "250"
    },
    {
      img: "https://raw.githubusercontent.com/ImBard/E-commerce/main/src/assets/imgModels/prada3.webp", name: "Conjunto Social",
      price: "75"
    },
  ]

  return (
    <>
      <Header />
      <Product>
        <Imgs>
          <UlImg>
            {produto?.imagesEntity?.map((image) => {
              return (
                <LiImg key={image.img} onClick={() => handleImg(image.path)}>
                  <LittleImg src={`http://localhost:3000/static/product/` + image.path} />
                </LiImg>
              );
            })}
          </UlImg>
          <MainImg src={`http://localhost:3000/static/product/` + mainImg} />
        </Imgs>

        <Infos>
          <Rating>
            <Stars>
              <Star size={16} color="#e0a910" weight="fill" />
              <Star size={16} color="#e0a910" weight="fill" />
              <Star size={16} color="#e0a910" weight="fill" />
              <Star size={16} color="#e0a910" weight="fill" />
              <Star size={16} color="#e0a910" weight="fill" />
            </Stars>
            <ReviewQtd>Reviews - {produto.reviewEntity?.length}</ReviewQtd>
            <Share>share</Share>
          </Rating>

          <Name>{produto.name}</Name>
          <TextGray>Product code: {produto.code}</TextGray>
          <Price>${produto.price}</Price>
          <Selector>
            <TextGray>Size: <Bold>S</Bold></TextGray>
            <UlSelector>
              {produto.sizes?.map((size) => {
                return (
                  <LiSelector key={size}>
                    <ButtonSelectorSize>{size}</ButtonSelectorSize>
                  </LiSelector>
                )
              })}

            </UlSelector>
          </Selector>
          <Selector>
            <TextGray>Color: <Bold>Orange</Bold></TextGray>
            <UlSelector>
              {produto.colors?.map((color) => {
                return (
                  <LiSelector key={color}>
                    <ButtonSelectorColor color={color}></ButtonSelectorColor>
                  </LiSelector>
                )
              })}
            </UlSelector>
          </Selector>
          <AddCart>Add to Cart</AddCart>

          {/* Enquanto o produto.accordion não estiver populado ele nao renderiza o componente accordion */}
          {/* {accordion &&
            < Accordion data={accordion} />
          } */}
        </Infos>

      </Product>
      <Recommended>
        <Title>You Might Also Like</Title>
        <List>
          {produtos.map((item) => {
            return (
              <ProductCard
                key={item.name}
                src={item.img}
                name={item.name}
                price={item.price}
                showDescs={false}
              />
            )
          })}
        </List>
      </Recommended>
      {/* <Arrival>

      </Arrival> */}
    </>
  );
}