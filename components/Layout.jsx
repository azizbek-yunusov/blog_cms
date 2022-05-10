import React from 'react';
import { Header } from '.';
import FeaturedPosts from '../sections/FeaturedPosts';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <FeaturedPosts />
      {children}
    </div>
  )
}
export default Layout;