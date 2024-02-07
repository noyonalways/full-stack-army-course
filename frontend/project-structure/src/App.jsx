import styled from "styled-components";
import "./App.css";

const Wrapper = styled.div`
  padding: 4em;
  background: papayawhip;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

function App() {
  return (
    <>
      <Wrapper>
        <Title>Hello World</Title>
      </Wrapper>
    </>
  );
}

export default App;
