import React from 'react'
import BaseNavbar from '../../atoms/base-navbar';

type Props = {
  menu?: any[]
}

export default function Navbar(props: Props) {
  return <BaseNavbar menu={props.menu} />;
}