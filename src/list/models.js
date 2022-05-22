export default class ListModel {
    constructor() {
        this.list = [];
        this.show = null;
        this.modal = null;
    }
    
    getElement(i){
        if(i >= this.list.length){
            return this.list[i];
        }
        return false;
    }

    addElement(element){
        this.list.push(element);
    }

    nextElement(){
        if(this.show === null){
            this.show = 0;
        }
        else if(this.show+1 >=this.list.length){
            this.show = this.show;
        }
        else {
            this.show++;
        }
    }

    prevElement(){
        if(this.show === null){
            this.show = 0;
        }
        else if(this.show-1 <= 0){
            this.show = 0;
        }
        else {
            this.show--;
        }
    }
}
  