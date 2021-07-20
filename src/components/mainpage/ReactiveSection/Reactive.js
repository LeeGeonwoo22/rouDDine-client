import React from 'react'
import styled from 'styled-components';

function Reactive() {
  return (
    <ReactSection>
      <h1>루띤과 함께 시작해보세요!</h1>
      <ButtonContainer>
        <StartButton>회원가입</StartButton>
        <StartButton>비회원으로 시작하기</StartButton>
      </ButtonContainer>
    </ReactSection>
  )
}

export default Reactive


const ReactSection = styled.div`
  padding: 100px;
  height: 40vh;
  background-color: #f3f5f7;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width:768px) { 
    flex-direction: column;
    padding: 50px;

  }

`;

const StartButton = styled.div`
  width: 250px;
  height: 90px;
  text-align: center;
  font-size: 1.5rem;
  margin: 0 95px;
  padding: 30px 0;
  font-family: GmarketSansTTFBold;
  background-color: #000035;
  border-radius: 15px;
  border: none;
  color: #ffffff;
  cursor: pointer;

  @media (max-width:1280px) { 
    /* margin-bottom: 100px; */
    margin: 30px 0;
  }

  :hover {
    background-color:#ff001d;
    opacity: 0.7;
  }
`;
