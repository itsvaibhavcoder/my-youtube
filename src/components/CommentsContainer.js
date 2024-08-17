import React from 'react';

const commentsData = [
    {
      name: "John Doe",
      text: "This video is amazing! I learned a lot.",
      replies: [
        {
          name: "Jane Smith",
          text: "I agree! The explanation was very clear.",
          replies: [],
        },
        {
          name: "Alice Johnson",
          text: "Could you provide more details on the topic discussed?",
          replies: [
            {
              name: "John Doe",
              text: "Sure, I’ll add more details in the next video.",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Michael Brown",
      text: "Interesting content, but I found a few errors.",
      replies: [
        {
          name: "Emily Davis",
          text: "Can you point out the errors you found?",
          replies: [
            {
              name: "Michael Brown",
              text: "There were some inaccuracies in the data presented.",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Sarah Lee",
      text: "I appreciate the effort you put into this.",
      replies: [],
    },
    {
      name: "Tom Wilson",
      text: "Great video! The examples were very helpful.",
      replies: [],
    },
    {
      name: "Linda Green",
      text: "I had a hard time understanding the last part.",
      replies: [
        {
          name: "Tom Wilson",
          text: "Which part was confusing? Maybe I can help clarify.",
          replies: [],
        },
      ],
    },
    {
      name: "Karen White",
      text: "Looking forward to more content like this!",
      replies: [],
    },
  ];


  const Comment = ({ data }) => {
    const { name, text, replies } = data;
    return (
      <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
        <img
          className="w-12 h-12"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
        <div className="px-3">
          <p className="font-bold">{name}</p>
          <p>{text}</p>
        </div>
      </div>
    );
  };

  const CommentsList = ({ comments }) => {
    // Disclaimer: Don't use indexes as keys
    return comments.map((comment, index) => (
      <div key={index}>
        <Comment data={comment} />
        <div className="pl-5 border border-l-black ml-5">
          <CommentsList comments={comment.replies} />
        </div>
      </div>
    ));
  };

  const CommentsContainer = () => {
    return (
      <div className="m-5 p-2">
        <h1 className="text-2xl font-bold">Comments: </h1>
        <CommentsList comments={commentsData} />
      </div>
    );
  };
  
export default CommentsContainer;
