//Контралер отвезает за обновление модели также отвечает за логику!
class Controller {
    initialize(model, view){
        this.model = model;
        this.view = view;
    }

    save({ wordsEng, wordsRus }){
        if(wordsEng && wordsRus){
            console.log('Слово добавлено!: ', wordsEng, wordsRus);
             this.model.wordsEng = wordsEng;
             this.model.wordsRus = wordsRus;

             this.view.message = 'Слово добавлено!';
             
        }else{
            this.view.message = 'Вы пытаетесь добавить пустые строки!'
        }
    }
}

export default Controller;