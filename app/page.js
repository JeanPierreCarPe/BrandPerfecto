import { About, Contact, Hero, Services, StayInformed, WhyUs } from "./sections";

export default function Home() {
  return (
    <main className="relative bg-white-primary">
      <section className="overflow-hidden relative">
        <Hero />
      </section>
      <section className="">
        <Services />
      </section>
      <section className="overflow-hidden relative flex flex-col justify-center items-center">
        <svg
          height="105%"
          viewBox="0 0 1134 2043"
          fill="none"
          preserveAspectRatio="xMidYMin meet"
          className="absolute  z-0"
        >
          <path
            d="M1090.21 6C1090.21 6 1346.26 819.996 542.626 635.991C-261.006 451.986 -88.1405 1565.15 564.129 1443.55C1226.74 1320.03 939.191 2037 939.191 2037"
            stroke="#F4C63E"
            stroke-width="10"
            stroke-linecap="round"
          />
        </svg>
        <About />
        <WhyUs />
        <StayInformed />
      </section>
      <section className="">
        <Contact />
      </section>
      <section className="overflow-hidden">footer</section>
    </main>
  );
}
