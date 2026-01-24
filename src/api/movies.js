import apiClient from "./apiClient";

export async function getMovies() {
    const response = await apiClient.get("/posts");
    return response.data;
}

export async function createMovie(movie) {
    const response = await apiClient.post("/posts", movie);
    return response.data;
}

export async function deleteMovie(id) {
    await apiClient.delete('/posts/${id}')
    return id;
}