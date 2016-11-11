// Import Export of modules

import { Utility } from 'sol_14.js';

function setNewStyle(param) {
    const util = new Utility();
    let style = util.getStyle();
    console.log(style); // 'javascript class'
}