import React from "react";
import useUser from "../hooks/use-user";

export default function UserInfo() {
	const { user, userRequestStatus, getUser } = useUser();

	React.useEffect(() => {
		getUser("wend");
	}, [getUser]);

	if (userRequestStatus === "loading") {
		return <p>Carregando os dados do usuário</p>;
	}

	return (
		<>
			<ul className="user-info">
				<li>Nome: {user?.name}</li>
				<li>Id: {user?.id}</li>
			</ul>
		</>
	);
}
