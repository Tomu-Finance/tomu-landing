import active from "../assets/icons/active.svg"
import "../styles/components/Hero.scss"
import heroImg from "../assets/images/landing.webp"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { GoArrowRight } from "react-icons/go"
import Form from "./Form"

const Hero = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()
    const init = () => {
      tl.from(containerRef.current, { ease: "linear", autoAlpha: 0 }).to(
        containerRef.current,
        {
          ease: "linear",
          autoAlpha: 1,
        }
      )
    }

    init()
  }, [])

  return (
    <div className="hero" ref={containerRef}>
      <div className="hero__xion">
        <img className="hero__xion__active" src={active} />
        <p className="hero__xion__text">Built on XION blockchain</p>
      </div>

      <p className="hero__heading" data-animation="bounce">
        Your <span className="hero__heading__span">last</span> DeFi wallet
      </p>

      <p className="hero__subheading" data-animation="hCustom">
        A unified self-custodial wallet for seamless cross-chain DeFi
        interactions, fiat on/off-ramps, and gas-free transactions.
      </p>

      <div className="hero__waitlist">
        <div className="hero__waitlist__wrapper">
          <p className="hero__waitlist__text" data-animation="opacIn">
            Be the first to know when we launch
          </p>
          <GoArrowRight className="hero__waitlist__icon" />
        </div>
      </div>

      <Form />

      <img className="hero__image" src={heroImg} alt="tomu image" />
    </div>
  )
}

export default Hero
