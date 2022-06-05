  import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import DraggableStore from './stores/DraggableStore';
import ResizableStore from './stores/ResizableStore';
import Text from './blocks/Text';
import Image from './blocks/Image';

let keyCounter = 0;
function generateKey() {
  const key = keyCounter;
  keyCounter++;
  return key;
}

export default function Home() {
  const [allBlocks, setAllBlocks] = useState([<Text key={generateKey()} />, <Image key={generateKey()}/>])
  useEffect(() => {
    DraggableStore.getSetAllBlocks(allBlocks, setAllBlocks);
  });

  function handleDoubleClick(e) {
    setAllBlocks([
      ...allBlocks,
      <Text x={e.clientX - 16} y={e.clientY - 16}  key={generateKey()} />
    ])
    // TODO(jaketrower): Oh this seems very bad... 
    // Is it better to have a separate global allBlocksStore ??? Definitely
    DraggableStore.getSetAllBlocks(allBlocks, setAllBlocks);
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
    const image = <Image x={e.clientX - 48} y={e.clientY - 48}  key={generateKey()} />

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
        <title>COLSOFT</title>
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