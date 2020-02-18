/**
 * Generated by Apache Royale Compiler from org/apache/royale/jewel/supportClasses/formitem/FormItemLayoutProxy.as
 * org.apache.royale.jewel.supportClasses.formitem.FormItemLayoutProxy
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.jewel.supportClasses.formitem.FormItemLayoutProxy');
/* Royale Dependency List: org.apache.royale.core.IChild,org.apache.royale.core.IContainerBaseStrandChildrenHost,org.apache.royale.core.UIBase,org.apache.royale.core.WrappedHTMLElement*/

goog.require('org.apache.royale.core.ILayoutView');
goog.require('org.apache.royale.core.IParent');



/**
 *  Constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.4
 * @constructor
 * @implements {org.apache.royale.core.ILayoutView}
 * @implements {org.apache.royale.core.IParent}
 * @param {Object} host
 */
org.apache.royale.jewel.supportClasses.formitem.FormItemLayoutProxy = function(host) {
  ;
  this.org_apache_royale_jewel_supportClasses_formitem_FormItemLayoutProxy__host = host;
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.jewel.supportClasses.formitem.FormItemLayoutProxy', org.apache.royale.jewel.supportClasses.formitem.FormItemLayoutProxy);


/**
 * @private
 * @type {Object}
 */
org.apache.royale.jewel.supportClasses.formitem.FormItemLayoutProxy.prototype.org_apache_royale_jewel_supportClasses_formitem_FormItemLayoutProxy__host;


/**
 *  @royaleignorecoercion org.apache.royale.core.IContainerBaseStrandChildrenHost
 *  Get a component from the parent.
 *
 *  @asparam c The index of the subcomponent.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.4
 * @export
 * @param {number} index
 * @return {org.apache.royale.core.IChild}
 */
org.apache.royale.jewel.supportClasses.formitem.FormItemLayoutProxy.prototype.getElementAt = function(index) {
  return this.host.$getElementAt(index);
};


/**
 *  @royaleignorecoercion org.apache.royale.core.IContainerBaseStrandChildrenHost
 *  Gets the index of this subcomponent.
 * 
 *  @asparam c The subcomponent to add.
 *  @asreturn The index (zero-based).
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.4
 * @export
 * @param {org.apache.royale.core.IChild} c
 * @return {number}
 */
org.apache.royale.jewel.supportClasses.formitem.FormItemLayoutProxy.prototype.getElementIndex = function(c) {
  return this.host.$getElementIndex(c);
};


/**
 *  @royaleignorecoercion org.apache.royale.core.IContainerBaseStrandChildrenHost
 *  Add a component to the parent.
 * 
 *  @asparam c The subcomponent to add.
 *  @asparam dispatchEvent Whether to dispatch an event after adding the child.
 * 
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.4
 * @export
 * @param {org.apache.royale.core.IChild} c
 * @param {boolean=} dispatchEvent
 */
org.apache.royale.jewel.supportClasses.formitem.FormItemLayoutProxy.prototype.addElement = function(c, dispatchEvent) {
  dispatchEvent = typeof dispatchEvent !== 'undefined' ? dispatchEvent : true;
  this.host.$addElement(c);
};


/**
 *  @royaleignorecoercion org.apache.royale.core.IContainerBaseStrandChildrenHost
 *  Add a component to the parent.
 * 
 *  @asparam c The subcomponent to add.
 *  @asparam index The index where the subcomponent should be added.
 *  @asparam dispatchEvent Whether to dispatch an event after adding the child.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.4
 * @export
 * @param {org.apache.royale.core.IChild} c
 * @param {number} index
 * @param {boolean=} dispatchEvent
 */
org.apache.royale.jewel.supportClasses.formitem.FormItemLayoutProxy.prototype.addElementAt = function(c, index, dispatchEvent) {
  dispatchEvent = typeof dispatchEvent !== 'undefined' ? dispatchEvent : true;
  return this.host.$addElementAt(c, index);
};


/**
 *  @royaleignorecoercion org.apache.royale.core.IContainerBaseStrandChildrenHost
 *  Remove a component from the parent.
 * 
 *  @asparam c The subcomponent to remove.
 *  @asparam dispatchEvent Whether to dispatch an event after removing the child.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.4
 * @export
 * @param {org.apache.royale.core.IChild} c
 * @param {boolean=} dispatchEvent
 */
org.apache.royale.jewel.supportClasses.formitem.FormItemLayoutProxy.prototype.removeElement = function(c, dispatchEvent) {
  dispatchEvent = typeof dispatchEvent !== 'undefined' ? dispatchEvent : true;
  return this.host.$removeElement(c);
};


/**
 *  @royaleignorecoercion org.apache.royale.core.UIBase
 *  The display style is used for both visible
 *  and layout so is managed as a special case.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.4
 * @export
 * @param {string} value
 */
org.apache.royale.jewel.supportClasses.formitem.FormItemLayoutProxy.prototype.setDisplayStyleForLayout = function(value) {
  this.host.setDisplayStyleForLayout(value);
};


org.apache.royale.jewel.supportClasses.formitem.FormItemLayoutProxy.prototype.get__host = function() {
  return this.org_apache_royale_jewel_supportClasses_formitem_FormItemLayoutProxy__host;
};


org.apache.royale.jewel.supportClasses.formitem.FormItemLayoutProxy.prototype.get__width = function() {
  return this.host.width;
};


org.apache.royale.jewel.supportClasses.formitem.FormItemLayoutProxy.prototype.get__height = function() {
  return this.host.height;
};


org.apache.royale.jewel.supportClasses.formitem.FormItemLayoutProxy.prototype.get__numElements = function() {
  return this.host.$numElements;
};


org.apache.royale.jewel.supportClasses.formitem.FormItemLayoutProxy.prototype.get__somethingelse = function() {
  return this.host.element;
};


org.apache.royale.jewel.supportClasses.formitem.FormItemLayoutProxy.prototype.get__element = function() {
  return this.host.element;
};


org.apache.royale.jewel.supportClasses.formitem.FormItemLayoutProxy.prototype.get__displayStyleForLayout = function() {
  return this.host.displayStyleForLayout;
};


Object.defineProperties(org.apache.royale.jewel.supportClasses.formitem.FormItemLayoutProxy.prototype, /** @lends {org.apache.royale.jewel.supportClasses.formitem.FormItemLayoutProxy.prototype} */ {
/**
  * @export
  * @type {Object} */
host: {
get: org.apache.royale.jewel.supportClasses.formitem.FormItemLayoutProxy.prototype.get__host},
/**
  * @export
  * @type {number} */
width: {
get: org.apache.royale.jewel.supportClasses.formitem.FormItemLayoutProxy.prototype.get__width},
/**
  * @export
  * @type {number} */
height: {
get: org.apache.royale.jewel.supportClasses.formitem.FormItemLayoutProxy.prototype.get__height},
/**
  * @export
  * @type {number} */
numElements: {
get: org.apache.royale.jewel.supportClasses.formitem.FormItemLayoutProxy.prototype.get__numElements},
/**
  * @export
  * @type {org.apache.royale.core.WrappedHTMLElement} */
somethingelse: {
get: org.apache.royale.jewel.supportClasses.formitem.FormItemLayoutProxy.prototype.get__somethingelse},
/**
  * @export
  * @type {org.apache.royale.core.WrappedHTMLElement} */
element: {
get: org.apache.royale.jewel.supportClasses.formitem.FormItemLayoutProxy.prototype.get__element},
/**
  * @export
  * @type {string} */
displayStyleForLayout: {
get: org.apache.royale.jewel.supportClasses.formitem.FormItemLayoutProxy.prototype.get__displayStyleForLayout}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.jewel.supportClasses.formitem.FormItemLayoutProxy.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'FormItemLayoutProxy', qName: 'org.apache.royale.jewel.supportClasses.formitem.FormItemLayoutProxy', kind: 'class' }], interfaces: [org.apache.royale.core.ILayoutView, org.apache.royale.core.IParent] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.jewel.supportClasses.formitem.FormItemLayoutProxy.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'host': { type: 'Object', access: 'readonly', declaredBy: 'org.apache.royale.jewel.supportClasses.formitem.FormItemLayoutProxy'},
        'width': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.royale.jewel.supportClasses.formitem.FormItemLayoutProxy'},
        'height': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.royale.jewel.supportClasses.formitem.FormItemLayoutProxy'},
        'numElements': { type: 'int', access: 'readonly', declaredBy: 'org.apache.royale.jewel.supportClasses.formitem.FormItemLayoutProxy'},
        'somethingelse': { type: 'org.apache.royale.core.WrappedHTMLElement', access: 'readonly', declaredBy: 'org.apache.royale.jewel.supportClasses.formitem.FormItemLayoutProxy'},
        'element': { type: 'org.apache.royale.core.WrappedHTMLElement', access: 'readonly', declaredBy: 'org.apache.royale.jewel.supportClasses.formitem.FormItemLayoutProxy'},
        'displayStyleForLayout': { type: 'String', access: 'readonly', declaredBy: 'org.apache.royale.jewel.supportClasses.formitem.FormItemLayoutProxy'}
      };
    },
    methods: function () {
      return {
        'FormItemLayoutProxy': { type: '', declaredBy: 'org.apache.royale.jewel.supportClasses.formitem.FormItemLayoutProxy', parameters: function () { return [ 'Object', false ]; }},
        'getElementAt': { type: 'org.apache.royale.core.IChild', declaredBy: 'org.apache.royale.jewel.supportClasses.formitem.FormItemLayoutProxy', parameters: function () { return [ 'int', false ]; }},
        'getElementIndex': { type: 'int', declaredBy: 'org.apache.royale.jewel.supportClasses.formitem.FormItemLayoutProxy', parameters: function () { return [ 'org.apache.royale.core.IChild', false ]; }},
        'addElement': { type: 'void', declaredBy: 'org.apache.royale.jewel.supportClasses.formitem.FormItemLayoutProxy', parameters: function () { return [ 'org.apache.royale.core.IChild', false ,'Boolean', true ]; }},
        'addElementAt': { type: 'void', declaredBy: 'org.apache.royale.jewel.supportClasses.formitem.FormItemLayoutProxy', parameters: function () { return [ 'org.apache.royale.core.IChild', false ,'int', false ,'Boolean', true ]; }},
        'removeElement': { type: 'void', declaredBy: 'org.apache.royale.jewel.supportClasses.formitem.FormItemLayoutProxy', parameters: function () { return [ 'org.apache.royale.core.IChild', false ,'Boolean', true ]; }},
        'setDisplayStyleForLayout': { type: 'void', declaredBy: 'org.apache.royale.jewel.supportClasses.formitem.FormItemLayoutProxy', parameters: function () { return [ 'String', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.jewel.supportClasses.formitem.FormItemLayoutProxy.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./FormItemLayoutProxy.js.map
