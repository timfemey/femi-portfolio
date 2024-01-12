import { useEffect, useState, useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { WelcomeAnimation } from "./IntroAninmation";
import { useScrollTo } from "../hooks";
import { useMediaQuery } from "../utils";
import Hero from "./hero";

export function WelcomeSection() {
  const ref = useRef(null);
  const introRef = useRef(null);
  // const isInView = useInView(ref, { once: true });
  const isInView = true;
  const { scrollToEl } = useScrollTo();
  const isTabletUp = useMediaQuery("min-width: 768px");

  let [count, setCount] = useState(0);
  const text = [
    "build scalable servers Node.js & Golang",
    "am conversant with Systems Architecture ",
    "build great user experiences on the web",
    "develop next-gen websites with Nextjs",
  ];

  const onClick = (e: any) => scrollToEl(e);

  useEffect(() => {
    let interval = setInterval(() => {
      setCount(count + 1);

      if (count === 3) {
        setCount(0);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <LazyMotion features={domAnimation}>
      <section id="intro" className="section" ref={introRef}>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_0.5fr] lg:grid-cols-[1fr_0.7fr] gap-4 items-center">
          {isTabletUp && (
            <div className="py-5 md:py-10">
              <h1
                tabIndex={0}
                ref={ref}
                className="text-3xl md:text-5xl xl:text-6xl font-bold"
                style={{
                  transform: isInView ? "none" : "translateX(-200px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
              >
                <p>Hi 👋, I&apos;m Femi a passionate software developer.</p>
              </h1>

              <div className="mt-3 relative flex flex-col overflow-hidden">
                <p
                  ref={ref}
                  className="text-[15px] md:text-2xl transform-none opacity-100"
                  style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition:
                      "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                  }}
                >
                  I
                  <span
                    className="absolute flex flex-col transition-all duration-500 ease-in-expo"
                    style={{
                      top:
                        count === 0
                          ? "0"
                          : count === 1
                          ? "-100%"
                          : count === 2
                          ? "-200%"
                          : count === 3
                          ? "-300%"
                          : "0",
                      left: "13px",
                    }}
                  >
                    {text.map((element) => (
                      <TextElement key={element} element={element} />
                    ))}
                  </span>
                </p>
              </div>

              {/* <p
              tabIndex={0}
              ref={ref}
              className="mt-3 mb-10 text-gray-500 text-xl"
              style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              Stick around to see some of my work.
            </p> */}

              {/* <Link
                href="#projects"
                onClick={onClick}
                tabIndex={0}
                className="btn"
                aria-label="Latest projects"
              >
                See my latest projects
              </Link> */}
            </div>
          )}

          {isTabletUp ? <WelcomeAnimation /> : <Hero />}
        </div>
      </section>
    </LazyMotion>
  );
}

function TextElement({ element }: { element: string }) {
  const firstWord = <b>{element.split(" ").at(0)}</b>;
  const restWords = element.split(" ").slice(1).join(" ");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span
      tabIndex={0}
      ref={ref}
      className="text-[15px] md:text-2xl"
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      {firstWord} {restWords}
    </span>
  );
}
