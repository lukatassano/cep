import styled, {keyframes} from 'styled-components'
import satellite from './assets/satellite.svg'

export const Container = styled.div`
  display: flex;
  height: 60vh;
  background-color: rgba(255,255,255, 0.45);
  border-radius: 20px;
  align-items: center;
  justify-content: center;

  img {
    height: 100px;
  }

  .input-div{
    background-color: #fff;
    border-radius: 20px;
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;
  }

  input {
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    background-color: rgba(255, 255, 255, 0.8);
    border: 0px;
    height: 40px;
    width: 300px;
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

    &:hover{
      opacity: 70%;
    }
  }

  .response {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    height: 200px;
    width: 400px;
    background-color: rgba(0, 0, 0, 0.4);
    align-items: center;
    justify-content: center;
    transition: width 0.2s;

    &:hover{
      width: 420px;
    }
  }

  p {
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-weight: bold;
  }
`