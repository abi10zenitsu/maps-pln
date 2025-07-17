const map = L.map('map').setView([-6.8895, 109.6741], 11); // Fokus ke Pekalongan

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Data marker lokasi PLN
const plnLocations = [
  {
    name: "PLN UP3 Pekalongan",
    coords: [-6.8895, 109.6741],
    image: "FOTO/PLN UP3 PEKALONGAN.jpg",
    address: "Jl. Manggis No.2, Pekalongan Timur, Kota Pekalongan, Jawa Tengah",
    hours: "Senin–Kamis 08:00–15:00, Jumat 08:30–15:30",
    notes: "Siaga Ramadan & edukasi PLN Mobile"
  },
  {
    name: "PLN ULP Wiradesa",
    coords: [-6.8975, 109.6032],
    image: "https://i.imgur.com/NKDrSkm.jpg", // Ganti ke foto asli jika ada
    address: "Jl. Raya Pantura Wiradesa, Kab. Pekalongan",
    hours: "Senin–Jumat 08:00–15:00",
    notes: "Layanan migrasi listrik & pasang baru"
  },
  {
    name: "PLN ULP Gringsing",
    coords: [-6.9735, 109.8144],
    image: "https://i.imgur.com/8iK3dFb.jpg", // Ganti ke foto asli jika ada
    address: "Kec. Gringsing, Kab. Batang, Jawa Tengah",
    hours: "Senin–Jumat 08:00–15:00",
    notes: "Pemeliharaan jaringan rutin"
  },
  {
    name: "PLN ULP Batang",
    coords: [-6.9264, 109.7179],
    image: "https://i.imgur.com/vSbF1mU.jpg", // Ganti ke foto asli jika ada
    address: "Jl. Jend. Sudirman No.71, Batang",
    hours: "Senin–Jumat 08:00–15:00",
    notes: "Penyaluran sambungan subsidi"
  }
];

// Tambahkan semua marker ke peta
plnLocations.forEach(loc => {
  const marker = L.marker(loc.coords).addTo(map);
  marker.bindPopup(`
    <div style="text-align:left;">
      <strong>${loc.name}</strong><br>
      <img src="${loc.image}" alt="${loc.name}" width="200" style="margin: 6px 0;"><br>
      <b>Alamat:</b> ${loc.address}<br>
      <b>Jam Operasional:</b> ${loc.hours}<br>
      <b>Info:</b> ${loc.notes}
    </div>
  `);
});
