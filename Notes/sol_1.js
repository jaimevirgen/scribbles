// Class and Constructor

class Notebook {
    constructor (id, author, title) {
        this.author = author
        this.addTitle(title)
    }
    addTitle (title) {
        this.title = title;
    }
}
