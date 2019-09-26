import ComponentB from './component.b';

export default class ComponentA {
    private heading: HTMLHeadingElement;
    private tryPromiseButton: HTMLButtonElement;
    Init(): void {
        this.heading = document.querySelector('h1') as HTMLHeadingElement;
        this.heading.addEventListener('click', () => this.UpdateHeading());

        this.tryPromiseButton = document.querySelector('button#try-promise') as HTMLButtonElement;
        this.tryPromiseButton.addEventListener('click', () => this.TryPromise());
    }

    private UpdateHeading() {
        this.heading.innerHTML = new ComponentB().GetMessage();
    }

    private TryPromise() {
        Promise.resolve(32).then(x => console.log(x));
    }
}