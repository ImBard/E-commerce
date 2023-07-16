import { Actions, Check, Container, Content, Cover, Doogle, Forgot, Form, ImgLogo, Input, InputLabel, LabelCheck, Logo, Main, Register, SubTitle, SubmitButton, Title } from "./style";
import LogoImg from "../../assets/logo.png";

export function Login() {

  return (
    <>
      <Main>
        <Container>
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
                <Input type="password" id="password" placeholder="*******" />
              </InputLabel>

              <Actions>
                <LabelCheck htmlFor="check">
                  <Check type="checkbox" id="check" />
                  Remember me
                </LabelCheck>
                <Forgot to="/">Forgot Password</Forgot>
              </Actions>

              <SubmitButton>Sign In</SubmitButton>
              <Doogle>Sign In</Doogle>

            </Content>
            <Register to={"/signup"}>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Don't have an account? <b>Sign up</b>
            </Register>
          </Form>
          <Cover>
            asdasdasdasdasda
          </Cover>

        </Container>
      </Main>
    </>

  );
}