import styled from "styled-components";

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  position: relative;
  margin-bottom: 56px;


  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    content: '';
  }

  

`

export const Tag = styled.div`
  height:100%;
  position:absolute;
  color: #fff;
  display:flex;
  z-index: 1;
  flex-direction:column;
  justify-content:space-between;
  font-size:32px;
  font-weight:900;
  line-height:37px;
  p{
    margin-top: 25px;
    font-weight: 100;
    opacity: 0.7;
  }

  h3{
    margin-bottom:32px;
    
  }

  @media (max-width: 768px) {
    p, h3{
      margin-left: 20px;
    }
  }
`
