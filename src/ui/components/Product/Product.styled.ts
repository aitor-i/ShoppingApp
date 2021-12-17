import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-family: Arial, Helvetica, sans-serif;
  border: 1px solid lightblue;
  padding-bottom: 20px;
  border-radius: 20px;

  div {
    flex: 1;
  }

  button {
    border-radius: 0 0 20px 20px;
  }

  img {
    max-height: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }
`;

export default Wrapper;
