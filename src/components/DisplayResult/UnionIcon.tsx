import React from 'react'

export type UnionIconProps = {
    label: string
}

export default function UnionIcon(props: UnionIconProps) {
  return (
    <svg width="96" height="25" viewBox="0 0 96 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Union" d="M5.05176 1.39111C2.84259 1.39111 1.05176 3.18195 1.05176 5.39111V20.4121C1.05176 22.6213 2.84259 24.4121 5.05176 24.4121H86.3428C88.5519 24.4121 90.3428 22.6213 90.3428 20.4121V16.1707L95.317 13.1232C95.4123 13.0643 95.4658 12.9846 95.4658 12.9016C95.4658 12.8185 95.4123 12.7388 95.317 12.6798L90.3428 9.63232V5.39111C90.3428 3.18195 88.5519 1.39111 86.3428 1.39111H5.05176Z" stroke="#7786D2"/>
<rect x="0" y="0" width="96" height="25"/>
<text x="50%" y="50%" fontSize="12px" dominant-baseline="middle" alignment-baseline="middle" text-anchor="middle" fill="#7786D2">{props.label}</text>    
</svg>
  )
}