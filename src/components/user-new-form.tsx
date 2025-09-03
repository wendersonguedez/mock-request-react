import React from "react";
import useUser from "../hooks/use-user";
import type { User } from "../models/user";

export default function UserNewForm() {
	const formRef = React.useRef<HTMLFormElement>(null);
	const { createUser, userRequestStatus } = useUser();

	async function handleSubmit(e: React.FormEvent) {
		if (!formRef.current) return;

		e.preventDefault();

		const formData = new FormData(formRef.current);

		// if (!formData.get("name") || formData.get("id")) {
		// 	alert("Please fill in all fields");
		// 	return;
		// }

		const payload = {
			name: formData.get("name")?.toString().trim(),
			id: formData.get("id")?.toString().trim(),
		};

		await createUser(payload as User);
	}

	return (
		<form ref={formRef} onSubmit={handleSubmit}>
			<div>
				<input placeholder="Nome" type="text" name="name" />
			</div>

			<div>
				<input placeholder="Username" type="text" name="id" />
			</div>

			<div>
				<button type="submit" style={{ marginTop: 8 }}>
					{userRequestStatus === "saving" ? "Criando..." : "Criar usuário"}
				</button>
			</div>
		</form>
	);
}
