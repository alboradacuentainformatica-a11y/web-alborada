import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { toast } from "sonner";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto " },
      { name: "description", content: "Contáctanos: dirección, teléfono, correo y formulario de contacto." },
    ],
  }),
  component: ContactoPage,
});

const schema = z.object({
  nombre: z.string().trim().min(2, "Nombre muy corto").max(100),
  correo: z.string().trim().email("Correo inválido").max(255),
  telefono: z.string().trim().min(6, "Teléfono inválido").max(20),
  asunto: z.string().trim().min(2).max(150),
  mensaje: z.string().trim().min(5, "Mensaje muy corto").max(1000),
});

function ContactoPage() {
  const [form, setForm] = useState({ nombre: "", correo: "", telefono: "", asunto: "", mensaje: "" });
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      toast.error(r.error.issues[0].message);
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      try {
        toast.success("Su mensaje fue enviado correctamente. Nos estaremos comunicando con usted.");
        setForm({ nombre: "", correo: "", telefono: "", asunto: "", mensaje: "" });
      } catch {
        toast.error("Ocurrió un error al enviar el mensaje. Intente nuevamente.");
      }
    }, 800);
  };

  const input = "w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition";

  return (
    <>
      <PageHeader title="Contáctanos" subtitle="Estamos aquí para responder tus consultas." />
      <section className="mx-auto max-w-6xl px-6 py-16 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold mb-6">Información de contacto</h2>
          <ul className="space-y-4">
            <li className="flex gap-3"><MapPin className="h-5 w-5 text-primary mt-1" /><div><p className="font-semibold">Dirección</p><p className="text-sm text-muted-foreground">La Alborada, Perú</p></div></li>
            <li className="flex gap-3"><Phone className="h-5 w-5 text-primary mt-1" /><div><p className="font-semibold">Teléfono</p><p className="text-sm text-muted-foreground">(+51) 000 000 000</p></div></li>
            <li className="flex gap-3"><Mail className="h-5 w-5 text-primary mt-1" /><div><p className="font-semibold">Correo</p><p className="text-sm text-muted-foreground">contacto@ielaalborada.edu.pe</p></div></li>
            <li className="flex gap-3"><Clock className="h-5 w-5 text-primary mt-1" /><div><p className="font-semibold">Horario</p><p className="text-sm text-muted-foreground">Lunes a Viernes — 8:00 a.m. a 3:00 p.m.</p></div></li>
          </ul>
          <div className="mt-8 rounded-2xl overflow-hidden border shadow-sm aspect-[4/3]">
            <iframe
              title="Ubicación"
              src="https://www.google.com/maps?q=La+Alborada+Peru&output=embed"
              className="h-full w-full"
              loading="lazy"
            />
          </div>
          <a href="https://maps.app.goo.gl/NyGXv23SjpAVVkYG8" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm font-semibold text-primary hover:underline">
            Abrir en Google Maps →
          </a>
        </div>

        <form onSubmit={onSubmit} className="rounded-3xl border bg-card p-8 shadow-sm space-y-4 h-fit">
          <h2 className="text-2xl font-bold">Envíanos un mensaje</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <input className={input} placeholder="Nombre" value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} maxLength={100} />
            <input className={input} placeholder="Correo" type="email" value={form.correo} onChange={(e) => setForm({ ...form, correo: e.target.value })} maxLength={255} />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <input className={input} placeholder="Teléfono" value={form.telefono} onChange={(e) => setForm({ ...form, telefono: e.target.value })} maxLength={20} />
            <input className={input} placeholder="Asunto" value={form.asunto} onChange={(e) => setForm({ ...form, asunto: e.target.value })} maxLength={150} />
          </div>
          <textarea className={`${input} min-h-[140px] resize-y`} placeholder="Mensaje" value={form.mensaje} onChange={(e) => setForm({ ...form, mensaje: e.target.value })} maxLength={1000} />
          <button type="submit" disabled={sending} className="w-full rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold hover:scale-[1.01] transition-transform disabled:opacity-60">
            {sending ? "Enviando..." : "Enviar mensaje"}
          </button>
        </form>
      </section>
    </>
  );
}