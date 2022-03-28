
import { Route } from "react-router-dom";
import Product from "./pages/Product";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>

      <h2>Let's get started!</h2>

      <Route path='/welcome'><Welcome></Welcome></Route>
      <Route path='/product'><Product></Product></Route>
    </div>
  );
}

export default App;
//websiteurl/welcome will render welcome component
//websiteurl/product will render product component