import { Bellhop } from "bellhop-iframe";
import { BasePlugin } from "../src/plugins/BasePlugin";

type OpenOptions = {singlePlay?: boolean, playOption?: object | null, [key:string]: any};
interface RemoteOptions extends OpenOptions {
  query?:string;
}

export class PluginManaer {
  client: Bellhop;
  plugins: Array<BasePlugin>;
  setupPlugins(): void;
  uses(plugin: BasePlugin): void;
  getPlugin(name:string): BasePlugin | undefined;
}

export class Container extends PluginManager {
  client: Bellhop;
  loaded: boolean;
  loading: boolean;
  dom: HTMLIFrameElement;
  main: HTMLIFrameElement;
  release?: any;
  constructor(iframeSelector: string);
  close(): void;
  destroy():void;
  initClient(): void;
  onEndGame(): void;
  onLoadDone(): void;
  onLoading(): void;
  onLocalError($event: Error): void;
  openPath(path: string, options?:OpenOptions): void;
  openRemote(api:string, options?: RemoteOptions, playOptions?: object | null):void;
  reset():void;
  private _internalOpen(userPath:string, options?: OpenOptions): void;
  private _onCloseFailed(): void;
  static get version(): string;
}