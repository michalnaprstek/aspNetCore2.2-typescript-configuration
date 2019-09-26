import ComponentB from './component.b';

export default class ComponentC {
    private heading: HTMLHeadingElement;
    Init(): void {
        this.heading = document.querySelector('h2') as HTMLHeadingElement;
        this.heading.addEventListener('click', () => this.UpdateHeading());
    }

    private UpdateHeading() {
        this.heading.innerHTML = new ComponentB().GetMessage();
    }
}