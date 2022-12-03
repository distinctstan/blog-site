import React from 'react'

const Menu = () => {
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
    <div className='menu'>
        <h1>Other posts you may like</h1>
        {
          posts.map(post => (
            <div className="post" key={post.id}>
              <img src={post.img} alt="" />
              <h2>{post.title}</h2>
              <button>Read More</button>
            </div>
          ))
        }
    </div>
  )
}

export default Menu