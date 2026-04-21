import { useState, useEffect } from "react";
import {
  Menu,
  X,
  MapPin,
  MessageCircle,
  ChevronDown,
  Star,
  Phone,
  Clock,
  Flame,
} from "lucide-react";

const WA_NUMBER = "6285328506562";
const WA_LINK = `https://wa.me/${WA_NUMBER}`;
const WA_ORDER_MSG = encodeURIComponent(
  "Halo Surya Panggang! Saya ingin memesan roti bakar. Apakah stok tersedia sekarang?",
);

const menuItems = [
  {
    name: "Coklat",
    desc: "Olesan coklat premium yang manis dan meleleh sempurna di atas roti yang renyah.",
    color: "from-amber-800 to-amber-700",
    badge: "Terlaris",
    icon: "🍫",
  },
  {
    name: "Keju",
    desc: "Taburan keju gurih yang meleleh menggiurkan, perpaduan sempurna dengan roti panggang.",
    color: "from-yellow-600 to-amber-500",
    badge: "Favorit",
    icon: "🧀",
  },
  {
    name: "Kacang",
    desc: "Selai kacang creamy yang kaya protein, lezat dan mengenyangkan untuk semua usia.",
    color: "from-amber-600 to-yellow-700",
    badge: null,
    icon: "🥜",
  },
  {
    name: "Nanas",
    desc: "Selai nanas segar dengan rasa manis-asam alami yang menyegarkan dan unik.",
    color: "from-lime-600 to-green-600",
    badge: null,
    icon: "🍍",
  },
  {
    name: "Strawberry",
    desc: "Selai strawberry merah segar dengan aroma buah yang harum dan rasa manis alami.",
    color: "from-rose-600 to-red-500",
    badge: null,
    icon: "🍓",
  },
];

