import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Confirm = () => {
  return (
    <Container>
      <Wrapper>
        <FormHold>
          <Head>
            <Hold style={{ color: "#fff" }}>
              <Title>Item Name</Title>
              <TitlePrice># Price</TitlePrice>
            </Hold>
          </Head>

          <Content>
            <Hold>
              <Name>Data Science and usability</Name>
              <Price>50,000.00</Price>
            </Hold>
            <Hold>
              <Name>Shipping</Name>
              <Price>0.00</Price>
            </Hold>
            <Line></Line>

            <Box>
              <Total>Total</Total>
              <Price style={{ fontSize: "23px" }}>50,000.00</Price>
            </Box>
          </Content>
        </FormHold>
      </Wrapper>

      <ButtonHold>
        <Link to="/complete" style={{ textDecoration: "none" }}>
          <Button>Pay</Button>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          {" "}
          <Cancel>Cancel Payment</Cancel>
        </Link>
      </ButtonHold>
    </Container>
  );
};

export default Confirm;

const Container = styled.div`
  width: 700px;
  height: 100%;

  margin-bottom: 50px;

  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;

const FormHold = styled.div`
  width: 100%;
  border-radius: 10px;
  border-radius: 10px;
  overflow: hidden;
`;
const Wrapper = styled.div`
  width: 700px;
  height: 100%;
  // min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-radius: 10px;
  background-color: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;
const Head = styled.div`
  background-color: var(--blue);
  width: 100%;
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Content = styled.div`
  width: 100%;
  padding: 20px 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Hold = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  color: #000;
  margin: 10px 0;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

const TitlePrice = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
const Name = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: var(--grey2);
`;
const Price = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: var(--grey2);
`;
const Box = styled.div`
  display: flex;
  width: 70%;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
  border: 1px solid var(--grey);
  border-radius: 3px;
  padding: 10px;
`;
const Total = styled.div`
  font-size: 23px;
  font-weight: 600;
  color: var(--light);
`;

const Line = styled.div`
  width: 80%;
  height: 1px;
  background-color: var(--grey2);
  margin: 20px 0;
`;

const ButtonHold = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;

  @media screen and (max-width: 425px) {
    flex-direction: column;
    margin-top: 10px;
  }
`;
const Button = styled.div`
  background: var(--gradient);
  color: #fff;
  margin-right: 50px;
  border-radius: 10px;
  outline: none;
  border: 0;
  font-size: 20px;
  font-weight: 700;
  padding: 12px 100px;
  cursor: pointer;
  @media screen and (max-width: 425px) {
    margin: 0;
    margin-bottom: 10px;
  }
`;
const Cancel = styled.div`
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  color: var(--purple);
`;
// const Wrapper = styled.div;
