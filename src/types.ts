import React from 'react';

// Represents a single link within a mega menu column.
export interface MegaMenuLink {
    name: string;
}

// Represents a single column in the mega menu, containing a title and a list of links.
export interface MegaMenuColumn {
    title: string;
    links: MegaMenuLink[];
}

// Represents a top-level navigation link. 
export interface NavLink {
    name: string;
    megaMenu?: MegaMenuColumn[];
}

export interface BlogPost {
    id: number;
    title: string;
    date: string;
    author: string;
    excerpt: string;
    content: string;
    imageUrl: string;
}

export interface TeamMember {
    name: string;
    role: string;
    imageUrl: string;
}

// This interface from services.ts will be used for the detail page
export interface ServiceDetails {
    title: string;
    description: string;
}

export interface Service {
    title: string;
    description: string;
}

export interface FormState {
    name: string;
    email: string;
    message: string;
}