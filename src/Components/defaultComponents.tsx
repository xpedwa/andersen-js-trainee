import styled from 'styled-components';

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
  padding: 6px 20px;
  margin: 6px;
  // margin-bottom: 20px;

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

const Avatar = styled.img`
  width: 100px;
  height: 100px;
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


export { Button, HotSearchInput, Avatar, Panel }
