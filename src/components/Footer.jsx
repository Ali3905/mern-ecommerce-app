import React from 'react'

const Footer = () => {
  return (
    <div className='footer_container'>
      <div>
        <h5>Category</h5>
        <ul>
            <li>Mobiles</li>
            <li>Watches</li>
            <li>Clothes</li>
            <li>MakeUp</li>
        </ul>
      </div>
      <div>
        <h5>Useful Links</h5>
        <ul>
            <li>Terms</li>
            <li>Policy</li>
            <li>About Us</li>
            <li>Mission</li>
        </ul>
      </div>
      <div>
        <h5>Get Updates</h5>
        <input type="email" /><button>Subscribe</button>
      </div>
    </div>
  )
}

export default Footer
