class DraggableStore {
  constructor() {
    this.xMouseOffset = 0;
    this.yMouseOffset = 0;

    // TODO(jaketrower): This seems bad
    this.setX = undefined
    this.setY = undefined
    this.setIsDragging = undefined

    // eh
    this.allBlocks = undefined;
    this.setAllBlocks = undefined;
  }

  getSetAllBlocks(allBlocks, setAllBlocks) {
    this.allBlocks = allBlocks;
    this.setAllBlocks = setAllBlocks;
  }

  // TODO(jaketrower): Typescript would be nice here...
  setDraggable(e, {
    x, setX,
    y, setY,
    setIsDragging,
    block // TODO(jaketrower): passing this around is really bad ???
  }) {
    this.xMouseOffset = e.clientX - x
    this.yMouseOffset = e.clientY - y
    this.setX = setX;
    this.setY = setY;
    this.setIsDragging = setIsDragging;
    this.setIsDragging(true);

    const idx = this.allBlocks?.findIndex(aBlock => aBlock === block)
    this.setAllBlocks([...this.allBlocks.slice(idx, idx + 1), block])
  }

  handleMouseMove(e) {
    this.setX?.(e.clientX - this.xMouseOffset)
    this.setY?.(e.clientY - this.yMouseOffset)
  }

  reset() {
    this.setIsDragging?.(false);
    
    this.setX = undefined
    this.setY = undefined
    this.setIsDragging = undefined
  }
}

export default new DraggableStore();