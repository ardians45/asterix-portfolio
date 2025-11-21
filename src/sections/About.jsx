import React, { useState } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button.jsx';
import { useMediaQuery } from 'react-responsive';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const isMedium = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1279px)',
  });

  const handleCopy = () => {
    navigator.clipboard.writeText('ardians1945@gmail.com');
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.jfif"
              alt="grid-1"
              className="w-full sm:h-[276px] h-auto object-cover rounded-lg"
            />

            <div className="flex flex-col gap-3 mt-6 xl:mt-10 max-w-[90%] mx-auto">
              <p className="grid-headtext">Hi, I’m Ardian Setiawan</p>

              <p className="grid-subtext">
                Blending creativity and engineering to build future-ready
                digital products with clean design, thoughtful interaction, and
                modern web technologies.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-auto object-cover rounded-lg"
            />

            <div className="flex flex-col gap-3 mt-6 xl:mt-10 max-w-[90%] mx-auto">
              <p className="grid-headtext">Tools I Build With</p>

              <p className="grid-subtext text-balance">
                From design systems and wireframing to full-stack development —
                I work with modern technologies to create clean, efficient, and
                future-ready digital products.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 40,
                    lng: -100,
                    text: 'Rjieka, Croatia',
                    color: 'white',
                    size: 15,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">Location & Availability</p>

              <p className="grid-subtext">
                Based in Indonesia and working remotely with global and local
                clients. Open for freelance and collaboration opportunities in
                design, development, and product work.
              </p>

              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-4 md:col-span-1">
          <div className={isMedium ? 'grid-container2' : 'grid-container'}>
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full xl:h-[246px] sm:h-[326px] h-fit object-contain"
            />
            <div className="relative xl:pt-24 mt-4">
              <p className="grid-headtext">My Passion for Code</p>

              <p className="grid-subtext">
                I enjoy solving real problems through clean, thoughtful, and
                functional code. For me, coding is more than just writing syntax
                — it’s about creating meaningful digital experiences, improving
                usability, and building solutions that help people interact
                better with technology.
              </p>
            </div>
          </div>
        </div>

        {isMedium ? (
          ''
        ) : (
          <div className="xl:col-span-1 xl:row-span-3 md:col-span-1">
            <div className="grid-container">
              <img
                src="/assets/grid4.png"
                alt="grid-4"
                className="w-full md:h-[206px] sm:h-[276px] h-fit object-cover sm:object-top"
              />

              <div className="space-y-2">
                <p className="grid-subtext text-center">Contact me</p>
                <div className="copy-container" onClick={handleCopy}>
                  <img
                    src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'}
                    alt="copy"
                    className="w-5 h-5"
                  />
                  <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                    ardians1945@gmail.com
                  </p>{' '}
                  {/*you need to change the .writeText on line 10 to*/}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default About;
