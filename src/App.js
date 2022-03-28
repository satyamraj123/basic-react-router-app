
import { Route } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Product from "./pages/Product";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>

      <header><MainHeader></MainHeader></header>
<main><Route path='/welcome'><Welcome></Welcome></Route>
      <Route path='/product'><Product></Product></Route></main>
      
    </div>
  );
}

export default App;
//websiteurl/welcome will render welcome component
//websiteurl/product will render product component