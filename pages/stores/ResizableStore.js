class ResizableStore {
  constructor() {
    this.xMouse = 0;
    this.yMouse = 0;

    // TODO(jaketrower): This seems bad
    this.setWidth = undefined
    this.setHeight = undefined
    this.setIsResizing = undefined
  }

  // TODO(jaketrower): Typescript would be nice here...
  setResizable(e, {
    width, setWidth,
    height, setHeight,
    setIsResizing,
  }) {
    this.xMouse = e.clientX;
    this.yMouse = e.clientY;
    this.width = width;
    this.setWidth = setWidth;
    this.height = height;
    this.setHeight = setHeight;
    this.setIsResizing = setIsResizing;
    this.setIsResizing(true);
  }

  handleMouseMove(e) {
    let width = this.width + (e.clientX - this.xMouse);
    let height = this.height + (e.clientY - this.yMouse);
    if (e.ctrlKey) {
      if (width > height) {
        height = width;
      } else {
        width = height;
      }
    }
    this.setWidth?.(width);
    this.setHeight?.(height);
  }

  reset() {
    this.setIsResizing?.(false);
    
    this.setWidth = undefined
    this.setHeight = undefined
    this.setIsResizing = undefined
  }
}

export default new ResizableStore();