import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FadeIn = ({ children, delay = 0, yOffset = 50, className = '' }) => {
  const comp = useRef();

  useGSAP(() => {
    const elements = comp.current.children;

    gsap.fromTo(
      elements,
      {
        opacity: 0,
        y: yOffset,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2, // Efek muncul berurutan jika ada banyak anak elemen
        ease: 'power3.out',
        scrollTrigger: {
          trigger: comp.current,
          start: 'top 85%', // Animasi mulai saat bagian atas elemen mencapai 85% tinggi layar
          toggleActions: 'play none none reverse', // Mainkan saat masuk, reverse saat keluar ke atas
        },
      }
    );
  }, []);

  return (
    <div ref={comp} className={className}>
      {children}
    </div>
  );
};

export default FadeIn;