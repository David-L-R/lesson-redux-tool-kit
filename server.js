const posts = require("./src/store/posts/posts.json");
const fs = require("fs");

const categories = ["travel", "business", "family", "DIY", "sports"];

const newPosts = posts.map((post) => {
  return {
    ...post,
    category: categories[Math.floor(Math.random() * categories.length)],
  };
});

fs.writeFile("./posts.json", JSON.stringify(newPosts), (err) => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});
