// 100 palabras raras, conjugadas
const data = [
  { letra:"A", verbo:"Acicalamos", desc:"Realizamos acicalamiento clínico en búsqueda de ectoparásitos." },
  { letra:"A", verbo:"Anestesiamos", desc:"Administramos anestesia en procedimientos poco comunes." },
  { letra:"A", verbo:"Auscultamos", desc:"Escuchamos sonidos cardiacos y respiratorios con detalle." },
  { letra:"A", verbo:"Acariciamos", desc:"Evaluamos respuesta emocional como parte de etología clínica." },

  { letra:"B", verbo:"Bromatologamos", desc:"Analizamos composición de alimentos balanceados." },
  { letra:"B", verbo:"Biosegurizamos", desc:"Implementamos protocolos de bioseguridad en áreas críticas." },
  { letra:"B", verbo:"Bacteriologamos", desc:"Estudiamos bacterias en muestras animales." },
  { letra:"B", verbo:"Balanceamos", desc:"Ajustamos raciones alimenticias con precisión." },

  { letra:"C", verbo:"Calcificamos", desc:"Registramos formación ósea en radiología." },
  { letra:"C", verbo:"Citodiagnosticamos", desc:"Determinamos diagnósticos celulares por citología." },
  { letra:"C", verbo:"Cromatografiamos", desc:"Aplicamos cromatografía en análisis bioquímicos." },
  { letra:"C", verbo:"Cardiografiamos", desc:"Realizamos registros electrocardiográficos." },

  { letra:"D", verbo:"Dermatologamos", desc:"Investigamos patologías de piel en especies menores." },
  { letra:"D", verbo:"Desbridamos", desc:"Retiramos tejido necrótico en heridas." },
  { letra:"D", verbo:"Desensibilizamos", desc:"Reducimos reacciones alérgicas mediante terapia." },
  { letra:"D", verbo:"Dosificamos", desc:"Ajustamos dosis exactas de fármacos." },

  { letra:"E", verbo:"Endoscopiamos", desc:"Exploramos cavidades con endoscopio flexible." },
  { letra:"E", verbo:"Electrocutamos", desc:"Aplicamos eutanasia controlada por electricidad (raro)." },
  { letra:"E", verbo:"Embriologamos", desc:"Estudiamos desarrollo embrionario animal." },
  { letra:"E", verbo:"Esterilizamos", desc:"Realizamos esterilización quirúrgica o física de material." },

  { letra:"F", verbo:"Fisiopatologamos", desc:"Investigamos alteraciones fisiológicas." },
  { letra:"F", verbo:"Fecundamos", desc:"Inducimos fecundación asistida." },
  { letra:"F", verbo:"Fermentamos", desc:"Controlamos fermentaciones digestivas experimentales." },
  { letra:"F", verbo:"Frotamos", desc:"Tomamos muestras con hisopado clínico." },

  { letra:"G", verbo:"Gastroenterologamos", desc:"Diagnosticamos trastornos digestivos." },
  { letra:"G", verbo:"Genotipamos", desc:"Determinamos genotipos de interés zootécnico." },
  { letra:"G", verbo:"Gametizamos", desc:"Estudiamos procesos relacionados con gametos." },
  { letra:"G", verbo:"Galvanizamos", desc:"Aplicamos corriente galvánica en terapias experimentales." },

  { letra:"H", verbo:"Hematologamos", desc:"Analizamos parámetros hematológicos." },
  { letra:"H", verbo:"Histopatologamos", desc:"Estudiamos tejidos en laboratorio." },
  { letra:"H", verbo:"Hidratamos", desc:"Restituimos líquidos a pacientes deshidratados." },
  { letra:"H", verbo:"Hepatizamos", desc:"Documentamos alteraciones hepáticas raras." },

  { letra:"I", verbo:"Inmunohistoquimiamos", desc:"Aplicamos técnicas de inmunohistoquímica." },
  { letra:"I", verbo:"Incidimos", desc:"Realizamos incisiones quirúrgicas." },
  { letra:"I", verbo:"Intubamos", desc:"Colocamos tubos endotraqueales." },
  { letra:"I", verbo:"Isotopizamos", desc:"Marcamos con isótopos radioactivos." },

  { letra:"J", verbo:"Jeringamos", desc:"Administramos fármacos con jeringa." },
  { letra:"J", verbo:"Juzgamos", desc:"Evaluamos críticamente procedimientos clínicos." },
  { letra:"J", verbo:"Juntamos", desc:"Acopiamos resultados en expediente digital." },
  { letra:"J", verbo:"Jubilamos", desc:"Retiramos animales de reproducción intensiva." },

  { letra:"K", verbo:"Keratotomizamos", desc:"Realizamos incisión corneal." },
  { letra:"K", verbo:"Kinesioterapiamos", desc:"Aplicamos ejercicios terapéuticos." },
  { letra:"K", verbo:"Kinetografiamos", desc:"Registramos movimientos animales." },
  { letra:"K", verbo:"Kriocauterizamos", desc:"Destruimos tejidos con crioterapia." },

  { letra:"L", verbo:"Laringoscopiamos", desc:"Exploramos laringe." },
  { letra:"L", verbo:"Lactamos", desc:"Inducimos lactancia en hembras." },
  { letra:"L", verbo:"Lipoaspiramos", desc:"Extraemos grasa para estudios." },
  { letra:"L", verbo:"Leucocitamos", desc:"Contamos leucocitos en laboratorio." },

  { letra:"M", verbo:"Microbiologamos", desc:"Estudiamos microorganismos." },
  { letra:"M", verbo:"Microscopiamos", desc:"Examinamos al microscopio." },
  { letra:"M", verbo:"Mielografiamos", desc:"Realizamos estudios medulares." },
  { letra:"M", verbo:"Monocitamos", desc:"Medimos monocitos en sangre." },

  { letra:"N", verbo:"Necropsiamos", desc:"Practicamos necropsias." },
  { letra:"N", verbo:"Neonatologamos", desc:"Atendemos neonatos animales." },
  { letra:"N", verbo:"Nervamos", desc:"Estudiamos nervaduras anatómicas." },
  { letra:"N", verbo:"Nutricionamos", desc:"Diseñamos planes de nutrición." },

  { letra:"O", verbo:"Oftalmoscopiamos", desc:"Exploramos fondo ocular." },
  { letra:"O", verbo:"Osteotomizamos", desc:"Seccionamos huesos quirúrgicamente." },
  { letra:"O", verbo:"Otoscopiamos", desc:"Inspeccionamos oído." },
  { letra:"O", verbo:"Oxigenamos", desc:"Administramos oxígeno terapéutico." },

  { letra:"P", verbo:"Parasitologamos", desc:"Analizamos parásitos." },
  { letra:"P", verbo:"Patologamos", desc:"Diagnosticamos lesiones." },
  { letra:"P", verbo:"Plasmidizamos", desc:"Usamos plásmidos en biotecnología." },
  { letra:"P", verbo:"Proteomizamos", desc:"Analizamos proteínas animales." },

  { letra:"Q", verbo:"Queratinizamos", desc:"Estudiamos queratinización." },
  { letra:"Q", verbo:"Quimioprofilactamos", desc:"Aplicamos quimioprofilaxis preventiva." },
  { letra:"Q", verbo:"Quirurgizamos", desc:"Ejecutamos procedimientos quirúrgicos." },
  { letra:"Q", verbo:"Quimotipamos", desc:"Determinamos quimiotipos bacterianos." },

  { letra:"R", verbo:"Rinoscopiamos", desc:"Exploramos cavidades nasales." },
  { letra:"R", verbo:"Radiografiamos", desc:"Tomamos radiografías." },
  { letra:"R", verbo:"Rehidratamos", desc:"Administramos fluidos." },
  { letra:"R", verbo:"Reproducimos", desc:"Asistimos procesos reproductivos." },

  { letra:"S", verbo:"Serologiamos", desc:"Realizamos pruebas serológicas." },
  { letra:"S", verbo:"Secuenciamos", desc:"Determinamos secuencias genéticas." },
  { letra:"S", verbo:"Suturamos", desc:"Cerramos heridas." },
  { letra:"S", verbo:"Sedamos", desc:"Aplicamos sedación controlada." },

  { letra:"T", verbo:"Traqueotomizamos", desc:"Abrimos tráquea." },
  { letra:"T", verbo:"Tonometrizamos", desc:"Medimos presión intraocular." },
  { letra:"T", verbo:"Timpanizamos", desc:"Estudiamos tímpanos." },
  { letra:"T", verbo:"Tipificamos", desc:"Determinamos tipos celulares." },

  { letra:"U", verbo:"Uretroscopiamos", desc:"Exploramos uretra." },
  { letra:"U", verbo:"Ultrasonografiamos", desc:"Realizamos ecografías." },
  { letra:"U", verbo:"Urocultivamos", desc:"Hacemos cultivos de orina." },
  { letra:"U", verbo:"Ubiquitinamos", desc:"Analizamos proteínas ubiquitinadas." },

  { letra:"V", verbo:"Vasectomizamos", desc:"Practicamos vasectomía." },
  { letra:"V", verbo:"Vacunamos", desc:"Aplicamos vacunas." },
  { letra:"V", verbo:"Videografiamos", desc:"Registramos en video procedimientos." },
  { letra:"V", verbo:"Venopuncionamos", desc:"Accedemos a venas para extracción." },

  { letra:"W", verbo:"Westernbloteamos", desc:"Usamos Western Blot." },
  { letra:"W", verbo:"Weanizamos", desc:"Aplicamos destete." },
  { letra:"W", verbo:"Widalizamos", desc:"Practicamos prueba de Widal." },
  { letra:"W", verbo:"Washingizamos", desc:"Realizamos lavados experimentales." },

  { letra:"X", verbo:"Xenotransplantamos", desc:"Hacemos trasplantes entre especies." },
  { letra:"X", verbo:"Xerografiamos", desc:"Reproducimos imágenes médicas." },
  { letra:"X", verbo:"Xilinizamos", desc:"Usamos xilina como anestésico." },
  { letra:"X", verbo:"Xantocromatizamos", desc:"Observamos coloraciones amarillas en líquidos." },

  { letra:"Y", verbo:"Yodamos", desc:"Aplicamos yodo." },
  { letra:"Y", verbo:"Yeyunizamos", desc:"Exploramos yeyuno quirúrgicamente." },
  { letra:"Y", verbo:"Yugulamos", desc:"Canalizamos vena yugular." },
  { letra:"Y", verbo:"Yacemos", desc:"Practicamos reposo forzado para observación." },

  { letra:"Z", verbo:"Zoopatologamos", desc:"Estudiamos enfermedades animales." },
  { letra:"Z", verbo:"Zoonotizamos", desc:"Determinamos riesgo zoonótico." },
  { letra:"Z", verbo:"Zigocitamos", desc:"Analizamos formación de cigotos." },
  { letra:"Z", verbo:"Zootecniamos", desc:"Aplicamos principios de zootecnia." },
];

// Render
const results = document.getElementById("results");
const empty = document.getElementById("empty");
const tpl = document.getElementById("cardTemplate");

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
