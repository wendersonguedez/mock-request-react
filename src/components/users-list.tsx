import useUsers from "../hooks/use-users";

export default function UserList() {
	const { users, isLoadingUsers } = useUsers();

	if (isLoadingUsers) {
		return <p>Carregando usuários...</p>;
	}

	return (
		<div>
			<h2>Lista de Usuários</h2>
			<ul>
				{users.map((user) => (
					<li key={user.id}>
						Nome: {user.name} / Id: ({user.id})
					</li>
				))}
			</ul>
		</div>
	);
}
