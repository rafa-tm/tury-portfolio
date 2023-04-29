import ThemeButton from "../ThemeButton";
import Button from "../Button";

export default function Header() {
  return (
    <header
      className={
        "w-full flex justify-between items-center px-40 py-4 bg-lightBackground text-lightText dark:bg-darkBackground dark:text-darkText"
      }
    >
      <Button to={"/"} type={"text"} className={"text-lg"}>
        Início
      </Button>
      <nav className="flex gap-12 items-center ">
        <Button to={"/projetos"} type={"text"} className={"text-lg"}>
          Projetos
        </Button>
        <Button to={"/sobre"} type={"text"} className={"text-lg"}>
          Sobre mim
        </Button>
        <Button to={"/"} type={"primary"} className={"px-3 py-1 text-lg"}>
          Contato
        </Button>

        <ThemeButton />
      </nav>
    </header>
  );
}
