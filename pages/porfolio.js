function getTrabajos() {
  return fetch(
    "https://cdn.contentful.com/spaces/u95fc6bcvg28/environments/master/entries?access_token=kYiVmPoDyVK6xxgcH0f4GkNnRTrqB125NcPy-htVogQ&content_type=trabajos"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const collectionResult = data.items.map((item) => {
        return {
          title: item.fields.titulo,
          description: item.fields.descripcion,
          image: "",
        };
      });
      const imagen = data.includes.Asset;

      for (let i = 0; i < collectionResult.length; i++) {
        for (let x = 0; x < imagen.length; x++) {
          if (collectionResult[i].title == imagen[x].fields.title) {
            var url = imagen[x].fields.file.url;
            collectionResult[i].image = url;
          }
        }
      }

      return collectionResult;
    });
}

function cardServicio(params = {}) {
  const template = document.querySelector("#card-servicio");
  const contenedroDondeVaTemplate = document.querySelector(".cards");

  template.content.querySelector(".card-servicio-title").textContent =
    params.title;
  template.content.querySelector(".card-servicio__text").textContent =
    params.description;
  template.content.querySelector(".card-servicio__img").src = params.image;

  const clone = document.importNode(template.content, true);
  contenedroDondeVaTemplate.appendChild(clone);
}

function main() {
  botonMenu();
  getTrabajos().then((res) => {
    for (const w of res) {
      cardServicio(w);
    }
  });
}
main();
