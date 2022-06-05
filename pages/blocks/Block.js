import { withRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import DraggableStore from '../stores/DraggableStore';
import ResizableStore from '../stores/ResizableStore';
import BlockObjContext from '../BlockObjContext';

function ResizePoint(props) {
    return (
        <div
            onMouseDown={props.onMouseDown}
            style={{
                ...props.style,
                background: 'white',
                border: "1px solid black",
                width: 8,
                height: 8,
                margin: 4,
                position: "absolute",
            }}></div>
    );
}

export default function Block(props) {
    const [x, setX] = useState(props.x ?? 30);
    const [y, setY] = useState(props.y ?? 30);
    const [width, setWidth] = useState(props.width ?? 32);
    const [height, setHeight] = useState(props.height ?? 32);
    const [isDragging, setIsDragging] = useState(false);
    const [isDragEnabled, setIsDragEnabled] = useState(props.isDragEnabled ?? true);
    const [isResizing, setIsResizing] = useState(false);
    const [hasResized, setHasResized] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const { popPushBlockObj } = useContext(BlockObjContext);

    // derive updated state from props
    useEffect(() => {
        if (hasResized) {
            return;
        }
        setWidth(props.width);
        setHeight(props.height);
    }, [props]);

    const resizeOffset = -16;

    function handleMouseDown(e) {
        if (isDragEnabled) {
            popPushBlockObj(props.id);
            DraggableStore.setDraggable(e, {
                x, setX,
                y, setY,
                setIsDragging,
                id: props.id,
            });
        }
    }

    function handleMouseEnter(e) { setIsHovered(true); }
    function handleMouseLeave(e) { setIsHovered(false); }

    const cursorStyle = isDragEnabled ? "move" : "default";
    const outlineStyle = isHovered ? "2px dashed lightgray" : "";

    function handleResizeMouseDown(e) {
        setHasResized(true);
        popPushBlockObj(props.id);
        const ratio = props.ratio ?? ((width && height) ? (width / height) : undefined);
        ResizableStore.setResizable(e,  {
            width, setWidth,
            height, setHeight,
            setIsResizing,
            ratio,
            id: props.id,
        });
    }

    return (
        <div style={{
            position: "absolute",
            left: x + 16,
            top: y + 16,
            padding: 16,        
        }}
        onDoubleClick={props.onDoubleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
            <div style={{
                position: "relative",
                cursor: cursorStyle,
                outline: outlineStyle,
                padding: 2,
            }}>
                <div
                    onMouseDown={handleMouseDown}
                    style={{
                        padding: 8,
                        width: width,
                        height: height, 
                    }}>
                        {props.children}
                </div>
                {isHovered && (<>
                    <ResizePoint onMouseDown={handleResizeMouseDown} style={{ cursor: "n-resize", top: resizeOffset, left: 16 }} />
                    <ResizePoint onMouseDown={handleResizeMouseDown} style={{ cursor: "ne-resize", top: resizeOffset, right: resizeOffset }} />
                    <ResizePoint onMouseDown={handleResizeMouseDown} style={{ cursor: "w-resize", top: 16, left: resizeOffset }} />
                    <ResizePoint onMouseDown={handleResizeMouseDown} style={{ cursor: "nw-resize", top: resizeOffset, left: resizeOffset }} />
                    <ResizePoint onMouseDown={handleResizeMouseDown} style={{ cursor: "sw-resize", bottom: resizeOffset, left: resizeOffset }} />
                    <ResizePoint onMouseDown={handleResizeMouseDown} style={{ cursor: "se-resize", bottom: resizeOffset, right: resizeOffset }} />
                </>)}
            </div>
        </div>
    );
}