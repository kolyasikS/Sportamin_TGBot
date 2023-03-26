export class Timetable {
    text;
    isBeingEdited;
    get = function () { return `Your timetable:\n${this.text}`; }
    set = function (text) { this.text = text; }
    constructor(text) {
        this.text = text;
        this.isBeingEdited = false;

        this.get.bind(this);
        this.set.bind(this);
    }

}
export class Diet {
    breakfast;
    lunch;
    dinner;
    isBeingEdited;
    constructor() {
        this.isBeingEdited = false;

        this.get.bind(this);
        this.setBreakfast.bind(this);
        this.setLunch.bind(this);
        this.setDinner.bind(this);
    }

    get = function () {
        let text = `\tBreakfast:\n${this.breakfast}\n\n\tLunch:\n${this.lunch}\n\n\tDinner:\n${this.dinner}`;
        return text;
    }
    setBreakfast = function (breakfast) { this.breakfast = breakfast; }
    setLunch = function (lunch) { this.lunch = lunch; }
    setDinner = function (dinner) { this.dinner = dinner; }
}
export class Parameters {
    text;
    isBeingEdited
    constructor(text) {
        this.text = text;
        this.isBeingEdited = false;
        this.get.bind(this);
        this.set.bind(this);
    }

    get = function () { return this.text; }
    set = function (text) { this.text = text; }
}