import './App.css';
import cat from './assets/foster-lake.jpg';
import { BsFillCartCheckFill } from "react-icons/bs";

function App() {
  let x = 10;
  return (
    <div id='box'>
      <h1>Hello this is app</h1>
      <h1>{x}</h1>
      <BsFillCartCheckFill size={100} color='red'/>
      <img width={'100px'} src={cat} alt="Cat image" />
      {/* <img src="https://my.alfred.edu/zoom/_images/foster-lake.jpg" alt="" /> */}
    </div>
  );
}

export default App;