import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  HeartHandshake,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Check,
} from "lucide-react";

export default function PsicologaLandingPageV3() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FBF9F7] dark:bg-stone-950 text-stone-900 dark:text-stone-50 transition-colors duration-300">
      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="hero"
          className="w-full py-20 md:py-32 lg:py-40 overflow-hidden"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight">
                    Reencontre-se. Viva uma vida com mais sentido.
                  </h1>
                  <p className="max-w-[600px] text-stone-600 dark:text-stone-400 md:text-xl">
                    Ofereço um espaço seguro e acolhedor para você explorar seus
                    caminhos, superar desafios e se conectar com o que realmente
                    importa.
                  </p>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-7 text-base shadow-lg w-full sm:w-auto"
                >
                  <Link
                    href="https://wa.me/554192333116?text=Quero%20começar%20minha%20jornada!"
                    target="_blank"
                    prefetch={false}
                  >
                    <MessageCircle className="mr-3 h-6 w-6" />
                    Quero começar minha jornada!
                  </Link>
                </Button>
              </div>
              <div className="relative flex justify-center items-center mt-12 lg:mt-0">
                <div className="absolute -inset-4 bg-teal-100/50 dark:bg-teal-900/50 rounded-full blur-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-amber-50 dark:from-emerald-950 dark:to-stone-900 rounded-3xl transform -rotate-6"></div>
                <Image
                  src="/camila-hero.jpeg"
                  width={500}
                  height={500}
                  alt="Foto da psicóloga Camila Ferreira sorrindo"
                  className="relative rounded-2xl object-cover shadow-2xl w-full max-w-md aspect-[1/1.1] transform rotate-3 hover:rotate-0 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* O que esperar */}
        <section
          id="esperar"
          className="w-full py-20 md:py-28 bg-white dark:bg-stone-900"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <span className="text-primary font-semibold">SUA JORNADA</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Um Espaço de Confiança e Cuidado
              </h2>
              <p className="max-w-[700px] text-stone-600 dark:text-stone-400 md:text-lg">
                Cada passo da terapia é pensado para que você se sinta seguro,
                ouvido e fortalecido para construir a vida que deseja.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center p-6">
                <div className="flex items-center justify-center bg-teal-100 dark:bg-teal-900/50 rounded-full h-16 w-16 mb-4">
                  <HeartHandshake className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Acolhimento Genuíno</h3>
                <p className="text-stone-600 dark:text-stone-400 text-sm">
                  Um ambiente sem julgamentos, onde você pode ser quem é, com
                  total respeito à sua história.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <div className="flex items-center justify-center bg-teal-100 dark:bg-teal-900/50 rounded-full h-16 w-16 mb-4">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Ciência e Ética</h3>
                <p className="text-stone-600 dark:text-stone-400 text-sm">
                  Utilizo técnicas comprovadas cientificamente, adaptadas para
                  suas necessidades individuais.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <div className="flex items-center justify-center bg-teal-100 dark:bg-teal-900/50 rounded-full h-16 w-16 mb-4">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Crescimento Colaborativo
                </h3>
                <p className="text-stone-600 dark:text-stone-400 text-sm">
                  Trabalhamos juntos, no seu ritmo, para que você encontre suas
                  próprias respostas e recursos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Como posso te ajudar (Dark Section) */}
        <section
          id="ajuda"
          className="w-full py-20 md:py-28 bg-[#081c15] text-stone-100"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Como posso te ajudar a florescer?
              </h2>
              <p className="max-w-[700px] text-stone-300 md:text-lg">
                Meu papel é ser uma facilitadora no seu processo de
                autoconhecimento, te ajudando a navegar por suas emoções e a
                construir uma vida mais alinhada com seus valores.
              </p>
            </div>
            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
              <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                <h3 className="font-bold text-lg mb-2 text-white">
                  Entender seus padrões e emoções
                </h3>
                <p className="text-sm text-stone-300">
                  Para que você possa tomar decisões mais conscientes e quebrar
                  ciclos que não te servem mais.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                <h3 className="font-bold text-lg mb-2 text-white">
                  Lidar com a ansiedade e o medo
                </h3>
                <p className="text-sm text-stone-300">
                  Desenvolvendo habilidades para que esses sentimentos não te
                  paralisem e você possa seguir em frente.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                <h3 className="font-bold text-lg mb-2 text-white">
                  Fortalecer seus relacionamentos
                </h3>
                <p className="text-sm text-stone-300">
                  Melhorando a comunicação e estabelecendo conexões mais
                  saudáveis e significativas.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                <h3 className="font-bold text-lg mb-2 text-white">
                  Construir uma vida com propósito
                </h3>
                <p className="text-sm text-stone-300">
                  Alinhando suas ações diárias com o que é verdadeiramente
                  importante para você.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre Mim */}
        <section
          id="sobre"
          className="w-full py-20 md:py-28 bg-white dark:bg-stone-950"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
              <div className="relative flex justify-center items-center order-last lg:order-first">
                <div className="absolute -inset-4 bg-amber-50 dark:bg-stone-800/50 rounded-full blur-3xl"></div>
                <Image
                  src="/camila-about.jpeg"
                  width={500}
                  height={500}
                  alt="Foto profissional da psicóloga Camila Ferreira"
                  className="relative rounded-2xl object-cover shadow-2xl w-full max-w-md aspect-[1/1.1]"
                />
              </div>
              <div className="space-y-6">
                <div className="space-y-3">
                  <span className="text-primary font-semibold">
                    QUEM SOU EU
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Prazer, sou Camila Ferreira
                  </h2>
                  <p className="text-stone-600 dark:text-stone-400 md:text-lg">
                    Sou Psicóloga Clínica apaixonada por guiar pessoas em suas
                    jornadas de autodescoberta. Minha abordagem integra a
                    Terapia de Aceitação e Compromisso (ACT) e a Terapia
                    Cognitivo-Comportamental (TCC) para oferecer um cuidado
                    completo e humanizado.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-4">Minha Trajetória</h3>
                  <ul className="space-y-3 text-stone-600 dark:text-stone-400">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                      Graduação em Psicologia
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                      Formação em Terapias Comportamentais Contextuais
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                      Formação em Psicologia Breve Focal
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                      Experiência em Psicologia Jurídica e Social
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section
          id="contato"
          className="w-full py-20 md:py-28 bg-[#FBF9F7] dark:bg-stone-950"
        >
          <div className="container">
            <div className="bg-gradient-to-br from-primary to-emerald-700 rounded-2xl p-10 md:p-16 text-center text-white shadow-2xl shadow-emerald-200 dark:shadow-emerald-900/50">
              <div className="flex flex-col items-center space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                  Pronto(a) para começar a sua transformação?
                </h2>
                <p className="max-w-2xl mx-auto text-emerald-100 md:text-lg">
                  O melhor momento para cuidar de você é agora. Me envie uma
                  mensagem e vamos conversar sobre como a terapia pode te
                  ajudar.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-stone-100 rounded-full px-10 py-7 text-base shadow-lg w-full sm:w-auto transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                >
                  <Link
                    href="https://wa.me/554192333116?text=Quero%20começar%20minha%20jornada!"
                    target="_blank"
                    prefetch={false}
                  >
                    <MessageCircle className="mr-3 h-6 w-6" />
                    Agendar minha consulta
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
