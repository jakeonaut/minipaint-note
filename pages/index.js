import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import DraggableStore from './stores/DraggableStore';
import ResizableStore from './stores/ResizableStore';
import Text from './blocks/Text';
import Image from './blocks/Image';

export default function Home() {
  const [allBlocks, setAllBlocks] = useState([<Text/>, <Image/>])
  function handleDoubleClick(e) {
    setAllBlocks([
      ...allBlocks,
      <Text x={e.clientX - 16} y={e.clientY - 16} />
    ])
  }

  // TODO(jaketrower): Throttle
  function handleMouseMove(e) { 
    DraggableStore.handleMouseMove(e);
    ResizableStore.handleMouseMove(e);
  }
  function handleMouseUp(e) {
    DraggableStore.reset();
    ResizableStore.reset();
  }

  function onDragOver(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  function onDragEnter(e) {
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  }

  function onFileDrop(e) {
    e.stopPropagation();
    e.preventDefault();

    console.log(e);
    console.log("onFileDrop");

    const allBlocksBefore = allBlocks;
    const image = <Image x={e.clientX - 48} y={e.clientY - 48} />

    const files = e.dataTransfer.files;
    for (let i = 0, file; file=files[i]; i++) {
      if (file.type.match(/image.*/)) {
        const reader = new FileReader();
        reader.onload = (e2) => {
          console.log(e2);
          // TODO(jaketrower): Note that there will be a race condition.... ?
          setAllBlocks([
            ...allBlocksBefore,
            <Image x={e.clientX - 48} y={e.clientY - 48} src={e2.target.result} />
          ])
        }
        reader.readAsDataURL(file); 
      } else {
        console.log("no image?")
      }
    }
    
    setAllBlocks([
      ...allBlocks,
      //<Image x={e.clientX - 48} y={e.clientY - 48} />,
    ])
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/emptymde.min.css" />
        <style>{`
          body {
            margin: 0;
          }
        `}</style>
      </Head>

      <main style={{background: "url('bg.jpg')"}}>
        <div style={{
            width: "100vw",
            height: "100vh",
          }}
          onDoubleClick={handleDoubleClick}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onDragEnter={onDragEnter}
          onDragOver={onDragOver}
          onDrop={onFileDrop}>
            {allBlocks}
        </div>
      </main>
    </div>
  )
}