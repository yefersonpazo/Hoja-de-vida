import React from 'react';
import profileImage from '../IMG/Perfil.jpg';
import programmingCertificate from '../PDF/certificado-1.pdf';
import operatingSystemsCertificate from '../PDF/OperatingSystemsBasicsUpdate20260829-21-axd2u22(1).pdf';

const technicalSkills = [
  { name: 'Lenguajes de programación', level: 85 },
  { name: 'Bases de datos (SQL / NoSQL)', level: 80 },
  { name: 'Desarrollo Frontend', level: 75 },
  { name: 'Control de versiones (Git)', level: 90 },
];

const softSkills = [
  'Comunicación efectiva',
  'Trabajo en equipo',
  'Resolución de problemas',
  'Adaptabilidad',
  'Gestión del tiempo',
];

const certifications = [
  {
    title: 'Programación Nivel Básico',
    description: '– Ministerio TIC, Universidad Libre, Etraining – Mayo 2026.',
    href: programmingCertificate,
    download: 'certificado-1.pdf',
    action: 'Descargar PDF',
    icon: 'bi-download',
  },
  {
    title: 'Operating Systems Basics',
    description: 'Certificado del curso.',
    href: operatingSystemsCertificate,
    download: 'OperatingSystemsBasicsUpdate20260829-21-axd2u22(1).pdf',
    action: 'Descargar PDF',
    icon: 'bi-download',
  },
  {
    title: 'Programación básica en Python',
    description: 'Certificado de SoloLearn.',
    href: 'https://api2.sololearn.com/v2/certificates/CC-MXCO3HVZ/image/png?t=639265628561447945',
    action: 'Ver certificado',
    icon: 'bi-eye',
    external: true,
  },
];

const jobMessage =
  "Hello, Yeferson. I'm contacting you to let you know that your resume has been accepted for a job opportunity. I'd like to discuss the next steps with you.";
const emailHref = `mailto:yepazo@unicear.edu.co?subject=${encodeURIComponent(
  "Job Opportunity - Yeferson Pazo's Resume",
)}&body=${encodeURIComponent(jobMessage)}`;
const whatsappHref = `https://wa.me/573245205718?text=${encodeURIComponent(jobMessage)}`;

function Header() {
  return (
    <header
      className="d-flex align-items-center gap-4 p-5 fondo-perfil"
      style={{ minHeight: '45vh' }}
    >
      <img
        src={profileImage}
        alt="Foto de perfil"
        className="rounded-circle shadow"
        style={{
          width: 110,
          height: 110,
          objectFit: 'cover',
          border: '3px solid #ffffffaa',
        }}
      />
      <div className="d-flex flex-column">
        <h1 className="fraunces text-white fw-bold fs-2 mb-0 sombra-texto">
          Yeferson Enrique Pazo Paternina
        </h1>
        <p className="fraunces fst-italic mb-0 sombra-texto text-dorado-claro">
          Ingeniero de Sistemas
        </p>
      </div>
    </header>
  );
}

function ProfessionalProfile() {
  return (
    <section className="py-5 bg-light" id="perfil-profesional">
      <div className="container">
        <h2 className="fraunces fw-semibold fs-2 mb-3">Perfil Profesional</h2>
        <p className="text-secondary" style={{ maxWidth: 700, lineHeight: 1.7 }}>
          Estudiante de Ingeniería de Sistemas en quinto semestre, con
          conocimientos en programación orientada a objetos y principios SOLID
          aplicados en lenguajes como Python, C++ y Java. Manejo de conceptos
          fundamentales en bases de datos y desarrollo de software. Me
          caracterizo por el interés en aprender, la capacidad de análisis y la
          disposición para aplicar mis conocimientos en proyectos académicos y
          profesionales, aportando soluciones claras y estructuradas.
        </p>
      </div>
    </section>
  );
}

