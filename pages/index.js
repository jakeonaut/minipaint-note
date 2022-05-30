import Head from 'next/head'
import Link from 'next/link';

import DraggableStore from './stores/DraggableStore'
import Text from './blocks/Text'
import Image from './blocks/Image'

export default function Home() {
  function handleMouseMove(e) {
    DraggableStore.handleMouseMove(e);
  }
  function handleMouseUp(e) {
    DraggableStore.reset();
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <style>{`
          body {
            margin: 0;
          }
        `}</style>
      </Head>

      <main>
        <div style={{
            width: "100vw",
            height: "100vh",
          }}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}>
            <Text/>
            <Image/>
        </div>
      </main>
    </div>
  )
}
