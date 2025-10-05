        // Diccionario de traducciones
        const translations = {
            es: {
                'sidebar-title': 'Menú',
                'nav-about': 'Sobre mí',
                'nav-education': 'Educación',
                'nav-skills': 'Habilidades',
                'nav-portfolio': 'Portafolio',
                'langLabel': 'Español / Inglés',
                'main-title': 'Bienvenido a mi Portafolio',
                'about-title': 'Técnico Superior Universitario en Informática',
                'name-title': 'Anthoan Jose Gonzalez Colinas',
                'about-me-title': 'Sobre mí',
                'about-me-text': '¡Hola! Soy Anthoan González, un joven profesional venezolano de 20 años, graduado como Técnico Superior Universitario en Informática y actualmente avanzando hacia mi título de Ingeniero en Informática. Mi pasión por la tecnología me impulsa a buscar oportunidades donde pueda aplicar mis conocimientos, contribuir con soluciones innovadoras y, al mismo tiempo, seguir aprendiendo en este campo en constante evolución.',
                'titulo1': 'Graduado de TSU en el 2025',
                'titulo2': 'En curso de ingeniería en informática para el 2027',
                'education-title': 'Educación',
                'education-text': 'Soy Técnico Superior Universitario en Informática graduado de la Universidad Politécnica Territorial Andrés Eloy Blanco (UPTAEB) y actualmente me encuentro cursando la ingeniería en la misma casa de estudios, complementando y profundizando mi formación académica. A lo largo de mi trayecto educativo, he consolidado conocimientos sólidos en el stack de desarrollo web, manejando tecnologías como PHP y JavaScript para la lógica, HTML y CSS para la estructura y el diseño, así como SQL para la gestión y consulta de bases de datos. Además, cuento con un certificado de servicio técnico que me capacita para realizar mantenimiento a cualquier equipo e instalar software.',
                'skills-title': 'Habilidades',
                'skills-text': 'Soy un profesional con sólidas habilidades de liderazgo, capaz de guiar equipos y tomar decisiones estratégicas, complementadas por un fuerte compromiso y responsabilidad en todos los proyectos que emprendo. Mi experiencia en metodologías de investigación rápida me permite analizar información eficientemente y tomar decisiones fundamentadas, apoyadas por excelentes capacidades de comunicación que facilitan la colaboración y el entendimiento mutuo. Mantengo una actitud de constante aprendizaje y mejora, siempre motivado por adquirir nuevos conocimientos y enfrentar desafíos con determinación y entusiasmo.',
                'technologies-title': 'Tecnologías',
                'technologies-title-1': 'Estas son las tecnologías que domino:',
                'technologies-title-2': 'Estas son las tecnologías que estoy aprendiendo:',
                'portfolio-title': '</>Proyectos',
                'portfolio-text1': 'Sistema web integral que centraliza la gestión médica, incluyendo historiales clínicos, consultas, emergencias, farmacia, y administración de staff médico en una plataforma segura e intuitiva.',
                'portfolio-text2': 'Sistema web integral que centraliza la gestión arbitral, incluyendo fichas técnicas de árbitros, resultados de tests físicos, control de licencias y gestión de usuarios con perfiles diferenciados en una plataforma segura (Sigue en desarrollo ).',
                'LangLabel2': 'Inglés'
            },
            en: {
                'sidebar-title': 'Menu',
                'nav-about': 'About Me',
                'nav-education': 'Education',
                'nav-skills': 'Skills',
                'nav-portfolio': 'Portfolio',
                'langLabel': 'Spanish / English',
                'main-title': 'Welcome to My Portfolio',
                'about-title': 'Higher University Technician in Computer Science',
                'name-title': 'Anthoan Jose Gonzalez Colinas',
                'about-me-title': 'About Me',
                'about-me-text': 'Hello! I\'m Anthoan González, a 20-year-old Venezuelan professional with a degree in Computer Science and currently working toward my degree in Computer Engineering. My passion for technology drives me to seek opportunities where I can apply my knowledge, contribute innovative solutions, and, at the same time, continue learning in this constantly evolving field.',
                'titulo1': 'Graduated as TSU in 2025',
                'titulo2': 'In the computer engineering course for 2027',
                'contact-text': 'Feel free to reach out to me via email or LinkedIn.',
                'education-title': 'Education',
                'education-text': 'I hold a degree in Computer Science from the Andrés Eloy Blanco Territorial Polytechnic University (UPTAEB) and am currently pursuing an engineering degree at the same university, complementing and deepening my academic training. Throughout my educational journey, I have consolidated a solid understanding of the web development stack, mastering technologies such as PHP and JavaScript for logic, HTML and CSS for structure and design, and SQL for database management and query. Additionally, I have a technical service certificate that qualifies me to perform maintenance on any equipment and install software.',
                'skills-title': 'Skills',
                'skills-text': 'I am a professional with strong leadership skills, capable of leading teams and making strategic decisions, complemented by a strong commitment and responsibility for all the projects I undertake. My experience in rapid research methodologies allows me to efficiently analyze information and make informed decisions, supported by excellent communication skills that facilitate collaboration and mutual understanding. I maintain an attitude of constant learning and improvement, always motivated to acquire new knowledge and face challenges with determination and enthusiasm.',
                'technologies-title': 'Technologies',
                'technologies-title-1': 'These are the technologies I master:',
                'technologies-title-2': 'These are the technologies I am learning:',
                'portfolio-title': '</>Projects',
                'portfolio-text1': 'A comprehensive web-based system that centralizes medical management, including clinical records, consultations, emergencies, pharmacy, and medical staff management, in a secure and intuitive platform.',
                'portfolio-text2': 'A comprehensive web-based system that centralizes referee management, including referee data sheets, physical test results, license control, and user management with distinct profiles on a secure platform (Still in development).',
                'LangLabel2': 'Spanish'
            }
        };
        const switcher = document.getElementById('langSwitch');
        switcher.addEventListener('change', function() {
            const lang = switcher.checked ? 'en' : 'es';
            for (const id in translations[lang]) {
                const el = document.getElementById(id);
                if (el) el.textContent = translations[lang][id];
            }
        });
        // Inicializar en español
        window.addEventListener('DOMContentLoaded', () => {
            for (const id in translations['es']) {
                const el = document.getElementById(id);
                if (el) el.textContent = translations['es'][id];
            }
        });

// ...existing code...

// Slideshow con fade
function createSlideshow(images, containerId = 'slideshow-container', interval = 4000) {
    let container = document.getElementById(containerId);
    if (!container) {
        container = document.createElement('div');
        container.id = containerId;
        document.body.appendChild(container);
    }
    container.classList.add('slideshow-container');
    container.innerHTML = '';

    const imgElements = images.map(src => {
        const img = document.createElement('img');
        img.src = src;
        img.className = 'slideshow-image';
        container.appendChild(img);
        return img;
    });

    let current = 0;
    imgElements[current].classList.add('active');

    setInterval(() => {
        imgElements[current].classList.remove('active');
        current = (current + 1) % imgElements.length;
        imgElements[current].classList.add('active');
    }, interval);
}

// Ejemplo de uso:
createSlideshow([
    'assets/sgm.jpeg',
    'assets/sgm2.jpeg',
    'assets/sgm3.jpeg'
], 'slideshow-container', 4000);


createSlideshow([
    'assets/siga.jpeg',
    'assets/siga2.jpeg',
    'assets/siga3.jpeg'
], 'slideshow-siga', 4000);


function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.querySelector('.menu-toggle');
    menuToggle.classList.toggle('open');

    navLinks.classList.toggle('active');
}

// Crear el botón cuadrado de idioma en responsive
