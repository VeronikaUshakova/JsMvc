var faker = require('faker');

export default class ImageBlockModel {
    constructor(imagePerson){
        if(imagePerson === undefined){
            this.imagePerson = faker.image.avatar();
        }
        else {
            this.imagePerson = imagePerson;
        }
        this.like = null;
    }
}