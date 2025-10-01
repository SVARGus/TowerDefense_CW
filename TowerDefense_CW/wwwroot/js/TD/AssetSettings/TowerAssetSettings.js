import {AssetSettings } from "../DataModel/AssetSettings.js"

export class TowerAssetSettings {
    static TOWER_LEVEL_1 = new AssetSettings("/Assets/Towers bases/Tower 03.png", 0, 192/3, 0, 128);
    static TOWER_LEVEL_2 = new AssetSettings("/Assets/Towers bases/Tower 03.png", 192/3, 192/3*2, 0, 128);
    static TOWER_LEVEL_3 = new AssetSettings("/Assets/Towers bases/Tower 03.png", 192 / 3 * 2, 192, 0, 128);

    static TOWER_LEVEL_4 = new AssetSettings("/Assets/Towers bases/Tower 04.png", 0, 192/3, 0, 128);
    static TOWER_LEVEL_5 = new AssetSettings("/Assets/Towers bases/Tower 04.png", 192/3, 192/3*2, 0, 128);
    static TOWER_LEVEL_6 = new AssetSettings("/Assets/Towers bases/Tower 04.png", 192/3*2, 192, 0, 128);
}