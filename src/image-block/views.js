export default class ImageBlockView {
    constructor(selector,url){
        this.createBlock(selector,url);
    }

    createElement(tag, className) {
        const element = document.createElement(tag);
        if (className) element.classList.add(className);
        return element;
    }

    getElement(selector) {
        const element = document.querySelector(selector);
        return element;
    }

    createBlock(selector, url){
        this.app = this.getElement(selector);
        this.block =this.createElement("div", "person__block");
        this.blockImage = this.createElement("div", "like__block-image");
        this.image = this.createElement("img", "like__image");
        this.blockImage.append(this.image);
        this.block.append(this.blockImage);
        this.app.append(this.block);
        this.image.src=url;
    }
}