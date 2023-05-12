/* eslint-disable react/no-unescaped-entities */
import { habilidades } from "../utils/habilidades";
import tury from "../assets/tury.jpg";
import logotipoUShare from "../assets/projetos/LogotipoUshare.svg";
import logotipoCATI from "../assets/projetos/LogotipoCATI.svg";
import logotipoCA from "../assets/projetos/caenc.png";
import Button from "../components/Button";

export default function SobreMim() {
  return (
    <main className="w-full flex flex-col py-56 gap-48 bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText overflow-hidden">
      <section className="w-full flex flex-col px-4 lg:px-20 gap-16 items-center ">
        <div className="w-full flex items-start ml-40">
          <div className=" py-4 px-16 -skew-y-3 bg-gradient-to-r from-primary to-secondary">
            <div className="flex gap-4 py-2 px-6 font-bold bg-lightBackground-100 text-lightText dark:bg-lightBackground dark:text-lightText">
              <h1 className="w-full text-4xl font-medium">Education</h1>
            </div>
          </div>
        </div>
        {/* Card Educação */}
        <div className="flex flex-col lg:flex-row gap-12 justify-center items-center px-8 lg:px-32 py-8 rounded-2xl shadow-xl bg-lightBackground-100 dark:bg-darkBackground-100">
          <img
            src="https://www.dche.ufscar.br/documentos/imagens/logo-ufscar.png"
            alt="Logotipo Ufscar"
            className="bg-white  p-2 max-w-[194px]"
          />
          <div className="flex flex-col text-xl gap-3">
            <h2 className="font-bold text-2xl ">
              Bachelor's degree in Computer Engineering
            </h2>
            <p>Federal University of São Carlos</p>
            <p>2019 - 2024</p>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col px-4 lg:px-20 gap-16 items-center ">
        <div className="w-full flex items-start ml-40">
          <div className="py-4 px-16 -skew-y-3 bg-gradient-to-r from-primary to-secondary">
            <div className="flex gap-4 py-2 px-6 font-bold bg-lightBackground-100 text-lightText dark:bg-lightBackground dark:text-lightText">
              <h1 className="w-full text-4xl font-medium">Experience</h1>
            </div>
          </div>
        </div>

        {/* Card Experiencia 1 */}
        <div className="flex flex-col lg:flex-row  gap-16 justify-center items-center px-8 lg:px-32 py-8 rounded-2xl shadow-xl bg-lightBackground-100 dark:bg-darkBackground-100">
          <img
            src={logotipoUShare}
            alt="Logotipo uShare"
            className=" rounded-lg max-w-[194px]"
          />
          <div className=" max-w-[552px] flex flex-col text-xl gap-3">
            <h3 className="font-bold text-2xl ">Front-End Developer</h3>
            <p>
              Development of website using Vite JS, React JS, and TailwindCSS.
            </p>
            <p>Fev 2023 - Present</p>
          </div>
        </div>

        {/* Card Experiencia 2 */}
        <div className="flex flex-col lg:flex-row  gap-16 justify-center items-start px-8 lg:px-32 py-8 rounded-2xl shadow-xl bg-lightBackground-100 dark:bg-darkBackground-100">
          <img
            src={logotipoCATI}
            alt="Logotipo CATI Jr"
            className="bg-white rounded-lg p-2 max-w-[194px]"
          />
          <div className="max-w-[552px] flex flex-col gap-16 ">
            <div className="  flex flex-col text-xl gap-3">
              <h3 className="font-bold text-2xl ">Full Stack Developer</h3>
              <p>
                Development using Node JS, React JS, WordPress, and other
                languages, applying Scrum methodology.
              </p>
              <p>Dec 2022 - Present</p>
            </div>
            <div className="  flex flex-col text-xl gap-3">
              <h3 className="font-bold text-2xl ">
                Design and Marketing Coordinator
              </h3>
              <p>
                Led the team as coordinator, assisting in the organization and
                development of interface prototypes, as well as conducting UI/UX
                design training for new members.
              </p>
              <p>Jun 2022 - Dec 2022</p>
            </div>
            <div className="  flex flex-col text-xl gap-3">
              <h3 className="font-bold text-2xl ">
                Design and Marketing Member
              </h3>
              <p>
                Design of various mobile and web interface prototypes using
                Figma. Creation of content for social media using marketing
                techniques, with Adobe Illustrator, Photoshop, and Canva
                software.
              </p>
              <p>Nov 2021 - Jun 2022</p>
            </div>
          </div>
        </div>

        {/* Card Experiencia 3 */}
        <div className="flex flex-col lg:flex-row  gap-16 justify-center items-center px-8 lg:px-32 py-8 rounded-2xl shadow-xl bg-lightBackground-100 dark:bg-darkBackground-100">
          <img
            src={logotipoCA}
            alt="Logotipo CAENC"
            className=" rounded-lg max-w-[194px]"
          />
          <div className="max-w-[552px] flex flex-col text-xl gap-3">
            <h3 className="font-bold text-2xl ">Director of Communication</h3>
            <p>
              Responsible for communication with other entities and students
              regarding Academic Center matters. Management and creation of
              content for social media using Adobe Illustrator and Photoshop.
            </p>
            <p>Set 2021 - Jul 2022</p>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col px-4 lg:px-20 gap-24 items-center ">
        <div className="w-full flex items-start ml-4">
          <div className=" py-4 px-8 -skew-y-3 bg-gradient-to-r from-primary to-secondary">
            <div className="flex gap-4 py-2 px-6 font-bold bg-lightBackground-100 text-lightText dark:bg-lightBackground dark:text-lightText">
              <h1 className="w-full text-2xl lg:text-4xl font-medium">
                Skills, Technologies and Tools
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
                And who is
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
              I was born in Torrinha, a small town in the interior of São Paulo,
              but currently I live in São Carlos, where I study Computer
              Engineering at the Federal University of São Carlos (UFSCar).
              Since I started my undergraduate studies in Computer Engineering,
              I have been striving to learn everything I can about the world of
              technology, with the goal of becoming a complete professional
              capable of creating innovative solutions for complex problems.
            </p>
            <p>
              My academic journey has been full of challenges and learning
              opportunities, and I am proud to say that I have overcome them
              with dedication and hard work. During my course, I had the
              opportunity to study disciplines such as Networks, Algorithms and
              Data Structures, Operating Systems, Artificial Intelligence, and
              Back-End and Front-End Development, and I was able to apply this
              knowledge in practical projects that allowed me to develop
              important technical and interpersonal skills.
            </p>
            <p>
              In addition to my studies, I am passionate about technology and
              innovation, and I always seek to stay updated on the latest trends
              and developments in the field. I believe that technology has the
              power to transform lives and change the world, and I want to be
              part of this transformation. I have already participated in a
              junior company and an academic center within the university, which
              provided me with valuable experience in leadership, teamwork, and
              problem-solving.
            </p>

            <p>
              If you are looking for a dedicated, passionate, and
              knowledge-hungry student to help you create innovative solutions
              for complex problems, do not hesitate to contact me. I would love
              to discuss how I can help you achieve your goals!
            </p>
          </div>
        </div>
        <Button
          to={"/contato"}
          type={"primary"}
          className="px-8 py-4 max-w-md text-xl font-bold"
        >
          Get in touch
        </Button>
      </section>
    </main>
  );
}
