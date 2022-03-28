import { Link } from "react-router-dom";
//Why Link?
//using Link current page wont refresh
//using <a></a> will refresh current page, then render the route.
const MainHeader = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/welcome">Go to Welcome Page</Link>
          </li>
          <li>
            <Link to="/product">Go to Product Page</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
