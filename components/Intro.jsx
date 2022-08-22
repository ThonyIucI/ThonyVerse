import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Reveal, Tween } from "react-gsap";
import styles from "../styles/Intro.module.scss";

function Intro({ click, setClick, camera }) {
  gsap.registerPlugin(ScrollTrigger);
  const panels = useRef([]),
    panelsContainer = useRef(),
    createPanelsRefs = (panel, index) => {
      panels.current[index] = panel;
    },
    FadeInLeft = ({ children }) => (
      <Tween
        from={{ opacity: 0, transform: "translate3d(-100vw, 0, 0)" }}
        ease="back.out(1.4)"
      >
        {children}
      </Tween>
    ),
    getSize = () => {
      let size;
      if (typeof window !== "undefined") size = window.innerWidth;

      if (size < 300) return 120;
      if (size < 600) {
        return 300;
      } else {
        return 420;
      }
    },
    [windowSize, setWindowSize] = useState(getSize());
  function handleClick(e) {
    console.log(e);
    setClick(!click);
    gsap.to(camera.position, {
      x: 0,
      y: 0,
      z: 300,
      duration: 2,
      ease: "circ.out",
    });
  }
  console.log(windowSize);
  useEffect(() => {
    const totalPanels = panels.current.length;

    // gsap.to(panels.current, {
    //   xPercent: -100 * (totalPanels - 1),
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: panelsContainer.current,
    //     // pin: true,
    //     scrub: 1,
    //     snap: 1 / (totalPanels - 1),
    //     // base vertical scrolling on how wide the container is so it feels more natural.
    //     end: () => "+=" + panelsContainer.current.offsetWidth,
    //   },
    // });
    setWindowSize(getSize());
  }, []);

  return (
    <div className={styles.global} ref={panelsContainer}>
      <div className={styles.container} ref={(e) => createPanelsRefs(e, 0)}>
        <div className={styles.section}>
          <Reveal repeat trigger={<div />}>
            <FadeInLeft>
              <div className={styles.image}>
                <Image
                  className={styles.image}
                  width={windowSize}
                  height={windowSize}
                  src="/Bitmojis/laptopWave.png"
                  alt="xd"
                />
              </div>
            </FadeInLeft>
          </Reveal>
          <div className={styles.text}>
            <Reveal repeat trigger={<div />}>
              <Tween
                from={{ opacity: 0, transform: "translate3d(100vw, 0, 0)" }}
                ease="back.out(1.4)"
              >
                <div className={styles.lyrics}>
                  <div className={styles.intro}>Hey! I am</div>
                  <div className={styles.name}>Anthony Urbina</div>
                  <div className={styles.description}>
                    Ing Mechanical Electrical + Full Stack developer
                  </div>
                </div>
                {/* <div className={styles.but} onClick={() => handleNext()}>
                  NEXT
                </div> */}
              </Tween>
            </Reveal>
          </div>
        </div>
      </div>
      <div className={styles.container} ref={(e) => createPanelsRefs(e, 1)}>
        <div className={styles.section}>
          <Reveal repeat trigger={<div />}>
            <FadeInLeft>
              <div className={styles.image}>
                <Image
                  width={windowSize}
                  height={windowSize}
                  src="/Bitmojis/hand_pointer.png"
                  alt="xd"
                />
              </div>
            </FadeInLeft>
          </Reveal>
          <div className={styles.text}>
            <Reveal repeat trigger={<div />}>
              <Tween
                from={{ opacity: 0, transform: "translate3d(100vw, 0, 0)" }}
                ease="back.out(1.4)"
              >
                <div className={styles.lyrics}>
                  <div className={styles.description}>I show you 6</div>
                  <div className={styles.name}> INFINITY GEMS</div>
                  <div className={styles.description}>
                    every one is a part of me
                  </div>
                </div>
                <div />
              </Tween>
            </Reveal>
          </div>
        </div>
      </div>
      <div className={styles.container} ref={(e) => createPanelsRefs(e, 1)}>
        <div className={styles.section}>
          <Reveal repeat trigger={<div />}>
            <FadeInLeft>
              <div className={styles.image}>
                <Image
                  width={windowSize}
                  height={windowSize}
                  src="/Bitmojis/gino.png"
                  alt="xd"
                />
              </div>
            </FadeInLeft>
          </Reveal>
          <div className={styles.text}>
            <Reveal repeat trigger={<div />}>
              <Tween
                from={{ opacity: 0, transform: "translate3d(100vw, 0, 0)" }}
                ease="back.out(1.4)"
              >
                <div className={styles.lyrics}>
                  {/* <div className={styles.description}>There are 7</div> */}
                  <div className={styles.name}>CHOSE ONE</div>
                  <div className={styles.description}>
                    And know more about me
                  </div>
                  <div className={styles.but} onClick={() => handleClick()}>
                    START
                  </div>
                </div>
              </Tween>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Intro;
