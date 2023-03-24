import logo from './logo.svg';
import './App.css';
import ConditionalRendering from './component/ConditionalRendering';
import ElementVariableConditioningRendering from './component/ElementVariableConditioningRendering';
import TueneryonditioningRendering from './component/TueneryonditioningRendering';
import ShortCircuitConditioningRendering from './component/ShortCircuitConditioningRendering';
import ComponentA from './component/ComponentA';
import { UserProvider } from './component/UseContext';
import ListRendering from './component/ListRendering';

function App() {
  let nameList=[{
    name:"suman",
    place:"haldia"
  },{
    name:"arijit",
    place:"howrah"
  }
]
  return (
    <UserProvider value="suman">
    <div className="App">
    <ConditionalRendering person={false}/>
    <ElementVariableConditioningRendering condition={false}/>
    <TueneryonditioningRendering condition={true}/>
    <ShortCircuitConditioningRendering condition={false}/>
    <ComponentA></ComponentA>
    <ListRendering value={nameList}/>
    </div>
    </UserProvider>
  );
}

export default App;
