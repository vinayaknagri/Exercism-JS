// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */


export function Size (width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function(newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
};

export function Position (x=0, y=0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function(newX, newY) {
  this.x = newX;
  this.y = newY;
};

export class ProgramWindow {
  constructor () {
    this.screenSize = new Size(800,600);
    this.size = new Size();
    this.position = new Position();
  }

  resize (newSize) {
    //clamp width
    const maxWidth = this.screenSize.width - this.position.x;
    const newWidth = Math.min(Math.max(newSize.width,1),maxWidth);

    //clamp height
    const maxHeight = this.screenSize.height - this.position.y;
    const newHeight = Math.min(Math.max(newSize.height,1),maxHeight);

    //assign the new size
    this.size = new Size(newWidth,newHeight);
    return this.size;
  }

  move(newPosition) {
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;

    const x = Math.min(Math.max(newPosition.x,0),maxX);
    const y = Math.min(Math.max(newPosition.y,0),maxY);

    this.position = new Position(x,y);
    return this.position;
  }
}

export function changeWindow(newWindow) {
  newWindow.size.width = 400;
  newWindow.size.height = 300;
  newWindow.position.x = 100;
  newWindow.position.y = 150;

  return newWindow;
};

