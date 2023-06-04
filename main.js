/* JSON Data retriever*/
async function getData() {
  const localDataPath = "./data.json";
  const localResponse = await fetch(localDataPath);
  const localData = await localResponse.json();
  console.info("Data successfully retrieved from local JSON. 🐱");
  return localData;
}

async function main() {
  const data = await getData();
  // Event filter
  const filteredEvents = [];
  const searchBar = document.querySelector("#searchBar");
}
