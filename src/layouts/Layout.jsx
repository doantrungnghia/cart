import React from 'react'
import Header from '../components/Header'
import BannerSlider from '../components/BannerSlider'

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Header />
      <BannerSlider />
      {children}
    </React.Fragment>
  )
}
