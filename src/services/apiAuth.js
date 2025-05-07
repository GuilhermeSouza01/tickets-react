import { setAuthToken} from "./axios";
import axiosInstance from "./axios";

export async function login({email, password}) {
  try {
    const response = await axiosInstance.post("/login", {
      email,
      password,
    });

    const token = response?.data?.data?.token;

    if (token) {
      setAuthToken(token);
    }  else {
      console.error("Token not received");
      throw new Error("Token not received from the API");
    }

    return response.data;
  } catch (error) {
    console.error("Api error:", error.response.data);
    throw new Error(error.response.data.message || "An error occurred while logging in");
  }
}
