/**
 * Generated by Apache Royale Compiler from org/apache/royale/jewel/itemRenderers/ButtonBarItemRenderer.as
 * org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer');
/* Royale Dependency List: org.apache.royale.core.SimpleCSSStylesWithFlex,org.apache.royale.events.ItemClickedEvent,org.apache.royale.events.MouseEvent,org.apache.royale.html.util.getLabelFromData,org.apache.royale.jewel.ButtonBar,org.apache.royale.jewel.beads.views.ButtonBarView,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.jewel.Button');
goog.require('org.apache.royale.html.beads.ITextItemRenderer');



/**
 * @constructor
 * @extends {org.apache.royale.jewel.Button}
 * @implements {org.apache.royale.html.beads.ITextItemRenderer}
 */
org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer = function() {
  org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.base(this, 'constructor');
  this.style = new org.apache.royale.core.SimpleCSSStylesWithFlex();
  this.addEventListener('click', org.apache.royale.utils.Language.closure(this.handleClickEvent, this, 'handleClickEvent'));
};
goog.inherits(org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer, org.apache.royale.jewel.Button);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer', org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer);


/**
 * @private
 * @type {Object}
 */
org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.org_apache_royale_jewel_itemRenderers_ButtonBarItemRenderer__data;


/**
 * @asprivate
 * @protected
 * @param {org.apache.royale.events.MouseEvent} event
 */
org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.handleClickEvent = function(event) {
  var /** @type {org.apache.royale.events.ItemClickedEvent} */ newEvent = new org.apache.royale.events.ItemClickedEvent("itemClicked");
  newEvent.index = this.index;
  newEvent.data = this.data;
  this.dispatchEvent(newEvent);
};


/**
 * @private
 * @type {Object}
 */
org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.org_apache_royale_jewel_itemRenderers_ButtonBarItemRenderer__itemRendererParent;


/**
 * @private
 * @type {string}
 */
org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.org_apache_royale_jewel_itemRenderers_ButtonBarItemRenderer__labelField = null;


/**
 * @private
 * @type {Object}
 */
org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.org_apache_royale_jewel_itemRenderers_ButtonBarItemRenderer__listData;


/**
 * @private
 * @type {number}
 */
org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.org_apache_royale_jewel_itemRenderers_ButtonBarItemRenderer__index = 0;


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.org_apache_royale_jewel_itemRenderers_ButtonBarItemRenderer__selectable = true;


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.org_apache_royale_jewel_itemRenderers_ButtonBarItemRenderer__hoverable = true;


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.org_apache_royale_jewel_itemRenderers_ButtonBarItemRenderer__hovered;


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.org_apache_royale_jewel_itemRenderers_ButtonBarItemRenderer__selected;


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.org_apache_royale_jewel_itemRenderers_ButtonBarItemRenderer__down;


org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.get__data = function() {
  return this.org_apache_royale_jewel_itemRenderers_ButtonBarItemRenderer__data;
};


org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.set__data = function(value) {
  this.org_apache_royale_jewel_itemRenderers_ButtonBarItemRenderer__data = value;
  this.text = org.apache.royale.html.util.getLabelFromData(this, value);
};


org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.get__itemRendererParent = function() {
  return this.org_apache_royale_jewel_itemRenderers_ButtonBarItemRenderer__itemRendererParent;
};


org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.set__itemRendererParent = function(value) {
  this.org_apache_royale_jewel_itemRenderers_ButtonBarItemRenderer__itemRendererParent = value;
  var /** @type {org.apache.royale.jewel.ButtonBar} */ buttonBar = org.apache.royale.utils.Language.as(this.itemRendererParent, org.apache.royale.jewel.beads.views.ButtonBarView).buttonBar;
  if (buttonBar.emphasis != null) {
    this.emphasis = buttonBar.emphasis;
  }
};


org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.get__labelField = function() {
  return this.org_apache_royale_jewel_itemRenderers_ButtonBarItemRenderer__labelField;
};


org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.set__labelField = function(value) {
  this.org_apache_royale_jewel_itemRenderers_ButtonBarItemRenderer__labelField = value;
  this.text = org.apache.royale.html.util.getLabelFromData(this, value);
};


org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.get__listData = function() {
  return this.org_apache_royale_jewel_itemRenderers_ButtonBarItemRenderer__listData;
};


