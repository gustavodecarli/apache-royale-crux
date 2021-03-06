/**
 * Generated by Apache Royale Compiler from org/apache/royale/jewel/ControlBar.as
 * org.apache.royale.jewel.ControlBar
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.jewel.ControlBar');
/* Royale Dependency List: org.apache.royale.core.IBeadLayout,org.apache.royale.core.WrappedHTMLElement,org.apache.royale.html.util.addElementToWrapper,org.apache.royale.utils.loadBeadFromValuesManager*/

goog.require('org.apache.royale.jewel.Group');
goog.require('org.apache.royale.core.IChrome');



/**
 *  constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.4
 * @constructor
 * @extends {org.apache.royale.jewel.Group}
 * @implements {org.apache.royale.core.IChrome}
 */
org.apache.royale.jewel.ControlBar = function() {
  org.apache.royale.jewel.ControlBar.base(this, 'constructor');
  this.typeNames = "jewel controlbar";
};
goog.inherits(org.apache.royale.jewel.ControlBar, org.apache.royale.jewel.Group);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.jewel.ControlBar', org.apache.royale.jewel.ControlBar);


/**
 * @asprivate
 * @export
 * @override
 */
org.apache.royale.jewel.ControlBar.prototype.addedToParent = function() {
  org.apache.royale.jewel.ControlBar.superClass_.addedToParent.apply(this);
  org.apache.royale.utils.loadBeadFromValuesManager(org.apache.royale.core.IBeadLayout, "iBeadLayout", this);
};


/**
 * @royaleignorecoercion org.apache.royale.core.WrappedHTMLElement
 * @protected
 * @override
 */
org.apache.royale.jewel.ControlBar.prototype.createElement = function() {
  return org.apache.royale.html.util.addElementToWrapper(this, 'div');
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.jewel.ControlBar.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ControlBar', qName: 'org.apache.royale.jewel.ControlBar', kind: 'class' }], interfaces: [org.apache.royale.core.IChrome] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.jewel.ControlBar.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'ControlBar': { type: '', declaredBy: 'org.apache.royale.jewel.ControlBar'},
        'addedToParent': { type: 'void', declaredBy: 'org.apache.royale.jewel.ControlBar'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.jewel.ControlBar.prototype.ROYALE_COMPILE_FLAGS = 10;
