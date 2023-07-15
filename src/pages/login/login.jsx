import { Actions, Check, Content, Cover, Forgot, Form, ImgLogo, Input, InputLabel, LabelCheck, Logo, Main, Register, SubTitle, SubmitButton, Title } from "./style";
import LogoImg from "../../assets/logo.png";

export function Login() {

  return (
    <Main>
      <Form>
        <Logo>
          <ImgLogo src={LogoImg} />
          prada venice
        </Logo>
        <Content>
          <Title>
            Welcome back!
          </Title>
          <SubTitle>The Faster you fill up, the faster you get your products</SubTitle>

          <InputLabel htmlFor="email">
            Email
            <Input type="email" id="email" placeholder="Enter your email" />
          </InputLabel>

          <InputLabel htmlFor="password">
            Password
            <Input type="password" id="password" placeholder="*******"/>
          </InputLabel>

          <Actions>
            <LabelCheck htmlFor="check">
              <Check type="checkbox" id="check"/>
              Remember me
            </LabelCheck>
            <Forgot to="/">Forgot Password</Forgot>
          </Actions>

          <SubmitButton>Sign In</SubmitButton>

        </Content>
        <Register to="/">

        </Register>
      </Form>
      <Cover>
asdasdasdasdasda
      </Cover>
    </Main>

  );
}