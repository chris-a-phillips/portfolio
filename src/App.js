import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Resume from './pages/resume';
import { PageWrapper } from './pages/PageElements';

function App() {
	return (
		<Router>
			<Switch>
        <PageWrapper>
          <Route path='/' exact component={Home} />
          <Route path='/resume' exact component={Resume} />
        </PageWrapper>
			</Switch>
		</Router>
	);
}

export default App;
