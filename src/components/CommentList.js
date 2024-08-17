import React from 'react';

const Comments = ({ comments }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      {comments.items.length > 0 ? (
        <ul>
          {comments.items.map((commentItem) => {
            const {
              textDisplay,
              authorDisplayName,
              authorProfileImageUrl
            } = commentItem.snippet.topLevelComment.snippet;

            return (
              <li
                key={commentItem.id}
                className="flex items-start p-4 mb-2 border border-gray-300 rounded-md bg-gray-100"
              >
                <img
                  src={authorProfileImageUrl}
                  alt={authorDisplayName}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">{authorDisplayName}</p>
                  <p>{textDisplay}</p>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No comments yet.</p>
      )}
    </div>
  );
};

export default Comments;
