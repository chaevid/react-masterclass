import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
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

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${animation} 2s linear infinite;
  span {
    font-size: 4rem;
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
        <span>😎</span>
      </Box>
    </Wrapper>
  );
}

export default App;
