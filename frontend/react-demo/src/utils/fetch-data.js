/**
 * Asynchronously fetches JSON data from the specified URL using the Fetch API.
 *
 * @param {string} url - The URL to fetch JSON data from.
 * @returns {Promise<*>} A Promise that resolves to the parsed JSON data.
 *
 * @throws {Error} If the HTTP request fails or if the response is not a valid JSON.
 *
 * @example
 * // Usage:
 * try {
 *   const url = 'https://api.example.com/data';
 *   const data = await fetchData(url);
 *   console.log(data);
 * } catch (error) {
 *   console.error('Error fetching data:', error.message);
 * }
 */
async function fetchData(url) {
	const response = await fetch(url);
	const data = await response.json();
	return data;
}

export default fetchData;
