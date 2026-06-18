// Centraliza tudo que é "conteúdo" do site para facilitar edição futura.

export const SITE = {
  nome: "Pequeno Astronauta",
  whatsappNumero: "5511999999999", // <-- TROQUE pelo número real (DDI+DDD+número, só dígitos)
  whatsappMensagemPadrao:
    "Olá! Quero criar o quadro personalizado do Pequeno Astronauta para o meu filho(a) 🚀",
  precoDe: "R$ 129,90",
  precoPor: "R$ 79,90",
  clientesAtendidos: 18420,
};

export function linkWhatsapp(mensagem?: string) {
  const texto = encodeURIComponent(mensagem ?? SITE.whatsappMensagemPadrao);
  return `https://wa.me/${SITE.whatsappNumero}?text=${texto}`;
}

export const depoimentos = [
  {
    nome: "Carla Menezes",
    cidade: "Curitiba, PR",
    texto:
      "Chegou tudo certinho e com muito cuidado na embalagem. Meu filho ficou emocionado de se ver como astronauta no quarto dele.",
    nota: 5,
  },
  {
    nome: "Rodrigo Faria",
    cidade: "Belo Horizonte, MG",
    texto:
      "Comprei para o aniversário de 5 anos da minha filha. A qualidade da impressão surpreendeu, parece quadro de loja de decoração.",
    nota: 5,
  },
  {
    nome: "Juliana Prado",
    cidade: "Porto Alegre, RS",
    texto:
      "Atendimento pelo WhatsApp foi super rápido, me ajudaram a escolher a melhor foto. Recomendo para quem quer um presente diferente.",
    nota: 5,
  },
  {
    nome: "Marcos Andrade",
    cidade: "Recife, PE",
    texto:
      "O prazo de entrega foi exatamente o combinado. O resultado ficou incrível, já fiz para os dois filhos.",
    nota: 5,
  },
  {
    nome: "Patrícia Lima",
    cidade: "Campinas, SP",
    texto:
      "Dei de presente para minha sobrinha e a família toda quis fazer o do filho deles também. Virou assunto no grupo da família.",
    nota: 5,
  },
  {
    nome: "Felipe Costa",
    cidade: "Salvador, BA",
    texto:
      "Processo bem simples: enviei a foto pelo WhatsApp e em poucos dias já tinha a prévia para aprovar antes de imprimir.",
    nota: 5,
  },
];

export const faq = [
  {
    pergunta: "Como funciona o processo de criação?",
    resposta:
      "Você envia uma foto do seu filho(a) pelo WhatsApp, escolhe o estilo do traje espacial e o nome que aparece na placa de identificação. Nossa equipe de ilustração cria a arte e envia uma prévia digital para sua aprovação antes da impressão.",
  },
  {
    pergunta: "Quanto tempo demora para receber?",
    resposta:
      "Após a aprovação da arte, a produção leva de 2 a 4 dias úteis. O prazo de entrega varia de acordo com sua região e é informado no momento da compra, junto com o código de rastreio.",
  },
  {
    pergunta: "Qual o tamanho e o material do quadro?",
    resposta:
      "Trabalhamos com impressão em papel fotográfico de alta gramatura, nos tamanhos 21x30cm e 30x42cm, prontos para emoldurar. Também é possível receber apenas o arquivo digital em alta resolução.",
  },
  {
    pergunta: "E se eu não gostar do resultado?",
    resposta:
      "Antes de imprimir, você recebe uma prévia digital e pode pedir ajustes sem custo adicional. Só liberamos a produção depois da sua aprovação final.",
  },
  {
    pergunta: "Funciona com fotos de bebês também?",
    resposta:
      "Sim! Criamos ilustrações para crianças de todas as idades, de recém-nascidos a pré-adolescentes. Basta enviar uma foto com boa iluminação e o rosto visível.",
  },
  {
    pergunta: "Como faço para comprar?",
    resposta:
      'Clique em qualquer botão "Fazer meu pedido" desta página. Você será direcionado ao nosso WhatsApp, onde nossa equipe te guia em cada etapa, do envio da foto ao pagamento.',
  },
];

export const galeria = [
  { nome: "Mariana, 4 anos", cor: "from-cosmos to-nebula" },
  { nome: "Theo, 7 anos", cor: "from-comet to-cosmos" },
  { nome: "Helena, 3 anos", cor: "from-star to-comet" },
  { nome: "Gabriel, 6 anos", cor: "from-cosmos-light to-nebula" },
  { nome: "Alice, 5 anos", cor: "from-comet-light to-cosmos" },
  { nome: "Davi, 8 anos", cor: "from-star-light to-cosmos-soft" },
];
