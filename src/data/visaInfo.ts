export interface VisaInfo {
    id: string;
    title: string;
    description: string;
    eligibility: string[];
    applicationProcess: string;
    familyMembers?: string;
}

export const visaInfoData: VisaInfo[] = [
    {
        id: 'Student Visa',
        title: 'Student Visa',
        description: "The Student Visa is for individuals who wish to study at a UK educational institution.",
        eligibility: [
            "You must have an unconditional offer of a place on a course with a licensed student sponsor.",
            "You must have enough money to support yourself and pay for your course - the amount will vary depending on your circumstances.",
            "You must be able to speak, read, write, and understand English.",
            "You must have consent from your parents if you're 16 or 17."
        ],
        applicationProcess: "The application is made online and requires a Confirmation of Acceptance for Studies (CAS) from your course provider, as well as financial and identity documents.",
    },
    {
        id: 'Skilled Worker Visa',
        title: 'Skilled Worker Visa',
        description: "The Skilled Worker visa allows you to come to or stay in the UK to do an eligible job with an approved employer. This visa has replaced the Tier 2 (General) work visa.",
        eligibility: [
            "Have a confirmed job offer from a Home Office licensed sponsor.",
            "The job must be on the list of eligible occupations.",
            "The job must be at a minimum skill level of RQF Level 3 (equivalent to A-levels).",
            "Meet the minimum salary requirement, which is typically £38,700 per year or the 'going rate' for the specific occupation, whichever is higher.",
            "Score 70 points on the points-based system, which includes points for sponsorship, skill level, and English language proficiency (CEFR Level B1)."
        ],
        applicationProcess: "The application is typically done online. You will need to provide your Certificate of Sponsorship (CoS), proof of your knowledge of English, a valid passport, and evidence that you can support yourself financially.",
        familyMembers: "Your partner and children can apply to join you in the UK as your 'dependants' if they are eligible."
    },
    {
        id: 'Spouse Visa',
        title: 'Spouse Visa',
        description: "The Spouse Visa allows you to join your partner in the UK if they are a British citizen, settled in the UK, or have refugee status or humanitarian protection.",
        eligibility: [
            "You and your partner must be 18 or over.",
            "Your relationship must be genuine and you must intend to live together permanently.",
            "You must meet the financial requirement of a combined income of at least £29,000.",
            "You must meet the English language requirement."
        ],
        applicationProcess: "Applications are made online and require extensive documentation to prove your relationship, financial stability, and English language ability.",
        familyMembers: "This visa is for the partner, but dependent children can also be included in the application."
    },
    {
        id: 'Fiancé(e) Visa',
        title: 'Fiancé(e) Visa',
        description: "The Fiancé(e) Visa allows you to enter the UK to marry or form a civil partnership with your British or settled partner within 6 months.",
        eligibility: [
            "You and your partner must be at least 18 years old.",
            "You must intend to marry or form a civil partnership within 6 months of your arrival in the UK.",
            "Your relationship must be genuine and you must intend to live together permanently after marriage.",
            "You must meet the financial requirement of £29,000.",
            "You must meet the English language requirement at a minimum of A1 level on the CEFR scale."
        ],
        applicationProcess: "The application is made online from outside the UK. After marrying, you must apply to switch to a Spouse Visa to remain in the UK.",
    },
    {
        id: 'Unmarried Partner Visa',
        title: 'Unmarried Partner Visa',
        description: "This visa allows you to join your partner in the UK if you have been living together in a relationship akin to marriage for at least two years.",
        eligibility: [
            "You and your partner must be 18 or over.",
            "You must have been living together in a relationship for at least 2 years.",
            "Your relationship must be genuine and subsisting.",
            "You must meet the financial and English language requirements, similar to the Spouse Visa."
        ],
        applicationProcess: "The application is made online and requires significant evidence of your cohabitation and relationship.",
    },
    {
        id: 'Parent of a British Child',
        title: 'Parent of a British Child',
        description: "This route is for a parent who has sole or shared parental responsibility for a child who is a British citizen.",
        eligibility: [
            "The child must be under 18 and living in the UK.",
            "You must have either sole or shared parental responsibility for the child.",
            "If responsibility is shared, the other parent must not be your partner.",
            "You must be able to prove you are taking an active role in the child's upbringing.",
            "You must be able to adequately maintain and accommodate yourself and any dependants without recourse to public funds."
        ],
        applicationProcess: "Applications are made online and require strong evidence of your relationship with the child and your role in their life.",
    },
    {
        id: 'Global Talent Visa',
        title: 'Global Talent Visa',
        description: "For leaders or potential leaders in academia, research, arts and culture, or digital technology who wish to work in the UK.",
        eligibility: [
            "You must be a leader (exceptional talent) or a potential leader (exceptional promise) in your field.",
            "You must be endorsed by an approved endorsing body.",
            "Unlike the Skilled Worker route, you do not need a job offer."
        ],
        applicationProcess: "This is a two-stage process: first, you must apply for and obtain an endorsement, then you can apply for the visa itself.",
        familyMembers: "Your partner and children can apply as your dependants."
    },
    {
        id: 'High Potential Individual',
        title: 'High Potential Individual',
        description: "This route is for recent graduates from top global universities who want to work, or look for work, in the UK.",
        eligibility: [
            "You must have been awarded a qualification from an eligible overseas university in the last 5 years.",
            "Your qualification must be confirmed by Ecctis (formerly UK NARIC) as equivalent to a UK bachelor's degree, master's degree, or PhD.",
            "You must meet the English language requirement and a financial requirement of £1,270 in savings."
        ],
        applicationProcess: "This is an unsponsored route, meaning you do not need a job offer to apply. The visa is granted for 2 years (or 3 for PhD graduates) and cannot be extended, but you may be able to switch to another visa category.",
    },
    {
        id: 'Visitor Visa',
        title: 'Visitor Visa',
        description: "For individuals who want to visit the UK for tourism, to see family and friends, or for short-term business activities.",
        eligibility: [
            "You must show that you'll leave the UK at the end of your visit.",
            "You must be able to support yourself and any dependents during your trip.",
            "You must be able to pay for your return or onward journey.",
            "You must not intend to live in the UK for extended periods through frequent or successive visits, or make the UK your main home."
        ],
        applicationProcess: "Applications are typically made online before you travel. You will need to provide your travel history, financial details, and information about your visit.",
    },
    {
        id: 'Settlement / ILR',
        title: 'Settlement / ILR',
        description: "Indefinite Leave to Remain (ILR) allows you to live, work, and study in the UK for as long as you like, and apply for benefits if you're eligible. It is the first step towards British Citizenship.",
        eligibility: [
            "You must have spent a qualifying period of continuous residence in the UK (typically 5 years on most routes, but can vary).",
            "You must not have been absent from the UK for more than 180 days in any 12-month period during the qualifying period.",
            "You must pass the Life in the UK Test.",
            "You must meet the English language requirements (typically at CEFR Level B1)."
        ],
        applicationProcess: "The application is made online and requires detailed evidence of your UK residence and compliance with visa conditions.",
    },
    {
        id: 'British Citizenship',
        title: 'British Citizenship',
        description: "Naturalisation is the legal process by which a non-British adult becomes a British citizen.",
        eligibility: [
            "You must hold Indefinite Leave to Remain (ILR) or another form of settled status.",
            "You must have lived in the UK for a specific period (usually 5 years, or 3 if married to a British citizen).",
            "You must meet the residency requirements, including limits on absences from the UK.",
            "You must pass the Life in the UK Test and prove your knowledge of English.",
            "You must be of 'good character'."
        ],
        applicationProcess: "Applications are made online and require referees to confirm your identity. If successful, you must attend a citizenship ceremony.",
    },
    {
        id: 'Sponsor License Application',
        title: 'Sponsor License Application',
        description: "A sponsor licence allows UK businesses to employ foreign workers through routes such as the Skilled Worker and Global Business Mobility visas.",
        eligibility: [
            "Your business must be a genuine organisation operating lawfully in the UK.",
            "You must have appropriate HR systems in place to meet your sponsorship duties.",
            "You must not have any unspent criminal convictions for immigration offences or certain other crimes.",
            "You must appoint key personnel to manage the sponsorship process."
        ],
        applicationProcess: "The application is made online and requires a portfolio of supporting documents to prove your business's legitimacy and capability to act as a sponsor. The Home Office may conduct a compliance visit before or after granting the licence.",
    },
    {
        id: 'Sponsor License Renewal',
        title: 'Sponsor License Renewal',
        description: "As of April 2024, the requirement for most sponsors to renew their licence every four years has been removed. Licences are now automatically extended for ten years.",
        eligibility: [
            "This change applies automatically to most Worker and Temporary Worker licences.",
            "Sponsors must continue to comply with all their duties and responsibilities.",
            "Some routes, like the Scale-up route, have different rules and may not be renewable after their initial four-year period."
        ],
        applicationProcess: "No action is typically required for the ten-year extension. However, it is crucial to remain compliant with Home Office rules, as licences can be downgraded or revoked at any time following a compliance audit.",
    },
    {
        id: 'Compliance & Audits',
        title: 'Compliance & Audits',
        description: "Holding a sponsor licence comes with significant responsibilities. We provide guidance to ensure your business meets all Home Office sponsorship duties and is prepared for any compliance audits.",
        eligibility: [
            "Maintain accurate records for each sponsored worker, including right-to-work checks, contact details, and attendance monitoring.",
            "Report any significant changes in a sponsored worker's circumstances to the Home Office within specified timeframes.",
            "Report significant changes to your own business, such as a change of address or a merger.",
            "Cooperate fully with any Home Office compliance visit, which can be announced or unannounced."
        ],
        applicationProcess: "Compliance is an ongoing process. We offer audit services to identify and rectify any potential issues before they lead to sanctions, such as the downgrading, suspension, or revocation of your licence.",
    },
    {
        id: 'Innovator Founder Visa',
        title: 'Innovator Founder Visa',
        description: "For entrepreneurs who want to set up and run an innovative business in the UK. The business idea must be new, innovative, viable, and scalable.",
        eligibility: [
            "Your business or business idea must be endorsed by an approved endorsing body.",
            "You must be at least 18 years old.",
            "You must meet the English language requirement.",
            "You must have enough personal savings to support yourself while you set up your business."
        ],
        applicationProcess: "This is a two-stage process involving getting an endorsement and then applying for the visa. You must have regular meetings with your endorsing body to show progress.",
        familyMembers: "You can bring your partner and children as dependants."
    },
    {
        id: 'Scale-up Worker Visa',
        title: 'Scale-up Worker Visa',
        description: "This visa is for talented individuals recruited by a fast-growing UK business (a 'scale-up'). It offers a flexible route to work in the UK.",
        eligibility: [
            "You must have a sponsored job offer from an authorised UK scale-up company for at least 6 months.",
            "The job must be at a graduate skill level (RQF 6).",
            "The salary must be at least £36,300 per year or the 'going rate' for the occupation, whichever is higher.",
            "After the initial 6-month sponsored period, you can take on other work without sponsorship."
        ],
        applicationProcess: "You need a Certificate of Sponsorship from a licensed Scale-up sponsor for your initial application. The visa is granted for an initial period of 2 years.",
    },
    {
        id: 'Global Business Mobility',
        title: 'Global Business Mobility',
        description: "This category consists of five routes for overseas businesses to transfer staff to the UK for specific purposes.",
        eligibility: [
            "Senior or Specialist Worker: For senior managers or specialist employees being transferred to a UK branch of their employer.",
            "Graduate Trainee: For workers on a graduate training programme.",
            "UK Expansion Worker: For senior or specialist employees to set up a commercial presence in the UK.",
            "Service Supplier: For contractual service suppliers employed by an overseas business, or self-employed independent professionals based overseas, to undertake a temporary assignment in the UK.",
            "Secondment Worker: For workers being seconded to the UK as part of a high-value contract or investment by their overseas employer."
        ],
        applicationProcess: "All routes require sponsorship from a UK business that is licensed by the Home Office. The specific requirements for salary, skill level, and length of employment vary by route. This visa does not lead directly to settlement.",
    }
];