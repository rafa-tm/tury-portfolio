import { habilidades } from "../utils/habilidades";
import tury from "../assets/tury.jpg";
import logotipoUShare from "../assets/projetos/LogotipoUshare.svg";
import logotipoCATI from "../assets/projetos/LogotipoCATI.svg";
import logotipoCA from "../assets/projetos/caenc.png";

export default function SobreMim() {
  return (
    <main className="w-full flex flex-col py-56 bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText">
      <section className="w-full flex flex-col px-4 lg:px-20 py-4 gap-16 justify-center items-center ">
        <div className="w-[95%] flex flex-col gap-16 items-center justify-between">
          <div className="flex flex-col lg:flex-row gap-12 justify-evenly items-center w-full">
            <h1 className="text-5xl leading-relaxed font-medium text-center">
              Quem é <br />
              <span className="p-2 underline decoration-secondary hover:decoration-tertiary transition-all duration-500 ease-in-out">
                Rafael Tury Minatel
              </span>
              ?
            </h1>

            <div className="">
              <img
                src={tury}
                alt="Foto de perfil Rafael Tury Minatel"
                width={250}
                height={250}
                className=" max-w-xs lg:max-w-md rounded-3xl shadow-2xl  transform rotate-3 hover:rotate-0 transition-all duration-500 ease-in-out "
              />
            </div>
          </div>

          <div className="text-lg text-center flex flex-col gap-6">
            <p>
              Nasci em Torrinha, uma cidade pequena do interior de São Paulo,
              mas atualmente moro em São Carlos, onde estudo Engenharia de
              Computação na Universidade Federal de São Carlos (UFSCar). Desde
              que comecei minha graduação em Engenharia de Computação, tenho me
              esforçado para aprender tudo o que posso sobre o mundo da
              tecnologia, com o objetivo de me tornar um profissional completo e
              capaz de criar soluções inovadoras para problemas complexos.
            </p>
            <p>
              Minha jornada acadêmica tem sido repleta de desafios e
              aprendizados, e tenho orgulho de dizer que consegui superá-los com
              muita dedicação e trabalho duro. Durante meu curso, tive a
              oportunidade de estudar disciplinas como Redes, Algoritmos e
              Estruturas de Dados, Sistemas Operacionais, Inteligência
              Artificial e Desenvolvimento Back-End e Front-End, e pude aplicar
              esses conhecimentos em projetos práticos que me permitiram
              desenvolver habilidades técnicas e interpessoais importantes.
            </p>
            <p>
              Além dos estudos, sou apaixonado por tecnologia e inovação, e
              sempre busco me manter atualizado sobre as últimas tendências e
              desenvolvimentos na área. Acredito que a tecnologia tem o poder de
              transformar vidas e mudar o mundo, e quero ser parte dessa
              transformação. Já participei de empresa júnior e centro acadêmico
              dentro da universidade, o que me proporcionou uma experiência
              valiosa em liderança, trabalho em equipe e resolução de problemas.
            </p>
            <p>
              Fora da academia, gosto de jogar, assistir a séries/filmes e
              praticar exercícios ao ar livre, como caminhadas. Essas atividades
              me permitem relaxar e me desconectar do mundo tecnológico, o que
              me ajuda a ter uma perspectiva mais ampla e criativa sobre as
              coisas.
            </p>
            <p>
              Se você estiver procurando por um estudante dedicado, apaixonado e
              com sede de conhecimento para ajudá-lo a criar soluções inovadoras
              para problemas complexos, não hesite em entrar em contato comigo.
              Adoraria discutir como posso ajudá-lo a alcançar seus objetivos!
            </p>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col px-4 lg:px-20 py-16 gap-16 justify-center items-center ">
        <div className="w-[90%] flex flex-col items-center justify-between gap-24">
          <h1 className="w-full text-4xl font-medium">Educação</h1>
          {/* Card Educação */}
          <div className="flex flex-col lg:flex-row w-[80%] gap-12 items-center p-8 border-2 border-tertiary rounded-2xl shadow-xl bg-lightBackground-100 dark:bg-darkBackground-100">
            <img
              src="https://www.dche.ufscar.br/documentos/imagens/logo-ufscar.png"
              alt="Logotipo Ufscar"
              className="bg-white rounded-lg p-2 max-w-[194px]"
            />
            <div className="  flex flex-col text-xl gap-3">
              <h3 className="font-bold">Universidade Federal de São Carlos</h3>
              <p>Bacharelado em Engenharia de Computação</p>
              <p>2019 - 2024</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col px-4 lg:px-20 py-16 gap-16 justify-center items-center ">
        <div className="w-[90%] flex flex-col items-center justify-between gap-16">
          <h1 className="w-full text-4xl font-medium">Experiência</h1>
          {/* Card Experiencia 1 */}
          <div className="flex flex-col lg:flex-row w-[80%] gap-12 items-center p-8 border-2 border-tertiary rounded-2xl shadow-xl bg-lightBackground-100 dark:bg-darkBackground-100">
            <img
              src={logotipoUShare}
              alt="Logotipo uShare"
              className=" rounded-lg max-w-[194px]"
            />
            <div className="  flex flex-col text-xl gap-3">
              <h3 className="font-bold">Desenvolvedor Front-End</h3>
              <p>Desenvolvimento utilizando Vite JS, React JS e TailwindCSS.</p>
              <p>02/2023 - Atualmente</p>
            </div>
          </div>
          {/* Card Experiencia 2 */}
          <div className="flex flex-col lg:flex-row w-[80%] gap-12 items-start p-8 border-2 border-tertiary rounded-2xl shadow-xl bg-lightBackground-100 dark:bg-darkBackground-100">
            <img
              src={logotipoCATI}
              alt="Logotipo Ufscar"
              className="bg-white rounded-lg p-2 max-w-[194px]"
            />
            <div className="flex flex-col gap-16">
              <div className="  flex flex-col text-xl gap-3">
                <h3 className="font-bold">Desenvolvedor Full Stack</h3>
                <p>
                  Desenvolvimento utilizando Node JS, React JS, WordPress e
                  outras linguagens.
                </p>
                <p>12/2022 - Atualmente</p>
              </div>
              <div className="  flex flex-col text-xl gap-3">
                <h3 className="font-bold">Coordenador de Design e Marketing</h3>
                <p>
                  Liderei a equipe como coordenador, ajudando na organização e
                  desenvolvimento de protótipos de interface, além de conduzir
                  treinamentos de design UI/UX para novos membros.
                </p>
                <p>12/2022 - 12/2022</p>
              </div>
              <div className="  flex flex-col text-xl gap-3">
                <h3 className="font-bold">Membro de Design e Marketing</h3>
                <p>
                  Design de vários protótipos de interfaces móveis e web com
                  Figma. Criação de conteúdo para redes sociais usando técnicas
                  de marketing, com os softwares Adobe Illustrator, Photoshop e
                  Canva.
                </p>
                <p>12/2022 - 12/2022</p>
              </div>
            </div>
          </div>
          {/* Card Experiencia 3 */}
          <div className="flex flex-col lg:flex-row w-[80%] gap-12 items-center p-8 border-2 border-tertiary rounded-2xl shadow-xl bg-lightBackground-100 dark:bg-darkBackground-100">
            <img
              src={logotipoCA}
              alt="Logotipo Ufscar"
              className=" rounded-lg shadow-2xl max-w-[194px]"
            />
            <div className="  flex flex-col text-xl gap-3">
              <h3 className="font-bold">Diretor de Comunicação</h3>
              <p>
                Responsavel pela comunicação com outras entidades e alunos para
                assuntos referentes ao Centro Acadêmico. Gerenciamento e criação
                de conteúdo para as redes sociais utilizando Adobe Illustrator e
                Photoshop.
              </p>
              <p>09/2021 - Atualmente</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col lg:flex-row px-10 py-16 gap-24 justify-center items-center ">
        <div className="w-[90%] flex flex-col items-center justify-between gap-24">
          <h1 className="w-full text-4xl font-medium">
            Habilidades, Tecnologias e Ferramentas
          </h1>
          <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-y-24 gap-x-8">
            {habilidades.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-8 justify-between items-center hover:scale-105"
              >
                <img
                  src={item.img}
                  alt={item.nome + " logo"}
                  className="min-h-[100px] max-h-[100px]"
                />
                <p className="text-center text-lg">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
