import styled from "styled-components";
import HeroImage from '../../assets/images/Vector.png'

export const HeroContainer = styled.div`
  background-image:url(${HeroImage});
  width:100%;
  height:380px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-between;
  

  img{
    width:125px;
    height:58px;
    margin-top:64px;
  }

  p{
    margin-bottom: 40px;
    font-size:36px;
    line-height:42px;
    text-align:center;
    font-weight:900;
    color:#e66767;

  }
`



