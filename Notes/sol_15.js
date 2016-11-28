// ignore a double slash but catch single slash in string
let path = 'my/file//path/string';
let pathSeg = (path || '').split(/[^\/]\/[^\/]/);
// ['my','file//path','string'];
