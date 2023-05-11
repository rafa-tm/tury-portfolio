import ThemeButton from "../ThemeButton";
import Button from "../Button";

export default function Header() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <header
      className={
        "w-full fixed top-0 z-50 flex justify-between items-center px-40 py-6 bg-lightBackground text-lightText dark:bg-darkBackground dark:text-darkText"
      }
    >
      <Button
        to={"/"}
        action={() => scrollToTop()}
        type={"text"}
        className={"text-lg"}
      >
        <div className="bg-gradient-to-tr from-primary to-secondary text-lightText px-4 py-1 -skew-y-1">
          <span className="text-2xl">Tury</span>
          <span className="text-sm">.dev</span>
        </div>
      </Button>

      <nav className="flex gap-12 items-center ">
        <Button
          to={"/"}
          type={"text"}
          className={"text-lg"}
          reloadDocument={true}
        >
          Início
        </Button>
        <Button to={"/projetos"} type={"text"} className={"text-lg"}>
          Projetos
        </Button>
        <Button to={"/sobre"} type={"text"} className={"text-lg"}>
          Sobre mim
        </Button>
        <Button
          to={"/contato"}
          type={"primary"}
          className={"px-3 py-1 text-lg"}
        >
          Contato
        </Button>

        <ThemeButton />
      </nav>
    </header>
  );
}
