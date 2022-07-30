import { Container, interfaces } from "inversify";

export default abstract class Application {
  protected readonly _container: Container;

  constructor(options: interfaces.ContainerOptions) {
    this._container = new Container(options);
    this.configureService();
    this.setup()
  }
  abstract configureService(): Promise<void> | void;
  abstract setup(): Promise<void> | void;
}
