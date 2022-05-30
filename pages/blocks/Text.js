import { useState } from 'react';
import Block from './Block.js'

export default function Text() {
    const [isEditingText, setIsEditingText] = useState(false);
    const [text, setText] = useState("hi ! :)")

    function handleDoubleClick() {
        setIsEditingText(!isEditingText);
    }

    return (
        <Block onDoubleClick={handleDoubleClick} x={30} y={30}>
            <p style={!isEditingText && { userSelect: "none", margin: 0 }}>
                <>{text}</>
            </p>
        </Block>
    );
}
  