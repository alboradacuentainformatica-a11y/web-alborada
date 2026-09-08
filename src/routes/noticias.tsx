import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Facebook, ExternalLink, Info, Share2, Sparkles } from "lucide-react";

export const Route = createFileRoute("/noticias")({
  head: () => ({
    meta: [
      { title: "Noticias - I.E. 30225 La Alborada" },
      {
        name: "description",
        content:
          "Sigue las últimas noticias, comunicados y eventos oficiales de la I.E. 30225 La Alborada.",
      },
    ],
  }),
  component: NoticiasPage,
});

function NoticiasPage() {
  const FACEBOOK_PAGE_URL = "https://www.facebook.com/profile.php?id=100057612512300";
  
  const EMBED_FB_URL =
    "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100057612512300&tabs=timeline&width=500&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true";

  return (
    <>
      <PageHeader
        title="Noticias y Novedades"
        subtitle="Mantente informado con los comunicados oficiales y actividades de nuestra comunidad educativa."
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-3 items-start">
          
          {/* Columna Principal - Feed de Facebook (2/3 de ancho) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-3xl border bg-card p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4 border-b pb-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600">
                    <Facebook className="h-5 w-5" />
                  </span>
                  <div>
                    <h2 className="font-bold text-lg">Publicaciones Recientes</h2>
                    <p className="text-xs text-muted-foreground">Actualizado en tiempo real</p>
                  </div>
                </div>

                <a
                  href={FACEBOOK_PAGE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1"
                >
                  Seguir <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              {/* Feed embutido de Facebook */}
              <div className="w-full overflow-hidden rounded-2xl border bg-background flex justify-center min-h-[600px]">
                <iframe
                  src={EMBED_FB_URL}
                  width="100%"
                  height="700"
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Feed de noticias Facebook"
                  className="w-full max-w-[500px]"
                />
              </div>
            </div>
          </div>

          {/* Columna Lateral - Paneles de Información 1-3 */}
          <div className="space-y-6">
            
            {/* Tarjeta de perfil/resumen */}
            <div className="rounded-3xl border bg-card p-6 shadow-sm text-center space-y-4">
              <div className="mx-auto h-20 w-20 rounded-full border-2 border-primary/20 p-1 flex items-center justify-center bg-muted">
              <img 
                src="src/assets/logo.png" 
                alt="Logo institucional" 
                className="h-full w-full object-contain rounded-full"
              />
              </div>
              <div>
                <h3 className="font-bold text-lg">I.E. 30225 La Alborada</h3>
                
              </div>

              <div className="grid grid-cols-2 gap-2 py-2 border-y text-center">
                <div>
                  <p className="text-lg font-bold">1000+</p>
                  <p className="text-xs text-muted-foreground">Seguidores</p>
                </div>
                <div>
                  <p className="text-lg font-bold">500+</p>
                  <p className="text-xs text-muted-foreground">Publicaciones</p>
                </div>
              </div>

              <a
                href={FACEBOOK_PAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                <Facebook className="h-4 w-4" /> Visitar Página
              </a>
            </div>

            {/* Aviso de Comunicación oficial */}
            <div className="rounded-3xl border bg-card p-6 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-primary font-bold border-l-4 border-primary pl-3">
                <Sparkles className="h-4 w-4" />
                <h3>Comunicación Oficial</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Todos los comunicados, avisos de reuniones y anuncios importantes de la institución se canalizan formalmente a través de nuestra página de Facebook. Síguenos para estar al día.
              </p>
            </div>

            {/* Ayuda sobre bloqueadores de anuncios */}
            <div className="rounded-3xl border bg-card p-6 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-amber-600 font-semibold text-sm">
                <Info className="h-4 w-4 shrink-0" />
                <span>¿No ves las noticias?</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Si utilizas un bloqueador de publicidad en tu navegador, el complemento de Facebook podría verse restringido. Accede directamente de forma segura.
              </p>
              <a
                href={FACEBOOK_PAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1"
              >
                Ir a Facebook →
              </a>
            </div>

            {/* Botón de compartir en redes */}
            <div className="rounded-3xl border bg-card p-6 shadow-sm flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <Share2 className="h-4 w-4" /> Compartir
              </span>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(FACEBOOK_PAGE_URL)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-blue-600 px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-blue-700"
              >
                Compartir
              </a>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}