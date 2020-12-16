import {weatherObjects} from './sketch';


class RemoveButton {

  constructor(ctx) {
    this.ctx = ctx;
    this.addButton();
  }

  addButton() {
    this.button = this.ctx.createButton('remove').id('remover-btn');
  }

  handleMousePressed() {
    this.button.mousePressed(() => this.removeCanvas());
  }

  removeCanvas() {
    this.ctx.remove();
    let queryForm = document.querySelector('#zip-form');
    queryForm.classList.toggle('hidden');
    document.querySelector('#zip-input').value = ""
    weatherObjects.splice(0, weatherObjects.length);
  }


}

export default RemoveButton;