org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.set__listData = function(value) {
  this.org_apache_royale_jewel_itemRenderers_ButtonBarItemRenderer__listData = value;
};


org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.get__index = function() {
  return this.org_apache_royale_jewel_itemRenderers_ButtonBarItemRenderer__index;
};


org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.set__index = function(value) {
  this.org_apache_royale_jewel_itemRenderers_ButtonBarItemRenderer__index = value;
  if (this.org_apache_royale_jewel_itemRenderers_ButtonBarItemRenderer__index == 0) {
    this.addClass("first");
  } else if (this.org_apache_royale_jewel_itemRenderers_ButtonBarItemRenderer__index == org.apache.royale.utils.Language.as(this.itemRendererParent, org.apache.royale.jewel.beads.views.ButtonBarView).buttonBar.dataProvider.length - 1) {
    this.addClass("last");
  } else {
    this.addClass("middle");
  }
};


org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.get__selectable = function() {
  return this.org_apache_royale_jewel_itemRenderers_ButtonBarItemRenderer__selectable;
};


org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.set__selectable = function(value) {
  this.org_apache_royale_jewel_itemRenderers_ButtonBarItemRenderer__selectable = value;
};


org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.get__hoverable = function() {
  return this.org_apache_royale_jewel_itemRenderers_ButtonBarItemRenderer__hoverable;
};


org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.set__hoverable = function(value) {
  this.org_apache_royale_jewel_itemRenderers_ButtonBarItemRenderer__hoverable = value;
};


org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.get__hovered = function() {
  return this.org_apache_royale_jewel_itemRenderers_ButtonBarItemRenderer__hovered;
};


org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.set__hovered = function(value) {
  this.org_apache_royale_jewel_itemRenderers_ButtonBarItemRenderer__hovered = value;
};


org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.get__selected = function() {
  return this.org_apache_royale_jewel_itemRenderers_ButtonBarItemRenderer__selected;
};


org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.set__selected = function(value) {
  this.org_apache_royale_jewel_itemRenderers_ButtonBarItemRenderer__selected = value;
};


org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.get__down = function() {
  return this.org_apache_royale_jewel_itemRenderers_ButtonBarItemRenderer__down;
};


org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.set__down = function(value) {
  this.org_apache_royale_jewel_itemRenderers_ButtonBarItemRenderer__down = value;
};


Object.defineProperties(org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype, /** @lends {org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype} */ {
/**
  * @export
  * @type {Object} */
data: {
get: org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.get__data,
set: org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.set__data},
/**
  * @export
  * @type {Object} */
itemRendererParent: {
get: org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.get__itemRendererParent,
set: org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.set__itemRendererParent},
/**
  * @export
  * @type {string} */
labelField: {
get: org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.get__labelField,
set: org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.set__labelField},
/**
  * @export
  * @type {Object} */
listData: {
get: org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.get__listData,
set: org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.set__listData},
/**
  * @export
  * @type {number} */
index: {
get: org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.get__index,
set: org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.set__index},
/**
  * @export
  * @type {boolean} */
selectable: {
get: org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.get__selectable,
set: org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.set__selectable},
/**
  * @export
  * @type {boolean} */
hoverable: {
get: org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.get__hoverable,
set: org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.set__hoverable},
/**
  * @export
  * @type {boolean} */
hovered: {
get: org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.get__hovered,
set: org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.set__hovered},
/**
  * @export
  * @type {boolean} */
selected: {
get: org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.get__selected,
set: org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.set__selected},
/**
  * @export
  * @type {boolean} */
down: {
get: org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.get__down,
set: org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.set__down}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ButtonBarItemRenderer', qName: 'org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer', kind: 'class' }], interfaces: [org.apache.royale.html.beads.ITextItemRenderer] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'data': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer'},
        'itemRendererParent': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer'},
        'labelField': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer'},
        'listData': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: '__NoChangeEvent__' } ] } ]; }},
        'index': { type: 'int', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer'},
        'selectable': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer'},
        'hoverable': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer'},
        'hovered': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer'},
        'selected': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer'},
        'down': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer'}
      };
    },
    methods: function () {
      return {
        'ButtonBarItemRenderer': { type: '', declaredBy: 'org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.jewel.itemRenderers.ButtonBarItemRenderer.prototype.ROYALE_COMPILE_FLAGS = 10;
