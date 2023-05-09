import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full py-16 bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText">
      <div className="w-full flex flex-col justify-between items-center px-10 py-8 gap-12">
        <div className="flex gap-8">
          <a
            href="https://www.linkedin.com/in/rafaelturyminatel/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-tertiary hover:scale-125 transition duration-300"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://github.com/rafa-tm"
            target="_blank"
            rel="noreferrer"
            className="hover:text-tertiary hover:scale-125 transition duration-300"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="mailto:rafaelturyminatel@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-tertiary hover:scale-125 transition duration-300"
          >
            <FaEnvelope className="text-2xl" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5514997644542"
            target="_blank"
            rel="noreferrer"
            className="hover:text-tertiary hover:scale-125 transition duration-300"
          >
            <FaWhatsapp className="text-2xl" />
          </a>
        </div>
        <div className="flex flex-col gap-4 text-center">
          <p>© Design and Development by Rafael Tury</p>
        </div>
      </div>
    </footer>
  );
}
