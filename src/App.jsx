import { Switch, Route } from 'react-router-dom';


import { Header } from './components/Header';
import { Main } from './components/Main';
import { HomePage } from './pages/HomePage';
import { Details } from './pages/Details';
import { NotFound } from './pages/NotFound';

function App() {

	return (
		<>
			<Header />
			<Main>
				<Switch>
					<Route exact path='/'>
						<HomePage />
					</Route>

					<Route path='/country/:name' component={Details} />

					<Route component={NotFound} />
				</Switch>
			</Main>
		</>
	);
}

export default App;
