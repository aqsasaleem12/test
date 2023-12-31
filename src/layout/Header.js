import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="bg-[#1a1630]">
    <div className="lg:max-w-7xl mx-auto ">
        <div className="flex justify-between items-center py-4">
            {/* logo */}
            <div>
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/ALphapaper%201.png" />
            </div>

            {/* menu */}
            <div className='w-full max-w-[1200px]'>
                <ul className="flex  justify-evenly  w-full text-white text-base">
                    <Link to="/">
                        <li>Get Endpoint  by All</li>
                    </Link>
                 
                    <Link to="/endpointbyid">
                        <li>Get EndPoint by ID</li>
                    </Link>
                    <Link to="/Pagenation">
                        <li>Pagination</li>
                    </Link>
                    <Link to="/signup">
                        <li>Sign Up</li>
                    </Link>
                    <Link to="/update">
                        <li>Get EndPoint by Update</li>
                    </Link>
                    {/* <Link to="/Deleteendpoint">
                        <li>Get EndPoint by Delete</li>
                    </Link> */}
                    
                </ul>
            </div>
        </div>
    </div>
</div>
  )
}

export default Header
