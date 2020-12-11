import Home from "./Home";
import "../Styles/App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./Contact";
import Projects from "./Projects";
import About from "./About";
import Interests from "./Interests";

function App() {
	return (
		<div className="app">
			<Router>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/contact" exact>
					<Contact />
				</Route>
				<Route path="/projects" exact>
					<Projects />
				</Route>
				<Route path="/about" exact>
					<About />
				</Route>
				<Route path="/interests" exact>
					<Interests />
				</Route>
			</Router>
		</div>
	);
}

export default App;
