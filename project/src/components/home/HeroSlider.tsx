import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import Typed from 'typed.js';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import videoSrc from '../../assets/4kNimra.mp4';
import fullNameImage from '../../assets/images/Full_name.jpg';

const productImages = {
  slide1: fullNameImage,
  slide2: fullNameImage,
};

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

interface HeroSliderProps {
  slides: Slide[];
}

const HeroSlider: React.FC<HeroSliderProps> = ({ slides }) => {
  const typedRef = useRef<HTMLSpanElement>(null);
  const typedInstanceRef = useRef<Typed | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const welcomeMessage = 'Welcome to Nimra Electricals';

  useEffect(() => {
    if (typedRef.current && activeIndex > 0) {
      typedRef.current.innerHTML = '';
      if (typedInstanceRef.current) {
        typedInstanceRef.current.destroy();
      }
      const instance = new Typed(typedRef.current, {
        strings: [slides[activeIndex].title],
        typeSpeed: 50,
        backSpeed: 0,
        loop: false,
        showCursor: true,
        cursorChar: '|',
        smartBackspace: false,
        onComplete: (self) => {
          if (typedRef.current) {
            typedRef.current.innerHTML = slides[activeIndex].title + '|';
          }
        },
      });
      typedInstanceRef.current = instance;
    }
  }, [activeIndex, slides]);

  useEffect(() => {
    return () => {
      if (typedInstanceRef.current) {
        typedInstanceRef.current.destroy();
        if (typedRef.current) typedRef.current.innerHTML = '';
      }
    };
  }, []);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <section
      className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] w-full overflow-hidden"
      role="banner"
      aria-label="Hero section"
    >
      <video
        className="video-background absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        onError={(e) => console.log('Video Error:', e)}
      >
        <source src={videoSrc} type="video/mp4" />
        <source src={videoSrc} type="video/webm" />
        <img
          src={slides[activeIndex].image || productImages[`slide${activeIndex + 1}` as keyof typeof productImages]}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => console.log('Fallback Image Error:', e)}
        />
      </video>
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        pagination={{ clickable: true, el: '.swiper-pagination' }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        className="relative h-full z-20"
        role="region"
        aria-label="Hero carousel"
        onSlideChange={handleSlideChange}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="container-full h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 z-50"
            >
              <div className="max-w-4xl mx-auto w-full bg-gray-900/80 p-6 rounded-lg shadow-lg z-60">
                <h1
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 md:mb-10 text-white animate-slide-up"
                  aria-live="polite"
                >
                  <span ref={typedRef} className="inline-block">
                    {index === 0 ? welcomeMessage : ''}
                  </span>
                </h1>
                <p
                  className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 md:mb-10 max-w-prose mx-auto text-gray-200 animate-fade-in"
                  style={{ animationDelay: '200ms' }}
                >
                  {slide.subtitle}
                </p>
                <Link
                  to={slide.ctaLink}
                  className="btn btn-primary text-sm sm:text-base md:text-lg px-6 sm:px-8 py-2 sm:py-3 md:py-4 animate-fade-in"
                  style={{ animationDelay: '400ms' }}
                  aria-label={slide.ctaText}
                >
                  {slide.ctaText}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination absolute bottom-16 sm:bottom-20 md:bottom-24 z-20"></div>
        <div className="swiper-button-prev hidden sm:block" aria-label="Previous slide"></div>
        <div className="swiper-button-next hidden sm:block" aria-label="Next slide"></div>
      </Swiper>
    </section>
  );
};

export default HeroSlider;