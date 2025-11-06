const overlay = document.getElementById("overlay");
const content = document.getElementById("content");
const tabs = document.querySelectorAll(".tab");
const btnEs = document.getElementById("btn-es");
const btnEn = document.getElementById("btn-en");
const subtitle = document.getElementById("subtitle");
const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menu-btn");

const tabLabels = {
  contacto: document.getElementById("tab-contacto"),
  formacion: document.getElementById("tab-formacion"),
  experiencia: document.getElementById("tab-experiencia"),
  proyectos: document.getElementById("tab-proyectos"),
  habilidades: document.getElementById("tab-habilidades"),
  certificaciones: document.getElementById("tab-certificaciones"),
  logros: document.getElementById("tab-logros"),
};

// let lang = "en";

// ---- CONTENIDO ----
const texts = {
  es: {
    subtitle: "Ingeniero en Computación",
    tabs: {
      contacto: "Contacto",
      formacion: "Formación",
      experiencia: "Experiencia",
      proyectos: "Proyectos",
      habilidades: "Habilidades",
      certificaciones: "Certificaciones",
      logros: "Logros",
    },
    contacto: `
      <h2>Contacto</h2>
      <p><strong>Teléfono:</strong> +569 9128 9332</p>
      <p><strong>Email:</strong> sady.guzman@userena.cl</p>
      <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sady-guzman/" target="_blank" rel="noopener noreferrer">linkedin.com/in/sady-guzman/</a></p>

      <p><strong>Perfil:</strong> <br>Estudiante de quinto año, con perfil de egreso.<br>
        Cuento con disponibilidad para incorporarme al trabajo
        desde diciembre 2025, modalidad remota o presencial en
        Región Metropolitana.</p>

      <a href="assets/SadyGuzman_CV_2025_esp.pdf" target="_blank" class="cv-button">📄 Descargar CV (PDF)</a>
    `,
    formacion: `
      <h2>Formación</h2>
      <p><strong>Ingeniería en Computación</strong> — Universidad de La Serena (2020 - 2025)</p>
      <p>Durante los primeros semestres el enfoque estuvo en los
        fundamentos de la ciencia de la computación, usando
        lenguaje C para entender en profundidad la lógica,
        estructuras de datos y diseños de algoritmos.
        Posteriormente la formación se basa en el desarrollo de
        proyectos reales.<br><br>

        Durante los últimos años, asumí el rol de jefe de proyecto
        en varios de estos desarrollos semestrales, liderando
        equipos de trabajo, levantamiento de requisitos,
        entrevistas con clientes y gestionando la planificación y
        ejecución de las etapas de desarrollo.
        </p>
    `,
    experiencia: `
      <h2>Experiencia</h2>
      <ul>
        <li><strong>Tutor de Ingeniería en Computación (2025)</strong><br>
          Durante mi último año, me desempeñé como tutor de
          programación, apoyando a estudiantes de primer año
          en asignaturas de introducción a la programación, y a
          estudiantes de segundo año en estructuras de datos.</li>

        <li><strong>Práctica Profesional - PREANSA CHILE UNACEM (2025) </strong><br>
          Desarrollo de una aplicación de escritorio utilizando
          Python, el framework PyQt y una base de datos SQLite,
          destinada a realizar cálculos de propiedades de piezas
          de hormigón pretensado.</li>

        <li><strong>Proyecto plataforma web escuela de Computación - Universidad de la Serena (2025)</strong><br>
          Me desempeñe como jefe de proyecto en desarrollo de
          plataforma web. Administré el desarrollo de equipos de
          frontend, backend, base de datos, QA, y Devops.</li>
        
        <li><strong>Proyecto de Depuración de marcajes RRHH MINSAL - Hospital de Coquimbo (2024)</strong><br>
          Encargado del levantamiento de requisitos, reuniones
          con cliente y gestión de proyecto, como también apoyo
          en etapas desarrollo. Abordamos tecnologías como
          Atlassian Jira, Python, MongoDB, Flask, Docker, y GitHub.</li>

        <li><strong>Proyecto de Sistema de préstamos de equipos musicales - Universidad de La Serena (2023)</strong><br>
          Encargado del levantamiento de requisitos, reuniones
          con cliente y gestión de proyecto, como también apoyo
          en etapas desarrollo. Abordamos tecnologías como
          Atlassian Jira, Python, MongoDB, Flask, Docker, y GitHub.</li>

      </ul>
    `,
    proyectos: `
      <h2>Proyectos</h2>
      <ul>
        <li>Aplicación de cálculo de pretensado — Python, PyQt, SQLite</li>
        <li>Plataforma web Flask — Docker, PostgreSQL</li>
      </ul>
    `,
    habilidades: `
      <h2>Habilidades Técnicas</h2>
      <ul>
        <li>Lenguajes: C, Java, Python</li>
        <li>Bases de datos: PostgreSQL, MongoDB</li>
        <li>Despliegue: Docker, Vercel, AWS</li>
        <li>Data Science: Pandas, NumPy, Scikit-Learn</li>
      </ul>
    `,
    certificaciones: `
      <h2>Certificaciones</h2>
      <ul>
        <li>CS50x — HarvardX (2024)</li>
        <li>EF SET — C2 Proficient (2024)</li>
      </ul>
    `,
    logros: `
      <h2>Logros</h2>
      <ul>
        <li>3er lugar — Hackathon Crisis Hídrica (Hydrocare, 2024)</li>
        <li>Expositor — Feria de Innovación ULS (2022)</li>
      </ul>
    `,
  },
  en: {
    subtitle: "Software Engineer",
    tabs: {
      contacto: "Contact",
      formacion: "Education",
      experiencia: "Experience",
      proyectos: "Projects",
      habilidades: "Skills",
      certificaciones: "Certifications",
      logros: "Achievements",
    },
    contacto: `
      <h2>Contact</h2>
      <p><strong>Phone:</strong> +56 9 (number)</p>
      <p><strong>Email:</strong> professional@gmail.com</p>
      <p><strong>LinkedIn:</strong> linkedin.com/in/my-profile</p>
      <p><strong>Location:</strong> La Serena, Chile</p>
      <p>Final-year Computer Engineering student. Experienced in web projects, team leadership, and cloud deployment.</p>
      <a href="assets/SadyGuzman_CV_2025_en.pdf" target="_blank" class="cv-button">📄 Download CV (PDF)</a>
    `,
    formacion: `
      <h2>Education</h2>
      <p><strong>Bachelor's in Computer Engineering</strong> — University of La Serena (2020 - 2025)</p>
      <p>Focus on backend development, data structures, project management, and technical leadership.</p>
    `,
    experiencia: `
      <h2>Experience</h2>
      <ul>
        <li><strong>Internship — PREANSA CHILE UNACEM (2025)</strong><br>Built a desktop app in Python/PyQt with SQLite.</li>
        <li><strong>HR Data Cleaning Project — Coquimbo Hospital (2024)</strong><br>Led analysis and backend development using Flask and Docker.</li>
        <li><strong>Programming Tutor — ULS (2025)</strong><br>Assisted students with programming and data structures.</li>
      </ul>
    `,
    proyectos: `
      <h2>Projects</h2>
      <ul>
        <li>Prestressing calculation app — Python, PyQt, SQLite</li>
        <li>Flask web platform — Docker, PostgreSQL</li>
      </ul>
    `,
    habilidades: `
      <h2>Technical Skills</h2>
      <ul>
        <li>Languages: C, Java, Python</li>
        <li>Databases: PostgreSQL, MongoDB</li>
        <li>Deployment: Docker, Vercel, AWS</li>
        <li>Data Science: Pandas, NumPy, Scikit-Learn</li>
      </ul>
    `,
    certificaciones: `
      <h2>Certifications</h2>
      <ul>
        <li>CS50x — HarvardX (2024)</li>
        <li>EF SET — C2 Proficient (2024)</li>
      </ul>
    `,
    logros: `
      <h2>Achievements</h2>
      <ul>
        <li>3rd Place — Water Crisis Hackathon (Hydrocare, 2024)</li>
        <li>Exhibitor — ULS Innovation Fair (2022)</li>
      </ul>
    `,
  },
};

