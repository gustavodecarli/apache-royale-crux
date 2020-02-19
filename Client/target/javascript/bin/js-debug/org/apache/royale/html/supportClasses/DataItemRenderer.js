/**
 * Generated by Apache Royale Compiler from org/apache/royale/html/supportClasses/DataItemRenderer.as
 * org.apache.royale.html.supportClasses.DataItemRenderer
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.supportClasses.DataItemRenderer');
/* Royale Dependency List: org.apache.royale.core.IBeadController,org.apache.royale.core.WrappedHTMLElement,org.apache.royale.html.util.addElementToWrapper*/

goog.require('org.apache.royale.html.supportClasses.UIItemRendererBase');



/**
 *  constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.html.supportClasses.UIItemRendererBase}
 */
org.apache.royale.html.supportClasses.DataItemRenderer = function() {
  org.apache.royale.html.supportClasses.DataItemRenderer.base(this, 'constructor');
};
goog.inherits(org.apache.royale.html.supportClasses.DataItemRenderer, org.apache.royale.html.supportClasses.UIItemRendererBase);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.html.supportClasses.DataItemRenderer', org.apache.royale.html.supportClasses.DataItemRenderer);


/**
 * @private
 * @type {number}
 */
org.apache.royale.html.supportClasses.DataItemRenderer.prototype.org_apache_royale_html_supportClasses_DataItemRenderer__columnIndex = 0;


/**
 * @private
 * @type {number}
 */
org.apache.royale.html.supportClasses.DataItemRenderer.prototype.org_apache_royale_html_supportClasses_DataItemRenderer__rowIndex = 0;


/**
 * @private
 * @type {string}
 */
org.apache.royale.html.supportClasses.DataItemRenderer.prototype.org_apache_royale_html_supportClasses_DataItemRenderer__dataField;


/**
 * @protected
 * @type {org.apache.royale.core.IBeadController}
 */
org.apache.royale.html.supportClasses.DataItemRenderer.prototype.controller;


/**
 * @asprivate
 * @export
 * @override
 */
org.apache.royale.html.supportClasses.DataItemRenderer.prototype.updateRenderer = function() {
  
  if (this.selected)
    this.element.style.backgroundColor = '#9C9C9C';
  else if (this.hovered)
    this.element.style.backgroundColor = '#ECECEC';
  else
    this.element.style.backgroundColor = 'transparent';
};


/**
 * @royaleignorecoercion org.apache.royale.core.WrappedHTMLElement
 *
 * @protected
 * @override
 */
org.apache.royale.html.supportClasses.DataItemRenderer.prototype.createElement = function() {
  org.apache.royale.html.util.addElementToWrapper(this, 'div');
  this.className = 'DataItemRenderer';
  return this.element;
};


org.apache.royale.html.supportClasses.DataItemRenderer.prototype.get__columnIndex = function() {
  return this.org_apache_royale_html_supportClasses_DataItemRenderer__columnIndex;
};


org.apache.royale.html.supportClasses.DataItemRenderer.prototype.set__columnIndex = function(value) {
  this.org_apache_royale_html_supportClasses_DataItemRenderer__columnIndex = value;
};


org.apache.royale.html.supportClasses.DataItemRenderer.prototype.get__rowIndex = function() {
  return this.org_apache_royale_html_supportClasses_DataItemRenderer__rowIndex;
};


org.apache.royale.html.supportClasses.DataItemRenderer.prototype.set__rowIndex = function(value) {
  this.org_apache_royale_html_supportClasses_DataItemRenderer__rowIndex = value;
};


org.apache.royale.html.supportClasses.DataItemRenderer.prototype.get__dataField = function() {
  return this.org_apache_royale_html_supportClasses_DataItemRenderer__dataField;
};


org.apache.royale.html.supportClasses.DataItemRenderer.prototype.set__dataField = function(value) {
  this.org_apache_royale_html_supportClasses_DataItemRenderer__dataField = value;
};


Object.defineProperties(org.apache.royale.html.supportClasses.DataItemRenderer.prototype, /** @lends {org.apache.royale.html.supportClasses.DataItemRenderer.prototype} */ {
/**
  * @export
  * @type {number} */
columnIndex: {
get: org.apache.royale.html.supportClasses.DataItemRenderer.prototype.get__columnIndex,
set: org.apache.royale.html.supportClasses.DataItemRenderer.prototype.set__columnIndex},
/**
  * @export
  * @type {number} */
rowIndex: {
get: org.apache.royale.html.supportClasses.DataItemRenderer.prototype.get__rowIndex,
set: org.apache.royale.html.supportClasses.DataItemRenderer.prototype.set__rowIndex},
/**
  * @export
  * @type {string} */
dataField: {
get: org.apache.royale.html.supportClasses.DataItemRenderer.prototype.get__dataField,
set: org.apache.royale.html.supportClasses.DataItemRenderer.prototype.set__dataField}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.supportClasses.DataItemRenderer.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'DataItemRenderer', qName: 'org.apache.royale.html.supportClasses.DataItemRenderer', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.supportClasses.DataItemRenderer.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'columnIndex': { type: 'int', access: 'readwrite', declaredBy: 'org.apache.royale.html.supportClasses.DataItemRenderer'},
        'rowIndex': { type: 'int', access: 'readwrite', declaredBy: 'org.apache.royale.html.supportClasses.DataItemRenderer'},
        'dataField': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.html.supportClasses.DataItemRenderer'}
      };
    },
    methods: function () {
      return {
        'DataItemRenderer': { type: '', declaredBy: 'org.apache.royale.html.supportClasses.DataItemRenderer'},
        'updateRenderer': { type: 'void', declaredBy: 'org.apache.royale.html.supportClasses.DataItemRenderer'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.html.supportClasses.DataItemRenderer.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./DataItemRenderer.js.map
