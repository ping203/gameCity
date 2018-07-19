import Handler = Laya.Handler;
import Loader = Laya.Loader;
import GameUI = ui.hitMole.GameUI;

// 程序入口
class GameMain {
    constructor() {
        Laya.init(800, 600, Laya.WebGL);
        Laya.ResourceVersion.enable("version.json", Handler.create(null, this.beginLoad), Laya.ResourceVersion.FILENAME_VERSION)
        Laya.stage.bgColor = "#ffcccc";

    }

    beginLoad() {
        let resArray: Array<any> = [
            { url: "res/atlas/ui.atlas", type: Laya.Loader.ATLAS },
        //    { url: "unpack.json", type: Laya.Loader.IMAGE }
        ];
        Laya.loader.load(resArray, Handler.create(null, this.onLoaded));
    }

    onLoaded(): void {
        //实例UI界面
        let gameUI: GameUI = new GameUI();
        Laya.stage.addChild(gameUI);
    }
}
new GameMain();