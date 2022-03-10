import { Link, Route } from "wouter";
import InboxPage from "./pages/inbox-page"
function App() {
  return (
    <div>
      <Link href="/users/1">
        <p>Profile</p>
      </Link>
      <Link href="/inbox">
        <p>inbox</p>
      </Link>
      <Link href="/about">
        <p>About</p>
      </Link>

      <Route path="/about">About Us</Route>
      <Route path="/users/:name">
        {(params) => <div>Hello, {params.name}!</div>}
      </Route>
      <Route path="/inbox" component={InboxPage} />
    </div>
  );
};

export default App;