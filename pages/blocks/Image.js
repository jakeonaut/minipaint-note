import { useState } from 'react';
import Block from './Block.js'

export default function Image(props) {
    const [src, setSrc] = useState(props.src ?? "face-cool.png")

    function handleDoubleClick() {
        console.log("request file")
    }

    function preventDragHandler(e) {
        e.preventDefault();
    }

    return (
        <Block
          onDoubleClick={handleDoubleClick}
          x={props.x ?? 60}
          y={props.y ?? 60}
          width={32} height={32}>
            <img
                src={src}
                style={{
                    imageRendering: 'crisp-edges',
                    userSelect: "none",
                    margin: 0,
                    userDrag: "none",
                    width: '100%',
                    height: '100%'
                }}
                draggable={false}
                onDragStart={preventDragHandler}
                />
        </Block>
    );
}
  