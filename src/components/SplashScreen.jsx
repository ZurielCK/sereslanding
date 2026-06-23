import logo from "../assets/images/Logo.png";

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-white to-[var(--color-cream)] z-[999]">
      {/* Logo */}

      <img
        src={logo}
        alt="SerEs Psicoterapia"
        className="w-80 md:w-92 animate-[fadeZoom_1.5s_ease-in-out]"
      />

      {/* Nombre */}

      <h1 className="mt-6 text-xl md:text-2xl font-semibold text-[var(--color-deep)] tracking-wide">
        SerEs Psicoterapia
      </h1>

      {/* Loader */}

      <div className="mt-8 w-10 h-10 border-4 border-[var(--color-accent)] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