// ---- FUNCIONES ----
function setContent(section) {
  content.innerHTML = texts[lang][section];
}

function updateLanguageUI() {
  subtitle.textContent = texts[lang].subtitle;
  Object.keys(tabLabels).forEach((key) => {
    tabLabels[key].textContent = texts[lang].tabs[key];
  });
}

function switchLang(newLang) {
  lang = newLang;
  btnEs.classList.toggle("active", lang === "es");
  btnEn.classList.toggle("active", lang === "en");
  updateLanguageUI();
  const activeTab = document.querySelector(".tab.active");
  setContent(activeTab.dataset.section);
}

// ---- EVENTOS ----
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    setContent(tab.dataset.section);

    sidebar.classList.remove("open");
    overlay.classList.remove("visible");

    if (window.innerWidth <= 768) {
      menuBtn.style.display = "block"; // solo en móvil
    }
  });
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("open");
  overlay.classList.remove("visible");

  if (window.innerWidth <= 768) {
    menuBtn.style.display = "block";
  }
});

btnEs.addEventListener("click", () => switchLang("es"));
btnEn.addEventListener("click", () => switchLang("en"));

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");

  // solo aplicar estos cambios si es móvil
  if (window.innerWidth <= 768) {
    if (sidebar.classList.contains("open")) {
      overlay.classList.add("visible");   // mostrar fondo oscuro
      menuBtn.style.display = "none";     // ocultar botón hamburguesa
    } else {
      overlay.classList.remove("visible"); // ocultar fondo
      menuBtn.style.display = "block";     // volver a mostrar botón
    }
  }
});

// Cerrar menú si se toca el overlay
overlay.addEventListener("click", () => {
  sidebar.classList.remove("open");
  overlay.classList.remove("visible");
  menuBtn.style.display = "block";
});

// ---- Inicialización ----
// VERSION ESP DEFECTO
// updateLanguageUI();
// setContent("contacto");

// ENG defecto
lang = "es";          // idioma por defecto
updateLanguageUI();   // actualiza etiquetas y subtítulo
setContent("contacto"); // carga la pestaña "Contact"
btnEs.classList.remove("active");
btnEn.classList.add("active");