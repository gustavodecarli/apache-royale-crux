/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/StyledMXMLItemRenderer.as
 * org.apache.royale.core.StyledMXMLItemRenderer
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.StyledMXMLItemRenderer');
/* Royale Dependency List: org.apache.royale.utils.ClassSelectorList,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.html.supportClasses.MXMLItemRenderer');
goog.require('org.apache.royale.utils.IEmphasis');
goog.require('org.apache.royale.core.IRuntimeSelectableItemRenderer');
goog.require('org.apache.royale.utils.IClassSelectorListSupport');



/**
 *  constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.3
 * @constructor
 * @extends {org.apache.royale.html.supportClasses.MXMLItemRenderer}
 * @implements {org.apache.royale.utils.IClassSelectorListSupport}
 * @implements {org.apache.royale.core.IRuntimeSelectableItemRenderer}
 * @implements {org.apache.royale.utils.IEmphasis}
 */
org.apache.royale.core.StyledMXMLItemRenderer = function() {
  org.apache.royale.core.StyledMXMLItemRenderer.base(this, 'constructor');
  this.typeNames = "";
  this.classSelectorList = new org.apache.royale.utils.ClassSelectorList(this);
};
goog.inherits(org.apache.royale.core.StyledMXMLItemRenderer, org.apache.royale.html.supportClasses.MXMLItemRenderer);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.core.StyledMXMLItemRenderer', org.apache.royale.core.StyledMXMLItemRenderer);


/**
 * @protected
 * @type {org.apache.royale.utils.ClassSelectorList}
 */
org.apache.royale.core.StyledMXMLItemRenderer.prototype.classSelectorList;


/**
 * @protected
 * @override
 */
org.apache.royale.core.StyledMXMLItemRenderer.prototype.setClassName = function(value) {
  this.classSelectorList.addNames(value);
};


/**
 * Add a class selector to the list.
 * 
 * @asparam name Name of selector to add.
 * 
 * @langversion 3.0
 * @playerversion Flash 10.2
 * @playerversion AIR 2.6
 * @productversion Royale 0.9.3
 * @export
 * @param {string} name
 */
org.apache.royale.core.StyledMXMLItemRenderer.prototype.addClass = function(name) {
  this.classSelectorList.add(name);
};


/**
 * Removes a class selector from the list.
 * 
 * @asparam name Name of selector to remove.
 *
 * @royaleignorecoercion HTMLElement
 * @royaleignorecoercion DOMTokenList
 * 
 * @langversion 3.0
 * @playerversion Flash 10.2
 * @playerversion AIR 2.6
 * @productversion Royale 0.9.3
 * @export
 * @param {string} name
 */
org.apache.royale.core.StyledMXMLItemRenderer.prototype.removeClass = function(name) {
  this.classSelectorList.remove(name);
};


/**
 * Add or remove a class selector to/from the list.
 * 
 * @asparam name Name of selector to add or remove.
 * @asparam value True to add, False to remove.
 * 
 * @langversion 3.0
 * @playerversion Flash 10.2
 * @playerversion AIR 2.6
 * @productversion Royale 0.9.3
 * @export
 * @param {string} name
 * @param {boolean} value
 */
org.apache.royale.core.StyledMXMLItemRenderer.prototype.toggleClass = function(name, value) {
  this.classSelectorList.toggle(name, value);
};


/**
 *  Search for the name in the element class list 
 *
 *  @asparam name Name of selector to find.
 *  @asreturn return true if the name is found or false otherwise.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.3
 * @export
 * @param {string} name
 * @return {boolean}
 */
org.apache.royale.core.StyledMXMLItemRenderer.prototype.containsClass = function(name) {
  return this.classSelectorList.contains(name);
  
};


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.core.StyledMXMLItemRenderer.prototype.org_apache_royale_core_StyledMXMLItemRenderer__selectable = true;


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.core.StyledMXMLItemRenderer.prototype.org_apache_royale_core_StyledMXMLItemRenderer__hoverable = true;


/**
 * @private
 * @type {string}
 */
org.apache.royale.core.StyledMXMLItemRenderer.prototype.org_apache_royale_core_StyledMXMLItemRenderer__emphasis;


/**
 *  The method called when added to a parent. The StyledItemRenderer class uses
 *  this opportunity to assign emphasis from the strand if possible, otherwise defaults
 *  to PRIMARY.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.7
 * @export
 * @override
 */
