class ResizableStore {
  constructor() {
    this.xMouse = 0;
    this.yMouse = 0;

    this.resizableId = undefined;

    // TODO(jaketrower): This seems bad
    this.setWidth = undefined
    this.setHeight = undefined
    this.setIsResizing = undefined
  }

  // TODO(jaketrower): Typescript would be nice here...
  setResizable(e, {
    width, setWidth,
    height, setHeight,
    ratio,
    setIsResizing,
    id,
  }) {
    this.xMouse = e.clientX;
    this.yMouse = e.clientY;
    this.resizableId = id;
    this.width = width;
    this.setWidth = setWidth;
    this.height = height;
    this.setHeight = setHeight;
    this.ratio = ratio;
    this.setIsResizing = setIsResizing;
    this.setIsResizing(true);
  }

  handleMouseMove(e) {
    if (!this.resizableId) {
      return;
    }

    let width = this.width + (e.clientX - this.xMouse);
    let height = this.height + (e.clientY - this.yMouse);
    if (e.ctrlKey) {
      const ratio = this.ratio ?? 1;
      if (width > height / ratio) {
        height = width / ratio;
      } else {
        width = height / ratio;
      }
    }
    this.setWidth?.(width);
    this.setHeight?.(height);
  }

  reset() {
    this.resizableId = undefined;
    this.setIsResizing?.(false);
    
    this.setWidth = undefined
    this.setHeight = undefined
    this.setIsResizing = undefined
  }
}

export default new ResizableStore();