import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { NavBar } from './components';
import { Home, About, Contact, Projects } from './pages';

function App() {
	return (
		<main className="bg-slate-300/20 h-full">
			<Router>
				<NavBar />
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/*"
						element={
							<>
								<Routes>
									<Route
										path="/about"
										element={<About />}
									/>
									<Route
										path="/projects"
										element={<Projects />}
									/>
									<Route
										path="/contact"
										element={<Contact />}
									/>
								</Routes>
								{/* <Footer /> */}
							</>
						}
					/>
				</Routes>
			</Router>
		</main>
	);
}

export default App;
