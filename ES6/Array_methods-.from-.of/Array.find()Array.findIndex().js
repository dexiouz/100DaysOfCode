const posts = [
  {
    "code": "asdfg",
    "caption": "Launch javascript",
    "likes": 45
  },
  {
    "code": "jklgf",
    "caption": "Check react and HTML",
    "likes": 67 
  }
]

const code = "jklgf"
const post = posts.find(post =>  post.code === code);
console.log(post)


const postIndex = posts.findIndex(post => post.code=== code);
console.log(postIndex);