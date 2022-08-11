import {Routes,Route} from 'react-router-dom'
import Editor from "./components/Editor";
import Nav from "./components/Nav";
import SignUp from './components/SignUp'
import Login from './components/Login'
function App() {

  return (
      <div className="">


<Nav />

<Routes>
<Route path="/login" element={<Login />} />
<Route path="/signup" element={<SignUp />} />
<Route path="/" element={<Editor />} />
</Routes>

    </div>

  );
}

export default App;
