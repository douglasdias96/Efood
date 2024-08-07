import styled from "styled-components";


export const CardTitle = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  color:#FEBD97;
  background-color:#E66767;

  h3{
    font-size:16px;
    font-weight:900;
    line-height:18px;
    margin:8px;
  }
  

`

export const CardIcon = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  

  img {
    margin-left:8px;
  }

`

export const Info = styled.div`
  position:absolute;
  top:16px;
  right:16px;
  
`

export const DivContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  .btn{
    max-width:304px;
    width:100%;
    padding:4px 0;
    margin-bottom:8px;
    background-color:#FFEBD9;
    color:#E66767;
    border:1px solid #E66767;
  }

  .btn:hover{
    color:#FFEBD9;
    background-color:#E66767;
    border:1px solid #FFEBD9;
  }

  
`
export const ImgModal = styled.img`
  width:100%;
  height:100%;
`
