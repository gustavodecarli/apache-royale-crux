/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/ISelectableItemRenderer.as
 * org.apache.royale.core.ISelectableItemRenderer
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.ISelectableItemRenderer');
/* Royale Dependency List: */

goog.require('org.apache.royale.core.IItemRenderer');



/**
 * @interface
 * @extends {org.apache.royale.core.IItemRenderer}
 */
org.apache.royale.core.ISelectableItemRenderer = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.core.ISelectableItemRenderer', org.apache.royale.core.ISelectableItemRenderer);
/**  * @type {string}
 */org.apache.royale.core.ISelectableItemRenderer.prototype.labelField;
/**  * @type {number}
 */org.apache.royale.core.ISelectableItemRenderer.prototype.index;
/**  * @type {boolean}
 */org.apache.royale.core.ISelectableItemRenderer.prototype.selected;
/**  * @type {boolean}
 */org.apache.royale.core.ISelectableItemRenderer.prototype.hovered;
/**  * @type {boolean}
 */org.apache.royale.core.ISelectableItemRenderer.prototype.down;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.ISelectableItemRenderer.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ISelectableItemRenderer', qName: 'org.apache.royale.core.ISelectableItemRenderer', kind: 'interface' }], interfaces: [org.apache.royale.core.IItemRenderer] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.ISelectableItemRenderer.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'labelField': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.core.ISelectableItemRenderer'},
        'index': { type: 'int', access: 'readwrite', declaredBy: 'org.apache.royale.core.ISelectableItemRenderer'},
        'selected': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.core.ISelectableItemRenderer'},
        'hovered': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.core.ISelectableItemRenderer'},
        'down': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.core.ISelectableItemRenderer'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.core.ISelectableItemRenderer.prototype.ROYALE_COMPILE_FLAGS = 10;
