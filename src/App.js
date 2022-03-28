import { Redirect } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>
      <header>
        <MainHeader></MainHeader>
      </header>
      <main>
        <Switch>
        <Route path="/" exact>
            <Redirect to='/welcome'></Redirect>
          </Route>
          <Route path="/welcome">
            <Welcome></Welcome>
          </Route>
          <Route path="/products" exact>
            <Product></Product>
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
//websiteurl/welcome will render welcome component
//websiteurl/product will render product component
//websiteurl/product-detail/product-id will render product detail component of a product
//colon(:) indicates that this is dynamic

//in version 5, react will render all routes which starts with url given
//if we use switch then, only will be selected, 
//then only products page will be loaded when we load product details page
//so exact is used, so that the route is rendered only if url is matched fully exactly

//redirect- redirects user to mentioned route