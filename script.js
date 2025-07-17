// Inisialisasi peta
const map = L.map('map').setView([-6.9, 109.65], 10);

// Tambahkan tile layer seperti Google Maps style
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Data lokasi-lokasi PLN
const locations = [
  {
    name: "PLN UP3 Pekalongan",
    coords: [-6.8896, 109.6753],
    address: "Jl. Majapahit No.2, Poncol, Pekalongan Timur",
    description: "Mengelola pelayanan pelanggan dan distribusi listrik wilayah Pekalongan.",
    images: [
      "image/PLN BAWAH.jpg",
      "image/PLN UP3 PEKALONGAN.jpg",
      "image/PLN DALAM.jpg"
    ]
  },
  {
    name: "PLN ULP Wiradesa",
    coords: [-6.9007, 109.6081],
    address: "Jl. Raya Wiradesa No.128, Wiradesa",
    description: "Melayani wilayah Kecamatan Wiradesa dan sekitarnya.",
    images: [
      "images/ulp-wiradesa-1.jpg",
      "images/ulp-wiradesa-2.jpg",
      "images/ulp-wiradesa-3.jpg"
    ]
  },
  {
    name: "PLN ULP Batang",
    coords: [-6.8914, 109.5330],
    address: "Jl. Jenderal Sudirman No.25, Kauman, Batang",
    description: "Pelayanan kelistrikan wilayah Batang dan sekitarnya.",
    images: [
      "images/ulp-batang-1.jpg",
      "images/ulp-batang-2.jpg",
      "images/ulp-batang-3.jpg"
    ]
  },
  {
    name: "PLN ULP Kedungwuni",
    coords: [-6.9605, 109.6483],
    address: "Jl. Raya Kedungwuni, Kedungwuni Timur",
    description: "Menangani jaringan dan layanan pelanggan Kedungwuni.",
    images: [
      "images/ulp-kedungwuni-1.jpg",
      "images/ulp-kedungwuni-2.jpg",
      "images/ulp-kedungwuni-3.jpg"
    ]
  },
  {
    name: "PLN ULP Kajen",
    coords: [-7.0264, 109.6416],
    address: "Jl. Mandurorejo No.17, Kajen",
    description: "Layanan teknis dan administrasi kelistrikan wilayah Kajen.",
    images: [
      "images/ulp-kajen-1.jpg",
      "images/ulp-kajen-2.jpg",
      "images/ulp-kajen-3.jpg"
    ]
  }
];

// Tambahkan marker ke peta
locations.forEach(loc => {
  const gallery = loc.images.map(src => `<img src="${src}" alt="Foto ${loc.name}">`).join('');
  const popupContent = `
    <b>${loc.name}</b><br>
    <i>${loc.address}</i><br><br>
    ${loc.description}
    <div class="image-gallery">${gallery}</div>
  `;
  L.marker(loc.coords)
    .addTo(map)
    .bindPopup(popupContent);
});
