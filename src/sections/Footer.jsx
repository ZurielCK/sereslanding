import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";
import MapFacade from "../components/MapFacade";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-gray-900 text-white py-14">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Marca */}

        <div>
          <h3 className="text-2xl font-bold text-green-400">
            Ser Es Psicoterapia
          </h3>

          <p className="mt-4 text-gray-400">
            Espacio terapéutico dedicado al bienestar emocional y al crecimiento
            personal.
          </p>
        </div>

        {/* Navegación */}

        <div>
          <h4 className="font-semibold text-lg">Navegación</h4>

          <ul className="mt-4 space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">
              <a href="#inicio">Inicio</a>
            </li>

            <li className="hover:text-white cursor-pointer">
              <a href="#about">Sobre mí</a>
            </li>

            <li className="hover:text-white cursor-pointer">
              <a href="#servicios">Servicios</a>
            </li>
          </ul>
        </div>

        {/* Contacto */}

        <div>
          <h4 className="font-semibold text-lg">Contacto</h4>

          <p className="mt-3 text-sm text-gray-400">
            Cuernavaca, Morelos · Presencial y en línea
          </p>

          {/* Mapa con facade — el iframe carga solo al clic */}
          <MapFacade />

          {/* Redes */}

          <div className="flex gap-4 mt-6 text-2xl">
        
            <a
              href="https://www.instagram.com/seres_consenti2"
              className="hover:text-pink-400 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/seres.psicoterapia?locale=es_LA"
              className="hover:text-blue-400 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>

            <a
              href="https://wa.me/5217777891025"
              className="hover:text-green-400 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}

      <div className="text-center text-gray-500 mt-10 text-sm">
        © {new Date().getFullYear()} Ser Es Psicoterapia — Todos los derechos
        reservados
      </div>
    </footer>
  );
}
