export interface Testimonial {
    name: string;
    role: string;
    title: string;
    text: string;
    rating: number; // A number from 1 to 5
    imageUrl: string;
}

export const testimonials: Testimonial[] = [
    {
        name: 'Ahmad Shah',
        role: 'CEO',
        title: 'Happy',
        text: "I'm happy that BLC UK was able to assist my mum in getting a tourist visa. This was in spite of two prior rejections from other agencies! I am grateful for Mr. Akhtar's team's assistance and wise counsel! They come highly recommended to anyone having similar issues obtaining UK visas!",
        rating: 5,
        imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500',
    },
    {
        name: 'Hassan Khan',
        role: 'Nurse',
        title: 'Thank you',
        text: "Absolutely fantastic! Numerous other immigration attorneys informed us that we couldn't submit our application. We appreciate BLC's assistance with our kids' citizenship application. You succeeded in doing the unthinkable. We couldn't be happier to have gotten their citizenship in less than three months. From the Khan Family, thank you",
        rating: 5,
        imageUrl: 'https://images.unsplash.com/photo-1622253692010-33352da55e0d?w=500',
    },
    {
        name: 'Haniya Tasnim',
        role: 'Finance Assistant',
        title: '5 stars',
        text: "Akhtar is very reliable. I had some issue about a sponsorship visa and BLC not only solved my problem in short time, but they also supported me emotively. 5 stars!",
        rating: 5,
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500',
    },
    {
        name: 'Nader Farahani',
        role: 'Web Developer',
        title: 'Impressed!',
        text: "My initial experience with BLC was excellent, and Akhtar Gondall served as our attorney. Akhtar was a terrific communicator, well-organized, and highly attentive. Overall, I am quite pleased with their service and strongly recommend it.",
        rating: 5,
        imageUrl: 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=500',
    },
];