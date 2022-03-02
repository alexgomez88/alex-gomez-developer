import React from 'react'
import BaseNavbar from '../../atoms/base-navbar';

export default function Navbar(props: any) {
  return <BaseNavbar navbar-menu={props.menu} />;
}