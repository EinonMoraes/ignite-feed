import { Trash,ThumbsUp } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from '../Avatar/Avatar';
import styles from './Comment.module.css';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment}: CommentProps) {
    const [likeCount,setLikeCount] = useState(0) 


    function handleDeleteComment() {
        onDeleteComment(content); 

    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        });

        console.log(setLikeCount)
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/VeronicaRG.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>VeronicaRG</strong>
                            <time title='11 de Maio as 08:13h' dateTime="2022-07-26 18:10:52">Cerca de 2h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar Comentário'>
                            <Trash size={24} />
                        </button>
                    </header> 

                    <p>{ content }</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={20} />&nbsp;
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>


        </div>
    )
}   