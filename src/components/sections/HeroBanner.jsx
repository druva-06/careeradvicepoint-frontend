import HeroBannerSearch from "./HeroBannerSearch";
import { useState } from "react";

export default function HeroBanner() {
  const data = [
    {
      id: "study-abroad",
      title: "Study Abroad",
    },
    {
      id: "study-india",
      title: "Study India",
    }
  ];

  const [currentActive, setCurrentActive] = useState(data[0]);
  const handleClick = (item) => {
    setCurrentActive(item);
  };
  return (
    <>
      <section
        className="hero-area hero-bg-1 section-pt-200 pt-230 section-pb-90"
        style={{
          backgroundImage: `url('img/hero_bg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container max-width-1000">
          <h1 className="text-center mb-40" style={{ color: "#FFF" }}>
            Find the Colleges & Courses <br /> that are best for you
          </h1>
          <div className="row filter__tab mb-10">
            {data.map((item) => (
              <span
                key={item.id}
                className={
                  "col-6 col-md nav-item" +
                  (currentActive.id === item.id ? " active" : "")
                }
                onClick={() => handleClick(item)}
              >
                {item.title}
              </span>
            ))}
          </div>
          <HeroBannerSearch currentActive={currentActive} />
        </div>
      </section>
    </>
  );
}
