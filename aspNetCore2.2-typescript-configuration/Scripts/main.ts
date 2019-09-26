//import "core-js/stable";
import 'core-js/features/array/from';
import 'core-js/features/symbol';
import 'core-js/features/promise';

import ComponentA from './component.a';
import ComponentC from './component.c';

export function InitComponentA(){
    document.addEventListener('DOMContentLoaded', () => new ComponentA().Init());
}

export function InitComponentC() {
    document.addEventListener('DOMContentLoaded', () => new ComponentC().Init());
}

