import { Space, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <div className="footer">
          <Typography.Title level={3} style={{ color: 'white', textAlign: 'center' }}>
            UptoDate-Crypto <br />
            <span style={{ fontSize: '0.8rem' }}>All rights reserved</span>
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
          </Space>
        </div> 
    </div>
  )
}

export default Footer