import { AssetSettings } from "../DataModel/AssetSettings.js";

export class EnemyAssetSettings {
    static ENEMY_1 = new AssetSettings("/Assets/Enemies.png", 0, 32, 0, 32);
    static ENEMY_2 = new AssetSettings("/Assets/Enemies.png", 32, 64, 0, 32);
    static ENEMY_3 = new AssetSettings("/Assets/Enemies.png", 0, 32, 32, 64);
    static ENEMY_4 = new AssetSettings("/Assets/Enemies.png", 32, 64, 32, 64);
    static ENEMY_5 = new AssetSettings("/Assets/Enemies.png", 0, 32, 64, 96);
}