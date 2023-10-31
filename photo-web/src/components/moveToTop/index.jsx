import { BiSolidToTop } from "react-icons/bi";
import "./style.scss";
import { useEffect, useState } from "react";

export default function MoveToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setVisible(true);
    } else if (scrolled <= 500) {
      setVisible(false);
    }
    console.log(111);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <div className="bnt-move-top">
          <button onClick={scrollToTop}>
            <BiSolidToTop />
          </button>
        </div>
      )}
    </>
  );
}
