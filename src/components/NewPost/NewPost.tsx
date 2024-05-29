import React, { useEffect, useState } from "react"
import { Post } from "../Post/Post";
import { NewPostBtt, ContentPost, PublishBtt, PostsWrapper } from "./styles";

type Comment = {
    id: number; 
    author: { 
        name: string | null;
        avatarUrl: string | null;
        role: string; 
    }; 
    content: { 
        type: string; 
        content: string; 
    }[]; 
    publishedAt: Date;
};

export function NewPost() {
    const [comments, setComments] = useState<Comment[]>([]);
    const [newComment, setNewComment] = useState<string>('');
    const [showCommentField, setShowCommentField] = useState<boolean>(false);
    const photo = localStorage.getItem('photo');
    const name = localStorage.getItem('name');
    useEffect(() => {
        // Carregar comentários do localStorage quando o componente for montado
        const savedComments = localStorage.getItem('comments');
        if (savedComments) {
          setComments(JSON.parse(savedComments));
        }
    }, []);

    useEffect(() => {
        // Salvar comentários no localStorage sempre que a lista de comentários for alterada
        localStorage.setItem('comments', JSON.stringify(comments));
    }, [comments]);

    const [nextId, setNextId] = useState<number>(() => {
        const savedNextId = localStorage.getItem('nextId');
        return savedNextId ? Number(savedNextId) : 1;
    });

    const handleAddComment = () => {
        if (newComment.trim() !== '') {
          const newCommentObj : Comment = {
            id: nextId, // Usando timestamp como ID
            author: {
                avatarUrl: photo,
                name: name,
                role: 'Usuario'
            },
            content: [
                {type: 'paragraph', content: newComment}
            ],
            publishedAt: new Date(), // Usando timestamp como data de publicação
          };
          setComments([...comments, newCommentObj]);
          setNewComment('');
          setShowCommentField(false);
          setNextId(nextId + 1); // Incrementa o próximo ID
          localStorage.setItem('nextId', (nextId + 1).toString());
        }
    };

    

    return (
        <>
            <header>
                <NewPostBtt onClick={() => setShowCommentField(!showCommentField)}>
                    {showCommentField ? 'Cancelar' : 'Comentar'}
                </NewPostBtt>
            </header>
            <div>
                {showCommentField && (
                    <div>
                    <ContentPost
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Digite seu comentário"
                    />
                    <PublishBtt onClick={handleAddComment}>Enviar</PublishBtt>
                    </div>
                )}
                <PostsWrapper>
                {comments.map((post) => {
                    return (
                    <Post
                        key={post.id}
                        author={post.author}
                        publishedAt={post.publishedAt}
                        content={post.content}
                    />
                    )
                })}
                </PostsWrapper>
            </div>
        </>
    )
}