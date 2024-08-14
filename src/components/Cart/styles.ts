import styled from "styled-components";
import fechar from '../../assets/images/close 1.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0%;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const SideBar = styled.aside`
  background-color: #686868;
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  
`

export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: #fff;
  margin-top: 32px;
  margin-bottom: 16px;
`

export const CartItem = styled.li`
  display: flex;
  border-bottom: 1px solid #686868;
  padding-bottom: 8px;
  padding-top: 8px;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 24px;
  }

  h3 {
    color: #fff;
    font-weight: bold;
    font-size: 16px;
  }

  h4{
    margin-top:8px;
    color: #fff;
    font-weight: bold;
    font-size: 12px;
  }

  span {
    display: block;
    color: #fff;
    font-weight: bold;
    font-size: 14px;
  }


  button {
    background-image: url(${fechar});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 8;
    right: 0;
  }
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: #fff;
  margin-bottom: 24px;

  span {
    display: block;
    font-size: 12px;
    color: #686868;
  }
`

export const ButtonCart = styled.button`
  background-color:#E66767;
  width:100%;
  height:24px;
  font-size: 14px;
  font-weight:bold;
  text-align:center;
  line-height: 16px;
  border: none;
  color:#fff;
  cursor: pointer;

`