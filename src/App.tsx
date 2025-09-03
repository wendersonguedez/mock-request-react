import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import UserInfo from "./components/user-info";
import UserNewForm from "./components/user-new-form";
import UserList from "./components/users-list";

/**
 * TanStack Query (React Query) é uma biblioteca poderosa para gerenciamento de estado e
 * cache de dados assíncronos em aplicações React. Ela facilita a busca, o armazenamento em cache,
 * a sincronização e a atualização de dados remotos, proporcionando uma experiência de usuário.
 */
const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<div>
				<UserInfo />
				<hr />
			</div>

			<div>
				<h2>Criar novo usuário</h2>
				<UserNewForm />
				<hr />
			</div>

			<div>
				<UserList />
			</div>
		</QueryClientProvider>
	);
}

export default App;
