/**
 * Generated by Apache Royale Compiler from org/apache/royale/jewel/supportClasses/list/IListPresentationModel.as
 * org.apache.royale.jewel.supportClasses.list.IListPresentationModel
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.jewel.supportClasses.list.IListPresentationModel');
/* Royale Dependency List: */

goog.require('org.apache.royale.core.IBead');



/**
 * @interface
 * @extends {org.apache.royale.core.IBead}
 */
org.apache.royale.jewel.supportClasses.list.IListPresentationModel = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.jewel.supportClasses.list.IListPresentationModel', org.apache.royale.jewel.supportClasses.list.IListPresentationModel);
/**  * @type {number}
 */org.apache.royale.jewel.supportClasses.list.IListPresentationModel.prototype.rowHeight;
/**  * @type {string}
 */org.apache.royale.jewel.supportClasses.list.IListPresentationModel.prototype.align;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.jewel.supportClasses.list.IListPresentationModel.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IListPresentationModel', qName: 'org.apache.royale.jewel.supportClasses.list.IListPresentationModel', kind: 'interface' }], interfaces: [org.apache.royale.core.IBead] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.jewel.supportClasses.list.IListPresentationModel.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'rowHeight': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.supportClasses.list.IListPresentationModel'},
        'align': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.supportClasses.list.IListPresentationModel'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.jewel.supportClasses.list.IListPresentationModel.prototype.ROYALE_COMPILE_FLAGS = 10;