org.apache.royale.core.StyledMXMLItemRenderer.prototype.addedToParent = function() {
  org.apache.royale.core.StyledMXMLItemRenderer.superClass_.addedToParent.apply(this);
  if (org.apache.royale.utils.Language.is(this.itemRendererParent.host, org.apache.royale.utils.IEmphasis) && org.apache.royale.utils.Language.as(this.itemRendererParent.host, org.apache.royale.utils.IEmphasis).emphasis) {
    this.emphasis = org.apache.royale.utils.Language.as(this.itemRendererParent.host, org.apache.royale.utils.IEmphasis).emphasis;
  } else {
    this.emphasis = "primary";
  }
};


org.apache.royale.core.StyledMXMLItemRenderer.prototype.get__selectable = function() {
  return this.org_apache_royale_core_StyledMXMLItemRenderer__selectable;
};


org.apache.royale.core.StyledMXMLItemRenderer.prototype.set__selectable = function(value) {
  this.org_apache_royale_core_StyledMXMLItemRenderer__selectable = value;
};


org.apache.royale.core.StyledMXMLItemRenderer.prototype.get__hoverable = function() {
  return this.org_apache_royale_core_StyledMXMLItemRenderer__hoverable;
};


org.apache.royale.core.StyledMXMLItemRenderer.prototype.set__hoverable = function(value) {
  this.org_apache_royale_core_StyledMXMLItemRenderer__hoverable = value;
};


org.apache.royale.core.StyledMXMLItemRenderer.prototype.get__emphasis = function() {
  return this.org_apache_royale_core_StyledMXMLItemRenderer__emphasis;
};


org.apache.royale.core.StyledMXMLItemRenderer.prototype.set__emphasis = function(value) {
  if (this.org_apache_royale_core_StyledMXMLItemRenderer__emphasis != value) {
    if (this.org_apache_royale_core_StyledMXMLItemRenderer__emphasis) {
      this.toggleClass(this.org_apache_royale_core_StyledMXMLItemRenderer__emphasis, false);
    }
    this.org_apache_royale_core_StyledMXMLItemRenderer__emphasis = value;
    this.toggleClass(this.org_apache_royale_core_StyledMXMLItemRenderer__emphasis, !!(value));
  }
};


Object.defineProperties(org.apache.royale.core.StyledMXMLItemRenderer.prototype, /** @lends {org.apache.royale.core.StyledMXMLItemRenderer.prototype} */ {
/**
  * @export
  * @type {boolean} */
selectable: {
get: org.apache.royale.core.StyledMXMLItemRenderer.prototype.get__selectable,
set: org.apache.royale.core.StyledMXMLItemRenderer.prototype.set__selectable},
/**
  * @export
  * @type {boolean} */
hoverable: {
get: org.apache.royale.core.StyledMXMLItemRenderer.prototype.get__hoverable,
set: org.apache.royale.core.StyledMXMLItemRenderer.prototype.set__hoverable},
/**
  * @export
  * @type {string} */
emphasis: {
get: org.apache.royale.core.StyledMXMLItemRenderer.prototype.get__emphasis,
set: org.apache.royale.core.StyledMXMLItemRenderer.prototype.set__emphasis}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.StyledMXMLItemRenderer.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'StyledMXMLItemRenderer', qName: 'org.apache.royale.core.StyledMXMLItemRenderer', kind: 'class' }], interfaces: [org.apache.royale.utils.IClassSelectorListSupport, org.apache.royale.core.IRuntimeSelectableItemRenderer, org.apache.royale.utils.IEmphasis] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.StyledMXMLItemRenderer.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'selectable': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.core.StyledMXMLItemRenderer'},
        'hoverable': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.core.StyledMXMLItemRenderer'},
        'emphasis': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.core.StyledMXMLItemRenderer'}
      };
    },
    methods: function () {
      return {
        'StyledMXMLItemRenderer': { type: '', declaredBy: 'org.apache.royale.core.StyledMXMLItemRenderer'},
        'addClass': { type: 'void', declaredBy: 'org.apache.royale.core.StyledMXMLItemRenderer', parameters: function () { return [ 'String', false ]; }},
        'removeClass': { type: 'void', declaredBy: 'org.apache.royale.core.StyledMXMLItemRenderer', parameters: function () { return [ 'String', false ]; }},
        'toggleClass': { type: 'void', declaredBy: 'org.apache.royale.core.StyledMXMLItemRenderer', parameters: function () { return [ 'String', false ,'Boolean', false ]; }},
        'containsClass': { type: 'Boolean', declaredBy: 'org.apache.royale.core.StyledMXMLItemRenderer', parameters: function () { return [ 'String', false ]; }},
        'addedToParent': { type: 'void', declaredBy: 'org.apache.royale.core.StyledMXMLItemRenderer'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.core.StyledMXMLItemRenderer.prototype.ROYALE_COMPILE_FLAGS = 10;
