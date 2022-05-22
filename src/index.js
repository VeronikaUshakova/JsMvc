import ImageBlockModel from './image-block/models.js';
import ImageBlockView from './image-block/views.js';
import ImageBlockController from './image-block/controllers.js';

import ListModel from './list/models.js';
import ListView from './list/views.js';
import ListController from './list/controllers.js';

const listModel = new ListModel();
const listView = new ListView("#root");
const listController = new ListController(listModel, listView);

const likes = [55,5,0,10,32,10]

for(let i = 0;i< likes.length;i++){
    const imageBlockModel = new ImageBlockModel();
    const imageBlockView = new ImageBlockView(".list__block", imageBlockModel.imagePerson);
    const imageBlockController = new ImageBlockController(imageBlockModel, imageBlockView, likes[i]);
    listController.model.addElement(imageBlockController);
}

listController.addModalFunc();