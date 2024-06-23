window.addEventListener("DOMContentLoaded", loadContent);
//#region atributos
const sectionQuestions = document.getElementById("questions");
const sectionPackages = document.getElementById("packages");

const questions = [
  {
    title: "Destinos turisticos",
    text: "Tenemos muchas variedades de distintas regionales, nacionales e internacionales",
    img: "./src/img/hermes.png",
  },
  {
    title: "Excelente asesoría",
    text: "Nosotros tenemos excelentes asesores que guían en todo el proceso.",
    img: "./src/img/hermes.png",
  },
  {
    title: "Planes asequibles",
    text: "Tenemos varios planes turísticos que son asequibles para el bolsillo dé todos.",
    img: "./src/img/hermes.png",
  },
  {
    title: "Reconocimiento",
    text: " Llevamos mas de 1 mes en el mercado ofreciendo paquetes a nivel nacional e internacional.",
    img: "./src/img/hermes.png",
  },
];

const packages = [
  {
    name: "Cartagena",
    img: "./src/img/hermes.png",
    location: "🌎 Cartagena, Colombia",
    description: [
      "Recorrido por la muralla",
      "Viaje en lancha a Playa Blanca",
      "Hospedaje 3 noches (Hotel Bocagrande)",
      "Alimentación: 4 desayunos y 3 cenas",
      "Transporte completo",
    ],
    price: 680000,
    date: "04/05/2024",
  },
  {
    name: "Santa Marta",
    img: "./src/img/hermes.png",
    location: "🌎 Santa Marta, Colombia",
    description: [
      "Recorrido por el Rodadero",
      "Viaje en lancha a Playa Cristal",
      "Hospedaje 3 noches (Hotel Bello Horizonte)",
      "Alimentación: 4 desayunos y 3 cenas",
      "Transporte completo",
    ],
    price: 780000,
    date: "04/05/2024",
  },
  {
    name: "San Andres",
    img: "./src/img/hermes.png",
    location: "🌎 San Andres, Colombia",
    description: [
      "Recorrido por la isla",
      "Viaje en lancha a Johnny Cay",
      "Hospedaje 3 noches (Hotel Decameron)",
      "Alimentación: 4 desayunos y 3 cenas",
      "Transporte completo",
    ],
    price: 980000,
    date: "04/05/2024",
  },
  {
    name: "Bogota",
    img: "./src/img/hermes.png",
    location: "🌎 Bogota, Colombia",
    description: [
      "Recorrido por la ciudad",
      "Visita a Monserrate",
      "Hospedaje 3 noches (Hotel Sheraton)",
      "Alimentación: 4 desayunos y 3 cenas",
      "Transporte completo",
    ],
    price: 780000,
    date: "04/05/2024",
  },
];
//#endregion

//#region funciones
function loadContent() {
  packages.forEach((package) => {
    const article = document.createElement("article");
    article.classList.add(
      "card",
      "col-9",
      "col-sm-7",
      "col-md-2",
      "text-center",
      "border",
      "border-1",
      "border-black",
      "m-2",
      "p-2",
      "overflow-hidden"
    );
    article.style.width = "15rem";
    article.innerHTML = `
          <h5>${package.name}</h5>
          <img src="${
            package.img
          }" class="card-img-top" style="height: 100px" />
          <div class="text-start">
            <p class="fw-bold">${package.location}</p>
            <ul>
              ${package.description.map((item) => `<li>${item}</li>`).join("")}
            </ul>
            <p>Precio: ${package.price}</p>
            <p>Fecha: ${package.date}</p>
            <a href="./pages/reservar/reservas.html" class="btn btn-primary w-100">Reservar</a>
          </div>
        `;
    sectionPackages.appendChild(article);
  });
  questions.forEach((question) => {
    const article = document.createElement("article");
    article.classList.add(
      "card",
      "col-9",
      "col-sm-7",
      "col-md-2",
      "text-center",
      "border",
      "border-1",
      "border-black",
      "m-2",
      "overflow-hidden"
    );
    article.innerHTML = `
        <div class="card-body py-2">
        <img src="${question.img}" alt="hermes" style="width: 60px" />
        <p class="card-title fw-bold">${question.title}</p>
        <p class="card-text">${question.text}</p>
        </div>
    `;
    sectionQuestions.appendChild(article);
  });
}

//#endregion

//#region eventos
//#endregion
