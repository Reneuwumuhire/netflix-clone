const API_KEY = "a5d61bcc289784a9493d5783ee2331cf";

const requests = {
    fetchTrending: `/trending/movie/day?api_key=${API_KEY}`,
    fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&&language=en-US&page=1`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTv: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
}
export default requests;