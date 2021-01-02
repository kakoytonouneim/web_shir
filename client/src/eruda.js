import * as eruda from 'client/src/eruda';
import * as erudaCode from 'eruda-code';
import * as erudaDom from 'eruda-dom';

eruda.init();
eruda.add(erudaCode);
eruda.add(erudaDom);

export default eruda