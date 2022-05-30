import { useState } from 'react';
import Block from './Block.js'

export default function Text() {
    const [isEditingText, setIsEditingText] = useState(false);
    const [src, setSrc] = useState("face-cool.png")

    function handleDoubleClick() {
        console.log("request file")
    }

    return (
        <Block onDoubleClick={handleDoubleClick} x={60} y={60}>
            <img src={src} style={{ userSelect: "none", margin: 0 }} draggable={false} />
        </Block>
    );
}
  