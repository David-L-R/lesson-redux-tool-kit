export const selectUser = (reduxState) => reduxState.user;

// fetch the user
// fetch posts that the user upvote, downvote and saved

export const selectUserPosts = (reduxState) => {
  const { user, posts } = reduxState;

  const upvoted = user.posts.upvoted.map((upvote) =>
    posts.find((post) => post.id === upvote)
  );

  const downvoted = user.posts.downvoted.map((downvote) =>
    posts.find((post) => post.id === downvote)
  );

  const saved = user.posts.saved.map((save) =>
    posts.find((post) => post.id === save)
  );

  return {
    ...user,
    posts: {
      upvoted,
      downvoted,
      saved,
    },
  };
};

export const selectSavedPosts = (reduxState) => {
  const { user, posts } = reduxState;

  const saved = user.posts.saved.map((save) =>
    posts.find((post) => post.id === save)
  );

  return saved;
};
