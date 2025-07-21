import React from 'react';
import Slider from 'react-slick';
import { TestimonialCard } from './TestimonialCard';
import { testimonials } from '../data/testimonials';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export function TestimonialCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="w-full">
            <Slider {...settings}>
                {testimonials.map(testimonial => (
                    <div key={testimonial.name} className="px-4">
                        <TestimonialCard {...testimonial} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}