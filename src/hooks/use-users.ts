import { useQuery } from "@tanstack/react-query";
import type { User } from "../models/user";
import { fetcher } from "../helpers/api";

export default function useUsers() {
	/**
	 * A função useQuery é um hook que facilita a busca e o gerenciamento de dados
	 * assíncronos em componentes React.
	 *
	 * - queryKey: Uma chave única que identifica a consulta retornada.
	 * - queryFn: A função assíncrona que busca os dados.
	 */
	const { data, isLoading } = useQuery<User[]>({
		queryKey: ["users"],
		queryFn: () => fetcher("/users"),
	});

	return {
		users: data || [],
		isLoadingUsers: isLoading,
	};
}
