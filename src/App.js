import './App.css';
import ClassList from './components/ClassList/ClassList';
import NewClass from './components/NewClass/NewClass';

function App() {
	return (
		<div className="App">
			<NewClass />
			<ClassList />
		</div>
	);
}

export default App;
