import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";

export const Wrapper = styled.div``;

export const StyledButton = styled.div`
  z-index: 100;
  position: fixed;
  top: 65px;
  right: 30px;
  :hover {
    background-color: grey;
    opacity: 0.15;
    border-radius: 100%;
    color: black;
  }
`;
