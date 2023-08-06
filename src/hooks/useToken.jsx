
import { useSessionStorage } from "./useSessionStorage";

export default function useToken() {
    const [token, setToken] = useSessionStorage("token", null);

    return [
        token,
        setToken
    ]
}