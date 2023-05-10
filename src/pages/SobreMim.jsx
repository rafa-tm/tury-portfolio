import { habilidades } from "../utils/habilidades";
import tury from "../assets/tury.jpg";
import logotipoUShare from "../assets/projetos/LogotipoUshare.svg";
import logotipoCATI from "../assets/projetos/LogotipoCATI.svg";
import logotipoCA from "../assets/projetos/caenc.png";
import Button from "../components/Button";

export default function SobreMim() {
  return (
    <main className="w-full flex flex-col py-56 gap-48 bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText">
      <section className="w-full flex flex-col px-4 lg:px-20 gap-16 items-center ">
        <div className="w-full flex items-start ml-40">
          <div className=" py-4 px-16 -skew-y-3 bg-gradient-to-r from-primary to-secondary">
            <div className="flex gap-4 py-2 px-6 font-bold bg-lightBackground-100 text-lightText dark:bg-lightBackground dark:text-lightText">
              <h1 className="w-full text-4xl font-medium">Educação</h1>
            </div>
          </div>
        </div>
        {/* Card Educação */}
        <div className="flex flex-col lg:flex-row gap-12 justify-center items-center px-32 py-8 rounded-2xl shadow-xl bg-lightBackground-100 dark:bg-darkBackground-100">
          <img
            src="https://www.dche.ufscar.br/documentos/imagens/logo-ufscar.png"
            alt="Logotipo Ufscar"
            className="bg-white  p-2 max-w-[194px]"
          />
          <div className="flex flex-col text-xl gap-3">
            <h2 className="font-bold text-2xl ">
              Bacharelado em Engenharia de Computação
            </h2>
            <p>Universidade Federal de São Carlos</p>
            <p>2019 - 2024</p>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col px-4 lg:px-20 gap-16 items-center ">
        <div className="w-full flex items-start ml-40">
          <div className="py-4 px-16 -skew-y-3 bg-gradient-to-r from-primary to-secondary">
            <div className="flex gap-4 py-2 px-6 font-bold bg-lightBackground-100 text-lightText dark:bg-lightBackground dark:text-lightText">
              <h1 className="w-full text-4xl font-medium">Experiência</h1>
            </div>
          </div>
        </div>

        {/* Card Experiencia 1 */}
        <div className="flex flex-col lg:flex-row  gap-16 justify-center items-center px-24 py-8 rounded-2xl shadow-xl bg-lightBackground-100 dark:bg-darkBackground-100">
          <img
            src={logotipoUShare}
            alt="Logotipo uShare"
            className=" rounded-lg max-w-[194px]"
          />
          <div className="  flex flex-col text-xl gap-3">
            <h3 className="font-bold text-2xl ">Desenvolvedor Front-End</h3>
            <p>Desenvolvimento utilizando Vite JS, React JS e TailwindCSS.</p>
            <p>02/2023 - Atualmente</p>
          </div>
        </div>

        {/* Card Experiencia 2 */}
        <div className="flex flex-col lg:flex-row  gap-16 justify-center items-start px-24 py-8 rounded-2xl shadow-xl bg-lightBackground-100 dark:bg-darkBackground-100">
          <img
            src={logotipoCATI}
            alt="Logotipo uShare"
            className="bg-white rounded-lg p-2 max-w-[194px]"
          />
          <div className="max-w-[552px] flex flex-col gap-16 ">
            <div className="  flex flex-col text-xl gap-3">
              <h3 className="font-bold text-2xl ">Desenvolvedor Full Stack</h3>
              <p>
                Desenvolvimento utilizando Node JS, React JS, WordPress e outras
                linguagens, aplicando através de metodologia Scrum.
              </p>
              <p>12/2022 - Atualmente</p>
            </div>
            <div className="  flex flex-col text-xl gap-3">
              <h3 className="font-bold text-2xl ">
                Coordenador de Design e Marketing
              </h3>
              <p>
                Liderei a equipe como coordenador, ajudando na organização e
                desenvolvimento de protótipos de interface, além de conduzir
                treinamentos de design UI/UX para novos membros.
              </p>
              <p>12/2022 - 12/2022</p>
            </div>
            <div className="  flex flex-col text-xl gap-3">
              <h3 className="font-bold text-2xl ">
                Membro de Design e Marketing
              </h3>
              <p>
                Design de vários protótipos de interfaces móveis e web com
                Figma. Criação de conteúdo para redes sociais usando técnicas de
                marketing, com os softwares Adobe Illustrator, Photoshop e
                Canva.
              </p>
              <p>12/2022 - 12/2022</p>
            </div>
          </div>
        </div>

        {/* Card Experiencia 3 */}
        <div className="flex flex-col lg:flex-row  gap-16 justify-center items-center px-24 py-8 rounded-2xl shadow-xl bg-lightBackground-100 dark:bg-darkBackground-100">
          <img
            src={logotipoCA}
            alt="Logotipo uShare"
            className=" rounded-lg max-w-[194px]"
          />
          <div className="max-w-[552px] flex flex-col text-xl gap-3">
            <h3 className="font-bold text-2xl ">Diretor de Comunicação</h3>
            <p>
              Responsavel pela comunicação com outras entidades e alunos para
              assuntos referentes ao Centro Acadêmico. Gerenciamento e criação
              de conteúdo para as redes sociais utilizando Adobe Illustrator e
              Photoshop.
            </p>
            <p>09/2021 - Atualmente</p>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col px-4 lg:px-20 gap-24 items-center ">
        <div className="w-full flex items-start ml-40">
          <div className=" py-4 px-16 -skew-y-3 bg-gradient-to-r from-primary to-secondary">
            <div className="flex gap-4 py-2 px-6 font-bold bg-lightBackground-100 text-lightText dark:bg-lightBackground dark:text-lightText">
              <h1 className="w-full text-4xl font-medium">
                Habilidades, Tecnologias e Ferramentas
              </h1>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-y-24 gap-x-8 xl:gap-x-24 ">
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
              <p className="text-center text-lg font-semibold">{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full flex flex-col px-4 lg:px-20 gap-16 justify-center items-center ">
        <div className="w-[95%] flex flex-col gap-16 items-center justify-between">
          <div className="flex flex-col lg:flex-row gap-12 justify-evenly items-center w-full">
            <div className="flex flex-col gap-4 py-2 text-5xl text-lightText ">
              <h2 className=" leading-relaxed font-medium text-center bg-lightBackground-100 dark:bg-lightBackground">
                E quem é
              </h2>
              <h1 className="font-bold bg-darkBackground text-lightText bg-gradient-to-r from-primary to-secondary py-2 px-6 ">
                Rafael Tury Minatel ?
              </h1>
            </div>
            <img
              src={tury}
              alt="Foto de perfil Rafael Tury Minatel"
              width={300}
              height={300}
              className=" max-w-sm lg:max-w-lg rounded-3xl shadow-2xl  transform rotate-3 hover:rotate-0 transition-all duration-500 ease-in-out "
            />
          </div>

          <div className="w-[70%] text-2xl text-center flex flex-col gap-6">
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
              Se você estiver procurando por um estudante dedicado, apaixonado e
              com sede de conhecimento para ajudá-lo a criar soluções inovadoras
              para problemas complexos, não hesite em entrar em contato comigo.
              Adoraria discutir como posso ajudá-lo a alcançar seus objetivos!
            </p>
          </div>
        </div>
        <Button
          to={"/contato"}
          type={"primary"}
          className="px-8 py-4 max-w-md text-xl font-bold"
        >
          Entre em contato
        </Button>
      </section>
    </main>
  );
}
