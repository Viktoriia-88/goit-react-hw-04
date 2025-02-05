import axios from "axios";

export async function fetchImg(query, page) {
    axios.defaults.baseURL = "https://api.unsplash.com";
    const apiKey = '-ph31JVT5zj9p_ox4Yn2qfHyq-s8JlERZVHPuTs_yK8';

    const response = await axios.get("/search/photos/?", {
        params: {
            client_id: apiKey,
            query: query,
            page: page,
            per_page: 15,
        },
    });
    return response.data;
}