import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 60vh;
  border-radius: 20px;
  align-items: center;
  justify-content: center;

  .input-div{
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;
  }

  input {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border: 0px;
    height: 40px;
    width: 60%;
    font-size: 22px;
    text-align: center;
  }


  .btn {
    font-weight: bold;
    border: 0px;
    padding: 0 20px 0 20px;
    font-size: 15px;
    color: #fff;
    background-color: #7159c1;
    height: 40px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover{
      opacity: 80%;
    }
  }

  .response {
    margin-top: 80px;
  }


  p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
  }
`
