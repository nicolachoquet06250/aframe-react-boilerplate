import React from "react";
import {Box} from "react-aframe-ar";

export default function StaticBox(props) {
    let id = props.id || '';
    let children = props.children || '';
    let geometry = props.geometry || {};
    let material = props.material || {};
    let position = props.position || {};
    let events = props.events || {};
    let _animations = props.animations || {};

    let animations = {};
    for(let key in _animations) {
        animations[`animation__${key}`] = _animations[key];
    }

    return <Box id={id}
                geometry={geometry}
                material={material}
                {...animations}
                position={position}
                events={events}>{children}</Box>;
}