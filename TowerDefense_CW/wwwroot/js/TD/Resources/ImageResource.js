import { GraphicEngineResource } from "../GraphicEngine/GraphicEngineResource.js";
import { Canvas } from "../Canvas.js";
import { Rect } from "../DataModel/Rect.js";
import { TowerAssetSettings } from "../AssetSettings/TowerAssetSettings.js"
import {AssetSettings } from "../DataModel/AssetSettings.js"

export class ImageResource extends GraphicEngineResource {
    /**
     * @type {DOMMatrix}
     * @private
     */
    _transform;

    /**
     * @type {HTMLImageElement}
     * @private
     */
    _image;


    /**
     * @type {Rect}
     * @private
     */
    _imageSourceRect;

    /**
     * @constructor
     * @param leftPercent {number}
     * @param rightPercent {number}
     * @param topPercent {number}
     * @param bottomPercent {number}
     * @param canvas {Canvas}
     */
    constructor(leftPercent, rightPercent,
        topPercent, bottomPercent, canvas) {
        super(new Rect(leftPercent, rightPercent, topPercent, bottomPercent), canvas);

        this._transform = canvas.GetTransform(super.resourceRect.left, super.resourceRect.top, 0);

        const assetSettings = TowerAssetSettings.TOWER_LEVEL_1;

        this._image = document.createElement("img");
        this._image.src = assetSettings.imagePath;

        this._imageSourceRect = assetSettings.sourceRect;

        console.log("assetSettings", assetSettings);
        console.log("image", this._image);
    }

    _PrepareDraw() {
        this._canvas.SetTransform(this._transform)
    }


    _OnDraw() {
        this._canvas.DrawImage(
            this._image, this._imageSourceRect, this._resourceRect.width, this._resourceRect.height);
    }

    Destroy() {
        super.Destroy();
    }
}