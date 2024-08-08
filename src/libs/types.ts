// You can define interfaces for all React components here.
// Do not forget to export properly.

interface ReplyProps {
    userImagePath : string, 
    username : string, 
    replyText : string, 
    likeNum : number
}
export type { ReplyProps };

interface CommentProps {
    userImagePath : string, 
    username : string, 
    replyText : string, 
    likeNum : number
    replies : ReplyProps[]
}
export type { CommentProps };
