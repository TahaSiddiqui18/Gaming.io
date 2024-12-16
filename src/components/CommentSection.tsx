"use client"
import React, { useState } from 'react'
import { Card, CardContent } from './ui/card';
import { Input } from'./ui/input'
import { Button } from './ui/button'

interface Comment {
    id: string;
    author: string;
    text: string;
}

interface CommentSectionProps {
    postId: string;
}

export default function CommentSection({ postId }: CommentSectionProps) {
    const [comments, setComments] = useState<Comment[]>([]);
    const [newComment, setNewComment] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [editingCommentId, setEditingCommentId] = useState<string | null>(null);

    const handleAddComment = () => {
        if (newComment.trim() && authorName.trim()) {
            const newCommentObj = {
                id: new Date().toISOString(),
                author: authorName,
                text: newComment,
            };
            console.log(`Adding comment to post: ${postId}`, newCommentObj);
            setComments([...comments, newCommentObj]);
            setNewComment('');
            setAuthorName('');
        }
    };

    const handleEditComment = (commentID: string) => {
        const commentToEdit = comments.find((comment) => comment.id === commentID);
        if (commentToEdit) {
            setNewComment(commentToEdit.text);
            setAuthorName(commentToEdit.author);
            setEditingCommentId(commentID);
        }
    };

    const handleSaveEditedComment = () => {
        if (newComment.trim() && authorName.trim() && editingCommentId) {
            const updatedComments = comments.map((comments) =>
                comments.id === editingCommentId
                    ? { ...comments, text: newComment, author: authorName }
                    : comments
            );

            setComments(updatedComments);
            setNewComment('');
            setAuthorName('');
            setEditingCommentId(null);
        }
    };
    return (
        <div className="container mt-8 p-2">
            <h2 className="text-2xl font-semibold">Comments</h2>
            <div className="mt-4 space-y-4">
                {comments.length > 0 ? (
                    comments.map((comment) => (
                        <Card key={comment.id}>
                            <CardContent className="p-4">
                                <div className="font-semibold">{comment.author}</div>
                                <p>{comment.text}</p>
                                <Button
                                    onClick={() => handleEditComment(comment.id)}
                                    className="mt-2 text-blue-500"
                                >
                                    Edit
                                </Button>
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <p className='text-slate-400'>No comments yet.</p>
                )}
            </div>
            <div className="mt-6">
                <Input type='text' value={authorName} onChange={(e) => setAuthorName(e.target.value)} placeholder='Your Name' className='w-full mb-2' />
                <Input type='text' value={newComment} onChange={(e) => setNewComment(e.target.value)} placeholder='Add a Comment' className='w-full mb-2' />
                <Button
                    onClick={editingCommentId ? handleSaveEditedComment : handleAddComment}
                    className="mt-4"
                >
                    {editingCommentId ? "Save" : "Submit"}
                </Button>
            </div>
        </div>

    );
}