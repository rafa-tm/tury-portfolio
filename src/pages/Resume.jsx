/* eslint-disable react/no-unescaped-entities */
import logotipoUShare from "../assets/projetos/LogotipoUshare.svg";
import logotipoCATI from "../assets/projetos/LogotipoCATI.svg";
import logotipoCA from "../assets/projetos/caenc.png";

import Button from "../components/Button";

import { habilidades } from "../utils/habilidades";
import ResumeCard from "../components/ResumeCard";
import { useTranslation } from "react-i18next";

export default function SobreMim() {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  return (
    <main className="w-full min-h-screen flex flex-col py-32 gap-24 bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText overflow-hidden">
      <section className="w-full flex flex-col gap-16 items-center ">
        <div className="w-full bg-primary -skew-y-1 py-3 flex items-center justify-center shadow-lg mb-6">
          <div className="w-full bg-lightBackground-100 py-3 flex items-center justify-center shadow-lg">
            <h1 className="text-4xl font-medium">{t("education")}</h1>
          </div>
        </div>

        <div className="container px-6 flex flex-wrap">
          {/* Card Educação */}
          <ResumeCard
            logotipo="https://www.dche.ufscar.br/documentos/imagens/logo-ufscar.png"
            resume={{
              title: t("education.items.0.title"),
              description: t("education.items.0.description"),
              period: t("education.items.0.period"),
            }}
          />
        </div>
      </section>

      <section className="w-full flex flex-col gap-16 items-center ">
        <div className="w-full bg-secondary skew-y-1 py-3 flex items-center justify-center shadow-lg mb-6">
          <div className="w-full bg-lightBackground-100 py-3 flex items-center justify-center shadow-lg">
            <h1 className="text-4xl font-medium">{t("experience")}</h1>
          </div>
        </div>

        <div className="container px-6 flex flex-wrap">
          {/* Card */}
          <ResumeCard
            logotipo={logotipoUShare}
            resume={{
              title: t("resume.items.0.title"),
              description: t("resume.items.0.description"),
              period: t("resume.items.0.period"),
            }}
          />

          {/* Card */}
          <ResumeCard
            logotipo={logotipoCATI}
            resume={{
              title: "Full Stack Developer",
              description:
                "Development using Node JS, React JS, WordPress, and other languages, applying Scrum methodology.",
              period: "Dec 2022 - Present",
            }}
          />
          {/* Card */}
          <ResumeCard
            logotipo={logotipoCATI}
            resume={{
              title: "Design UI/UX Coordinator",
              description:
                "Led the team as coordinator, assisting in the organization and development of interface prototypes, as well as conducting UI/UX design training for new members.",
              period: "Jun 2022 - Dec 2022",
            }}
          />
          {/* Card */}
          <ResumeCard
            logotipo={logotipoCATI}
            resume={{
              title: "Design UI/UX and Marketing Member",
              description:
                "Design of various mobile and web interface prototypes using Figma. Creation of content for social media using marketing techniques, with Adobe Illustrator, Photoshop, and Canva software.",
              period: "Nov 2021 - Jun 2022",
            }}
          />
          {/* Card */}
          <ResumeCard
            logotipo={logotipoCA}
            resume={{
              title: "Director of Communication",
              description:
                "Responsible for communication with other entities and students regarding Academic Center matters. Management and creation of content for social media using Adobe Illustrator and Photoshop.",
              period: "Set 2021 - Jul 2022",
            }}
          />
        </div>
      </section>

      <section className="w-full flex flex-col gap-16 items-center ">
        <div className="w-full bg-secondary skew-y-1 py-3 flex items-center justify-center shadow-lg mb-6">
          <div className="w-full bg-lightBackground-100 py-3 flex items-center justify-center shadow-lg">
            <h1 className="text-3xl text-center font-medium">{t("skills")}</h1>
          </div>
        </div>

        <div className="container px-6 gap-20 items-center justify-center flex flex-wrap">
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
        <Button
          type={"primary"}
          className="px-8 py-4 max-w-md text-xl font-bold mt-32"
          action={() => {
            if (language === "pt") {
              window.open(
                "https://drive.google.com/file/d/1DppbRnBp5EAveGDzfmfiOODs44y3gEbI/view?usp=sharing",
                "_blank"
              );
              return;
            } else {
              window.open(
                "https://drive.google.com/file/d/1ZqNMcOP88QW5XE5nX2jF9mg3uYi3MDkp/view?usp=sharing",
                "_blank"
              );
              return;
            }
          }}
        >
          {t("downloadResume")}
        </Button>
      </section>
    </main>
  );
}
