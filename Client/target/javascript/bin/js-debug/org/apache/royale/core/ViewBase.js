/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/ViewBase.as
 * org.apache.royale.core.ViewBase
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.ViewBase');
/* Royale Dependency List: org.apache.royale.utils.sendEvent*/

goog.require('org.apache.royale.core.GroupBase');
goog.require('org.apache.royale.core.IPopUpHost');
goog.require('org.apache.royale.core.IPopUpHostParent');
goog.require('org.apache.royale.core.IApplicationView');



/**
 *  Constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.core.GroupBase}
 * @implements {org.apache.royale.core.IPopUpHost}
 * @implements {org.apache.royale.core.IPopUpHostParent}
 * @implements {org.apache.royale.core.IApplicationView}
 */
org.apache.royale.core.ViewBase = function() {
  org.apache.royale.core.ViewBase.base(this, 'constructor');
  this.typeNames = "royale";
};
goog.inherits(org.apache.royale.core.ViewBase, org.apache.royale.core.GroupBase);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.core.ViewBase', org.apache.royale.core.ViewBase);


/**
 * @private
 * @type {Object}
 */
org.apache.royale.core.ViewBase.prototype.org_apache_royale_core_ViewBase__applicationModel;


org.apache.royale.core.ViewBase.prototype.get__applicationModel = function() {
  return this.org_apache_royale_core_ViewBase__applicationModel;
};


org.apache.royale.core.ViewBase.prototype.set__applicationModel = function(value) {
  this.org_apache_royale_core_ViewBase__applicationModel = value;
  org.apache.royale.utils.sendEvent(this, "modelChanged");
};


org.apache.royale.core.ViewBase.prototype.get__popUpParent = function() {
  return this;
};


org.apache.royale.core.ViewBase.prototype.get__popUpHost = function() {
  return this;
};


Object.defineProperties(org.apache.royale.core.ViewBase.prototype, /** @lends {org.apache.royale.core.ViewBase.prototype} */ {
/**
  * @export
  * @type {Object} */
applicationModel: {
get: org.apache.royale.core.ViewBase.prototype.get__applicationModel,
set: org.apache.royale.core.ViewBase.prototype.set__applicationModel},
/**
  * @export
  * @type {org.apache.royale.core.IPopUpHostParent} */
popUpParent: {
get: org.apache.royale.core.ViewBase.prototype.get__popUpParent},
/**
  * @export
  * @type {org.apache.royale.core.IPopUpHost} */
popUpHost: {
get: org.apache.royale.core.ViewBase.prototype.get__popUpHost}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.ViewBase.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ViewBase', qName: 'org.apache.royale.core.ViewBase', kind: 'class' }], interfaces: [org.apache.royale.core.IPopUpHost, org.apache.royale.core.IPopUpHostParent, org.apache.royale.core.IApplicationView] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.ViewBase.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'applicationModel': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.royale.core.ViewBase', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'modelChanged' } ] } ]; }},
        'popUpParent': { type: 'org.apache.royale.core.IPopUpHostParent', access: 'readonly', declaredBy: 'org.apache.royale.core.ViewBase'},
        'popUpHost': { type: 'org.apache.royale.core.IPopUpHost', access: 'readonly', declaredBy: 'org.apache.royale.core.ViewBase'}
      };
    },
    methods: function () {
      return {
        'ViewBase': { type: '', declaredBy: 'org.apache.royale.core.ViewBase'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.core.ViewBase.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./ViewBase.js.map
