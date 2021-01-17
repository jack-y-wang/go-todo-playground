import logo from './logo.svg';
import './App.css';

import { Container } from 'semantic-ui-react';
import ToDoList from './components/ToDoList';

function App() {
	return (
		<div>
			<Container>
				<ToDoList />
			</Container>
		</div>
	);
}
export default App;
