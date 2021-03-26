import logo from './logo.svg';
import './App.css';
import Display from './Display';
import Major from './Major';
import Minor from './Minor';

function App() {
  return (
    <div>
     <div class="container">

        <div class="col-md-8 col-md-offset-2">
          <Display value = "0" />
          <Major value1 = "AC" value2 = "+/-" value3 = "%" value4 = "÷" />
          <Major value1 = "7" value2 = "8" value3 = "9" value4 = "X" />
          <Major value1 = "4" value2 = "5" value3 = "6" value4 = "-" />
          <Major value1 = "1" value2 = "2" value3 = "3" value4 = "+" />
          <Minor value1 = "0" value2 = "." value3 = "=" /> 
      
        </div>
      </div>
    </div>
  );
}

export default App;
