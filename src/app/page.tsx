import {BackToTopButton} from "@/app/BackToTopButton";

export default function Home() {
  const whatsappNumber = '625814520059';
  const whatsappMessage = encodeURIComponent('Halo Mitra Bendera, saya ingin bertanya tentang produk Anda.');

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const currentYear = new Date().getFullYear();

  return (
    <div className="font-sans bg-gray-100">
      <nav className="bg-red-600 p-4 text-white shadow-md fixed w-full z-20 top-0">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Mitra Bendera</div>
          <div>
            <a href="#tentang" className="mx-2 hover:underline">Tentang Kami</a>
            <a href="#keunggulan" className="mx-2 hover:underline hidden md:inline">Keunggulan</a>
            <a href="#produk" className="mx-2 hover:underline">Produk</a>
            <a href="#bahan" className="mx-2 hover:underline hidden md:inline">Bahan & Perawatan</a>
            <a href="#testimoni" className="mx-2 hover:underline hidden md:inline">Testimoni</a>
            <a href="#faq" className="mx-2 hover:underline hidden md:inline">FAQ</a>
            <a href="#marketplace" className="mx-2 hover:underline hidden md:inline">Marketplace</a>
            <a href="#lokasi" className="mx-2 hover:underline hidden md:inline">Lokasi</a>
            <a href="#kontak" className="mx-2 hover:underline">Kontak</a>
          </div>
        </div>
      </nav>

      <div className="pt-16"></div>

      <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url("https://placehold.co/1920x1080/FF0000/FFFFFF?text=Bendera+Merah+Putih")' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto flex items-center justify-center h-full relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Kibarkan Semangat Merah Putih</h1>
            <p className="text-xl md:text-2xl mb-8">Dapatkan Bendera Indonesia Berkualitas dari Mitra Bendera</p>
            <a
              href="#produk"
              className="bg-white text-red-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300"
            >
              Lihat Produk Kami
            </a>
          </div>
        </div>
      </section>

      <section id="tentang" className="py-16 bg-white">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Tentang Mitra Bendera</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Mitra Bendera hadir sebagai penyedia bendera Merah Putih berkualitas tinggi untuk berbagai kebutuhan.
            Kami berkomitmen untuk menyediakan produk terbaik yang mencerminkan kebanggaan nasional.
            Dengan bahan pilihan dan jahitan rapi, bendera kami siap berkibar gagah di setiap momen penting Anda.
          </p>
        </div>
      </section>

      <section id="keunggulan" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Mengapa Memilih Mitra Bendera?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl text-red-600 mb-4">⭐</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Kualitas Terjamin</h3>
              <p className="text-gray-600">Menggunakan bahan terbaik dan proses produksi yang cermat.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl text-red-600 mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Pengiriman Cepat</h3>
              <p className="text-gray-600">Pesanan Anda diproses dan dikirim dengan cepat.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl text-red-600 mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Layanan Pelanggan Ramah</h3>
              <p className="text-gray-600">Siap membantu Anda dengan sepenuh hati.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="produk" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Produk Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
              <img src="https://placehold.co/600x400/FF0000/FFFFFF/png?text=Bendera+Besar+Berkibar" alt="Bendera Ukuran Besar" className="w-full h-64 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Bendera Ukuran Besar</h3>
                <p className="text-gray-600 mb-4">Ideal untuk tiang bendera di halaman atau gedung.</p>
                <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300">
                  Lihat Detail
                </button>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
              <img src="https://placehold.co/600x400/FF0000/FFFFFF/png?text=Bendera+Sedang+di+Rumah" alt="Bendera Ukuran Sedang" className="w-full h-64 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Bendera Ukuran Sedang</h3>
                <p className="text-gray-600 mb-4">Cocok untuk penggunaan di rumah atau acara komunitas.</p>
                <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300">
                  Lihat Detail
                </button>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
              <img src="https://placehold.co/600x400/FF0000/FFFFFF/png?text=Bendera+Kecil+saat+Pawai" alt="Bendera Ukuran Kecil" className="w-full h-64 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Bendera Ukuran Kecil</h3>
                <p className="text-gray-600 mb-4">Sempurna untuk dekorasi atau dibawa saat pawai.</p>
                <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300">
                  Lihat Detail
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="bahan" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Bahan Berkualitas & Cara Perawatan</h2>
          <div className="max-w-3xl mx-auto text-gray-600 text-lg">
            <p className="mb-4">
              Bendera Mitra Bendera dibuat menggunakan bahan berkualitas tinggi yang tahan cuaca dan tidak mudah luntur.
              Kami memastikan setiap jahitan rapi dan kuat untuk penggunaan jangka panjang.
            </p>
            <p className="mb-4 font-semibold">Tips Perawatan:</p>
            <ul className="list-disc list-inside text-left mx-auto max-w-md">
              <li>Cuci dengan tangan menggunakan deterjen lembut.</li>
              <li>Hindari pemutih.</li>
              <li>Jemur di tempat teduh untuk menjaga warna.</li>
              <li>Setrika dengan suhu rendah jika diperlukan.</li>
            </ul>
          </div>
        </div>
      </section>


      <section id="testimoni" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Apa Kata Pelanggan Kami?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic mb-4">"Bendera dari Mitra Bendera sangat berkualitas, warnanya cerah dan tahan lama. Sangat puas!"</p>
              <p className="text-gray-800 font-semibold">- Budi Santoso</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic mb-4">"Pelayanan cepat dan ramah. Bendera sampai tepat waktu untuk acara kami. Terima kasih Mitra Bendera!"</p>
              <p className="text-gray-800 font-semibold">- Siti Aminah</p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Pertanyaan Umum (FAQ)</h2>
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Bagaimana cara memesan?</h3>
              <p className="text-gray-600">Anda dapat menghubungi kami melalui formulir kontak di bawah atau telepon langsung.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Opsi pembayaran apa saja yang tersedia?</h3>
              <p className="text-gray-600">Kami menerima transfer bank. Detail pembayaran akan diberikan saat konfirmasi pesanan.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Apakah bisa pesan ukuran custom?</h3>
              <p className="text-gray-600">Ya, kami melayani pesanan ukuran custom. Silakan hubungi kami untuk diskusi lebih lanjut.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="marketplace" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Temukan Kami di Marketplace</h2>
          <p className="text-lg text-gray-600 mb-8">Anda juga bisa membeli produk kami melalui marketplace favorit Anda:</p>
          <div className="flex justify-center items-center space-x-8">
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition duration-300">
              [Image of Tokopedia Logo Placeholder]
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition duration-300">
              [Image of Shopee Logo Placeholder]
            </a>
          </div>
          <p className="mt-4 text-gray-600 text-sm">*(Link dan gambar logo di atas adalah placeholder, ganti dengan link toko dan gambar logo Anda yang sebenarnya)*</p>
        </div>
      </section>

      <section id="lokasi" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Lokasi Kami</h2>
          <p className="text-lg text-gray-600 mb-8">
            Kunjungi toko fisik atau kantor kami (jika ada).
            <br/>
            *(Bagian ini bisa diisi dengan peta interaktif atau alamat lengkap)*
          </p>
          <div className="bg-gray-300 h-64 w-full max-w-2xl mx-auto rounded-lg flex items-center justify-center text-gray-600">
            [Placeholder Peta Lokasi]
          </div>
        </div>
      </section>


      <section id="kontak" className="py-16 bg-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Hubungi Kami Melalui WhatsApp</h2>
          <p className="text-lg text-gray-600 mb-8">Klik tombol di bawah ini untuk langsung terhubung dengan kami via WhatsApp.</p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
          >
            Chat via WhatsApp
          </a>
          <p className="mt-4 text-gray-600">Atau hubungi kami di: {whatsappNumber}</p>
        </div>
      </section>


      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center px-4">
          <p>&copy; {currentYear} Mitra Bendera. Semua Hak Dilindungi.</p>
          <p className="mt-2">Dibuat dengan ❤️ di Indonesia</p>
        </div>
      </footer>

      <BackToTopButton />
    </div>
  );
}
