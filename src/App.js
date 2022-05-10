import { useSelector } from "react-redux";
import {
  selectSavedPosts,
  selectUser,
  selectUserPosts,
} from "./store/user/selector";
import { selectComments } from "./store/comments/selector";
import { selectPosts } from "./store/posts/selector";
import { user } from "./store/user/slice";

function App() {
  // const comments = useSelector(selectComments);
  // const user = useSelector(selectUser);
  // const posts = useSelector(selectPosts);

  const userPosts = useSelector(selectUserPosts);

  const savedPosts = useSelector(selectSavedPosts);

  console.log({ savedPosts });

  return (
    <div className='App'>
      <div>
        <h1>Welcome {userPosts.name}</h1>
        <h2>Upvoted</h2>
        {userPosts.posts.upvoted.map((upvote) => (
          <div>
            <p>{upvote.title}</p>
            <p>{upvote.body}</p>
          </div>
        ))}
        <h2>Downvoted</h2>
        {userPosts.posts.downvoted.map((upvote) => (
          <div>
            <p>{upvote.title}</p>
            <p>{upvote.body}</p>
          </div>
        ))}
        <h2>Saved</h2>
        {userPosts.posts.saved.map((upvote) => (
          <div>
            <p>{upvote.title}</p>
            <p>{upvote.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
