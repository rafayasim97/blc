import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Understanding the UK's New Points-Based Immigration System",
        date: "10 July 2025",
        author: "Dr. Eleanor Vance",
        excerpt: "The UK's immigration landscape has shifted. Our latest article breaks down the points-based system, helping you understand the requirements for skilled workers, students, and other visa categories.",
        content: `
            <p>The United Kingdom's departure from the European Union has heralded the most significant shift in its immigration policy in decades. The new points-based system, which came into full effect after the transition period, applies to both EU and non-EU citizens, creating a level playing field for applicants from around the world.</p>
            <h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800">Key Pillars of the System</h3>
            <p>The core idea is that applicants must score a certain number of points to be eligible for a visa. Points are awarded for specific skills, qualifications, salaries, and occupations. A total of 70 points is typically required to be eligible to apply.</p>
            <ul class="list-disc list-inside space-y-2 mt-4 text-gray-600">
                <li><strong>Job Offer (20 points):</strong> You must have a job offer from a Home Office licensed sponsor.</li>
                <li><strong>Skill Level (20 points):</strong> The job must be at the required skill level (A-Level equivalent or above).</li>
                <li><strong>English Language (10 points):</strong> You must meet the required English language proficiency.</li>
            </ul>
            <p class="mt-4">The remaining 20 points are 'tradeable'. For example, a higher salary can compensate for a qualification in a shortage occupation, or having a PhD relevant to the job can also contribute points.</p>
            <h3 class="text-xl font-semibold mt-6 mb-2 text-gray-800">Implications for Businesses and Individuals</h3>
            <p>For businesses, this means becoming a licensed sponsor is more critical than ever to hire talent from overseas. For individuals, it requires a careful assessment of their qualifications and potential job offers against the scoring criteria. Our firm specializes in helping both sponsors and applicants navigate this complex process, ensuring all requirements are met for a successful application.</p>
        `,
        imageUrl: "https://placehold.co/800x400/0284c7/FFFFFF?text=UK+Immigration+System"
    },
    {
        id: 2,
        title: "The Global Talent Visa: A Pathway for Leaders",
        date: "28 June 2025",
        author: "James Holloway",
        excerpt: "Are you a leader or potential leader in academia, research, arts, or digital technology? The Global Talent Visa might be your route to the UK, without the need for a job offer.",
        content: `
            <p>The Global Talent Visa is one of the most flexible and attractive immigration routes for talented and promising individuals in specific sectors wishing to work in the UK. Unlike the Skilled Worker route, it does not require a job offer or sponsorship.</p>
            <h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800">Who is it for?</h3>
            <p>This route is open to leaders (exceptional talent) and potential leaders (exceptional promise) in:</p>
            <ul class="list-disc list-inside space-y-2 mt-4 text-gray-600">
                <li>Academia or research</li>
                <li>Arts and culture</li>
                <li>Digital technology</li>
            </ul>
            <p class="mt-4">To apply, you must first successfully apply for an endorsement from one of six Home Office-approved endorsing bodies that assesses your expertise. Once endorsed, you can proceed with the visa application itself.</p>
            <h3 class="text-xl font-semibold mt-6 mb-2 text-gray-800">Benefits of the Global Talent Visa</h3>
            <p>Successful applicants can work for an employer, be self-employed, or set up their own business. The visa can be granted for up to five years at a time, and it provides a pathway to settlement (indefinite leave to remain) in the UK. Our team has a proven track record in securing endorsements and visas for clients across all eligible fields.</p>
        `,
        imageUrl: "https://placehold.co/800x400/374151/FFFFFF?text=Global+Talent"
    },
];
