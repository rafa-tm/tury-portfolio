import Button from "../components/Button";
import Input from "../components/Input";

export default function Contact() {
  return (
    <main className="w-full bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText">
      <section className="w-full flex flex-col px-10 py-36 gap-24 justify-center items-center ">
        <div className="w-[90%] flex flex-col items-center justify-between gap-24">
          <h1 className="w-full text-4xl font-medium">Contato</h1>
          <div className=" w-[75%] py-12 px-24 flex flex-col text-darkText bg-darkBackground-100">
            <form action="" className="flex flex-col gap-8">
              <Input label="Nome:" type="text" nome="name" id="name" />
              <Input label="Email:" type="email" nome="email" id="email" />
              <Input label="Assunto:" type="text" nome="subject" id="subject" />
              <Input
                label="Mensagem:"
                type="textarea"
                nome="message"
                id="message"
                cols="30"
                rows="10"
              />
              <Button type="primary" className="w-[50%] self-center">
                Enviar
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