const navLinks = [
  { label: "Beranda", href: "#hero" },
  { label: "Tentang Kami", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Lokasi", href: "#location" },
];

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{ fontFamily: "'Poppins', sans-serif" }}
      className="text-stone-800 overflow-x-hidden"
    >
      {/* ───────── NAVBAR ───────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button
              onClick={() => scrollTo("#hero")}
              className="flex items-center gap-2 group"
            >
              <div className="w-9 h-9 bg-amber-600 rounded-full flex items-center justify-center shadow">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <span
                  className={`block font-bold leading-tight text-sm lg:text-base transition-colors ${
                    scrolled ? "text-stone-800" : "text-white"
                  }`}
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Surya Panggang
                </span>
                <span
                  className={`block text-xs leading-tight transition-colors ${
                    scrolled ? "text-amber-600" : "text-amber-200"
                  }`}
                >
                  Roti Bakar
                </span>
              </div>
            </button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`text-sm font-medium transition-colors hover:text-amber-500 ${
                    scrolled ? "text-stone-700" : "text-white"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href={`${WA_LINK}?text=${WA_ORDER_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold px-5 py-2 rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-4 h-4" />
                Pesan Sekarang
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                scrolled
                  ? "text-stone-700 hover:bg-stone-100"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden bg-white border-t border-stone-100 overflow-hidden transition-all duration-300 ${
            mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="block w-full text-left px-4 py-3 rounded-lg text-stone-700 font-medium hover:bg-amber-50 hover:text-amber-700 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              href={`${WA_LINK}?text=${WA_ORDER_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full mt-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-3 rounded-full transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Pesan Sekarang
            </a>
          </div>
        </div>
      </nav>

      {/* ───────── HERO ───────── */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background image */}
        <img
          src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Roti Bakar"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/50 to-stone-900/80" />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
            <Star className="w-3.5 h-3.5 fill-current" />
            Roti Bakar Pilihan Warga Panggang
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Roti Bakar{" "}
            <span className="text-amber-400 italic">Surya Panggang</span>
          </h1>

          <p className="text-stone-200 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Nikmati sensasi roti bakar hangat dengan berbagai pilihan rasa yang
            manis dan lezat. Bisa pilih sendiri atau kombinasikan sesuai selera!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`${WA_LINK}?text=${WA_ORDER_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold px-8 py-4 rounded-full text-base transition-all hover:shadow-2xl hover:shadow-amber-500/30 hover:-translate-y-1 active:translate-y-0 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              Pesan via WhatsApp
            </a>
            <button
              onClick={() => scrollTo("#menu")}
              className="flex items-center gap-2 border border-white/40 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-full text-base transition-all w-full sm:w-auto justify-center backdrop-blur-sm"
            >
              Lihat Menu
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollTo("#about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
          aria-label="Scroll ke bawah"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      {/* ───────── ABOUT ───────── */}
      <section id="about" className="py-20 lg:py-28 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/tentang-kami.png"
                  alt="Roti Bakar Surya Panggang"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-amber-600 text-white rounded-2xl px-5 py-4 shadow-xl">
                <div className="flex items-center gap-2">
                  <Flame className="w-5 h-5" />
                  <div>
                    <p className="font-bold text-base leading-tight">
                      Selalu Segar
                    </p>
                    <p className="text-amber-200 text-xs">
                      Dipanggang setiap hari
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="inline-block text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
                Tentang Kami
              </span>
              <h2
                className="text-3xl sm:text-4xl font-bold text-stone-800 leading-tight mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Cita Rasa Hangat di{" "}
                <span className="text-amber-600 italic">Setiap Gigitan</span>
              </h2>
              <p className="text-stone-600 leading-relaxed mb-5 text-base">
                <strong>Roti Bakar Surya Panggang</strong> hadir untuk menemani
                hari-harimu dengan sajian roti bakar yang hangat, renyah, dan
                penuh cita rasa. Kami menyediakan berbagai pilihan rasa yang
                bisa kamu sesuaikan dengan selera.
              </p>
              <p className="text-stone-600 leading-relaxed mb-8 text-base">
                Dari coklat yang manis, keju yang gurih, hingga nanas dan
                strawberry yang segar — semuanya tersedia untukmu. Bahkan kamu
                bisa <strong>kombinasikan beberapa rasa</strong> sekaligus untuk
                pengalaman yang lebih unik dan memuaskan!
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  {
                    icon: <Flame className="w-5 h-5" />,
                    label: "Dipanggang Segar",
                    sub: "Langsung saat order",
                  },
                  {
                    icon: <Star className="w-5 h-5" />,
                    label: "5 Varian Rasa",
                    sub: "Plus kombinasi bebas",
                  },
                  {
                    icon: <Clock className="w-5 h-5" />,
                    label: "Cepat & Mudah",
                    sub: "Order via WhatsApp",
                  },
                  {
                    icon: <Phone className="w-5 h-5" />,
                    label: "Ramah & Bersahabat",
                    sub: "Siap melayani kamu",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm"
                  >
                    <div className="text-amber-600 mt-0.5 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-stone-800 text-sm">
                        {item.label}
                      </p>
                      <p className="text-stone-500 text-xs mt-0.5">
                        {item.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={`${WA_LINK}?text=${WA_ORDER_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-7 py-3.5 rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── MENU ───────── */}
      <section id="menu" className="py-20 lg:py-28 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Daftar Menu
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-stone-800 mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Pilihan Rasa Favorit Kamu
            </h2>
            <p className="text-stone-500 max-w-lg mx-auto text-base leading-relaxed">
              Pilih satu rasa atau kombinasikan sesukamu! Harga menyesuaikan
              dengan kombinasi yang kamu pilih.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-stone-100"
              >
                {/* Card header */}
                <div
                  className={`bg-gradient-to-br ${item.color} p-8 relative flex items-center justify-center`}
                >
                  <span className="text-6xl drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  {item.badge && (
                    <span className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full border border-white/30">
                      {item.badge}
                    </span>
                  )}
                </div>
                {/* Card body */}
                <div className="p-6">
                  <h3
                    className="text-xl font-bold text-stone-800 mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Roti Bakar {item.name}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed mb-5">
                    {item.desc}
                  </p>
                  <a
                    href={`${WA_LINK}?text=${encodeURIComponent(`Halo Surya Panggang! Saya mau pesan Roti Bakar ${item.name}. Apakah tersedia sekarang?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold text-sm group/btn"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Pesan Ini
                    <span className="group-hover/btn:translate-x-1 transition-transform">
                      →
                    </span>
                  </a>
                </div>
              </div>
            ))}

            {/* Kombinasi card */}
            <div className="group bg-gradient-to-br from-stone-800 to-amber-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:col-span-2 lg:col-span-1 border border-stone-200">
              <div className="p-8 h-full flex flex-col justify-between">
                <div>
                  <span className="text-5xl">✨</span>
                  <h3
                    className="text-xl font-bold text-white mt-4 mb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Kombinasi Bebas
                  </h3>
                  <p className="text-stone-300 text-sm leading-relaxed mb-4">
                    Mau campur Coklat + Keju? Atau Strawberry + Kacang? Bebas
                    banget! Kamu bisa request kombinasi apapun sesuai selera.
                    Harga menyesuaikan pilihan kombinasimu.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {menuItems.map((m) => (
                      <span
                        key={m.name}
                        className="bg-white/10 text-amber-200 text-xs font-medium px-3 py-1 rounded-full border border-white/20"
                      >
                        {m.icon} {m.name}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={`${WA_LINK}?text=${encodeURIComponent("Halo Surya Panggang! Saya mau tanya soal kombinasi rasa roti bakar. Boleh request campuran ya?")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold px-5 py-3 rounded-full transition-all hover:shadow-lg text-sm w-fit"
                >
                  <MessageCircle className="w-4 h-4" />
                  Tanya Kombinasi
                </a>
              </div>
            </div>
          </div>

          {/* Kombinasi note */}
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-6 flex items-start gap-4">
            <span className="text-2xl flex-shrink-0">💡</span>
            <div>
              <p className="font-semibold text-amber-800 mb-1">
                Bisa Request Kombinasi Rasa!
              </p>
              <p className="text-amber-700 text-sm leading-relaxed">
                Kamu bebas memilih dan mengombinasikan rasa sesuai keinginan.
                Cukup sebutkan kombinasimu saat pesan via WhatsApp, dan harga
                akan menyesuaikan kombinasi yang kamu pilih. Tidak ada batasan
                kreativitasmu!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── CTA BANNER ───────── */}
      <section className="py-20 bg-amber-600 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-amber-500/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-amber-700/40 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Lapar? Yuk, Pesan Sekarang!
          </h2>
          <p className="text-amber-100 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Tinggal chat WhatsApp, roti bakar hangat siap kamu nikmati. Gampang,
            cepat, dan pastinya lezat!
          </p>
          <a
            href={`${WA_LINK}?text=${WA_ORDER_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white hover:bg-amber-50 text-amber-700 font-bold px-8 py-4 rounded-full text-base transition-all hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-1 active:translate-y-0"
          >
            <MessageCircle className="w-5 h-5" />
            Chat WhatsApp Sekarang
          </a>
          <p className="text-amber-200 text-sm mt-4">
            0853-2850-6562 · Respon cepat!
          </p>
        </div>
      </section>

      {/* ───────── LOCATION ───────── */}
      <section id="location" className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Temukan Kami
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-stone-800 mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Lokasi Kami
            </h2>
            <p className="text-stone-500 max-w-md mx-auto text-base">
              Mampir langsung atau hubungi kami dulu via WhatsApp untuk
              memastikan ketersediaan.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-600 text-white rounded-xl p-3 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-stone-800 mb-1">Alamat</p>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      Perempatan Jalan MH Thamrin dan Jalan Ki Mangun Sarkoro,
                      Panggang, Jepara, Jawa Tengah, Indonesia
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-600 text-white rounded-xl p-3 flex-shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-stone-800 mb-1">
                      WhatsApp
                    </p>
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-600 hover:text-amber-700 font-semibold text-sm hover:underline"
                    >
                      0853-2850-6562
                    </a>
                    <p className="text-stone-500 text-xs mt-1">
                      Klik untuk chat langsung
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-600 text-white rounded-xl p-3 flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-stone-800 mb-1">
                      Jam Operasional
                    </p>
                    <p className="text-stone-600 text-sm">Setiap Hari</p>
                    <p className="text-amber-600 font-semibold text-sm">
                      Sore – Malam
                    </p>
                    <p className="text-stone-400 text-xs mt-1">
                      *Hubungi untuk jadwal pasti
                    </p>
                  </div>
                </div>
              </div>

              <a
                href={`${WA_LINK}?text=${WA_ORDER_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold px-6 py-3.5 rounded-full transition-all hover:shadow-lg w-full"
              >
                <MessageCircle className="w-5 h-5" />
                Pesan via WhatsApp
              </a>
            </div>

            {/* Map */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-stone-200 aspect-video lg:aspect-auto lg:h-96">
                <iframe
                  title="Lokasi Roti Bakar Surya Panggang"
                  src="https://maps.google.com/maps?q=Jl.+MH+Thamrin+Ki+Mangun+Sarkoro+Panggang+Jepara+Jawa+Tengah&output=embed&z=15"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "300px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── FOOTER ───────── */}
      <footer className="bg-stone-900 text-stone-300 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 bg-amber-600 rounded-full flex items-center justify-center">
                  <Flame className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p
                    className="font-bold text-white leading-tight"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Surya Panggang
                  </p>
                  <p className="text-amber-400 text-xs">Roti Bakar</p>
                </div>
              </div>
              <p className="text-sm text-stone-400 leading-relaxed">
                Roti bakar hangat dengan berbagai pilihan rasa yang manis dan
                lezat. Bisa dikombinasikan sesuai selera!
              </p>
            </div>

            {/* Menu */}
            <div>
              <p className="font-semibold text-white mb-4">Menu Kami</p>
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <span className="text-sm text-stone-400">
                      {item.icon} Roti Bakar {item.name}
                    </span>
                  </li>
                ))}
                <li>
                  <span className="text-sm text-amber-400">
                    ✨ Kombinasi Bebas
                  </span>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="font-semibold text-white mb-4">Kontak & Lokasi</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-stone-400 leading-relaxed">
                    Perempatan Jl. MH Thamrin & Jl. Ki Mangun Sarkoro, Panggang,
                    Jepara
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    0853-2850-6562
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-stone-500 text-sm text-center sm:text-left">
              &copy; 2025 Roti Bakar Surya Panggang. Semua hak dilindungi.
            </p>
            <a
              href={`${WA_LINK}?text=${WA_ORDER_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Pesan Sekarang
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
