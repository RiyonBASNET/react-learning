import apiClient from "./apiClient";

export async function getMovies() {
    const response = await apiClient.get("/posts");
    return response.data;
}
