import { MagnifyingGlass, User } from "@phosphor-icons/react";
import { Bottom, ButtonList, Cart, Head, LabelCart, ListCategories, Search, SearchInput, Sign, Title, Top, Translate } from "./style";
import { useContext } from "react";
import { HelperContext } from "../../contexts/helpersContext";

export function Header() {

  const {cart} = useContext(HelperContext);

  const list = [
    "Home",
    "Backpack",
    "EcoBags",
    "Hats",
    "Clutches"
  ]

  return (
    <Head>
      <Top>
        <Translate>PT</Translate>
        <Title>Prada venice</Title>
        <Sign><User size={20} />sign up</Sign>
      </Top>
      <Bottom>
        <Search>
          <MagnifyingGlass size={25} color="#929292" />
          <SearchInput type="search" placeholder="Example, A Backpack" />
        </Search>
        <ListCategories>
          {list.map((item) => {
            return (
              <ButtonList key={item}>{item}</ButtonList>
            )
          })}
        </ListCategories>

        <LabelCart to={"/cart"} htmlFor="Cart">
          Cart
          <Cart id="Cart" onClick={() => console.log("TESTE")}>
            {cart}
          </Cart>
        </LabelCart>

      </Bottom>
    </Head>
  );
}