import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {
  return (
    <Wrapper>
      <Screen />
      <ButtonBox>
        {btnValues.flat().map((btn, i) => (
          <Button
            key={i}
            value={btn}
          />
        ))}
      </ButtonBox>
      <h1>App</h1>
    </Wrapper>
  );
}

export default App;