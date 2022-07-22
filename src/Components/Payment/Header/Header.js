import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  const [bill, setBill] = React.useState();
  return (
    <Container>
      <Wrap>
        <Icon />
        <Title>Complete your Purchase</Title>

        <Navigator>
          <NavHold>
            <Nav>Personal info</Nav>

            <Nav>Billing info</Nav>

            <Nav>Confirm Payment</Nav>
          </NavHold>
          <Line></Line>
        </Navigator>
      </Wrap>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  margin-top: 150px;

  @media screen and (max-width: 700px) {
    width: 90%;
    margin-top: 50px;
  }
`;
const Wrap = styled.div`
  width: 100%;
`;
const Icon = styled(MdOutlineKeyboardArrowDown)`
  font-size: 25px;
  color: var(--grey);
  position: absolute;
  top: 30px;
  margin: 0;
  right: 80px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 35px;
  margin-bottom: 50px;
  font-family: var(--font-pop);
  color: var(--purple);

  @media screen and (max-width: 425px) {
    font-size: 30px;
    margin-bottom: 30px;
  }
`;

const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: var(--grey);
  position: relative;

  

  &.active {
    color: var(--orange);

    ::before{
        content: "Hello",
        position: absolute;
        bottom: 10;
   
        width: 100px;
        height: 5px;
        background-color: var(--orange);
    }
    
  }
`;
const Navigator = styled.div``;
const NavHold = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 30px;

  @media screen and (max-width: 425px) {
    margin-bottom: 20px;
  }
`;
const Nav = styled.div`
  font-size: 23px;
  font-weight: 650;
  text-transform: capitalize;
  margin-right: 50px;
  //   padding-bottom: 20px;

  @media screen and (max-width: 425px) {
    font-size: 12px;
    margin-right: 10px;
  }
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #000;
`;
// const Container = styled.div``;
