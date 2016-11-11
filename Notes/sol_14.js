// Import Export of modules

export class Utility {

    constructor() {
        this.style= 'javascript class';
    }

    setStyle(styleParam = {}) {
        this.style = styleParam.style ? styleParam.style : 'javascript';
    }

    getStyle() {
        return this.style;
    }
}