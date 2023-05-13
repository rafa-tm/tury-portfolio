import Button from "../components/Button";
import Input from "../components/Input";
import api from "../services/api";

export default function Contact() {
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api
        .post("submit", {
          accessKey: import.meta.env.VITE_API_KEY,
          name: e.target.name.value,
          email: e.target.email.value,
          subject: e.target.subject.value,
          honeypot: "",
          message: e.target.message.value,
        })
        .then((res) => {
          console.log(res);
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="w-full bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText">
      <section className="w-full flex flex-col px-10 py-36 gap-24 justify-center items-center ">
        <div className="w-[90%] flex flex-col items-center justify-between gap-12">
          <h1 className="text-4xl font-medium">Get in touch!</h1>
          <h3 className="text-2xl font-medium">
            Fill out the form below and I will contact you as soon as possible.
          </h3>
        </div>
        <div className="w-[90%] lg:w-1/2 rounded-2xl py-12 px-10 flex flex-col text-darkText bg-darkBackground-100">
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-8 items-center"
          >
            <Input
              label="Your name:"
              type="text"
              nome="name"
              id="name"
              placeholder="Full name"
              required
            />
            <Input
              label="Your email:"
              type="email"
              nome="email"
              id="email"
              placeholder="email@exemplo.com"
              required={true}
            />
            <Input
              label="Subject:"
              type="text"
              nome="subject"
              id="subject"
              placeholder="Assunto da mensagem"
              required={true}
            />
            <Input
              label="Message:"
              type="textarea"
              nome="message"
              id="message"
              cols={30}
              rows={10}
              required={true}
              placeholder={"White your message here"}
            />
            <Button type="primary" className="w-1/2 py-4 text-xl max-w-lg">
              <input type="submit" value="Enviar" />
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
}
