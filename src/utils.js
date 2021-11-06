export const getMoviesBySearchTerm = async (searchTerm) => {
	const url = new URL("http://www.omdbapi.com");
	url.searchParams.append("apikey", "a94b905c");
	url.searchParams.append("s", searchTerm);
	console.log(url);
	return await fetch(url);
}
export const getMovieDetailsById = async (id) => {
	const url = new URL("http://www.omdbapi.com");
	url.searchParams.append("apikey", "a94b905c");
	url.searchParams.append("i", id);
	return await fetch(url);
}
