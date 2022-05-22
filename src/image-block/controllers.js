import LikeModel from '../like/models.js';
import LikeView from '../like/views.js';
import LikeController from '../like/controllers.js';

export default class ImageBlockController {
    constructor(model, view, countLike) {
        this.model = model;
        this.view = view;
        const likeModel = new LikeModel();
        likeModel.setLike(countLike);
        const likeView = new LikeView(this.view.block, countLike);
        const likeController = new LikeController(likeModel, likeView);
        this.model.like = likeController;
    }
}