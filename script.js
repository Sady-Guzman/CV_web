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

let lang = "es";

// ---- CONTENIDO ----
const texts = {
  es: {
    subtitle: "Estudiante de Ingeniería en Computación",
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
      <p><strong>Teléfono:</strong> +56 9 (número)</p>
      <p><strong>Email:</strong> profesional@gmail.com</p>
      <p><strong>LinkedIn:</strong> linkedin.com/in/mi-perfil</p>
      <p><strong>Ubicación:</strong> La Serena, Chile</p>
      <p>Estudiante de último año en Ingeniería en Computación. Experiencia en proyectos web, liderazgo de equipos y despliegue en la nube.</p>
      <a href="assets/SadyGuzman_CV_2025_esp.pdf" target="_blank" class="cv-button">📄 Descargar CV (PDF)</a>
    `,
    formacion: `
      <h2>Formación</h2>
      <p><strong>Ingeniería en Computación</strong> — Universidad de La Serena (2020 - 2025)</p>
      <p>Énfasis en desarrollo backend, estructuras de datos, gestión de proyectos y liderazgo técnico.</p>
    `,
    experiencia: `
      <h2>Experiencia</h2>
      <ul>
        <li><strong>Pasantía Profesional — PREANSA CHILE UNACEM (2025)</strong><br>Desarrollo de aplicación de escritorio en Python/PyQt con SQLite.</li>
        <li><strong>Proyecto RH Hospital Coquimbo (2024)</strong><br>Liderazgo en limpieza y análisis de datos con Flask y Docker.</li>
        <li><strong>Tutor de Programación — ULS (2025)</strong><br>Apoyo a estudiantes en fundamentos y estructuras de datos.</li>
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
    subtitle: "Computer Engineering Student",
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

    // cerrar sidebar y overlay en móvil
    sidebar.classList.remove("open");
    overlay.classList.remove("visible");
    menuBtn.style.display = "block"; // volver a mostrar botón
  });
});

btnEs.addEventListener("click", () => switchLang("es"));
btnEn.addEventListener("click", () => switchLang("en"));

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");

  if (sidebar.classList.contains("open")) {
    overlay.classList.add("visible");   // mostrar fondo oscuro
    menuBtn.style.display = "none";     // ocultar botón hamburguesa
  } else {
    overlay.classList.remove("visible"); // ocultar fondo
    menuBtn.style.display = "block";
  }
});

// Cerrar menú si se toca el overlay
overlay.addEventListener("click", () => {
  sidebar.classList.remove("open");
  overlay.classList.remove("visible");
  menuBtn.style.display = "block";
});

// ---- Inicialización ----
updateLanguageUI();
setContent("contacto");