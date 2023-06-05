async function getData() {
  const localDataPath = "./data.json";
  const localResponse = await fetch(localDataPath);
  const localData = await localResponse.json();
  console.info("Data successfully retrieved from local JSON. 🐱");
  return localData;
}

async function main() {
  const data = await getData();
  const searchBar = document.querySelector("#searchBar");
  const cardGalleryHTML = document.querySelector("#gallery");

  searchBar.addEventListener("input", (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredQuestions = data.filter((question) => {
      return question.Pregunta.toLowerCase().includes(searchTerm);
    });

    let cardGallery = "";

    filteredQuestions.forEach((question) => {
      const cardTemplate = `
          <!-- Card -->
          <div class="card">
              <h2>${question.Pregunta}</h2>
              <ul class="options">
                  <li class="option">
                      <input type="radio" id="option1" name="answer" value="A">
                      <label for="option1">${question.RespuestaA}</label>
                  </li>
                  <li class="option">
                      <input type="radio" id="option2" name="answer" value="B">
                      <label for="option2">${question.RespuestaB}</label>
                  </li>
                  <li class="option">
                      <input type="radio" id="option3" name="answer" value="C">
                      <label for="option3">${question.RespuestaC}</label>
                  </li>
              </ul>
          </div>
        `;

      cardGallery += cardTemplate;
    });

    cardGalleryHTML.innerHTML = cardGallery;
  });

  // Initial display of all questions
  let cardGallery = "";

  data.forEach((question) => {
    const cardTemplate = `
        <!-- Card -->
        <div class="card">
            <h2>${question.Pregunta}</h2>
            <ul class="options">
                <li class="option">
                    <input type="radio" id="option1" name="answer" value="A">
                    <label for="option1">${question.RespuestaA}</label>
                </li>
                <li class="option">
                    <input type="radio" id="option2" name="answer" value="B">
                    <label for="option2">${question.RespuestaB}</label>
                </li>
                <li class="option">
                    <input type="radio" id="option3" name="answer" value="C">
                    <label for="option3">${question.RespuestaC}</label>
                </li>
            </ul>
        </div>
      `;

    cardGallery += cardTemplate;
  });

  cardGalleryHTML.innerHTML = cardGallery;
}

main();
