import { useState } from 'react';
import Block from './Block.js'

export default function Image(props) {
    const [src, setSrc] = useState(props.src ?? "face-cool.png")
    const [naturalWidth, setNaturalWidth] = useState(32);
    const [naturalHeight, setNaturalHeight] = useState(32);

    function handleDoubleClick() {
        console.log("request file")
    }

    function preventDragHandler(e) {
        e.preventDefault();
    }

    function handleImgOnLoad(e) {
        const img = e.target;
        setNaturalWidth(img.naturalWidth);
        setNaturalHeight(img.naturalHeight);
    }

    return (
        <Block
            id={props.id}
          onDoubleClick={handleDoubleClick}
          x={props.x}
          y={props.y}
          width={naturalWidth}
          height={naturalHeight}
          ratio={naturalWidth && naturalHeight ? (naturalWidth/naturalHeight) : undefined}>
            <img
                src={src}
                onLoad={handleImgOnLoad}
                style={{
                    imageRendering: 'pixelated',
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
  