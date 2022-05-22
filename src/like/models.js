export default class LikeModel {
    constructor() {
        this.like = 0;
    }

    setLike(countLike){
        this.like = countLike;
    }
    
    getLike(){
        return this.like;
    }
}
  