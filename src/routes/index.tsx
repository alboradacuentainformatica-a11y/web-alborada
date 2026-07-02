import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Award,
  Heart,
  Handshake,
  ShieldCheck,
  Sparkles,
  GraduationCap,
  Users,
  CalendarRange,
  ArrowRight,
} from "lucide-react";
import b1 from "@/assets/banner_oficial.png";
import b2 from "@/assets/bannerDocente.jpg";
import b3 from "@/assets/biblioteca.jpg";
import b4 from "@/assets/Desfile.jpg";
import b5 from "@/assets/banner-5.jpg";
import fotoDirectora from "@/assets/directora.png";
import fotoSubdirector from "@/assets/subdirector.png";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "I.E. La Alborada 30225" },
      { name: "description", content: "Bienvenidos al portal de la I.E. La Alborada 30225. Excelencia académica y formación integral en educación primaria." },
    ],
  }),
  component: Index,
});

const slides = [
  { src: b1, title: "Bienvenidos a la I.E. La Alborada", subtitle: "Excelencia académica y formación integral" },
  { src: b2, title: "Aprendizaje con valores", subtitle: "Educación primaria de calidad" },
  { src: b3, title: "Espacios para crecer", subtitle: "Biblioteca, cómputo y mucho más" },
  { src: b4, title: "Deporte y vida sana", subtitle: "Desarrollo físico y trabajo en equipo" },
  { src: b5, title: "Tecnología en el aula", subtitle: "Preparando a los líderes del mañana" },

];

const values = [
  { icon: ShieldCheck, title: "Responsabilidad", desc: "Compromiso con el deber y el aprendizaje." },
  { icon: Heart, title: "Puntualudad", desc: "Valoramos el tiempo de todos." },
  { icon: Handshake, title: "Solidaridad", desc: "Apoyamos y cuidamos al grupo." },
  { icon: Award, title: "Empatia", desc: "Entendemos y respetamos emociones." },
  { icon: Sparkles, title: "Perseverancia", desc: "Constancia para lograr objetivos." },
];

function Counter({ end, label, suffix = "" }: { end: number; label: string; suffix?: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    const duration = 3000;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setN(Math.floor(end * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [end]);
  return (
    <div className="text-center">
      <div className="text-5xl md:text-6xl font-extrabold text-primary">
        {n}
        {suffix}
      </div>
      <div className="mt-2 text-sm font-medium text-muted-foreground uppercase tracking-wide">{label}</div>
    </div>
  );
}

function Index() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-background">
      {/* Hero carousel */}
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
        {slides.map((s, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === idx ? "opacity-100" : "opacity-0"}`}
          >
            <img src={s.src} alt={s.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          </div>
        ))}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-3xl px-6 md:px-16 text-white">
            <span className="inline-block rounded-full bg-accent text-accent-foreground px-3 py-1 text-xs font-bold uppercase tracking-wider">I.E. 30225</span>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight drop-shadow">
              {slides[i].title}
            </h1>
            <p className="mt-3 text-lg md:text-xl text-white/90">{slides[i].subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/admision/proceso" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg hover:scale-105 transition-transform">
                Proceso de admisión <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/nosotros/historia" className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-6 py-3 font-semibold text-white border border-white/30 hover:bg-white/20 transition">
                Conoce más
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all ${i === idx ? "w-8 bg-accent" : "w-2 bg-white/60"}`}
            />
          ))}
        </div>
      </section>

      {/* Mensaje institucional */}
      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Bienvenidos a la I.E. La Alborada 30225
        </h2>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          <span className="font-semibold text-primary">Excelencia académica</span> — <span className="font-semibold text-primary">Formación integral</span> — <span className="font-semibold text-primary">Logros destacados</span>.
          Somos una institución pública comprometida al 100% con la educación de calidad, los valores y el desarrollo integral de cada estudiante.
        </p>
      </section>


 {/* Equipo Directivo */}
