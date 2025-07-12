import React from 'react';
import { blogPosts } from '../data/blogPosts';
import { ArrowRightIcon } from '../components/Icons';

interface BlogPageProps {
    viewPost: (postId: number) => void;
}

export function BlogPage({ viewPost }: BlogPageProps) {
    return (
        <div className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Legal Updates</h1>
                <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-16">
                    Stay informed with our latest articles, analysis, and updates on UK immigration law and policy.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {blogPosts.map(post => (
                        <div key={post.id} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden flex flex-col">
                            <img src={post.imageUrl} alt={post.title} className="w-full h-56 object-cover" />
                            <div className="p-6 flex-grow flex flex-col">
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h2>
                                <p className="text-sm text-gray-500 mb-4">{post.date} by {post.author}</p>
                                <p className="text-gray-600 mb-6 flex-grow">{post.excerpt}</p>
                                <button onClick={() => viewPost(post.id)} className="text-sky-600 hover:text-sky-700 font-semibold self-start">
                                    Read More <ArrowRightIcon className="inline w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
