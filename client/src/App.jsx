import Chat from './components/chat/Chat';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<header>
				<h1>Header</h1>
			</header>
			<Chat />
		</>
	);
};

export default App;
