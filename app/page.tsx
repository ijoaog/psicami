import Image from "next/image";
import Link from "next/link";
import {
  MessageCircle,
  Heart,
  Shield,
  Sparkles,
  Check,
  Instagram,
  Phone,
  Quote,
  ArrowRight,
  Users,
  Brain,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTrackFooterView } from "@/hooks/useScrollTracker";

export default function Home() {
  useTrackFooterView();
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 gradient-green rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-white font-sora">
                  Camila Ferreira
                </h1>
                <p className="text-sm text-gray-400">Psicóloga Clínica</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <Link
                href="#sobre"
                className="text-gray-300 hover:text-green-400 transition-colors font-medium"
              >
                Sobre
              </Link>
              <Link
                href="#como-ajudo"
                className="text-gray-300 hover:text-green-400 transition-colors font-medium"
              >
                Como Ajudo
              </Link>
              <Link
                href="#terapia"
                className="text-gray-300 hover:text-green-400 transition-colors font-medium"
              >
                Terapia
              </Link>
              <Link
                href="#contato"
                className="text-gray-300 hover:text-green-400 transition-colors font-medium"
              >
                Contato
              </Link>
              <Button asChild>
                <Link
                  href="https://wa.me/5541985199520?text=Olá, quero começar minha jornada!"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    window.gtag?.("event", "clique_whatsapp", {
                      event_category: "contato",
                      event_label: "Hero CTA WhatsApp",
                    })
                  }
                >
                  Agendar
                </Link>
              </Button>
            </nav>

            {/* <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button> */}
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-green-600/10" />
          <div className="container relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in">
                <div className="space-y-6">
                  <div className="badge-primary">
                    <Sparkles className="w-4 h-4" />
                    Jornada de reencontro
                  </div>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-sora text-white leading-tight">
                    Viva de forma mais{" "}
                    <span className="gradient-text-green">autêntica</span>
                  </h1>

                  <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                    Ofereço um ambiente seguro e acolhedor para que você se
                    sinta à vontade para expressar pensamentos e sentimentos.
                    Juntos, trabalhamos estratégias alinhadas ao que importa
                    para você.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    asChild
                    className="btn-primary flex flex-row"
                  >
                    <Link
                      href="https://wa.me/5541985199520?text=Olá, quero começar minha jornada! Gostaria de agendar uma consulta."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-row items-center gap-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Começar minha jornada
                    </Link>
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="btn-outline bg-transparent"
                  >
                    <Link
                      href="#sobre"
                      className="flex flex-row items-center gap-2"
                    >
                      Conhecer mais
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="relative">
                  <div className="absolute -inset-8 gradient-green opacity-20 rounded-3xl blur-2xl animate-pulse-glow" />
                  <Image
                    src="/camila-hero.jpeg"
                    width={500}
                    height={600}
                    alt="Dra. Camila Ferreira - Psicóloga Clínica"
                    className="relative rounded-2xl object-cover w-full aspect-[4/5] shadow-2xl glow-green"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="sobre" className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-last lg:order-first">
                <div className="absolute -inset-4 gradient-green opacity-10 rounded-2xl blur-xl" />
                <Image
                  src="/camila-about.jpeg"
                  width={500}
                  height={600}
                  alt="Dra. Camila Ferreira - Psicóloga Clínica"
                  className="relative rounded-2xl object-cover w-full aspect-[4/5] shadow-xl"
                />
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="badge-primary">
                    <Heart className="w-4 h-4" />
                    Quem sou eu
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-bold font-sora text-white">
                    Olá, sou{" "}
                    <span className="gradient-text-green">Camila Ferreira</span>
                  </h2>

                  <p className="text-xl text-gray-300 leading-relaxed">
                    Psicóloga Clínica com formação em Terapias Comportamentais
                    Contextuais. Minha prática se baseia na Terapia de Aceitação
                    e Compromisso (ACT) e também utilizo técnicas da Terapia
                    Cognitivo-Comportamental (TCC), oferecendo um olhar
                    abrangente para as experiências humanas.
                  </p>

                  <p className="text-lg text-gray-400 leading-relaxed">
                    Ao longo da minha formação, tive a oportunidade de explorar
                    diversas áreas da psicologia, como a Psicologia Jurídica e
                    Social, o que me permitiu desenvolver uma compreensão mais
                    profunda do sofrimento humano e da complexidade da
                    experiência individual e coletiva.
                  </p>

                  <p className="text-lg text-gray-400 leading-relaxed">
                    Acredito em uma psicologia clínica baseada em respeito,
                    acolhimento, segurança e autenticidade, pois percebo que a
                    psicoterapia é uma jornada de reencontro consigo mesmo, onde
                    cada pessoa pode se reconectar com seus valores e construir
                    um novo jeito de estar na vida!
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    Formação e Trajetória
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Graduação em Psicologia pelo Centro Universitário de Maringá",
                      "Formação em Terapias Comportamentais Contextuais - Eurekka",
                      "Formação em Psicologia Breve Focal - Fratelli",
                      "Estágio em Psicologia Jurídica - Juizado de Violência Doméstica",
                      "Estágio em Psicologia Jurídica - Coordenadoria da Infância e Juventude",
                      "Estágio em Psicologia Social - CREAS",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card-dark gradient-green-subtle border-green-500/30">
                  <div className="flex items-start gap-4">
                    <Quote className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-300 italic mb-2">
                        "Vejo a psicoterapia como uma oportunidade de reencontro
                        consigo mesmo, onde o paciente pode se reconectar com
                        quem realmente é, buscando uma vida mais alinhada com o
                        que deseja."
                      </p>
                      <p className="text-sm text-green-400 font-medium">
                        - Camila Ferreira
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Como Posso Te Ajudar */}
        <section id="como-ajudo" className="py-20 bg-gray-900/30">
          <div className="container">
            <div className="text-center mb-16">
              <div className="badge-primary mx-auto mb-4">
                <Brain className="w-4 h-4" />
                Como posso ajudar
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold font-sora text-white mb-6">
                Como posso te{" "}
                <span className="gradient-text-green">ajudar?</span>
              </h2>

              <div className="max-w-4xl mx-auto space-y-6">
                <p className="text-xl text-gray-300 leading-relaxed">
                  Meu papel é ajudar você a se sentir encorajado(a) a expressar
                  seus pensamentos e sentimentos, promovendo um ambiente
                  confortável, seguro e respeitoso, onde você possa se sentir
                  verdadeiramente acolhido(a). Aqui, não há julgamentos, pressão
                  ou expectativas, apenas um espaço para que você possa ser quem
                  é, sem máscaras ou medos.
                </p>

                <p className="text-lg text-gray-400 leading-relaxed">
                  Na terapia, te ajudo a entender seus padrões de comportamento,
                  explorar suas experiências, identificar o que te impede de
                  avançar e agir de acordo com o que realmente importa para
                  você, sem que a ansiedade ou o medo limitem sua vida, para que
                  você possa se entender melhor e encontrar caminhos que façam
                  sentido para você.
                </p>

                <p className="text-lg text-gray-400 leading-relaxed">
                  A terapia que ofereço é um processo colaborativo, no qual
                  trabalhamos juntos para encontrar as melhores estratégias para
                  o seu crescimento e bem-estar. Utilizo uma variedade de
                  ferramentas e técnicas comprovadas cientificamente, sempre
                  adaptadas às suas necessidades e realidade.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: Heart,
                  title: "Ambiente Acolhedor",
                  description:
                    "Um espaço seguro onde você pode expressar pensamentos e sentimentos sem julgamentos ou pressões.",
                },
                {
                  icon: Target,
                  title: "Processo Colaborativo",
                  description:
                    "Trabalhamos juntos para encontrar estratégias que façam sentido para você e sua realidade.",
                },
                {
                  icon: Users,
                  title: "Técnicas Adaptadas",
                  description:
                    "Utilizo ferramentas comprovadas cientificamente, sempre respeitando seu ritmo e necessidades.",
                },
              ].map((item, index) => (
                <div key={index} className="card-dark card-hover text-center">
                  <div className="w-16 h-16 gradient-green-subtle rounded-xl mx-auto mb-6 flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* O Que Esperar da Terapia */}
        <section id="terapia" className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <div className="badge-primary mx-auto mb-4">
                <Shield className="w-4 h-4" />O que esperar
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold font-sora text-white mb-6">
                O que esperar da{" "}
                <span className="gradient-text-green">terapia comigo?</span>
              </h2>

              <div className="max-w-4xl mx-auto space-y-6">
                <p className="text-xl text-gray-300 leading-relaxed">
                  Você pode esperar um espaço receptivo, acolhedor e
                  colaborativo. Acredito em uma relação terapêutica baseada na
                  confiança e na escuta ativa, onde suas necessidades e
                  expectativas são sempre consideradas.
                </p>

                <p className="text-lg text-gray-400 leading-relaxed">
                  Juntos(as), exploraremos suas potencialidades e encontraremos
                  as ferramentas e técnicas mais adequadas para você. Meu
                  objetivo é que você se sinta confortável para expressar suas
                  experiências, emoções e desafios, que serão ouvidos com
                  atenção e respeito.
                </p>

                <p className="text-lg text-gray-400 leading-relaxed">
                  Durante nossos encontros, vamos explorar suas potencialidades,
                  identificar recursos internos e construir caminhos que façam
                  sentido para você. As ferramentas e técnicas que utilizo são
                  adaptadas à sua realidade, sempre respeitando seu ritmo e suas
                  necessidades. Afinal, cada pessoa é única, e a terapia precisa
                  refletir essa singularidade.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="card-dark card-hover">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 gradient-green-subtle rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Escuta Ativa e Confiança
                    </h3>
                    <p className="text-gray-400">
                      Buscamos juntos o que faz sentido para você, respeitando
                      seu ritmo e sua história.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-dark card-hover">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 gradient-green-subtle rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Vida Autêntica
                    </h3>
                    <p className="text-gray-400">
                      Vamos trabalhar juntos para que você possa viver de forma
                      mais autêntica, conectado(a) ao que realmente importa para
                      você.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 gradient-green relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="container text-center relative">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold font-sora text-white">
                Pronto para começar sua jornada de reencontro?
              </h2>

              <p className="text-xl text-green-100 max-w-2xl mx-auto">
                O foco é em te ajudar a desenvolver novas perspectivas, recursos
                e habilidades para lidar com os desafios da vida e alcançar um
                bem-estar emocional.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  asChild
                  className="bg-white text-green-600 hover:bg-gray-100"
                >
                  <Link
                    href="https://wa.me/5541985199520?text=Olá, quero começar minha jornada! Gostaria de agendar uma consulta."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Agendar pelo WhatsApp
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  <Link
                    href="#contato"
                    className="flex flex-row items-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Outros contatos
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contato" className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <div className="badge-primary mx-auto mb-4">
                <MessageCircle className="w-4 h-4" />
                Entre em contato
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold font-sora text-white mb-6">
                Vamos <span className="gradient-text-green">conversar?</span>
              </h2>

              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Estou aqui para esclarecer suas dúvidas e te ajudar a dar o
                primeiro passo em direção ao seu bem-estar. Que encontremos
                juntos as melhores estratégias para alcançar seus objetivos.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: MessageCircle,
                  title: "WhatsApp",
                  description: "Resposta rápida e direta",
                  contact: "(41) 98519‑9520",
                  action: "Enviar mensagem",
                  href: "https://wa.me/5541985199520?text=Olá, quero começar minha jornada! Gostaria de agendar uma consulta.",
                  primary: true,
                },
                {
                  icon: Phone,
                  title: "Telefone",
                  description: "Atendimento personalizado",
                  contact: "(41) 98519‑9520",
                  action: "Ligar agora",
                  href: "tel:+5541985199520",
                },
                {
                  icon: Instagram,
                  title: "Instagram",
                  description: "Conteúdo e dicas",
                  contact: "@psicami_",
                  action: "Seguir perfil",
                  href: "https://www.instagram.com/psicami_/",
                },
              ].map((contact, index) => (
                <div key={index} className="card-dark card-hover text-center">
                  <div
                    className={`w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center ${
                      contact.primary ? "gradient-green" : "bg-gray-700"
                    }`}
                  >
                    <contact.icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">
                    {contact.title}
                  </h3>
                  <p className="text-gray-400 mb-2">{contact.description}</p>
                  <p className="text-white font-medium mb-6">
                    {contact.contact}
                  </p>

                  <Button
                    variant={contact.primary ? "ghost" : "secondary"}
                    asChild
                    className={
                      contact.primary ? "btn-primary" : "btn-secondary w-full"
                    }
                  >
                    <Link
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {contact.action}
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800">
        <div className="container">
          <div className="py-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 gradient-green rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-sora">
                      Camila Ferreira
                    </h3>
                    <p className="text-gray-400">Psicóloga Clínica</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-4 max-w-md">
                  Psicoterapia como jornada de reencontro consigo mesmo, baseada
                  em ACT e TCC, com foco na autenticidade e bem-estar emocional.
                </p>
                <p className="text-sm text-gray-500">CRP 08/44058</p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-4">Contato</h4>
                <div className="space-y-2 text-gray-400">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>(41) 9 8519-9520</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Instagram className="w-4 h-4" />
                    <span>@psicami_</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 Camila Ferreira. Todos os direitos reservados.
            </p>
            <Link
              href="https://www.instagram.com/psicami_/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                window.gtag?.("event", "clique_instagram", {
                  event_category: "contato",
                  event_label: "Footer Instagram",
                })
              }
            >
              <Instagram className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
