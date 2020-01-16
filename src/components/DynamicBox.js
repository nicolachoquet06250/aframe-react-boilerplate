import React from "react";
import {Entity} from "aframe-react";

export default function DynamicBox(props) {
    let id = props.id || '';
    let children = props.children || '';
    let material = props.material || {};
    let size = props.size || {};
    let width = size.width || 1;
    let height = size.height || 1;
    let depth = size.depth || 1;
    let geometry = props.geometry || {primitive: 'box', width: width, height: height, depth: depth};
    let animation__rotate = props.animation__rotate || {};
    let animation__scale = props.animation__scale || {};
    let animation__position = {
        property: 'position',
        dur: 1500,
        loop: false,
        to: `-4 ${width / 2} -3`
    };
    let position = props.position || {};
    let events = props.events || {};

    // let animation__position_str = '';
    // for(let key in animation__position) {
    //     animation__position_str += `${key}: ${animation__position[key]}; `;
    // }

    return <Entity id={id}
                   geometry={geometry}
                   material={material}
                   animation__rotate={animation__rotate}
                   animation__scale={animation__scale}
                   animation__position={animation__position}
                   position={position}
                   events={events}>{children}</Entity>;
}