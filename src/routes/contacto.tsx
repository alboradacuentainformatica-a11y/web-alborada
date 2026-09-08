import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { toast } from "sonner";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto" },
      {
        name: "description",
        content:
          "Contáctanos: dirección, teléfono, correo y formulario de contacto.",
      },
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
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });

  const [sending, setSending] = useState(false);

  const FORMSPREE_URL = import.meta.env.VITE_FORMSPREE_URL;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const r = schema.safeParse(form);

    if (!r.success) {
      toast.error(r.error.issues[0].message);
      return;
    }

    if (!FORMSPREE_URL) {
      toast.error("Error: no se configuró la URL.");
      return;
    } 

    setSending(true);

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          nombre: form.nombre,
          correo: form.correo,
          telefono: form.telefono,
          asunto: form.asunto,
          mensaje: form.mensaje,
          _subject: `Nuevo contacto: ${form.asunto}`,
        }),
      });

      if (response.ok) {
        toast.success(
          "Su mensaje fue enviado correctamente. Nos estaremos comunicando con usted."
        );

        setForm({
          nombre: "",
          correo: "",
          telefono: "",
          asunto: "",
          mensaje: "",
        });
      } else {
        const data = await response.json();
        const errorMsg =
          data?.errors?.map((e: { message: string }) => e.message).join(", ") ??
          "Error desconocido";
        toast.error(`Error al enviar: ${errorMsg}`);
      }
    } catch {
      toast.error(
        "Ocurrió un error al enviar el mensaje. Verifique su conexión e intente nuevamente."
      );
    } finally {
      setSending(false);
    }
  };

  const input =
    "w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition";

  return (
    <>
      <PageHeader
        title="Contáctanos"
        subtitle="Estamos aquí para responder tus consultas."
      />

      <section className="mx-auto max-w-6xl px-6 py-16 space-y-10">
        {/* Primera fila */}
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          {/* Formulario */}
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border bg-card p-8 shadow-sm space-y-4 h-fit"
          >
            <h2 className="text-2xl font-bold">Envíanos un mensaje</h2>

            <div className="grid gap-4 sm:grid-cols-2">
              <input
                className={input}
                placeholder="Nombre"
                value={form.nombre}
                onChange={(e) =>
                  setForm({ ...form, nombre: e.target.value })
                }
                maxLength={100}
              />

              <input
                className={input}
                placeholder="Correo"
                type="email"
                value={form.correo}
                onChange={(e) =>
                  setForm({ ...form, correo: e.target.value })
                }
                maxLength={255}
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <input
                className={input}
                placeholder="WhatsApp"
                value={form.telefono}
                onChange={(e) =>
                  setForm({ ...form, telefono: e.target.value })
                }
                maxLength={20}
              />

              <input
                className={input}
                placeholder="Asunto"
                value={form.asunto}
                onChange={(e) =>
                  setForm({ ...form, asunto: e.target.value })
                }
                maxLength={150}
              />
            </div>

            <textarea
              className={`${input} min-h-[119px] resize-y`}
              placeholder="Mensaje"
              value={form.mensaje}
              onChange={(e) =>
                setForm({ ...form, mensaje: e.target.value })
              }
              maxLength={1000}
            />

            <button
              type="submit"
              disabled={sending}
              className="w-full rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold hover:scale-[1.01] transition-transform disabled:opacity-60"
            >
              {sending ? "Enviando..." : "Enviar mensaje"}
            </button>
          </form>

          {/* Información de contacto */}
          <div className="rounded-3xl border bg-card p-8 shadow-sm space-y-6 h-fit">
            <h2 className="text-2xl font-bold">Información de contacto</h2>

            <ul className="space-y-5">
              <li className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold">Dirección</p>
                  <p className="text-sm text-muted-foreground">
                    Chavin 300, Huancayo 12006
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold">Celular</p>
                  <p className="text-sm text-muted-foreground">064 636258</p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold">Correo</p>
                  <p className="text-sm text-muted-foreground">
                    Laalborada30225@gmail.com
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold">Horario</p>
                  <p className="text-sm text-muted-foreground">
                    Lunes a Viernes — 8:00 a.m. a 3:30 p.m.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold">Directora</p>
                  <p className="text-sm text-muted-foreground">
                    Mg. Melcy Cárdenas Acuña
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Segunda fila - Mapa */}
        <div className="rounded-3xl border bg-card p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Nuestra ubicación</h2>

          <div className="rounded-2xl overflow-hidden border shadow-sm h-[450px]">
            <iframe
              title="Ubicación"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.949935052878!2d-75.23057802475742!3d-12.046965741904756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910e9775c91ff803%3A0x51a798098a527c06!2sI.E.%2030225%20La%20Alborada!5e0!3m2!1ses!2spe!4v1781627232671!5m2!1ses!2spe"
              className="h-full w-full"
              loading="lazy"
            />
          </div>

          <div className="mt-5 text-center">
            <a
              href="https://maps.app.goo.gl/NyGXv23SjpAVVkYG8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Abrir en Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  );
}