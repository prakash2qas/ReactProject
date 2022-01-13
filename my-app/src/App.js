import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Message from './Components/Message';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';

function App() {
  return (
    <div className="App">
      {/* <Greet name="rahul" age="23">
      <p>Hello children</p>
      </Greet>
      <Greet name="raju" age="25">
      <button>action</button>
      </Greet>
      <Greet name='mohan' age="26" />
      <Welcome name='rahul' age='23'>
      <button>click me!</button>
      </Welcome>
      <Welcome name='raju' age='25'/> */}
      {/* <Message/> */}
      {/* <Counter/> */}
      {/* <Greet name='mohan' age="26" />
      <Welcome name='raju' age='25'/> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <EventBind /> */}
      <ParentComponent />
    </div>
  );
}

export default App;
