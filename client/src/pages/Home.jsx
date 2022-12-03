import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor, sit .",
      desc:  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste odit nam obcaecati sit perspiciatis quisquam, esse fugiat? Eos dolor cum placeat aliquid odit, ullam dicta error, molestias natus, facere cupiditate.",
      img: "https://images.pexels.com/photos/13202632/pexels-photo-13202632.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      title: "Lorem ipsum dolor, sit.",
      desc:  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste odit nam obcaecati sit perspiciatis quisquam, esse fugiat? Eos dolor cum placeat aliquid odit, ullam dicta error, molestias natus, facere cupiditate.",
      img: "https://images.pexels.com/photos/13202632/pexels-photo-13202632.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      title: "Lorem ipsum dolor,.",
      desc:  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste odit nam obcaecati sit perspiciatis quisquam, esse fugiat? Eos dolor cum placeat aliquid odit, ullam dicta error, molestias natus, facere cupiditate.",
      img: "https://images.pexels.com/photos/13202632/pexels-photo-13202632.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 4,
      title: "Lorem ipsum dolor, sit.",
      desc:  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste odit nam obcaecati sit perspiciatis quisquam, esse fugiat? Eos dolor cum placeat aliquid odit, ullam dicta error, molestias natus, facere cupiditate.",
      img: "https://images.pexels.com/photos/13202632/pexels-photo-13202632.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 5,
      title: "Lorem ipsum dolor.",
      desc:  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste odit nam obcaecati sit perspiciatis quisquam, esse fugiat? Eos dolor cum placeat aliquid odit, ullam dicta error, molestias natus, facere cupiditate.",
      img: "https://images.pexels.com/photos/13202632/pexels-photo-13202632.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ]

  return (
    <div className='home'>
      <div className="posts">
        {posts.map(post => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
                <p>{post.desc}</p>
              </Link>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home