import './App.css';
import { React } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import { PageWrapper } from './pages/PageElements';

function App() {
	return (
		<Router>
			<Switch>
				<PageWrapper>
					<Route path='/' exact component={Home} />
				</PageWrapper>
			</Switch>
		</Router>
	);
}

export default App;
