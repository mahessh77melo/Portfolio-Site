import Home from "./Home";
import "../Styles/App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Projects from "./Projects";
import About from "./About";

function App() {
	return (
		<div className="app">
			<Router>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/projects" exact>
					<Projects />
				</Route>
				<Route path="/about" exact>
					<About />
				</Route>
			</Router>
		</div>
	);
}

export default App;
