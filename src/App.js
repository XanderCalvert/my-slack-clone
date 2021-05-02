import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Chat from "./Chat";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
	const [{ user }, dispatch] = useStateValue();

	return (
		<div className="app">
			<Router>
				{!user ? (
					<Login />
				) : (
					<>
						{/* Header */}
						<Header />
						<div className="app__body">
							{/* Side Bar */}
							<Sidebar />
							{/* React Router -> Chat screen */}
							<Switch>
								<Route path="/room/:roomId">
									<Chat />
								</Route>
								<Route path="/">
									<Chat />
								</Route>
							</Switch>
						</div>
					</>
				)}
			</Router>
		</div>
	);
}

export default App;
