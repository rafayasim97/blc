import React from 'react';

/**
 * Represents a single link within a mega menu column.
 */
export interface MegaMenuLink {
    name: string;
}

/**
 * Represents a single column in the mega menu, containing a title and a list of links.
 */
export interface MegaMenuColumn {
    title: string;
    links: MegaMenuLink[];
}

/**
 * Represents a top-level navigation link. 
 * It can either be a simple link or contain a multi-column mega menu.
 */
export interface NavLink {
    name: string;
    megaMenu?: MegaMenuColumn[]; // Used for dropdowns with multiple columns
}

// --- Existing Types (can be kept for other parts of the app) ---

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

export interface Service {
    title: string;
    description: string;
}

export interface FormState {
    name: string;
    email: string;
    message: string;
}
