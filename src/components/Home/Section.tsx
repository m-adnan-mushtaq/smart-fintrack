"use client";
import { useEffect, useRef } from "react";
const Section = ({ imgId, tagline, title }: Feature) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!sectionRef.current) return;
    const imgToShow = document.querySelector(imgId) as HTMLImageElement;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          const images = document.querySelectorAll(
            "data-img"
          ) as NodeListOf<HTMLImageElement>;
          images.forEach((img) => {
            img.classList.remove("show");
          });
          imgToShow.classList.add("show");
        } else {
          imgToShow.classList.remove("show");
        }
      },
      {rootMargin:"50px", threshold: 1.0 }
    );
    observer.observe(sectionRef.current);
    return () => {
      if (!sectionRef.current) return;
      observer.unobserve(sectionRef.current);
    };
  }, []);
  return (
    <>
      <div id={imgId+'section'} className="h-screen capitalize pt-4 flex-col flex justify-center text-center items-center">
        <div>
          <h1 className="text-5xl font-bold text-primary">{title}</h1>
          <p className="my-2 text-3xl">{tagline}</p>
        </div>
        <div ref={sectionRef}></div>
      </div>
    </>
  );
};

export default Section;
