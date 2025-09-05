// Palabras veterinarias poco conocidas, conjugadas
const data = [
  { letra: "A", verbo: "Acicalamos", desc: "Ejecutamos un acicalamiento clínico del pelaje para detectar ectoparásitos ocultos." },
  { letra: "B", verbo: "Bromatologamos", desc: "Analizamos y controlamos la calidad de alimentos para animales." },
  { letra: "C", verbo: "Calcificamos", desc: "Observamos y documentamos la formación de hueso en estudios ortopédicos." },
  { letra: "D", verbo: "Dermatologamos", desc: "Estudiamos e intervenimos patologías cutáneas con técnicas específicas." },
  { letra: "E", verbo: "Endoscopiamos", desc: "Introducimos un endoscopio para explorar cavidades internas." },
  { letra: "F", verbo: "Fisiopatologamos", desc: "Investigamos procesos anormales en tejidos y órganos." },
  { letra: "G", verbo: "Gastroenterologamos", desc: "Exploramos y tratamos trastornos digestivos animales." },
  { letra: "H", verbo: "Hematologamos", desc: "Realizamos estudios detallados de células sanguíneas." },
  { letra: "I", verbo: "Inmunohistoquimiamos", desc: "Aplicamos técnicas inmunohistoquímicas para diagnosticar tejidos." },
  { letra: "J", verbo: "Jeringamos", desc: "Administramos sustancias con jeringa de forma controlada." },
  { letra: "K", verbo: "Keratotomizamos", desc: "Intervenimos quirúrgicamente la córnea con técnicas de keratotomía." },
  { letra: "L", verbo: "Laringoscopiamos", desc: "Exploramos la laringe con instrumento especializado." },
  { letra: "M", verbo: "Microbiologamos", desc: "Analizamos microorganismos que afectan a los animales." },
  { letra: "N", verbo: "Necropsiamos", desc: "Ejecutamos necropsias para determinar causas de muerte." },
  { letra: "O", verbo: "Oftalmoscopiamos", desc: "Exploramos el fondo ocular con oftalmoscopio." },
  { letra: "P", verbo: "Parasitologamos", desc: "Estudiamos y diagnosticamos infestaciones parasitarias." },
  { letra: "Q", verbo: "Queratinizamos", desc: "Observamos procesos de queratinización en patologías dérmicas." },
  { letra: "R", verbo: "Rinoscopiamos", desc: "Examinamos cavidades nasales mediante rinoscopia." },
  { letra: "S", verbo: "Serologiamos", desc: "Aplicamos pruebas serológicas para detectar anticuerpos." },
  { letra: "T", verbo: "Traqueotomizamos", desc: "Realizamos una traqueotomía en casos de obstrucción respiratoria." },
  { letra: "U", verbo: "Uretroscopiamos", desc: "Exploramos la uretra con fines diagnósticos." },
  { letra: "V", verbo: "Vasectomizamos", desc: "Practicamos procedimientos de vasectomía en animales machos." },
  { letra: "W", verbo: "Westernbloteamos", desc: "Aplicamos la técnica de Western Blot para detección de proteínas." },
  { letra: "X", verbo: "Xenotransplantamos", desc: "Realizamos trasplantes experimentales entre especies distintas." },
  { letra: "Y", verbo: "Yodamos", desc: "Aplicamos soluciones yodadas como antiséptico." },
  { letra: "Z", verbo: "Zoopatologamos", desc: "Estudiamos patologías generales de los animales." },
];

// Elementos
const results = document.getElementById("results");
const empty = document.getElementById("empty");
const tpl = document.getElementById("cardTemplate");

// Render inicial
render(data);

function render(items){
  results.innerHTML = "";
  empty.hidden = items.length > 0;
  const frag = document.createDocumentFragment();
  items.forEach(it => {
    const node = tpl.content.cloneNode(true);
    node.querySelector(".card__letter").textContent = it.letra;
    node.querySelector(".card__title").textContent = it.verbo;
    node.querySelector(".card__desc").textContent = it.desc;
    frag.appendChild(node);
  });
  results.appendChild(frag);
}
