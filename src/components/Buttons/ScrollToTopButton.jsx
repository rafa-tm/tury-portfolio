import { useEffect } from "react";
import { useState } from "react";

import Button from "./Button";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showButton && (
        <Button
          className="fixed bottom-0 right-0 m-4 bg-lightBackground border-2 border-slate-200 flex flex-row gap-4 py-4 px-3 items-center justify-center shadow-lg "
          type="text"
          action={scrollToTop}
        >
          <FaArrowUp className="w-8" />
        </Button>
      )}
    </>
  );
}
