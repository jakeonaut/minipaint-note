import { useContext, useEffect, useReducer, useState, useMemo } from 'react';
import debounce from 'lodash.debounce';
import { v4 as uuidV4 } from 'uuid';
import Head from 'next/head';
import Link from 'next/link';

import BlockObjContext from './BlockObjContext';
import DraggableStore from './stores/DraggableStore';
import ResizableStore from './stores/ResizableStore';
import Text from './blocks/Text';
import Image from './blocks/Image';

const INTRO_MESSAGE = "hi :) ! move & resize, dbl click to make text, paste or drag image"
const Types = {
  ADD_BLOCK: "ADD_BLOCK",
  REMOVE_BLOCK: "REMOVE_BLOCK",
  TEXT_BLOCK: "TEXT_BLOCK",
  IMAGE_BLOCK: "IMAGE_BLOCK",
};

const BlockList = () => {
  const { blockObjects } = useContext(BlockObjContext);
  return (
    <>
      {blockObjects.map((o) => {
        // Typescript would be nice here for the blockObject types...
        switch (o.type) {
          case Types.TEXT_BLOCK:
            return (
              <Text
                key={o.id}
                id={o.id}
                x={o.x}
                y={o.y}
                value={o.value}
              />
            )
          case Types.IMAGE_BLOCK:
            return (
              <Image
                key={o.id}
                id={o.id}
                x={o.x}
                y={o.y}
                src={o.src}
              />
            )
        }
      })}
    </>
  );
};

export default function Home() {
  const [blockObjects, setBlockObjects] = useState([
    { id: uuidV4(), x: 30, y: 30, type: Types.TEXT_BLOCK, value: INTRO_MESSAGE },
    { id: uuidV4(), x: 60, y: 60, type: Types.IMAGE_BLOCK }
  ]);

  function addBlockObj(blockObj) {
    setBlockObjects([
      ...blockObjects,
      blockObj,
    ])
  }
  function removeBlockObj(id) {
    const removedBlockObj = blockObjects.find((o) => o.id === id);
    setBlockObjects([...blockObjects.filter((o) => o.id !== id)]);
    return removedBlockObj;
  }
  function popPushBlockObj(id) {
    const poppedBlockObj = blockObjects.find((o) => o.id === id);
    setBlockObjects([...blockObjects.filter((o) => o.id !== id), poppedBlockObj]);
  }

  function handleDoubleClick(e) {
    addBlockObj({
      id: uuidV4(),
      x: e.clientX - 16,
      y: e.clientY - 16,
      type: Types.TEXT_BLOCK,
    });
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

    const blockObj = {
      id: uuidV4(),
      x: e.clientX - 48,
      y: e.clientY - 48,
      type: Types.IMAGE_BLOCK,
    };
    const files = e.dataTransfer.files;
    for (let i = 0, file; file=files[i]; i++) {
      if (file.type.match(/image.*/)) {
        const reader = new FileReader();
        reader.onload = (e2) => {
          removeBlockObj(blockObj.id);
          blockObj.src = e2.target.result;
          addBlockObj(blockObj);
        }
        reader.readAsDataURL(file); 
      } else {
        console.log("no image?")
      }
    }
    addBlockObj(blockObj);
  }

  function handleMouseMove(e) { 
    DraggableStore.handleMouseMove(e);
    ResizableStore.handleMouseMove(e);
  }
  const debouncedMouseMoveHandler = useMemo(
    () => debounce(handleMouseMove, 1)
  , []);
  function handleMouseUp(e) {
    DraggableStore.reset();
    ResizableStore.reset();
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
        <BlockObjContext.Provider
          value={{
            blockObjects,
            addBlockObj,
            removeBlockObj,
            popPushBlockObj,
          }}
        >
          <div style={{
              width: "100vw",
              height: "100vh",
            }}
            onDoubleClick={handleDoubleClick}
            onMouseMove={debouncedMouseMoveHandler}
            onMouseUp={handleMouseUp}
            onDragEnter={onDragEnter}
            onDragOver={onDragOver}
            onDrop={onFileDrop}>
              <BlockList />
          </div>
        </BlockObjContext.Provider>
      </main>
    </div>
  )
}