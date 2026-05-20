import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MapPin, Mail, Phone, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Logo" className="h-12 w-12 object-contain" />
            <div>
              <p className="font-bold leading-tight">I.E. La Alborada</p>
              <p className="text-xs text-muted-foreground">I.E. 30225</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Formando estudiantes con excelencia académica y sólidos valores.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold mb-3">Contacto</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary" /> La Alborada, Perú</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary" /> (+51) 000 000 000</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary" /> contacto@ielaalborada.edu.pe</li>
            <li className="flex gap-2"><Clock className="h-4 w-4 mt-0.5 text-primary" /> Lun – Vie: 8:00 a.m. – 3:00 p.m.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold mb-3">Enlaces rápidos</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/nosotros/historia" className="text-muted-foreground hover:text-primary">Historia</Link></li>
            <li><Link to="/admision/proceso" className="text-muted-foreground hover:text-primary">Admisión</Link></li>
            <li><Link to="/noticias" className="text-muted-foreground hover:text-primary">Noticias</Link></li>
            <li><Link to="/contacto" className="text-muted-foreground hover:text-primary">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold mb-3">Síguenos</h4>
          <div className="flex gap-3">
            <a href="#" aria-label="Facebook" className="h-10 w-10 grid place-items-center rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="h-10 w-10 grid place-items-center rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="TikTok" className="h-10 w-10 grid place-items-center rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform font-bold text-xs">TT</a>
          </div>
          <div className="mt-4 text-xs text-muted-foreground space-y-1">
            <a href="#" className="block hover:text-primary">Política de privacidad</a>
            <a href="#" className="block hover:text-primary">Mapa del sitio</a>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="mx-auto max-w-7xl px-6 py-4 text-center text-xs text-muted-foreground">
          © {year} – I.E. La Alborada I.E. 30225. Todos los derechos reservados. Elaborado por <span className="font-semibold text-foreground">Gato_Tech</span>.
        </div>
      </div>
    </footer>
  );
}