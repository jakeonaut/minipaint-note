import { useState } from 'react';
import dynamic from 'next/dynamic';
import Block from './Block.js'

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), { ssr: false })

export default function Text(props) {
    const [isEditingText, setIsEditingText] = useState(true);
    const [value, setValue] = useState(props.value ?? "hi ! :)");

    function handleChange(value) {
        setValue(value);
    }

    return (
        <Block
            id={props.id}
            onDoubleClick={() => {}}
            x={props.x}
            y={props.y}>
              <SimpleMDE
                value={value}
                options={{
                    autofocus: true,
                    unorderedListStyle: '-',
                    indentWithTabs: false,
                    minHeight: "0",
                    status: false,
                    toolbar: false,
                }}
                onChange={handleChange} />
        </Block>
    );
}
  