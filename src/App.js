import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import {Home} from './views/Home';
import {Math_Medium} from './views/Math_Medium';
import {Math_Hard} from './views/Math_Hard';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return(
    
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/Math_medium" element={<Math_Medium />}>
        <Route index element={<Math_Medium />} />
      </Route>
      <Route path="/Math_hard" element={<Math_Hard />}>
        <Route index element={<Math_Hard />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );

}

export default App;
