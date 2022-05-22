export default class ListView {
    constructor(selector){
        this.app = this.getElement(selector);
        this.blockList = this.createElement("div", "list__block");
        this.modalBlock = this.createElement("div", "modal__block");
        this.app.append(this.blockList, this.modalBlock);
    }

    createElement(tag, className) {
        const element = document.createElement(tag);
        if (className && typeof className === "object") {
            for(let i = 0;i<className.length;i++){
                element.classList.add(className[i]);
            }
        }
        else {
            element.classList.add(className);
        }
        return element;
    }

    getElement(selector) {
        const element = document.querySelector(selector);
        return element;
    }

    generateButton(selector) {
        this.app = selector;
        this.closeButton = this.createElement("i", ["fas", "fa-times"]);
        this.app.prepend(this.closeButton);
        this.blockButton = this.createElement("div", "button__block");
        this.buttonPrev = this.createElement("button", "button__prev");
        this.buttonPrev.textContent = "Prev";
        this.buttonNext = this.createElement("button", "button__next");
        this.buttonNext.textContent = "Next";
        this.blockButton.append(this.buttonPrev, this.buttonNext);
        this.app.append(this.blockButton);
    }
}