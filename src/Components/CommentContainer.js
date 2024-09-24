import React from "react";

const commentData = [
  {
    name: "Chinmaya Nimalpuri",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, iure.",
    replies: [],
  },
  {
    name: "Chinmaya Nimalpuri",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, iure.",
    replies: [
      {
        name: "Chinmaya Nimalpuri",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, iure.",
        replies: [
          {
            name: "Chinmaya Nimalpuri",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, iure.",
            replies: [
              {
                name: "Chinmaya Nimalpuri",
                text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, iure.",
                replies: [],
              },
              {
                name: "Chinmaya Nimalpuri",
                text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, iure.",
                replies: [
                  {
                    name: "Chinmaya Nimalpuri",
                    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, iure.",
                    replies: [],
                  },
                  {
                    name: "Chinmaya Nimalpuri",
                    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, iure.",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Chinmaya Nimalpuri",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, iure.",
        replies: [],
      },
    ],
  },
  {
    name: "Chinmaya Nimalpuri",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, iure.",
    replies: [],
  },
  {
    name: "Chinmaya Nimalpuri",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, iure.",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text} = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-md my-2">
      <img
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="user"
        className="w-12 h-12"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({Comments}) => {

    //Disclamir : Dont use indexes as keys
  return Comments.map((i,index) => (
    <div key={index}>
        <Comment data={i} key={index}/>
        <div className="pl-5 border border-l-blue-50 ml-5">
            <CommentsList Comments={i.replies} />
        </div>
    </div>
  ))
};
const CommentContainer = () => {
  return (
    <div className="m-5 p-2 lg:h-full sm:h-[15rem] sm:border sm:border-green-800 md:h-[5rem] sm:overflow-auto">
      <h1 className="text-2xl font-bold">Comments :</h1>
      {/* <Comment data={commentData[0]} /> */}
      <CommentsList Comments={commentData} />
    </div>
  );
};

export default CommentContainer;
