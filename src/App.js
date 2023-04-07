import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

const animation = keyframes`
  0%{
    transform: rotate(0deg);
    border-radius: 0%;
  }
  50%{
    border-radius: 100%;
  }
  100%{
    transform: rotate(360deg);
    border-radius: 0%;
  }
`;

const Emoji = styled.span`
  font-size: 4rem;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${animation} 1s linear infinite;
  ${Emoji} {
    &:hover {
      font-size: 5rem;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Wrapper as="header">
      <Box>
        <Emoji as="div">😎</Emoji>
      </Box>
      <Emoji as="div">🔥</Emoji>
    </Wrapper>
  );
}

export default App;
