import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const PersonalInfo = () => {
  return (
    <Container>
      <Form>
        <InputHold>
          <label>Name</label>
          <input type="text" placeholder="Name" />
        </InputHold>
        <InputHold>
          <label>
            Email Address <span style={{ color: "red" }}>*</span>
          </label>
          <Info>The purchase receipt would be sent to this address</Info>
          <input type="email" placeholder="example@gmail.com" required />
        </InputHold>
        <InputHold>
          <label>Address 1 </label>
          <input type="text" placeholder="Address 1" />
        </InputHold>
        <InputHold>
          <label>Address 2 </label>
          <input type="text" placeholder="Address 2" />
        </InputHold>
        <DoubleHold>
          <InputHold style={{ flex: 0.5 }}>
            <label>Local Government </label>
            <input type="text" placeholder="Local Government Area" />
          </InputHold>
          <InputHold style={{ flex: 0.4 }}>
            <label>State </label>
            <select>
              <option selected disabled>
                Select state
              </option>
              <option value="Lagos">Lagos</option>
              <option value="Abuja">Abuja</option>
              <option value="Borno">Borno</option>
            </select>
          </InputHold>
        </DoubleHold>

        <ButtonHold>
          <Link to="/billing" style={{ textDecoration: "none" }}>
            <Button>Next</Button>
          </Link>
          <Cancel>Cencel Payment</Cancel>
        </ButtonHold>
      </Form>
    </Container>
  );
};

export default PersonalInfo;

const Container = styled.div`
  width: 700px;
  height: 100%;
  // min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;

  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;

const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
`;

const InputHold = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  label {
    font-weight: 700;
    margin-bottom: 15px;
  }

  input {
    border: 1px solid var(--purple);
    height: 55px;
    border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;
    background-color: #fff;
    color: var(--grey2);
    :focus {
      border: 1px solid #000;
    }

    ::placeholder {
      color: var(--grey);
    }
  }

  select {
    border: 1px solid var(--purple);
    height: 55px;
    border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;
    background-color: #fff;

    :focus {
      border: 1px solid #000;
    }
  }

  @media screen and (max-width: 425px) {
    margin-bottom: 20px;

    input {
      height: 45px;
      border-radius: 5px;
    }

    select {
      height: 45px;
      border-radius: 5px;
    }
  }
`;

const DoubleHold = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 425px) {
    flex-direction: column;

    ${InputHold} {
      flex: 1;
      width: 100%;
    }
  }
`;
const Info = styled.div`
  color: var(--grey);
  margin-bottom: 20px;

  @media screen and (max-width: 425px) {
    font-size: 11px;
  }
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
const Button = styled.button`
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
// const Container = styled.div``
// const Container = styled.div``
