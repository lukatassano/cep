import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 60px 50px;
  width: 90%;
  max-width: 500px;
  height: 60%;
  background-color: rgba(255, 255, 255, 0.45);
  border-radius: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .input-div {
    display: flex;
    background-color: #fff;
    border-radius: 20px;
    width: 100%;
    align-self: center;
    align-items: center;
    justify-content: space-between;
  }

  input {
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    background-color: rgba(255, 255, 255, 0.8);
    border: 0px;
    height: 40px;
    width: 70%;
    font-size: 22px;
    text-align: center;
  }

  .btn {
    width: 100px;
    background-color: rgba(255, 0, 0, 0.8);
    font-weight: bold;
    font-size: 15px;
    color: #fff;
    height: 40px;
    border: 0px;
    border-radius: 20px;
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
      opacity: 70%;
    }
  }

  .response {
    padding-left: 20px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    height: 200px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    justify-content: center;
  }

  p {
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-weight: bold;
  }
`;
