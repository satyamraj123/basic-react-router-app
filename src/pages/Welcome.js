import { Route, Switch } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>This is welcome page</h1>
      <Route path="/welcome/:username">
        Welcome new user!
      </Route>
    </section>
  );
};

export default Welcome;
