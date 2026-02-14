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
        welcomeScreen.style.opacity = '0';
        timelineSection.style.opacity = '0';
        
        setTimeout(() => {
            letterSection.classList.add('active');
            letterSection.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    }, 800);
});

const modal = document.getElementById('photoModal');
const modalTitle = document.getElementById('modalTitle');
const photoGrid = document.getElementById('photoGrid');
const closeModal = document.getElementById('closeModal');

const monthPhotos = {
    'enero-2025': {
        title: 'Enero 2025',
        photos: [
            'Fotos/Enero/Captura de pantalla 2026-02-14 034907.png',
            'Fotos/Enero/IMG_4030.PNG',
            'Fotos/Enero/IMG_4032.PNG',
            'Fotos/Enero/IMG_4033.PNG'
        ]
    },
    'febrero-2025': {
        title: 'Febrero 2025',
        photos: [
            'Fotos/Febrero/78385e2d-093e-4cc0-977f-7c9651831dbc.jpg',
            'Fotos/Febrero/IMG_4035.PNG',
            'Fotos/Febrero/IMG_4036.PNG',
            'Fotos/Febrero/IMG_4037.PNG'
        ]
    },
    'marzo-2025': {
        title: 'Marzo 2025',
        photos: [
            'Fotos/Marzo/06af4808-2935-46f5-b5f9-2a4d9c25ddf8.jpg',
            'Fotos/Marzo/a74a9fb9-47bc-42f0-b173-a71195cdcd43.jpg',
            'Fotos/Marzo/b70fc027-0b6e-4579-8088-417fced5d5d9.jpg',
            'Fotos/Marzo/IMG_4042.PNG'
        ]
    },
    'abril-2025': {
        title: 'Abril 2025',
        photos: [
            'Fotos/Abril/1fc1241f-9360-4e29-be08-c67179cac0b1.jpg',
            'Fotos/Abril/IMG_4044.PNG',
            'Fotos/Abril/IMG_4045.PNG',
            'Fotos/Abril/IMG_4046.PNG'
        ]
    },
    'mayo-2025': {
        title: 'Mayo 2025',
        photos: [
            'Fotos/Mayo/IMG_4047.PNG',
            'Fotos/Mayo/IMG_4048.PNG',
            'Fotos/Mayo/IMG_4049.PNG',
            'Fotos/Mayo/IMG_4050.PNG'
        ]
    },
    'junio-2025': {
        title: 'Junio 2025',
        photos: [
            'Fotos/Junio/IMG_4053.PNG',
            'Fotos/Junio/IMG_4054.PNG',
            'Fotos/Junio/IMG_4055.PNG',
            'Fotos/Junio/IMG_4056.PNG'
        ]
    },
    'julio-2025': {
        title: 'Julio 2025',
        photos: [
            'Fotos/Julio/5214b601-2ac5-41c4-8a74-e7dddd867324.jpg',
            'Fotos/Julio/IMG_4054.PNG',
            'Fotos/Julio/IMG_4055.PNG',
            'Fotos/Julio/IMG_4056.PNG'
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
            'Fotos/Septiembre/IMG_4059.PNG',
            'Fotos/Septiembre/IMG_4060.PNG',
            'Fotos/Septiembre/IMG_4061.PNG',
            'Fotos/Septiembre/IMG_4062.PNG'
        ]
    },
    'octubre-2025': {
        title: 'Octubre 2025',
        photos: [
            'Fotos/Octubre/151972fc-d8a1-4154-93e2-532a08c3a259.jpg',
            'Fotos/Octubre/b645a262-0fe9-4e84-b331-8a04b14be525.jpg',
            'Fotos/Octubre/IMG_4060.PNG',
            'Fotos/Octubre/IMG_4061.PNG'
        ]
    },
    'noviembre-2025': {
        title: 'Noviembre 2025',
        photos: [
            'Fotos/Noviembre/IMG_4064.PNG',
            'Fotos/Noviembre/IMG_4065.PNG',
            'Fotos/Noviembre/IMG_4066.PNG',
            'Fotos/Noviembre/IMG_4067.PNG'
        ]
    },
    'diciembre-2025': {
        title: 'Diciembre 2025',
        photos: [
            'Fotos/Diciembre/IMG_4068.PNG',
            'Fotos/Diciembre/IMG_4069.PNG',
            'Fotos/Diciembre/IMG_4070.PNG',
            'Fotos/Diciembre/IMG_4071.PNG'
        ]
    },
    'enero-2026': {
        title: 'Enero 2026',
        photos: [
            'Fotos/Enero2026/DE2A841F-AB7B-42DF-8F35-3291AA580FF5.jpg',
            'Fotos/Enero2026/IMG_3878.jpg',
            'Fotos/Enero2026/IMG_3883.jpg',
            'Fotos/Enero2026/IMG_4072.PNG'
        ]
    },
    'febrero-2026': {
        title: 'Febrero 2026',
        photos: [
            'Fotos/Febrero2026/IMG_4076.jpg'
        ]
    }
};
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

closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

const closeLetter = document.getElementById('closeLetter');

closeLetter.addEventListener('click', () => {
    letterSection.classList.remove('active');
    
    envelope.classList.remove('open');
    
    setTimeout(() => {
        welcomeScreen.style.opacity = '1';
        timelineSection.style.opacity = '1';
        timelineSection.scrollIntoView({ behavior: 'smooth' });
    }, 300);
});
