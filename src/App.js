import logo from './logo.svg';
import './App.css';
import ConditionalRendering from './component/ConditionalRendering';
import ElementVariableConditioningRendering from './component/ElementVariableConditioningRendering';
import TueneryonditioningRendering from './component/TueneryonditioningRendering';
import ShortCircuitConditioningRendering from './component/ShortCircuitConditioningRendering';
import ComponentA from './component/ComponentA';
import { UserProvider } from './component/UseContext';
function App() {
  return (
    <UserProvider value="suman">
    <div className="App">
    <ConditionalRendering person={false}/>
    <ElementVariableConditioningRendering condition={false}/>
    <TueneryonditioningRendering condition={true}/>
    <ShortCircuitConditioningRendering condition={false}/>
    <ComponentA></ComponentA>
    </div>
    </UserProvider>
  );
}

export default App;
