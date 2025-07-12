export interface ServiceDetails {
    title: string;
    description: string;
}

export interface ServiceCategory {
    category: string;
    icon: string; // Using string for icon name to pass to a component
    description: string;
    subServices: ServiceDetails[];
}

export const servicesData: ServiceCategory[] = [
    {
        category: 'Personal Immigration',
        icon: 'UsersIcon',
        description: 'We provide expert guidance for individuals and families navigating the complexities of UK immigration. Whether you are looking to join a partner, work, study, or settle in the UK, our team is here to support you at every stage.',
        subServices: [
            { title: 'Spouse Visa', description: 'For partners of British or settled persons to enter or remain in the UK.' },
            { title: 'Fiancé(e) Visa', description: 'Allows you to enter the UK to marry or form a civil partnership.' },
            { title: 'Unmarried Partner Visa', description: 'For long-term partners of British or settled persons.' },
            { title: 'Parent of a British Child', description: 'For parents to live in the UK to care for their child.' },
            { title: 'Skilled Worker Visa', description: 'For individuals with a job offer from a licensed UK employer.' },
            { title: 'Global Talent Visa', description: 'For leaders in the fields of science, arts, and technology.' },
            { title: 'High Potential Individual', description: 'For recent graduates from top global universities.' },
            { title: 'Visitor Visa', description: 'For tourism, visiting family, or short-term business activities.' },
            { title: 'Student Visa', description: 'For individuals who wish to study at a UK educational institution.' },
            { title: 'Settlement / ILR', description: 'The path to permanent residency in the UK (Indefinite Leave to Remain).' },
            { title: 'British Citizenship', description: 'The final step to becoming a British citizen through naturalisation.' },
        ]
    },
    {
        category: 'Business Immigration',
        icon: 'BriefcaseIcon',
        description: 'Our firm offers comprehensive legal solutions for UK businesses looking to hire international talent and for entrepreneurs wishing to establish themselves in the UK market. We provide strategic advice on sponsor licensing, compliance, and business visas.',
        subServices: [
            { title: 'Sponsor License Application', description: 'Assisting UK businesses in obtaining a license to hire foreign workers.' },
            { title: 'Sponsor License Renewal', description: 'Guidance on renewing your existing sponsor license.' },
            { title: 'Compliance & Audits', description: 'Ensuring your business meets Home Office sponsorship duties.' },
            { title: 'Innovator Founder Visa', description: 'For entrepreneurs looking to set up an innovative business in the UK.' },
            { title: 'Scale-up Worker Visa', description: 'For talented individuals recruited by a fast-growing UK business.' },
            { title: 'Global Business Mobility', description: 'A new category of sponsored routes for overseas businesses.' },
        ]
    }
];
