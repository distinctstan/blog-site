import React from 'react'
import EditImg from '../images/edit.png'
import DeleteImg from '../images/delete.png'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://images.pexels.com/photos/13202632/pexels-photo-13202632.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/13202632/pexels-photo-13202632.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <div className="info">
            <span>John</span><br />
            <small>Posted 2 days ago</small>
          </div>
          <div className="action">
            <Link to="/create?edit=2">
              <img src={EditImg} alt="" />
            </Link>
            <img src={DeleteImg} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia assumenda eaque dolor beatae nam quo?</h1>
        <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. In at molestias nesciunt eligendi nostrum commodi perferendis ipsa reprehenderit placeat dolor! Quo amet harum vero repellendus ratione totam doloribus, explicabo dolorum?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. In at molestias nesciunt eligendi nostrum commodi perferendis ipsa reprehenderit placeat dolor! Quo amet harum vero repellendus ratione totam doloribus, explicabo dolorum?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. In at molestias nesciunt eligendi nostrum commodi perferendis ipsa reprehenderit placeat dolor! Quo amet harum vero repellendus ratione totam doloribus, explicabo dolorum?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. In at molestias nesciunt eligendi nostrum commodi perferendis ipsa reprehenderit placeat dolor! Quo amet harum vero repellendus ratione totam doloribus, explicabo dolorum?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. In at molestias nesciunt eligendi nostrum commodi perferendis ipsa reprehenderit placeat dolor! Quo amet harum vero repellendus ratione totam doloribus, explicabo dolorum?
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In at molestias nesciunt eligendi nostrum commodi perferendis ipsa reprehenderit placeat dolor! Quo amet harum vero repellendus ratione totam doloribus, explicabo dolorum?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. In at molestias nesciunt eligendi nostrum commodi perferendis ipsa reprehenderit placeat dolor! Quo amet harum vero repellendus ratione totam doloribus, explicabo dolorum?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. In at molestias nesciunt eligendi nostrum commodi perferendis ipsa reprehenderit placeat dolor! Quo amet harum vero repellendus ratione totam doloribus, explicabo dolorum?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. In at molestias nesciunt eligendi nostrum commodi perferendis ipsa reprehenderit placeat dolor! Quo amet harum vero repellendus ratione totam doloribus, explicabo dolorum?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. In at molestias nesciunt eligendi nostrum commodi perferendis ipsa reprehenderit placeat dolor! Quo amet harum vero repellendus ratione totam doloribus, explicabo dolorum?</p>
        </p>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  )
}

export default Single