
// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;
@ccclass
export default class CoinAnimScene extends cc.Component {

    @property(cc.SpriteFrame)
    coinTexture: cc.SpriteFrame = null

    @property(cc.Node)
    endNode: cc.Node = null

    onLoad() {
        //初始化
        this.node.on(cc.Node.EventType.TOUCH_START, function (event: cc.Event.EventTouch) {
            let config = bfCoinAction.CloneConfig()
            switch (Math.floor(Math.random() * 2)) {
                case 1:
                    config.Action = new bfCoinAction.ActionRound()
                    break;
            }
            bfCoinAction.Run({
                count: 30,
                start: event.getLocation(),
                end: this.endNode,
                config:config,
                progressFunc: (progress, count) => {
                    console.log("progress", progress, count)
                },
                finishFunc: () => {
                    console.log("finishFunc")
                }
            })
        }.bind(this))
    }

}
