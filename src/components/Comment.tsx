"use client";
import { CommentProps } from "@/libs/types";
import { ReplyProps } from "@/libs/types";
export default function comment({
  userImagePath, 
  username, 
  replyText, 
  likeNum,
  replies }:CommentProps){
  return (
    <div>
      your code for Comment component here ...
      {/* You can use map-loop to render Reply component here */}
    </div>
  );
}
