import React from "react";
import {Box} from "react-aframe-ar";

export default function DynamicBox(props) {
    let id = props.id || '';
    let children = props.children || '';
    let material = props.material || {};
    let size = props.size || {};
    let width = size.width || 1;
    let height = size.height || 1;
    let depth = size.depth || 1;
    let geometry = props.geometry || {};
    let animation__position = {
        property: 'position',
        dur: 1500,
        loop: false,
        to: `-4 ${width / 2} -3`
    };
    let position = props.position || {};
    let events = props.events || {};
    let _animations = props.animations || {animation__position};
    if(!('position' in _animations)) {
        _animations.position = animation__position;
    }

    let animations = {};
    for(let key in _animations) {
        animations[`animation__${key}`] = _animations[key];
    }

    return <Box id={id}
                geometry={geometry}
                width={width} height={height} depth={depth}
                material={material}
                {...animations}
                position={position}
                events={events}>{children}</Box>;
}