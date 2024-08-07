import styled from "styled-components";
import Vector from '../../assets/images/Vector.png'


export const Header = styled.div`
  background-image: url(${Vector});
  width:100%;
  height:186px;
  display:flex;
  justify-content:space-around;
  align-items:center;
  color:#E66767;

  img{
    max-width:125px;
    width:100%;
  }

  a, h3 {
    font-size: 18px;
    font-weight:900
  }

  @media (max-width: 768px) {
    display:flex;
    flex-direction:column;
  }

`
