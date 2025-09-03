import React from "react";
import { fetcher } from "../helpers/api";
import type { User } from "../models/user";

export default function useUser() {
	const [user, setUser] = React.useState<User | null>(null);

	const [requestStatus, setRequestStatus] = React.useState<
		"idle" | "loading" | "error" | "success"
	>("idle");

	const getUser = React.useCallback(async (username: string) => {
		try {
			setRequestStatus("loading");

			const data = await fetcher(`/users?name=${username}`);

			if (data && data.length > 0) {
				setUser(data[0]);
				setRequestStatus("success");
			}
		} catch (error) {
			console.log(error);

			alert("Error fetching user data");

			setRequestStatus("error");
		} finally {
			setRequestStatus("idle");
		}
	}, []);

	return {
		user,
		userRequestStatus: requestStatus,
		getUser,
	};
}
