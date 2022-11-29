import React from 'react'

export const Footer = () => {
  let footerStyle={
    position:"relative",
    top:"60vh",
    width: "100%",
    backgroundColor:"pink"
  }
  return (
    <footer className='bg -dark  text-light py-2' style={footerStyle}>
      <p className='text-center'>
      Copyright &copy; MyTodosLIst.com
      </p>
    </footer>
  )
}

