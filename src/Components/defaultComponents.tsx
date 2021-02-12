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


export { Header, Button, HotSearchInput }