function TechnicalSkills() {
  return (
    <section className="py-5 bg-white" id="habilidades-tecnicas">
      <div className="container">
        <h2 className="fraunces fw-semibold fs-2 mb-4">Habilidades Técnicas</h2>
        <div className="row row-cols-1 row-cols-md-2 g-4" style={{ maxWidth: 700 }}>
          {technicalSkills.map(({ name, level }) => (
            <div className="col" key={name}>
              <span className="fw-semibold small d-block mb-2">{name}</span>
              <div className="progress" style={{ height: 8 }}>
                <div
                  className="progress-bar bg-dorado"
                  role="progressbar"
                  style={{ width: `${level}%` }}
                  aria-valuenow={level}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-label={`${name}: ${level}%`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsAndLanguages() {
  return (
    <section className="py-5 bg-light" id="blandas-idiomas">
      <div className="container">
        <div className="row g-5">
          <div className="col-md-6">
            <h2 className="fraunces fw-semibold fs-4 mb-3">Habilidades Blandas</h2>
            <div className="d-flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span
                  className="badge rounded-pill bg-white text-dark border fw-normal px-3 py-2"
                  key={skill}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="col-md-6">
            <h2 className="fraunces fw-semibold fs-4 mb-3">Idiomas</h2>
            <div className="d-flex justify-content-between border-bottom py-2" style={{ maxWidth: 320 }}>
              <span className="fw-semibold">Español</span>
              <span className="text-dorado small">Nativo</span>
            </div>
            <div className="d-flex justify-content-between border-bottom py-2" style={{ maxWidth: 320 }}>
              <span className="fw-semibold">Inglés</span>
              <span className="text-dorado small">Intermedio (B1)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section className="py-5 bg-white" id="certificaciones">
      <div className="container">
        <h2 className="fraunces fw-semibold fs-2 mb-4">Certificaciones</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {certifications.map((certification) => (
            <div className="col" key={certification.title}>
              <div className="card border h-100">
                <div className="card-body p-4">
                  <i className="bi bi-patch-check-fill text-dorado fs-3 d-block mb-3" />
                  <h3 className="fraunces fs-5 fw-semibold mb-1">
                    {certification.title}
                  </h3>
                  <p className="text-secondary small mb-3">
                    {certification.description}
                  </p>
                  <a
                    href={certification.href}
                    className="btn btn-outline-dark btn-sm rounded-pill"
                    {...(certification.download
                      ? { download: certification.download }
                      : {})}
                    {...(certification.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                  >
                    <i className={`bi ${certification.icon}`} /> {certification.action}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="py-5 bg-light" id="contacto">
      <div className="container">
        <h2 className="fraunces fw-semibold fs-2 mb-3">Contacto</h2>
        <p className="text-secondary mb-4" style={{ maxWidth: 700 }}>
          Cuéntame en qué estás trabajando o qué necesitas. Respondo por correo o
          teléfono, lo que prefieras.
        </p>
        <ul className="list-unstyled d-flex flex-column gap-2">
          <li>
            <a href={emailHref} className="text-decoration-none text-reset">
              <i className="bi bi-envelope text-dorado" /> yepazo@unicear.edu.co
            </a>
          </li>
          <li>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-reset"
            >
              <i className="bi bi-telephone text-dorado" /> +57 3245205718
            </a>
          </li>
          <li>
            <i className="bi bi-geo-alt text-dorado" /> Valledupar, Colombia
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/yeferson-enrique-pazo-paternina-967542405/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bdbhc8dgJSha2aZFnC3v7Yg%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-reset"
            >
              <i className="bi bi-linkedin text-dorado" />{' '}
              linkedin.com/in/yeferson-enrique-pazo-paternina
            </a>
          </li>
          <li>
            <a
              href="https://github.com/yefersonpazo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-reset"
            >
              <i className="bi bi-github text-dorado" /> github.com/yefersonpazo
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <ProfessionalProfile />
        <TechnicalSkills />
        <SkillsAndLanguages />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}
