import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Billing = () => {
  return (
    <Container>
      <Form>
        <InputHold>
          <label>
            Name on Card <span style={{ color: "red" }}>*</span>
          </label>
          <input type="text" placeholder="Name on Card" />
        </InputHold>
        <InputHold>
          <label>
            Card Type <span style={{ color: "red" }}>*</span>
          </label>

          <select>
            <option selected disabled>
              Select Card Type
            </option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Verve">Verve</option>
          </select>
        </InputHold>

        <DoubleHold>
          <InputHold style={{ width: "50%" }}>
            <label>
              Card details <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              placeholder="xxxx xxxx xxxx xxxx"
              style={{ textAlign: "center" }}
            />
          </InputHold>
          <InputHold style={{ width: "25%" }}>
            <label>
              Expiry date <span style={{ color: "red" }}>*</span>
            </label>
            <input type="" placeholder="/" style={{ textAlign: "center" }} />
          </InputHold>
          <InputHold style={{ width: "15%" }}>
            <label>
              CVV <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              placeholder="CVV"
              style={{ textAlign: "center" }}
            />
          </InputHold>
        </DoubleHold>

        <ButtonHold>
          <Link to="/confirm" style={{ textDecoration: "none" }}>
            <Button>Next</Button>
          </Link>
          <Cancel>Cencel Payment</Cancel>
        </ButtonHold>
      </Form>
    </Container>
  );
};

export default Billing;

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

const Form = styled.div`
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
// const Container = styled.div``
// const Container = styled.div``
