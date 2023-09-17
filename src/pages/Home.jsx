/* eslint-disable react/no-unescaped-entities */
import DesignCode from "../assets/DesignAndCoding.svg";
import Button from "../components/Buttons/Button";
import { habilidades } from "../utils/habilidades";
import { useTranslation } from "react-i18next";

export default function Home() {
  const anos = new Date().getFullYear() - 2021;

  const { t } = useTranslation();

  return (
    <main className="w-full bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText">
      <section className="w-full min-h-screen flex flex-col lg:flex-row py-24 px-10 gap-24 justify-center items-center ">
        <div className="w-[90%] lg:w-[50%] text-center text-xl flex flex-col gap-6 items-center">
          <p className="text-2xl font-medium">{t("call.Home")}</p>
          <h1 className="text-5xl font-black text-primary">
            Rafael Tury Minatel
          </h1>
          <p className="text-2xl font-medium">{t("call.Home2")}</p>
          <div className="flex flex-col text-xl font-normal gap-2">
            <p>{t("call.Home3.0", { years: anos })}</p>
            <p>{t("call.Home3.1")}</p>
          </div>
          <Button
            to={"resume"}
            type={"gradient"}
            className="px-10 py-4 text-xl max-w-xs mt-8"
          >
            {t("call.Resume")}
          </Button>
        </div>
        <img
          src={DesignCode}
          alt="Mão humana programando"
          width={448}
          height={448}
          className="max-w-xs lg:max-w-md animate-scale"
        />
      </section>

      <section className="w-full flex flex-col pb-48 gap-16 items-center ">
        <div className="w-full bg-secondary skew-y-1 py-3 flex items-center justify-center shadow-lg mb-6">
          <div className="w-full bg-lightBackground-100 py-3 flex items-center justify-center shadow-lg">
            <h1 className="text-3xl text-center font-medium">
              {t("title.skills")}
            </h1>
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
      </section>
    </main>
  );
}
