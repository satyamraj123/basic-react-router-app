import { Link } from "react-router-dom";

const Product = () => {
  return (
    <section>
      <h1>This is Product page</h1>
      <ul>
          
        <li><Link to='/products/p1'>p1</Link></li>
        <li><Link to='/products/p2'>p2</Link></li>
        <li><Link to='/products/p3'>p3</Link></li>
        <li><Link to='/products/p4'>p4</Link></li>
      </ul>
    </section>
  );
};

export default Product;
