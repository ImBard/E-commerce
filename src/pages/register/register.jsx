import { useState } from "react";
import { BackStep, Container, Content, Cover, Form, Grid, Input, InputLabel, Main, RegisterButton, SubTitle, SubmitButton, Title } from "./style";
import { ArrowLeft } from "@phosphor-icons/react";
// import LogoImg from "../../assets/logo.png";

export function Register() {
  const steps = [
    {
      id: 'PERSONAL',
      title: "Dados pessoais"
    },
    {
      id: 'SHIPPING',
      title: "Endereço de entrega"
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  function handleNextStep() {
    setCurrentStep((prevState) => prevState + 1);
  }

  return (
    <>
      <Main>
        <Container>
          <Form>
            {/* <Logo>
              <ImgLogo src={LogoImg} />
              prada venice
            </Logo> */}
            <Content>
              {steps[currentStep].id === 'PERSONAL' && (
                <>
                  <Title>
                    Welcome
                  </Title>
                  <SubTitle>The Faster you fill up, the faster you get your products</SubTitle>
                  <Grid display={"flex"} gap={"13px"} >

                    <InputLabel htmlFor="name">
                      Name
                      <Input type="text" id="name" placeholder="Type your name" />
                    </InputLabel>

                    <InputLabel htmlFor="lastName">
                      Last Name
                      <Input type="text" id="lastName" placeholder="Type your last name" />
                    </InputLabel>

                  </Grid>
                  <InputLabel htmlFor="email">
                    Email
                    <Input type="email" id="email" placeholder="Enter your email" />
                  </InputLabel>

                  <Grid>
                    <InputLabel htmlFor="phoneNumber">
                      Phone Number
                      <Input type="text" id="phoneNumber" placeholder="Type your phone number" />
                    </InputLabel>

                    <InputLabel htmlFor="birthDate">
                      Birth Date
                      <Input type="date" id="birthDate" />
                    </InputLabel>
                  </Grid>

                  <InputLabel htmlFor="password">
                    Password
                    <Input type="password" id="password" placeholder="*******" />
                  </InputLabel>


                </>
              )}

              {steps[currentStep].id === 'SHIPPING' && (
                <>
                  <Title>
                    Welcome
                  </Title>
                  <SubTitle>Fill in the fields with your address</SubTitle>
                  <BackStep onClick={() => setCurrentStep(currentStep - 1)}>
                    <ArrowLeft size={21} color="black"/>
                  </BackStep>
                  <InputLabel htmlFor="postalCode">
                    Postal Code
                    <Input type="text" id="postalCode" placeholder="Type your postal code" />
                  </InputLabel>
                  <Grid display={"grid"} size={"70% 25%"} >

                    <InputLabel htmlFor="street">
                      Street
                      <Input type="text" id="street" placeholder="Type your Street" />
                    </InputLabel>

                    <InputLabel htmlFor="number">
                      Number
                      <Input type="text" id="number" placeholder="Nº" />
                    </InputLabel>
                  </Grid>

                  <InputLabel htmlFor="complement">
                    Complement
                    <Input type="tel" id="complement" placeholder="Complement" />
                  </InputLabel>

                  <Grid display={"grid"} size={"65% 30%"} >

                    <InputLabel htmlFor="city">
                      City
                      <Input type="text" id="city" placeholder="Enter your city" />
                    </InputLabel>

                    <InputLabel htmlFor="state">
                      State
                      <Input type="text" id="state" placeholder="Type your state" />
                    </InputLabel>

                  </Grid>


                  <InputLabel htmlFor="country">
                    Country
                    <Input type="text" id="country" placeholder="Type your Country" />
                  </InputLabel>



                </>
              )}

              {/* <Actions>
                <LabelCheck htmlFor="check">
                  <Check type="checkbox" id="check" />
                  Remember me
                </LabelCheck>
                <Forgot to="/">Forgot Password</Forgot>
              </Actions> */}

              {currentStep < steps.length - 1 && (
                <SubmitButton type="button"
                  onClick={handleNextStep}>Next</SubmitButton>
              )}

              {currentStep === steps.length - 1 && (
                <SubmitButton type="submit">
                  Finish
                </SubmitButton>
              )}

            </Content>
            <RegisterButton to="/signin">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Already have an account? <b>Sign in</b>

            </RegisterButton>
          </Form>
          <Cover>
            asdasdasdasdasda
          </Cover>

        </Container>
      </Main>
    </>

  );
}