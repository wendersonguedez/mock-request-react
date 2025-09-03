import UserInfo from "./components/user-info";
import UserNewForm from "./components/user-new-form";

function App() {
	return (
		<>
			<UserInfo />
			<hr />
			<h2>Criar novo usuário</h2>
			<UserNewForm />
		</>
	);
}

export default App;
