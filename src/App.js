import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Course from "./pages/Course";
import CourseDashboard from "./components/Course/CourseDashboard";
import Login from "./pages/Login";
import Coursenames from './components/Course/Coursenames'
import Quiz from "./pages/Quiz";
import Payment from "./pages/payment";
import OrderCheckpoint from "./pages/OrderCheckpoint";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/course" exact component={Course} />
        <Route path="/course/dashboard" exact component={CourseDashboard} />
        <Route path="/course/:name" exact component={Coursenames} />
        <Route path="/login" exact component={Login} />
        <Route path="/quiz" exact component={Quiz} />
        <Route path="/payment" exact component={Payment} />
        <Route path="/ordercheckpoint" exact component={OrderCheckpoint} />
        <Route path="/dashboard" exact component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
