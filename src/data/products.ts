export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  shortDescription: string;
  longDescription: string;
  ingredients?: string[];
  highlights?: string[];
}

export const products: Product[] = [
  // {
  //   id: "vela-maçã-canela",
  //   name: "Vela Aromática Maçã e Canela",   
  //   category: "Velas",
  //   price: 49.90,
  //   image: "assets/vela1.png",
  //   shortDescription: "Relaxe com o aroma suave e calmante da maçã e canela.",
  //   longDescription: "Essa vela foi criada especialmente pra você que busca aconchego nesse momento, independente do que esteja vivendo. A docilidade da fragrância de maçã com canela me lembra o cheiro do consultório da minha psicóloga. Esse lugar que em tantos momentos me trouxe paz e conforto me inspirou a criar essa vela pra você com a intenção de que esse conforto, de alguma maneira, possa chegar até você.",
  //   ingredients: ["Cera de soja", "Óleo essencial de maça e canela", "Pavio de algodão"],
  //   highlights: ["Tempo de queima: aproximadamente 40 horas", "Aroma calmante e relaxante", "Ideal para ambientes de descanso"]
  // },
  {
    id: "home-spray-flor-de-cerejeira",
    name: "Home Spray Flor de Cerejeira",
    category: "Home Sprays",
    price: 20.00,
    image: "assets/florDeCerejeira.png",
    shortDescription: "A sensação acolhedora da flor de cerejeira para seu lar.",
    longDescription: "O aroma aconchegante da combinação da flor de cerejeira traz uma sensação de acolhimento e conforto para qualquer ambiente. Ideal para salas de estar, quartos e espaços que precisam de um toque de carinho. Desenvolvido artesanalmente para proporcionar uma experiência sensorial duradoura.",
    ingredients: ["Água deionizada", "Álcool de cereais", "Óleos essenciais", "Fixador natural"],
    highlights: ["100ml", "Aroma duradouro", "Spray de fácil aplicação", "Ideal para todos os ambientes"]
  },
  {
    id: "difusor-bambu",
    name: "Difusor de Bambu",
    category: "Difusores",
    price: 45.00,
    image: "assets/difusor2.png",
    shortDescription: "Elegância e frescor do bambu.",
    longDescription: "O difusor de Bambu combina a elegância e frescor do bambu, criando uma atmosfera sofisticada e acolhedora. Seu aroma suave e persistente transforma qualquer ambiente em um espaço de bem-estar. O frasco âmbar protege a fragrância e os bastões de madeira natural garantem a difusão perfeita.",
    ingredients: ["Álcool de cereais", "Óleos essenciais", "Fixador natural"],
    highlights: ["200ml", "Dura aproximadamente 3 meses", "Bastões de madeira natural", "Frasco âmbar"]
  },
  // {
  //   id: "vela-lavanda",
  //   name: "Vela Aromática Lavanda",
  //   category: "Velas",
  //   price: 49.90,
  //   image: "assets/vela2.png",
  //   shortDescription: "O aroma doce e reconfortante da lavanda.",
  //   longDescription: "Criada especialmente pra você que enfrenta a ansiedade nesse momento. A suavidade da fragrância de lavanda me traz calmaria em diversos momentos que me sinto dominada pela ansiedade. Essa sensação me inspirou a criar essa vela pra você com a intenção de fazer que esse relaxamento de alguma maneira chegue até você, mesmo em meio ao caos emocional que você se encontra.",
  //   ingredients: ["Cera de soja", "Essência de lavanda", "Pavio de algodão"],
  //   highlights: ["Tempo de queima: aproximadamente 40 horas", "Aroma doce e aconchegante", "Ideal para noites especiais"]
  // },
  {
    id: "home-spray-lavanda",
    name: "Home Spray Lavanda",
    category: "Home Sprays",
    price: 35.00,
    image: "assets/sprayDifusor.png",
    shortDescription: "Refrescância e clareza mental com o aroma da lavanda.",
    longDescription: "O Home Spray de Lavanda traz a calmaria e os benefícios desta erva para os ambientes, ajudando a proporcionar clareza mental, desacelaração e foco. Ideal para espaços de trabalho, estudo ou qualquer lugar que precise de uma energia renovadora. Desenvolvido artesanalmente para proporcionar uma experiência sensorial autêntica.",
    ingredients: ["Água deionizada", "Álcool de cereais", "Óleo essencial de lavanda", "Fixador natural"],
    highlights: ["200ml", "Aroma refrescante", "Spray de fácil aplicação", "Ideal para ambientes de trabalho e estudo"]
  },
  {
    id: "difusor-capim-limao",
    name: "Difusor Capim Limão",
    category: "Difusores",
    price: 45.00,
    image: "assets/capimLimao.png",
    shortDescription: "A sensação que o aroma de capim limão traz.",
    longDescription: "O difusor de Capim Limão captura o frescor e a elegância desta fragrância, criando uma atmosfera de sofisticação e serenidade. Seu aroma suave e com notas cítricas, traz uma sensação de limpeza e frescor para os ambientes. O frasco âmbar protege a fragrância e os bastões de madeira natural garantem a difusão perfeita.",
    ingredients: ["Álcool de cereais", "Óleos essenciais", "Fixador natural"],
    highlights: ["100ml", "Dura aproximadamente 3 meses", "Bastões de madeira natural", "Frasco âmbar"]
  }
];