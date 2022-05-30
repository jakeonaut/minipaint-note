import { useState } from 'react';
import DraggableStore from '../stores/DraggableStore'

function ResizePoint(props) {
    return (
        <div
        style={{
            ...props.style,
            border: "1px solid black",
            width: 8,
            height: 8,
            margin: 4,
            position: "absolute",
        }}></div>
    )
}

export default function Block(props) {
    const [x, setX] = useState(props.x);
    const [y, setY] = useState(props.y);
    const [isDragging, setIsDragging] = useState(false);

    const resizeOffset = -16;

    function handleMouseDown(e) {
        DraggableStore.setDraggable(e, {
            x, setX,
            y, setY,
            setIsDragging,
        });
    }

    return (
        <div style={{
            position: "absolute",
            left: x,
            top: y,            
        }}
        onDoubleClick={props.onDoubleClick}>
            <div style={{
                position: "relative",
                cursor: "move",
                outline: "2px dashed lightgray",
                padding: 2,
            }}>
                <ResizePoint style={{ cursor: "nw-resize", top: resizeOffset, left: resizeOffset }} />
                <ResizePoint style={{ cursor: "ne-resize", top: resizeOffset, right: resizeOffset }} />
                <div
                    onMouseDown={handleMouseDown}
                    style={{ padding: 8 }}>
                        {props.children}
                </div>
                <ResizePoint style={{ cursor: "sw-resize", bottom: resizeOffset, left: resizeOffset }} />
                <ResizePoint style={{ cursor: "se-resize", bottom: resizeOffset, right: resizeOffset }} />
            </div>
        </div>
    );
}