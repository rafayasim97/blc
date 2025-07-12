import React from 'react';
import { BlogPost } from '../types';

interface BlogPostPageProps {
    post?: BlogPost;
    navigateTo: (page: string) => void;
}

export function BlogPostPage({ post, navigateTo }: BlogPostPageProps) {
    if (!post) {
        return (
            <div className="py-20 text-center">
                <p>Post not found.</p>
                <button onClick={() => navigateTo('Blog')} className="text-sky-600 hover:text-sky-700 mt-4">Back to Blog</button>
            </div>
        );
    }
    return (
        <div className="py-20 bg-white">
            <div className="container mx-auto px-6 max-w-4xl">
                <button onClick={() => navigateTo('Blog')} className="text-sky-600 hover:text-sky-700 font-semibold mb-8">
                    &larr; Back to All Posts
                </button>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">{post.title}</h1>
                <p className="text-gray-500 mb-6">{post.date} by {post.author}</p>
                <img src={post.imageUrl} alt={post.title} className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg mb-8" />
                <div className="prose lg:prose-xl max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: post.content }}></div>
            </div>
        </div>
    );
}
