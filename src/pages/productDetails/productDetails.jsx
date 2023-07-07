import { useParams } from "react-router-dom";
import { Header } from "../../components/header/header";
import { AddCart, Bold, ButtonSelectorColor, ButtonSelectorSize, Imgs, Infos, LiImg, LiSelector, LittleImg, MainImg, Name, Price, Product, Rating, ReviewQtd, Selector, Share, TextGray, UlImg, UlSelector } from "./style";
import { useState } from "react";
import { Accordion } from "../../components/accordion/accordion";

export function ProductDetails() {
  const { item } = useParams()
  const [mainImg, setMainImg] = useState("");


  function handleImg(img) {
    setMainImg(img);
  }

  const sampleAccordionData = [
    {
      title: "PRODUCT DETAILS",
      content:
        "Lorem ipsum dolor amet gastropub church-key gentrify actually tacos. Vegan taxidermy freegan before they sold out kickstarter copper mug iceland selvage blog prism. 8-bit vice drinking vinegar stumptown locavore. Microdosing unicorn typewriter sartorial cornhole. Man bun venmo cronut wolf shaman offal truffaut. Chillwave vinyl pug distillery adaptogen man bun tofu retro hammock kogi tbh jean shorts organic. Craft beer vinyl etsy, portland microdosing chicharrones lumbersexual crucifix cronut gentrify four loko tousled fingerstache."
    },
    {
      title: "SIZE & FIT",
      content:
        "Slow-carb knausgaard health goth kombucha tousled four loko. Messenger bag cronut +1, four loko williamsburg you probably haven't heard of them bicycle rights taiyaki ramps squid vaporware. Green juice typewriter master cleanse distillery viral wayfarers asymmetrical quinoa health goth semiotics succulents kinfolk pork belly shaman. Cronut salvia farm-to-table kickstarter shaman cloud bread echo park."
    },
    {
      title: "COMPOSITION",
      content:
        "Health goth humblebrag live-edge meggings pork belly actually ugh kombucha banh mi plaid etsy waistcoat. Hammock celiac crucifix tousled, dreamcatcher tbh truffaut direct trade cliche synth hot chicken palo santo pork belly man bun retro. Art party +1 live-edge occupy iceland selfies beard fanny pack godard 90's messenger bag. Bushwick irony umami woke. Kale chips raw denim austin, food truck flexitarian 90's deep v. Locavore green juice cold-pressed hexagon copper mug vegan sriracha man bun la croix photo booth forage. Succulents migas irony hella mumblecore keytar waistcoat aesthetic cornhole shabby chic tumblr semiotics readymade."
    },
    {
      title: "AVAILABILITY IN STORES",
      content:
        "Tbh next level subway tile ennui cloud bread. Master cleanse vaporware food truck, authentic distillery meggings ugh activated charcoal iceland gastropub fam. Raw denim direct trade pinterest keytar fam echo park wolf four dollar toast glossier kitsch taiyaki 8-bit austin. Brunch pinterest raw denim banh mi, bushwick organic artisan synth poutine man bun scenester. Occupy chartreuse food truck banh mi affogato shaman."
    },
    {
      title: "REVIEWS (12)",
      content:
        "Aesthetic tofu dreamcatcher lumbersexual jianbing poke PBR&B kogi heirloom. Sartorial artisan synth tacos vegan bushwick, lomo thundercats VHS disrupt bespoke scenester. Copper mug taiyaki occupy, coloring book drinking vinegar taxidermy direct trade intelligentsia quinoa raw denim succulents. Dreamcatcher copper mug fanny pack yuccie art party hoodie, ugh portland."
    },
    
  ];
  
  return (
    <>
      <Header/>
      <Product>
        <Imgs>

          <UlImg>
            <LiImg>
              <LittleImg src={""} />
            </LiImg>
            <LiImg>
              <LittleImg src={""} />
            </LiImg>
            <LiImg>
              <LittleImg src={""} />
            </LiImg>
            <LiImg onClick={() => handleImg("https://github.com/ImBard/E-commerce/blob/main/src/assets/imgModels/prada2.jpg?raw=true")}>
              <LittleImg src={"https://github.com/ImBard/E-commerce/blob/main/src/assets/imgModels/prada2.jpg?raw=true"} />
            </LiImg>
            <LiImg onClick={() => handleImg("https://raw.githubusercontent.com/ImBard/E-commerce/main/src/assets/imgModels/prada3.webp")}>
              <LittleImg src={"https://raw.githubusercontent.com/ImBard/E-commerce/main/src/assets/imgModels/prada3.webp"} />
            </LiImg>
          </UlImg>
          <MainImg src={mainImg} />
        </Imgs>

        <Infos>
          <Rating>rating
            <ReviewQtd>Review - 45</ReviewQtd>
            <Share>share</Share>
          </Rating>

          <Name>Brique Saffiano leather bag</Name>
          <TextGray>Product code: 5DG5S2E89</TextGray>
          <Price>$155.00</Price>
          <Selector>
            <TextGray>Size: <Bold>S</Bold></TextGray>
            <UlSelector>
              <LiSelector><ButtonSelectorSize>S</ButtonSelectorSize></LiSelector>
              <LiSelector><ButtonSelectorSize>L</ButtonSelectorSize></LiSelector>
            </UlSelector>
          </Selector>
          <Selector>
            <TextGray>Color: <Bold>Orange</Bold></TextGray>
            <UlSelector>
              <LiSelector><ButtonSelectorColor color={"#f89c6a"}></ButtonSelectorColor></LiSelector>
              <LiSelector><ButtonSelectorColor color={"#000"}></ButtonSelectorColor></LiSelector>
            </UlSelector>
          </Selector>
          <AddCart>Add to Cart</AddCart>
        
         <Accordion data={sampleAccordionData} />
        </Infos>

      </Product>
      {/* <Recommended>

      </Recommended>
      <Arrival>

      </Arrival> */}
    </>
  );
}