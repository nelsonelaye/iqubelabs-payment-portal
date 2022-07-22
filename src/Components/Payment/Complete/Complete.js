import React from "react";
import { FcCheckmark } from "react-icons/fc";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Complete = () => {
  return (
    <Container>
      <Wrapper>
        <Hold>
          <Check>
            <Icon />
          </Check>
          <Title>Purchase Completed</Title>
          <Text>
            Please check your mail for details concerning this transaction.
          </Text>

          <Link to="/personal" style={{ textDecoration: "none" }}>
            <Action>Return Home</Action>
          </Link>
        </Hold>
      </Wrapper>
    </Container>
  );
};

export default Complete;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  background-image: url("assets/wave.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  position: absolute;
  top: 0;
`;
const Wrapper = styled.div`
  width: 550px;
  background-color: #fff;
  border-radius: 10px;
  padding: 50px;
  box-sizing: border-box;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Hold = styled.div`
  width: 400px;
`;
const Icon = styled(FcCheckmark)`
  font-size: 50px;
`;
const Check = styled.div`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  margin: auto;
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 20px;
  font-family: var(--font-pop);
  color: var(--purple);

  @media screen and (max-width: 425px) {
    font-size: 30px;
    margin-bottom: 30px;
  }
`;

const Text = styled.div`
  color: var(--grey2);
  margin-bottom: 30px;
`;
const Action = styled.div`
  text-decoration: underline;
  color: var(--orange);
  text-transform: uppercase;
  font-weight: 700;
`;
// const Container = styled.div``
