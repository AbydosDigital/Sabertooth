import BaseWidget from './BaseWidget';

/**
 * The PIXI namespace
 * @external PIXI
 * @see http://pixijs.download/release/docs/index.html
 */

/**
 * Wraps PIXI.Sprite and allows images/ textures to become widgets
 * @extends ST.Widgets.BaseWidget
 * @memberof ST.Widgets
 */
export default class Image extends BaseWidget {
    /**
     *@param {ST.Widgets.BaseWidget} parent Widgets parent
     *@param {Object} [options = Object] @see ST.Widgets.BaseWidget
     *@param {PIXI.Texture} [options.texture = null] The texture for the Image
     */
    constructor(parent, options = {}) {
        super(parent, options);
        // default options
        const defaults = {
                texture: null,
        };

        // fill in missing options with defaults
        options = Object.assign(options, defaults);

        /**
         * Holds the sprite internally
         * @member {PIXI.Sprite}
         * @private
         */
        this._sprite = new PIXI.Sprite();
        if(options.texture) {
            this._sprite.texture = options.texture;
        }
        this.addChild(this._sprite);
        this._sprite.width = this.width;
        this._sprite.height = this.height;

        this.sizeProxy = this._sprite;
    }

     /**
      * The PIXI.Sprite used internally
      * @method sprite
      * @return {PIXI.Sprite}
      */
    get sprite() {
        return this._sprite;
    }

    set sprite(val) { // eslint-disable-line require-jsdoc
        if(val instanceof PIXI.Sprite) {
            this._sprite = val;
        }
    }
}
