import React from 'react';
import { awards } from '../constants/index.js';

const Awards = () => {
  return (
    <section className="c-space my-20">
      <h3 className="head-text">Honors & Awards</h3>

      <div className="mt-12 grid grid-cols-1 gap-5">
        {awards.map((award) => (
          <div
            key={award.id}
            className="group relative flex flex-col gap-5 p-5 shadow-2xl shadow-black-200 bg-black-200 border border-black-300 rounded-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-3xl"
          >
            <div className="flex justify-between items-start gap-5 sm:flex-row flex-col">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                    <img src={award.icon} alt="trophy" className="w-6 h-6 object-contain" />
                    <h4 className="text-white text-xl font-bold font-generalsans">
                    {award.title}
                    </h4>
                </div>
                
                <p className="text-white-500 font-medium text-base">
                  Issued by {award.issuer} <span className="text-white-700 mx-2">•</span> {award.date}
                </p>
              </div>
            </div>

            <div className="w-full h-[1px] bg-black-300/50" />

            <p className="text-white-800 font-light text-base leading-7">
              {award.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;