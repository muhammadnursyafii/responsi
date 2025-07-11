// backend/data.js 
const educationHistory = [ 
  { id: 1, period: '2023 - Sekarang', institution: 'Universitas AMIKOM Yogyakarta', major: 'S1 - Teknik Informatika' }, 
  { id: 2, period: '2019 - 2022', institution: 'SMAN Taluk Kuantan', major: 'MIPA' } 
];

const skills = [ 
  { name: 'Vue.js', level: 'Mahir' }, { name: 'JavaScript', level: 'Mahir' }, 
  { name: 'Tailwind CSS', level: 'Mahir' }, { name: 'Node.js', level: 'Menengah' }, 
  { name: 'Express.js', level: 'Menengah' }, { name: 'PostgreSQL', level: 'Menengah' }, 
  { name: 'Git & GitHub', level: 'Mahir' }, { name: 'HTML5 & CSS3', level: 'Mahir' }, 
];

const projects = [ 
  { title: 'Website Toko Online', 
    image: '/images/P1.png', 
    description: 'Platform e-commerce dengan fitur keranjang belanja.', 
    tech: ['Vue.js', 'Express.js', 'PostgreSQL'], 
    link: '#' }, 
  { title: 'Aplikasi Manajemen Tugas', 
    image: '/images/P2.png', 
    description: 'Aplikasi untuk melacak progres tugas harian.', 
    tech: ['React', 'Firebase'], 
    link: '#' } 
];

module.exports = { educationHistory, skills, projects };