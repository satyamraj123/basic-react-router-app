import { NavLink } from "react-router-dom";
import classes from './MainHeader.module.css';
//Why Link?
//using Link current page wont refresh
//using <a></a> will refresh current page, then render the route.
const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/welcome">Welcome</NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/products">Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
