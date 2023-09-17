/* eslint-disable react/no-unescaped-entities */
import tury from "../assets/tury.jpg";
import Button from "../components/Buttons/Button";

import { useTranslation } from "react-i18next";

export default function SobreMim() {
  const { t } = useTranslation();

  return (
    <main className="w-full min-h-screen flex flex-col py-32 bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText overflow-hidden">
      <section className="w-full flex flex-col px-4 lg:px-20 gap-16 justify-center items-center ">
        <div className="w-full mx-auto flex flex-col gap-16 items-center justify-between">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-32 justify-center items-center mx-auto w-full">
            <img
              src={tury}
              alt="Foto de perfil Rafael Tury Minatel"
              width={380}
              height={380}
              className="max-w-xs rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500 ease-in-out "
            />
            <div className="flex flex-col gap-4 py-2 text-5xl text-lightText ">
              <h2 className=" leading-relaxed font-medium text-center bg-lightBackground-100 dark:bg-lightBackground">
                {t("call.WhoIs")}
              </h2>
              <h1 className="font-bold text-center bg-darkBackground text-lightText bg-gradient-to-r from-primary to-secondary py-2 px-6 ">
                Rafael Tury Minatel ?
              </h1>
            </div>
          </div>

          <div className="w-[80%] text-xl text-center flex flex-col gap-6">
            <p>{t("whoIs.0")}</p>
            <p>{t("whoIs.1")}</p>
            <p>{t("whoIs.2")}</p>
            <p>{t("whoIs.3")}</p>
          </div>
          <Button
            to={"/resume"}
            type={"primary"}
            className="px-8 py-4 max-w-md text-xl font-bold"
          >
            {t("call.Resume")}
          </Button>
        </div>
      </section>
    </main>
  );
}
