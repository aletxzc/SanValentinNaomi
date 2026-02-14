// Generar corazones flotantes
const heartsContainer = document.getElementById('heartsContainer');
const heartSymbols = ['❤️', '💕', '💖', '💗', '💓'];

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
    
    heart.style.left = Math.random() * 100 + '%';
    const duration = 6 + Math.random() * 4;
    heart.style.animationDuration = duration + 's';
    const delay = Math.random() * 5;
    heart.style.animationDelay = delay + 's';
    const size = 15 + Math.random() * 15;
    heart.style.fontSize = size + 'px';
    
    heartsContainer.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, (duration + delay) * 1000);
}

setInterval(createHeart, 400);

for (let i = 0; i < 15; i++) {
    setTimeout(createHeart, i * 200);
}

// Navegación entre secciones con scroll suave
const startButton = document.getElementById('startButton');
const welcomeScreen = document.getElementById('welcomeScreen');
const timelineSection = document.getElementById('timelineSection');
const letterSection = document.getElementById('letterSection');
const envelope = document.getElementById('envelope');

startButton.addEventListener('click', () => {
    timelineSection.classList.add('active');
    timelineSection.scrollIntoView({ behavior: 'smooth' });
});

envelope.addEventListener('click', () => {
    envelope.classList.add('open');
    
    setTimeout(() => {
        // Ocultar todo lo demás
        welcomeScreen.style.opacity = '0';
        timelineSection.style.opacity = '0';
        
        setTimeout(() => {
            letterSection.classList.add('active');
            letterSection.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    }, 800);
});

// Modal de fotos
const modal = document.getElementById('photoModal');
const modalTitle = document.getElementById('modalTitle');
const photoGrid = document.getElementById('photoGrid');
const closeModal = document.getElementById('closeModal');

// AQUÍ AGREGAS TUS FOTOS
// Para cada mes, reemplaza 'fotos/enero/foto1.png' con la ruta real de tus imágenes
const monthPhotos = {
    'enero-2025': {
        title: 'Enero 2025',
        photos: [
            'fotos/Enero/Captura de pantalla 2026-02-14 034907.png',
            'fotos/Enero/IMG_4030.PNG',
            'fotos/Enero/IMG_4032.PNG',
            'fotos/Enero/IMG_4033.PNG'
        ]
    },
    'febrero-2025': {
        title: 'Febrero 2025',
        photos: [
            'fotos/Febrero/78385e2d-093e-4cc0-977f-7c9651831dbc.jpg',
            'fotos/Febrero/IMG_4035.PNG',
            'fotos/Febrero/IMG_4036.PNG',
            'fotos/Febrero/IMG_4037.PNG'
        ]
    },
    'marzo-2025': {
        title: 'Marzo 2025',
        photos: [
            'fotos/Marzo/06af4808-2935-46f5-b5f9-2a4d9c25ddf8.jpg',
            'fotos/Marzo/a74a9fb9-47bc-42f0-b173-a71195cdcd43.jpg',
            'fotos/Marzo/b70fc027-0b6e-4579-8088-417fced5d5d9.jpg',
            'fotos/Marzo/IMG_4042.PNG'
        ]
    },
    'abril-2025': {
        title: 'Abril 2025',
        photos: [
            'fotos/Abril/1fc1241f-9360-4e29-be08-c67179cac0b1.jpg',
            'fotos/Abril/IMG_4044.PNG',
            'fotos/Abril/IMG_4045.PNG',
            'fotos/Abril/IMG_4046.PNG'
        ]
    },
    'mayo-2025': {
        title: 'Mayo 2025',
        photos: [
            'fotos/Mayo/IMG_4047.PNG',
            'fotos/Mayo/IMG_4048.PNG',
            'fotos/Mayo/IMG_4049.PNG',
            'fotos/Mayo/IMG_4050.PNG'
        ]
    },
    'junio-2025': {
        title: 'Junio 2025',
        photos: [
            'fotos/Junio/IMG_4053.PNG',
            'fotos/Junio/IMG_4054.PNG',
            'fotos/Junio/IMG_4055.PNG',
            'fotos/Junio/IMG_4056.PNG'
        ]
    },
    'julio-2025': {
        title: 'Julio 2025',
        photos: [
            'fotos/Julio/5214b601-2ac5-41c4-8a74-e7dddd867324.jpg',
            'fotos/Julio/IMG_4054.PNG',
            'fotos/Julio/IMG_4055.PNG',
            'fotos/Julio/IMG_4056.PNG'
        ]
    },
    'agosto-2025': {
        title: 'Agosto 2025',
        photos: [
            'Fotos/Agosto/491a0ef7-c84e-452d-a1b6-cd3236edf62b.jpg',
            'Fotos/Agosto/2566fe30-e24b-4316-aa24-81adbae574bc.jpg',
            'Fotos/Agosto/c274fc2a-0f8d-4655-aa14-0e65a33ac125.jpg',
            'Fotos/Agosto/IMG_4058.PNG'
        ]
    },
    'septiembre-2025': {
        title: 'Septiembre 2025',
        photos: [
            'fotos/Septiembre/IMG_4059.PNG',
            'fotos/Septiembre/IMG_4060.PNG',
            'fotos/Septiembre/IMG_4061.PNG',
            'fotos/Septiembre/IMG_4062.PNG'
        ]
    },
    'octubre-2025': {
        title: 'Octubre 2025',
        photos: [
            'fotos/Octubre/151972fc-d8a1-4154-93e2-532a08c3a259.jpg',
            'fotos/Octubre/b645a262-0fe9-4e84-b331-8a04b14be525.jpg',
            'fotos/Octubre/IMG_4060.PNG',
            'fotos/Octubre/IMG_4061.PNG'
        ]
    },
    'noviembre-2025': {
        title: 'Noviembre 2025',
        photos: [
            'fotos/Noviembre/IMG_4064.PNG',
            'fotos/Noviembre/IMG_4065.PNG',
            'fotos/Noviembre/IMG_4066.PNG',
            'fotos/Noviembre/IMG_4067.PNG'
        ]
    },
    'diciembre-2025': {
        title: 'Diciembre 2025',
        photos: [
            'fotos/Diciembre/IMG_4068.PNG',
            'fotos/Diciembre/IMG_4069.PNG',
            'fotos/Diciembre/IMG_4070.PNG',
            'fotos/Diciembre/IMG_4071.PNG'
        ]
    },
    'enero-2026': {
        title: 'Enero 2026',
        photos: [
            'fotos/Enero2026/DE2A841F-AB7B-42DF-8F35-3291AA580FF5.jpg',
            'fotos/Enero2026/IMG_3878.jpg',
            'fotos/Enero2026/IMG_3883.jpg',
            'fotos/Enero2026/IMG_4072.PNG'
        ]
    },
    'febrero-2026': {
        title: 'Febrero 2026',
        photos: [
            'fotos/Febrero2026/IMG_4076.jpg'
        ]
    }
};
// Agregar evento click a cada punto de la línea de tiempo
document.querySelectorAll('.timeline-point').forEach(point => {
    point.addEventListener('click', function() {
        const month = this.getAttribute('data-month');
        const monthData = monthPhotos[month];
        
        if (monthData) {
            modalTitle.textContent = monthData.title;
            photoGrid.innerHTML = '';
            
            monthData.photos.forEach(photoUrl => {
                const img = document.createElement('img');
                img.src = photoUrl;
                img.alt = monthData.title;
                
                // Expandir foto al hacer clic
                img.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const expandedView = document.createElement('div');
                    expandedView.className = 'photo-expanded';
                    const expandedImg = document.createElement('img');
                    expandedImg.src = photoUrl;
                    expandedView.appendChild(expandedImg);
                    document.body.appendChild(expandedView);
                    
                    expandedView.addEventListener('click', () => {
                        expandedView.remove();
                    });
                });
                
                photoGrid.appendChild(img);
            });
            
            modal.classList.add('active');
        }
    });
});

// Cerrar modal
closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// Botón para cerrar la carta y volver
const closeLetter = document.getElementById('closeLetter');

closeLetter.addEventListener('click', () => {
    letterSection.classList.remove('active');
    
    // Resetear el sobre
    envelope.classList.remove('open');
    
    setTimeout(() => {
        welcomeScreen.style.opacity = '1';
        timelineSection.style.opacity = '1';
        timelineSection.scrollIntoView({ behavior: 'smooth' });
    }, 300);
});