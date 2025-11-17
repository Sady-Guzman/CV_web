// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
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

  let lang = "en";

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
        <p><strong>Idiomas:</strong> Español, Ingles C2</p>

        <p><strong>Perfil:</strong> <br>Estudiante de quinto año, con perfil de egreso.<br>
          Cuento con disponibilidad para incorporarme al trabajo
          desde diciembre 2025, modalidad remota o presencial en
          Región Metropolitana.</p>

        <a href="assets/SadyGuzman_CV_2025_esp.pdf" target="_blank" class="cv-button">📄 Descargar CV (PDF)</a>
      `,
      formacion: `
        <h2>Formación</h2>
        <p><strong>Ingeniería en Computación</strong><br>  Universidad de La Serena (2020 - 2025)</p>
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
          <li>
          <strong>Tutor de Ingeniería en Computación<br>  Universidad de La Serena (2025)</strong><br>
          
          Durante mi último año, me desempeñé como tutor de
            programación, apoyando a estudiantes de primer año
            en asignaturas de introducción a la programación, y a
            estudiantes de segundo año en estructuras de datos.
          </li>

          <br><br>
          <li>
            <strong>Práctica Profesional<br>  PREANSA CHILE UNACEM (2025) </strong><br>
            
            Desarrollo de una aplicación de escritorio utilizando
            Python, el framework PyQt y una base de datos SQLite,
            destinada a realizar cálculos de propiedades de piezas
            de hormigón pretensado.
          </li>

          <br><br>
          <li>
            <strong>Proyecto plataforma web escuela de Computación<br>  Universidad de la Serena (2025)</strong><br>
            
            Me desempeñe como jefe de proyecto en desarrollo de
            plataforma web. Administré el desarrollo de equipos de
            frontend, backend, base de datos, QA, y Devops.
          </li>
          
          <br><br>
          <li>
            <strong>Proyecto de Depuración de marcajes RRHH MINSAL<br>  Hospital de Coquimbo (2024)
            </strong><br>
            
            Encargado del levantamiento de requisitos, reuniones
            con cliente y gestión de proyecto, como también apoyo
            en etapas desarrollo. Abordamos tecnologías como
            Atlassian Jira, Python, MongoDB, Flask, Docker, y GitHub.
          </li>

          <br><br>
          <li>
            <strong>Proyecto de Sistema de préstamos de equipos musicales<br>  Depto. de Música Universidad de La Serena (2023)
            </strong><br>
            
            Levantamiento de requisitos en entrevistas con cliente.
              Desarrollo de sistema informático de escritorio para
              control de inventario, estado de los equipos, y préstamos
              a estudiantes de carreras afines al departamento.
          </li>

        </ul>
      `,
      proyectos: `
        <h2>Proyectos</h2>
        <ul>
          <li> bbb </li>
          <li> aaa</li>
        </ul>
      `,
      habilidades: `
        <h2>Tecnologías y Herramientas</h2>
        <ul>
          <li><b>Lenguajes:</b> C, Java, Python</li>
          <li><b>Bases de datos:</b> PostgreSQL, MongoDB</li>
          <li><b>Desarrollo web:</b> HTML, CSS, JS, Flask framework</li>
          <li><b>Control de versiones:</b> Git, Github, Github Integrations</li>
          <li><b>Despliegue y hosting:</b> Vercel, NeonDB, AWS</li>
          <li><b>Contenerización:</b> Docker</li>
          <li><b>Sistemas operativos:</b> Windows, MacOS, Linux</li>
          <li><b>Gestión de proyectos:</b> Atlassian Jira</li>
          <li><b>Análisis y visualización de datos con Machine Learning:</b> 
            Jupyter Notebooks y Google Colab para exploración,
            limpieza, manipulación y visualización de datasets usando:
            Pandas, NumPy, Matplotlib, Seaborn, Scikit-Learn.</li>

        </ul>
      `,
      certificaciones: `
        <h2>Certificaciones</h2>
          <p>
          <strong>CS50: Foundations of Intellectual
            Enterprises of Computer Science and the
            Art of Programming<br>  EdX | HarvardX (2024)</strong><br>

          Curso sobre estructuras de datos y algoritmos, bases
            de datos relacionales, en lenguajes C, Python, y SQL.
            Incluye desarrollo web con frameworks Bootstrap y
            Flask. <br> Proyecto final: Extensión para navegador Google
            Chrome.
          </p>

          <br><br>
          <p>
          <strong>EF: Standardized English Test Certificate
            C2 Proficient<br>  EF SET (2024)</strong><br>

          Alcanzado nivel C2 en el Marco Común Europeo de
            Referencia (MCER), lo que demuestra la capacidad
            para comunicarse de manera efectiva y fluida en inglés
            en una amplia variedad de contextos.
          </p>
      `,
      logros: `
        <h2>Logros</h2>
        <p>
          <strong>Tercer lugar Hackathon: Crisis
            Hídrica Región de Coquimbo<br>  Universidad de La Serena (2024)</strong><br>

          Propuesta Hydrocare: Uso de IoT para monitorear
            plantaciones y modelo de inteligencia artificial para
            reconocer plantas con problemas de plagas.
          </p>

        <br><br>
        <p>
          <strong>Puesto de exposición en Feria de
            Innovación ULS.<br>  Universidad de La Serena (2022)</strong><br>

          Uso de tecnologías Arduino junto con diseño e impresión
            3D para el desarrollo de prototipo de brazalete timbre.
        </p>
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
        <p><strong>Phone:</strong> +569 9128 9332</p>
        <p><strong>Email:</strong> sady.guzman@userena.cl</p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sady-guzman/" target="_blank" rel="noopener noreferrer">linkedin.com/in/sady-guzman/</a></p>
        <p><strong>Location:</strong>Chile</p>

        <p><strong>Profile:</strong> <br>Final-year Computer Engineering student, currently
          completing degree requirements. <br>
          Available to start working from December 2025.</p>
        
        
        <a href="assets/SadyGuzman_CV_2025_en.pdf" target="_blank" class="cv-button">📄 Download CV (PDF)</a>
      `,
      formacion: `
        <h2>Education</h2>
        <p><strong>Ingeniería en Computación<br>  Universidad de La Serena (2020 - 2025)</strong></p>
        <p>
          During the first semesters, the focus was on the
          fundamentals of computer science, using the C
          programming language to deeply understand logic, data
          structures, and algorithm design. Later, emphasizing the
          development of semester-long projects.<br><br>

          In the final years, I took on the role of project leader in
          several semester-projects, managing teams, gathering
          requirements, interviewing clients, and overseeing the
          planning and execution of the development stages.
        </p>
      `,
      experiencia: `
        <h2>Experience</h2>
        <ul>
          <li>
          <strong>Computer Science Tutor<br>  La Serena University (2025)</strong><br>
          
          During my final year, I worked as a Tutor, helping
            students strengthen their understanding of
            programming fundamentals and data structures
            through practical guidance and mentoring.
          </li>

          <br><br>
          <li>
            <strong>Profesional Internship<br>  PREANSA CHILE UNACEM (2025) </strong><br>
            
            Developed a desktop application using Python, the PyQt
              framework, and an SQLite database, designed to
              automate engineering calculations for prestressed
              concrete components.
          </li>

          <br><br>
          <li>
            <strong>Computer Science Department Platform Project<br>  La Serena University (2025)</strong><br>
            
            Served as Project Leader in the development of a web
              platform. Managed the work of frontend, backend,
              database, QA, and DevOps teams, overseeing
              coordination, progress tracking, and integration across
              all development areas as well as maintaining
              communication with the client.
          </li>
          
          <br><br>
          <li>
            <strong>HR Attendance Data Cleaning Project<br>  Coquimbo Hospital (2024)
            </strong><br>
            
            Served as Project Leader, overseeing requirements
              gathering, client meetings, and project management,
              while also contributing to the development and
              implementation of software solutions. The project utilized
              Python, Flask, Docker, and GitHub, managed through
              Atlassian Jira.
          </li>

          <br><br>
          <li>
            <strong>Musical Equipment Loan System<br>  Faculty of Music, La Serena University (2023)
            </strong><br>
            
            Conducted requirements gathering through client
              interviews and developed a Python desktop application
              for managing inventory, equipment status, and loan
              tracking for students in music-related programs.
          </li>

        </ul>
      `,
      proyectos: `
        <h2>Projects</h2>
        <ul>
          <li> aa</li>
        </ul>
      `,
      habilidades: `
        <h2>Technical Skills</h2>
        <ul>
          <li><b>Languages:</b> C, Java, Python</li>
          <li><b>Databases:</b> PostgreSQL, MongoDB</li>
          <li><b>Web Development:</b> HTML, CSS, JS, Flask framework</li>
          <li><b>Version Control:</b> Git, Github, Github Integrations</li>
          <li><b>Deployment and Hosting:</b> Vercel, NeonDB, AWS</li>
          <li><b>Containerization:</b> Docker</li>
          <li><b>Operating Systems:</b> Windows, MacOS, Linux</li>
          <li><b>Project Management:</b> Atlassian Jira</li>
          <li><b>Data Analysis and Machine Learning:</b> 
            Jupyter Notebooks and Google Colab for data exploration,
              cleaning, manipulation, and visualization using Pandas,
              NumPy, Matplotlib, Seaborn, and Scikit-Learn.</li>

        </ul>
      `,
      certificaciones: `
        <h2>Certifications</h2>
        <p>
          <strong>CS50: Foundations of Intellectual
            Enterprises of Computer Science and the
            Art of Programming<br>  EdX | HarvardX (2024)</strong><br>

          Comprehensive course covering data structures and
            algorithms, relational databases, and programming in
            C, Python, and SQL. Included web development using JS,
            Bootstrap and Python Flask.<br>
            Final project: Google Chrome extension.
          </p>

          <br><br>
          <p>
          <strong>EF: Standardized English Test Certificate
            C2 Proficient<br>  EF SET (2024)</strong><br>

          Achieved C2 Proficient level, demonstrating the ability
            to communicate effectively and fluently in English
            across a wide range of contexts.
          </p>
      `,
      logros: `
        <h2>Achievements</h2>
        <p>
          <strong>3rd Place, Water Crisis Hackathon, Coquimbo Region.<br>  La Serena University (2024)</strong><br>

          Hydrocare – IoT-based solution for monitoring crop
            conditions and an AI model to identify plants affected
            by pests.
          </p>

        <br><br>
        <p>
          <strong>Exhibitor – Innovation Fair ULS<br>  La Serena University (2022)</strong><br>

          Developed a prototype of a wearable buzzer bracelet
            using Arduino technology, along with 3D design and
            printing for the device’s structure.
        </p>
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
      if (tabLabels[key]) {
        tabLabels[key].textContent = texts[lang].tabs[key];
      }
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
        menuBtn.style.display = "block";
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

    if (window.innerWidth <= 768) {
      if (sidebar.classList.contains("open")) {
        overlay.classList.add("visible");
        menuBtn.style.display = "none";
      } else {
        overlay.classList.remove("visible");
        menuBtn.style.display = "block";
      }
    }
  });

  // ---- INICIALIZACIÓN ----
  // Configurar idioma por defecto: inglés
  lang = "en";
  
  // Actualizar UI
  updateLanguageUI();
  
  // Marcar botones de idioma
  btnEs.classList.remove("active");
  btnEn.classList.add("active");
  
  // Marcar la pestaña "Contact" como activa
  tabs.forEach(t => t.classList.remove("active"));
  document.getElementById("tab-contacto").classList.add("active");
  
  // Cargar el contenido de "contacto"
  setContent("contacto");
});
