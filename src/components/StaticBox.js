import React from "react";
import {Entity} from "aframe-react";

export default function StaticBox(props) {
    let id = props.id || '';
    let children = props.children || '';
    let geometry = props.geometry || {};
    let material = props.material || {};
    let animation__rotate = props.animation__rotate || {};
    let animation__scale = props.animation__scale || {};
    let position = props.position || {};
    let events = props.events || {};
    return <Entity id={id}
                   geometry={geometry}
                   material={material}
                   animation__rotate={animation__rotate}
                   animation__scale={animation__scale}
                   position={position}
                   events={events}>{children}</Entity>;
}