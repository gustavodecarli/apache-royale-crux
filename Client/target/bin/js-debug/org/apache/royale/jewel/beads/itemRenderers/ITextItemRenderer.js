/**
 * Generated by Apache Royale Compiler from org/apache/royale/jewel/beads/itemRenderers/ITextItemRenderer.as
 * org.apache.royale.jewel.beads.itemRenderers.ITextItemRenderer
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.jewel.beads.itemRenderers.ITextItemRenderer');
/* Royale Dependency List: */

goog.require('org.apache.royale.core.ISelectableItemRenderer');



/**
 * @interface
 * @extends {org.apache.royale.core.ISelectableItemRenderer}
 */
org.apache.royale.jewel.beads.itemRenderers.ITextItemRenderer = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.jewel.beads.itemRenderers.ITextItemRenderer', org.apache.royale.jewel.beads.itemRenderers.ITextItemRenderer);
/**  * @type {string}
 */org.apache.royale.jewel.beads.itemRenderers.ITextItemRenderer.prototype.text;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.jewel.beads.itemRenderers.ITextItemRenderer.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ITextItemRenderer', qName: 'org.apache.royale.jewel.beads.itemRenderers.ITextItemRenderer', kind: 'interface' }], interfaces: [org.apache.royale.core.ISelectableItemRenderer] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.jewel.beads.itemRenderers.ITextItemRenderer.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'text': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.beads.itemRenderers.ITextItemRenderer'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.jewel.beads.itemRenderers.ITextItemRenderer.prototype.ROYALE_COMPILE_FLAGS = 10;