<section className="bg-secondary/40 py-20">
  <div className="mx-auto max-w-4xl px-6"> {/* Reduje max-w a 4xl para que 2 tarjetas no queden tan separadas */}
    
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold">Nuestro Equipo Directivo</h2>
      <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
        Líderes comprometidos con la excelencia académica, la gestión institucional y la formación en valores de nuestra comunidad educativa.
      </p>
    </div>

    {/* Lo cambie a grid-cols-1, sm:grid-cols-2 y centrado -GATOTECH */}
    <div className="grid gap-8 sm:grid-cols-2 justify-center max-w-2xl mx-auto">
      
      {/* Tarjeta 1: Directora */}
      <div className="group rounded-2xl bg-card p-6 text-center shadow-sm border hover:-translate-y-1 hover:shadow-md transition-all">
        <div className="mx-auto h-28 w-28 overflow-hidden rounded-full border-4 border-primary/20 group-hover:border-primary transition-colors">
          <img 
            src={fotoDirectora} 
            alt="Mg. Melcy Cárdenas Acuña" 
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-350"
          />
        </div>
        <h3 className="mt-4 text-xl font-bold text-foreground">Mg. Melcy Cárdenas Acuña</h3>
        <p className="text-sm font-semibold text-primary tracking-wide uppercase mt-1">Directora General</p>
        <p className="mt-3 text-xs text-muted-foreground italic leading-relaxed">
          "Guiando a nuestra institución hacia la innovación pedagógica y el desarrollo integral de cada estudiante."
        </p>
      </div>

      {/* Tarjeta 2: Subdirector */}
      <div className="group rounded-2xl bg-card p-6 text-center shadow-sm border hover:-translate-y-1 hover:shadow-md transition-all">
        <div className="mx-auto h-28 w-28 overflow-hidden rounded-full border-4 border-primary/20 group-hover:border-primary transition-colors">
          <img 
            src={fotoSubdirector}
            alt="Prof. Dionison Esteban Huayra" 
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-350"
          />
        </div>
        <h3 className="mt-4 text-xl font-bold text-foreground">Prof. Dionison Esteban Huayra</h3>
        <p className="text-sm font-semibold text-primary tracking-wide uppercase mt-1">Subdirector</p>
        <p className="mt-3 text-xs text-muted-foreground italic leading-relaxed">
          "Comprometido con el acompañamiento docente y la convivencia armoniosa de nuestra familia escolar."
        </p>
      </div>

    </div>
  </div>
</section>

    

      {/* Contador */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 grid gap-10 md:grid-cols-3">
          <Counter end={524} label="Estudiantes" suffix="+" />
          <Counter end={30} label="Docentes" />
          <Counter end={61} label="Años de servicio" suffix="+" />
        </div>
      </section>

      {/* CTA 
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl bg-gradient-hero p-10 md:p-14 text-primary-foreground text-center shadow-[var(--shadow-soft)]">
          <h2 className="text-3xl md:text-4xl font-bold">Forma parte de nuestra familia educativa</h2>
          <p className="mt-3 text-primary-foreground/90 max-w-2xl mx-auto">
            Descubre el proceso de admisión y los requisitos para que tu hijo o hija inicie esta gran aventura con nosotros.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/admision/proceso" className="rounded-full bg-white text-primary px-6 py-3 font-semibold hover:scale-105 transition-transform">Ver proceso</Link>
            <Link to="/contacto" className="rounded-full bg-white/10 border border-white/40 px-6 py-3 font-semibold hover:bg-white/20 transition">Contáctanos</Link>
          </div>


        </div>
      </section>
      */}



     {/* Valores */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Nuestros valores</h2>
            <p className="mt-2 text-muted-foreground">Los pilares que guían nuestra formación</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="group rounded-2xl bg-card p-6 text-center shadow-sm border hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] transition-all"
              >
                <div className="mx-auto h-14 w-14 grid place-items-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <v.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-4 font-bold">{v.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
