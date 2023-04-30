import { Link } from "react-router-dom";
import styled from "styled-components";

export const ShowcaseItemWrapper = styled(Link)`
  width: 200px;
  min-width: 200px;
  max-width: 200px;
  overflow: hidden;
  margin: 2.5px;
  text-align: center;
  border-radius: 5px;
  display: inline-flex;
  flex-direction: column;
  height: 375px;
  min-height: 375px;
  max-height: 375px;
  background-color: #52525b;
  text-decoration: none;
  color: white;

  &:hover {
    color: white;
    cursor: pointer;
    filter: drop-shadow(0px 4px 6px #ff2f67);
  }

  img {
    width: 200px;
    height: 300px;
    min-height: 300px;
    max-height: 300px;
  }

  span {
    height: 75px;
    display: flex;
    font-size: 17px;
    align-items: center;
    justify-content: center;
  }
`;
