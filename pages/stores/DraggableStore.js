class DraggableStore {
  constructor() {
    this.xMouseOffset = 0;
    this.yMouseOffset = 0;

    // TODO(jaketrower): This seems bad
    this.setX = undefined
    this.setY = undefined
    this.setIsDragging = undefined
  }

  // TODO(jaketrower): Typescript would be nice here...
  setDraggable(e, {
    x, setX,
    y, setY,
    setIsDragging,
    id, addBlockObj, removeBlockObj, 
  }) {
    this.xMouseOffset = e.clientX - x
    this.yMouseOffset = e.clientY - y
    this.setX = setX;
    this.setY = setY;
    this.setIsDragging = setIsDragging;
    this.setIsDragging(true);

    // This is not yet working
    // Shove block to the top of the stack
    addBlockObj(removeBlockObj({ id }));
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