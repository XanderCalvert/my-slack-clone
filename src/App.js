import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
	return (
		<div className="app">
			<h1>Let's build a slack clone!</h1>

			{/* Header */}
			<Header />
			<div className="app__body">
				{/* Side Bar */}
				<Sidebar />
				{/* React Router -> Chat screen */}
			</div>
		</div>
	);
}

export default App;
