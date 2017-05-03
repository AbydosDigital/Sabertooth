import {HORIZONTAL} from '../.././const';
import BasePolicy from './BasePolicy';

/**
 * Sets the user defined size
 * @memberof ST.SizePolicies
 * @extends ST.SizePolicies.BasePolicy
 */
export default class FixedPolicy extends BasePolicy {
    /**
     * @param {ST.Widgets.BaseWidget} hostWidget
     * The widget this policy belongs to
     * @param {number} [orientation=HORIZONTAL] The orientation of the policy
     */
    constructor(hostWidget, orientation = HORIZONTAL) {
        super(hostWidget, orientation);

        /**
         * @override
         */
        this.updateOnHostChanges = true;

        /**
         * Fires after size is set
         * @event ST.SizePolicies.FixedPolicy#finished
         * @param {Number} size the size of the widget
         */
    }

    /**
     * Validates size
     * @override
     */
    sizeWidgetHorizontal() {
        this.validateWidth(); // make obey widget.min and max
        this.emit('finished', this._host.width);
    }

    /**
     * Validates size
     * @override
     */
    sizeWidgetVertical() {
        this.validateHeight(); // make obey widget.min and max
        this.emit('finished', this._host.height);
    }
}
