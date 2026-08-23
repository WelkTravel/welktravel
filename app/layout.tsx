import type { Metadata } from 'next';
import Image from 'next/image';
import { Playfair_Display, Montserrat } from 'next/font/google';
import './globals.css';
import WhatsAppFlotante from '@/components/WhatsAppFlotante';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-playfair',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-montserrat',
});

const siteUrl = 'https://welktravel.com'; // TODO: reemplazar por el dominio real cuando esté definido

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Welk Travel — Explora sin límites',
    template: '%s',
  },
  description: 'Vuelos, hoteles y paquetes turísticos hechos a tu medida.',
  openGraph: {
    title: 'Welk Travel — Explora sin límites',
    description: 'Vuelos, hoteles y paquetes turísticos hechos a tu medida.',
    url: siteUrl,
    siteName: 'Welk Travel',
    images: ['/logo-principal.png'],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Welk Travel — Explora sin límites',
    description: 'Vuelos, hoteles y paquetes turísticos hechos a tu medida.',
    images: ['/logo-principal.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${montserrat.variable}`}>
        <header className="sticky top-0 z-50 bg-navy border-b border-navy-light">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
            <div className="flex items-center gap-2">
              <Image
                src="/isotipo.png"
                alt="Welk Travel"
                width={42}
                height={45}
                className="h-11 w-auto"
                priority
              />
              <span className="font-title text-cream text-lg font-semibold tracking-wide">
                WELK TRAVEL
              </span>
            </div>
            <nav className="flex gap-6 text-sm text-mauve font-body">
              <a href="/vuelos" className="hover:text-gold transition-colors">Vuelos</a>
              <a href="/hoteles" className="hover:text-gold transition-colors">Hoteles</a>
              <a href="/paquetes" className="hover:text-gold transition-colors">Paquetes</a>
              <a href="#contacto" className="hover:text-gold transition-colors">Contacto</a>
            </nav>
          </div>
        </header>

        {/* Barra legal — reemplaza el NIT y el número de RNT por los datos reales de la agencia */}
        <div className="bg-navy-mid text-center py-1.5 text-[11px] text-mauve font-body flex justify-center gap-6 tracking-wide">
          <span>NIT 900.000.000-0</span>
          <span>RNT 00000</span>
          <span>Pago seguro</span>
        </div>

        <main>{children}</main>

        <footer className="bg-navy border-t border-navy-light py-8">
          <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-5">
            <div className="flex gap-5">
              <a href="#" aria-label="Facebook" className="text-mauve hover:text-gold transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-mauve hover:text-gold transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.16.55.55.9 1.11 1.16 1.77.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.93 4.93 0 0 1-1.16 1.77 4.93 4.93 0 0 1-1.77 1.16c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.93 4.93 0 0 1-1.77-1.16 4.93 4.93 0 0 1-1.16-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.16-1.77A4.93 4.93 0 0 1 5.45.53c.64-.25 1.37-.42 2.43-.47C8.94.01 9.28 0 12 0Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.25a3.25 3.25 0 1 1 0-6.5 3.25 3.25 0 0 1 0 6.5ZM17.4 6.6a1.17 1.17 0 1 0 0-2.34 1.17 1.17 0 0 0 0 2.34Z" transform="translate(0 2)"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-mauve hover:text-gold transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-3.96 4.77 0V21H22v-7.93c0-6.17-7.06-5.95-8.68-2.91V8.48Z"/>
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="text-mauve hover:text-gold transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M23.5 6.9a3.02 3.02 0 0 0-2.12-2.14C19.5 4.24 12 4.24 12 4.24s-7.5 0-9.38.52A3.02 3.02 0 0 0 .5 6.9 31.6 31.6 0 0 0 0 12.5a31.6 31.6 0 0 0 .5 5.6 3.02 3.02 0 0 0 2.12 2.14c1.88.52 9.38.52 9.38.52s7.5 0 9.38-.52a3.02 3.02 0 0 0 2.12-2.14 31.6 31.6 0 0 0 .5-5.6 31.6 31.6 0 0 0-.5-5.6ZM9.6 15.98V9.02l6.27 3.48-6.27 3.48Z"/>
                </svg>
              </a>
              <a href="#" aria-label="TikTok" className="text-mauve hover:text-gold transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16.6 2h-3.3v13.8a3 3 0 1 1-2.5-2.96v-3.35A6.35 6.35 0 1 0 16.35 16V8.6a8.1 8.1 0 0 0 4.65 1.47V6.75a4.8 4.8 0 0 1-4.4-4.75Z"/>
                </svg>
              </a>
            </div>

            <nav className="flex gap-6 text-xs text-mauve font-body">
              <a href="/preguntas-frecuentes" className="hover:text-gold transition-colors">Preguntas frecuentes</a>
              <a href="#contacto" className="hover:text-gold transition-colors">Contacto</a>
            </nav>

            <p className="text-center text-xs text-mauve font-body">
              © {new Date().getFullYear()} Welk Travel. Todos los derechos reservados.
            </p>
          </div>
        </footer>

        <WhatsAppFlotante numero="573001234567" />
      </body>
    </html>
  );
}
