export default class LikeView {
    constructor(selector, countLike){
        this.createBlock(selector, countLike)
    }

    createBlock(selector, countLike){
        this.app = selector;
        this.blockLike = this.createElement("div", "like__block");
        this.app.append(this.blockLike);
        this.likeIcon = this.createElement("i", ["like__icon", "far", "fa-thumbs-up"]);
        this.likeNumber = this.createElement("p","like__text");
        this.likeNumber.textContent = "("+countLike +" likes)";
        this.blockLike.append(this.likeIcon, this.likeNumber);
    }

    updateLikeContent(countLike){
        this.likeNumber.textContent = "("+countLike +" likes)";
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
}