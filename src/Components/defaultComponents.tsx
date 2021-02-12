import styled from 'styled-components';

const Header = styled.div<any>`
  position: fixed;
  top: 0;
  width: 100%;
  margin: 0;
  padding: 15px 0;

  background: red;
  text-align: center;
`;

const HotSearchInput = styled.input<any>`
  padding: 6px 20%;

  background: white;
  border: 2px solid transparent;
  border-radius: 6px;
  box-shadow: 0px 0px 2px 1px #8080809f;

  text-align: center;
  
  &:hover, &:focus {
    outline: none;
    border-color: bisque;
  }
`;

const Button = styled.button<any>`
  padding: 6px 20%;
  margin-bottom: 20px;

  background: white;
  border: none;
  border-radius: 6px;
  box-shadow: 0px 0px 2px 1px #8080809f;

  outline-color: bisque;

  &:hover{
    cursor: pointer;
    background: bisque;
    box-shadow: 0px 0px 2px 1px #8080809f;
  }
`;


const Panel = styled.div`
  display: grid;
  text-align: center;
  
  @media screen and (max-width: 480px){
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (min-width: 480px){
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media screen and (min-width: 768px){
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 1024px){
    grid-template-columns: repeat(5, 1fr);
  }

  @media screen and (min-width: 1920px){
    grid-template-columns: repeat(10, 1fr);
  }
`;

const Card = styled.div`
  padding: 10px;
  
  background: white;
  border-radius: 10px;
  box-shadow: 0px 0px 2px 1px #8080809f;
  text-align: center;

  &:hover {
    background: bisque;
    cursor: pointer;
  }
`;

const Card__name = styled.div`
  padding: 2px 0;
  overflow-wrap: anywhere;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
`;

export { Header, Button, HotSearchInput, Panel, Card, Card__name, Avatar }
