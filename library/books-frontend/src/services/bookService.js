export default async function getBooks(token = "", disableHttps=false) {
  const BASE_URL = process.env.REACT_APP_BASE_URL || "localhost:7080";
  const ENDPOINT = process.env.REACT_APP_ENDPOINT || "/api/v2/books";
  const URI = `${BASE_URL}/${ENDPOINT}`.replace("//", "/");
  const FULL_URL = `${disableHttps ? "http" : "https"}://${URI}`;
  console.log(`Fetching data from ${FULL_URL}`);
  const data = fetch(FULL_URL, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}` ,
    },
  });
  return (await data).json();
}