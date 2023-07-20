// import { useParams } from "react-router-dom";
import { Header } from "../../components/header/header";
import { AddCart, Bold, ButtonSelectorColor, ButtonSelectorSize, Imgs, Infos, LiImg, LiSelector, List, LittleImg, MainImg, Name, Price, Product, Rating, Recommended, ReviewQtd, Selector, Share, Stars, TextGray, Title, UlImg, UlSelector } from "./style";
import { useContext, useEffect, useState } from "react";
import { Accordion } from "../../components/accordion/accordion";
import { ProductCard } from "../../components/products/productCard";
import productServices from "../../services/products";
import { Star } from "@phosphor-icons/react";
import { useParams } from "react-router-dom";
import { HelperContext } from "../../contexts/helpersContext";
import { useForm } from "react-hook-form";

export function ProductDetails() {
  const { slug } = useParams()
  const [mainImg, setMainImg] = useState("");
  const [produto, setProduto] = useState({});
  const { createAccordionStructure } = useContext(HelperContext);
  const [cart, setCart] = useState({
    size: '',
    color: {},
  });

  const { handleSubmit } = useForm();
  const { plusCart } = useContext(HelperContext);

  useEffect(() => {
    getProduto(slug);
  }, []);

  async function getProduto(code) {
    productServices.detailsProduct(code)
      .then((response) => {
        setProduto(response.data);
        handleImg(response.data.imagesEntity[0].path);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  const accordion = createAccordionStructure(produto);

  function handleImg(img) {
    setMainImg(img);
  }

  async function onSubmit() {
    cart.productsEntityId = produto.id
    console.log(cart)
    productServices.addCart(cart)
      .then(() => {
        plusCart();
      })
      .catch((error) => {
        console.error(error);
      })
  }

  function handleCart(prop, value) {
    if (prop === 'size') {
      setCart({ ...cart, size: value })
    } else {
      setCart({ ...cart, color: value })
    }
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
      <Product onSubmit={handleSubmit(onSubmit)}>
        <Imgs>
          <UlImg>
            {produto?.imagesEntity?.map((image, index) => {
              return (
                <LiImg key={index} onClick={() => handleImg(image.path)}>
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
            <TextGray>Size: <Bold>{cart.size}</Bold></TextGray>
            <UlSelector>
              {produto.sizes?.map((size) => {
                return (
                  <LiSelector key={size}>
                    <ButtonSelectorSize type="button" onClick={() => handleCart('size', size)}

                    >{size}</ButtonSelectorSize>
                  </LiSelector>
                )
              })}

            </UlSelector>
          </Selector>
          <Selector>
            <TextGray>Color: <Bold>{cart.color.name}</Bold></TextGray>
            <UlSelector>
              {produto.colors?.map((color) => {
                return (
                  <LiSelector key={color.hex}>
                    <ButtonSelectorColor
                      type="button"
                      onClick={() => handleCart('color', color)}
                      color={color.hex}>
                    </ButtonSelectorColor>
                  </LiSelector>
                )
              })}
            </UlSelector>
          </Selector>
          <AddCart type="submit">Add to Cart</AddCart>

          {/* Enquanto o produto.accordion não estiver populado ele nao renderiza o componente accordion */}
          {accordion &&
            < Accordion data={accordion} />
          }
        </Infos>

      </Product >
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