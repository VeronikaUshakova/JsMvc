import ImageBlockModel from '../image-block/models.js';
import ImageBlockView from '../image-block/views.js';
import ImageBlockController from '../image-block/controllers.js';

export default class ListController {
    constructor(model, view) {
      this.model = model;
      this.view = view;
    }

    addModalFunc(){
      for (let i = 0; i < this.model.list.length; i++) {
        this.model.list[i].view.blockImage.addEventListener("click", (e) => {
          const imageBlockModel = new ImageBlockModel(this.model.list[i].model.imagePerson);
          const imageBlockView = new ImageBlockView(".modal__block", imageBlockModel.imagePerson);
          const imageBlockController = new ImageBlockController(imageBlockModel, imageBlockView, this.model.list[i].model.like.model.getLike());
          this.model.show = i;
          this.model.modal = imageBlockController;
          this.view.generateButton(document.querySelector(".modal__block > .person__block"));

          this.view.closeButton.onclick = () => {
            document.querySelector("#root > .modal__block > .person__block").remove();
          }
          this.view.buttonPrev.onclick = () => {
            this.model.prevElement();
            let img = this.model.list[this.model.show].model.imagePerson;
            this.model.modal.view.image.src = img;
            this.model.modal.model.like.view.updateLikeContent(this.model.list[this.model.show].model.like.model.getLike());
          }
          this.view.buttonNext.onclick = () => {
            this.model.nextElement();
            let img = this.model.list[this.model.show].model.imagePerson;
            this.model.modal.view.image.src = img;
            this.model.modal.model.like.view.updateLikeContent(this.model.list[this.model.show].model.like.model.getLike());
          }
        });
      }
    }
}