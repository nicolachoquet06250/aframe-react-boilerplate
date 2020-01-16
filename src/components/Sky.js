import {Entity} from 'aframe-react'
import React from 'react'

export default function Sky(props) {
    const color = props.color || '#73CFF0';
    return (
        <Entity geometry={{primitive: 'sphere', radius: 5000}}
                material={{color, shader: 'flat'}}
                scale="1 1 -1"/>
    );
}