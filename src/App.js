import { useSelector } from "react-redux";
import { selectUser } from "./store/user/selector";
import { selectComments } from "./store/comments/selector";
import { selectPosts } from "./store/posts/selector";

function App() {
  const comments = useSelector(selectComments);
  const user = useSelector(selectUser);
  const posts = useSelector(selectPosts);

  console.log({ comments, user, posts });

  return <div className='App'>Hello world</div>;
}

export default App;
