class View {
    constructor(model, controller) {
        this.model = model;
        this.controller = controller;

        this.initialize();
    }

    initialize() {
        this.form = document.addWords;
        this.wordsEngInput = this.form.wordsEng;
        this.wordsRusInput = this.form.wordsRus;
        this.resetButton = this.form.reset;
        this.showWords = document.getElementById('showWords');

        // this.wordsEngInput.value = this.model.firstname;
        // this.wordsRusInput.value = this.model.lastname;

        this.resetButton.addEventListener('click', this.handlerResetButtonClick.bind(this));
        this.form.addEventListener('submit', this.handlerSaveButtonClick.bind(this));
    }

    set message(value) {
        let li = document.createElement('li');
        this.showWords.appendChild(li).innerText += value; 
    }
    
    handlerSaveButtonClick(event) {
        let data = {
            wordsEng: this.wordsEngInput.value,
            wordsRus: this.wordsRusInput.value
        }

        this.save(data);
    }

    handlerResetButtonClick(event) {
        this.reset();
    }

    save(data) {
        this.controller.save(data);
    }

    reset() {
        this.wordsEngInput.value = '';
        this.wordsRusInput.value = '';
        this.showWords.value = '';
    }
}

export default View;