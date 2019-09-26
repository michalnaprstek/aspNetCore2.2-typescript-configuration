//import 'core-js/stable';

export default class ComponentB {
    GetMessage(): string {
        const items = [...document.querySelectorAll('.nav-item')];
        //const items = this.GetArray(document.querySelectorAll('.nav-item'));
        let message = '';
        items.forEach(item => message += item.textContent);
        return message;
    }

    private GetArray(nodeList: NodeList): Node[] {
        const items = [];
        for (let i = 0; i < nodeList.length; i++) {
            items.push(nodeList[i]);
        }

        //for (let item of nodeList as any) {
        //    items.push(item); 
        //}

        return items;
    }
}