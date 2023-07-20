import { useState } from "react";
import { BackStep, Container, Content, Cover, Form, Grid, Input, InputLabel, Main, RegisterButton, SubTitle, SubmitButton, Title } from "./style";
import { ArrowLeft } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import userServices from "../../services/users";

export function Register() {

  const { register, handleSubmit } = useForm();

  async function onSubmit(data) {
    const user = {
      name: data.name,
      birthDate: data.birthDate,
      email: data.email,
      phoneNumber: data.phoneNumber,
    };
    const address = {
      street: data.street,
      number: data.number,
      city: data.city,
      postalCode: data.postalCode,
      state: data.state,
      country: data.country,
      complement: data.complement,
    };
    data = { user, address };
    console.log("Submitted", data);
    userServices.createUser(data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      })
  }

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

  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileInputChange = (event) => {
    const files = event.target.files;
    setSelectedFiles((prevState) => [...prevState, files]);
    console.log(selectedFiles)
  };

  return (
    <>
      <Main>
        <Container>
          <Form onSubmit={handleSubmit(onSubmit)} noValidate>
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
                      <Input type="text" id="name" placeholder="Type your name"
                        {...register("name", {
                          required: "Your name is required."
                        })}
                      />
                    </InputLabel>

                    <InputLabel htmlFor="lastName">
                      Last Name
                      <Input type="text" id="lastName" placeholder="Type your last name"
                        {...register("lastName")}
                      />
                    </InputLabel>

                  </Grid>
                  <InputLabel htmlFor="email">
                    Email
                    <Input type="email" id="email" placeholder="Enter your email"
                      {...register("email", {
                        pattern: {
                          value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          message: "Invalid email format",
                        }
                      })}
                    />
                  </InputLabel>

                  <Grid>
                    <InputLabel htmlFor="phoneNumber">
                      Phone Number
                      <Input type="text" id="phoneNumber" placeholder="Type your phone number"
                        {...register("phoneNumber")}
                      />
                    </InputLabel>

                    <InputLabel htmlFor="birthDate">
                      Birth Date
                      <Input type="date" id="birthDate"
                        {...register("birthDate")}
                      />
                    </InputLabel>
                  </Grid>

                  <InputLabel htmlFor="password">
                    Password
                    <Input type="password" id="password" placeholder="*******"
                      {...register("password")}
                    />
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
                    <ArrowLeft size={21} color="black" />
                  </BackStep>
                  <InputLabel htmlFor="postalCode">
                    Postal Code
                    <Input type="text" id="postalCode" placeholder="Type your postal code"
                      {...register("postalCode", {
                        pattern: {
                          value: /^\d{5}-?\d{3}$/,
                          message: "Postal code invalid format",
                        }
                      })}
                    />
                  </InputLabel>
                  <Grid display={"grid"} size={"70% 25%"} >

                    <InputLabel htmlFor="street">
                      Street
                      <Input type="text" id="street" placeholder="Type your Street"
                        {...register("street")}
                      />
                    </InputLabel>

                    <InputLabel htmlFor="number">
                      Number
                      <Input type="text" id="number" placeholder="Nº"
                        {...register("number")}
                      />
                    </InputLabel>
                  </Grid>

                  <InputLabel htmlFor="complement">
                    Complement
                    <Input type="tel" id="complement" placeholder="Complement"
                      {...register("complement")}
                    />
                  </InputLabel>

                  <Grid display={"grid"} size={"65% 30%"} >

                    <InputLabel htmlFor="city">
                      City
                      <Input type="text" id="city" placeholder="Enter your city"
                        {...register("city")}
                      />
                    </InputLabel>

                    <InputLabel htmlFor="state">
                      State
                      <Input type="text" id="state" placeholder="Type your state"
                        {...register("state")}
                      />
                    </InputLabel>

                  </Grid>


                  <InputLabel htmlFor="country">
                    Country
                    <Input type="text" id="country" placeholder="Type your Country"
                      {...register("country", {
                        required: "Country is required"
                      })}
                    />
                  </InputLabel>

                  {/* <input
                    type="file"
                    name="images"
                    accept="image/*"
                    multiple
                    {...register("file")}
                  /> */}
                  <input type="file" name="images" accept="image/*" multiple onChange={handleFileInputChange} />

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