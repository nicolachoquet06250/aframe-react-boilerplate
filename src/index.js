import 'aframe';
// import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'aframe-physics-extras';
import 'babel-polyfill';
import {Entity} from 'aframe-react';
import {Box, Plane, Sky, Text, Scene, Camera, Cursor, Light} from 'react-aframe-ar';
import React from 'react';
import { render } from 'react-dom';
import aframe_physics_system from 'aframe-physics-system/dist/aframe-physics-system';
import DynamicBox from "./components/DynamicBox";
const { useState } = {...React};

function App() {
    const [color, setColor] = useState('red');
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];

    return (
        <Scene physics=''>
            <a-assets>
                <img id="groundTexture"
                     src="https://cdn.aframe.io/a-painter/images/floor.jpg" alt=''/>
                <img id="skyTexture"
                     src="https://cdn.aframe.io/a-painter/images/sky.jpg" alt=''/>
            </a-assets>

            <Sky color='skyblue'/>

            <DynamicBox position={{x: -4, y: 3, z: -3}}
                        events={{collided: () => console.log('collided')}}
                        material={{color: 'blue'}}>
                <Text value={'Hello, A-Frame React!'} align={'center'} fontSize={30} position={{x: 0, y: 1, z: 0}}/>
            </DynamicBox>

            <Plane id="ground"
                   src="#groundTexture"
                   rotation={{x: -90, y: 0, z: 0}}
                   position={{x: 0, y: 0, z: 0}}
                   height={100}
                   width={100} />
            <Light type="ambient" color="#445451"/>
            <Light type="point" intensity="2" position="2 4 4"/>
            {/*<Entity primitive="a-sky"
                        height="2048"
                        radius="30"
                        src="#skyTexture"
                        theta-length="90" width="2048"/>
                <Entity particle-system={{preset: 'snow', particleCount: 2000}}/>*/}
            <Entity text={{value: 'Hello, A-Frame React!', align: 'center'}}
                    position={{x: 0, y: 2, z: -1}}/>
            <Box id="box"
                 material={{
                     color: color,
                     opacity: 0.6
                 }}
                 animation__rotate={{
                     property: 'rotation',
                     dur: 2000,
                     loop: true,
                     to: '360 360 360'
                 }}
                 animation__scale={{
                     property: 'scale',
                     dir: 'alternate',
                     dur: 100,
                     loop: true,
                     to: '1.1 1.1 1.1'
                 }}
                 position={{x: 0, y: 1, z: -3}}
                 events={{click: () => setColor(colors[Math.floor(Math.random() * colors.length)])}}>
                <Box animation__scale={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '1 1 1'}}
                     width={0.2} height={0.2} depth={0.2}
                     material={{color: '#24CAFF'}}/>
            </Box>
            <Box id="box"
                 material={{
                     color: color,
                     opacity: 0.6
                 }}
                 animation__rotate={{
                     property: 'rotation',
                     dur: 2000,
                     loop: true,
                     to: '360 360 360'
                 }}
                 animation__scale={{
                     property: 'scale',
                     dir: 'alternate',
                     dur: 100,
                     loop: true,
                     to: '1.1 1.1 1.1'
                 }}
                 position={{x: 0, y: 1, z: -3}}
                 events={{click: () => setColor(colors[Math.floor(Math.random() * colors.length)])}}>
                <Box animation__scale={{
                    property: 'scale',
                    dir: 'alternate',
                    dur: 100,
                    loop: true,
                    to: '2 2 2'
                }} width={0.2} height={0.2} depth={0.2}
                     material={{color: '#24CAFF'}} />
            </Box>

            <Box id="box2" material={{color: color}} position={{x: 0, y: 4, z: -3}}/>

            <Camera>
                <Cursor animation__click={{
                    property: 'scale',
                    startEvents: 'click',
                    from: '0.1 0.1 0.1',
                    to: '1 1 1',
                    dur: 150
                }}/>
            </Camera>
        </Scene>
    );
}

render(<App/>, document.querySelector('#sceneContainer'));