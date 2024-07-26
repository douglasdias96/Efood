import styled from "styled-components";


export const CardTitle = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  color:#E66767;
  margin-bottom: 16px;

  h3{
    font-size:18px;
    font-weight:bold;
    line-height:21px;
  }
`

export const CardIcon = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  

  img {
    margin-left:8px;
  }

  p{
    font-size:18px;
    font-weight:bold;
  }
`

export const Info = styled.div`
  position:absolute;
  top:16px;
  right:16px;
  
`