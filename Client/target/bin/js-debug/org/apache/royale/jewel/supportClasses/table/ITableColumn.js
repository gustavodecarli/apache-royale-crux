/**
 * Generated by Apache Royale Compiler from org/apache/royale/jewel/supportClasses/table/ITableColumn.as
 * org.apache.royale.jewel.supportClasses.table.ITableColumn
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.jewel.supportClasses.table.ITableColumn');
/* Royale Dependency List: org.apache.royale.core.IFactory*/




/**
 * @interface
 */
org.apache.royale.jewel.supportClasses.table.ITableColumn = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.jewel.supportClasses.table.ITableColumn', org.apache.royale.jewel.supportClasses.table.ITableColumn);
/**  * @type {org.apache.royale.core.IFactory}
 */org.apache.royale.jewel.supportClasses.table.ITableColumn.prototype.itemRenderer;
/**  * @type {number}
 */org.apache.royale.jewel.supportClasses.table.ITableColumn.prototype.columnWidth;
/**  * @type {string}
 */org.apache.royale.jewel.supportClasses.table.ITableColumn.prototype.label;
/**  * @type {string}
 */org.apache.royale.jewel.supportClasses.table.ITableColumn.prototype.dataField;
/**  * @type {string}
 */org.apache.royale.jewel.supportClasses.table.ITableColumn.prototype.className;
/**  * @type {string}
 */org.apache.royale.jewel.supportClasses.table.ITableColumn.prototype.align;
/**  * @type {string}
 */org.apache.royale.jewel.supportClasses.table.ITableColumn.prototype.columnLabelAlign;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.jewel.supportClasses.table.ITableColumn.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ITableColumn', qName: 'org.apache.royale.jewel.supportClasses.table.ITableColumn', kind: 'interface' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.jewel.supportClasses.table.ITableColumn.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'itemRenderer': { type: 'org.apache.royale.core.IFactory', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.supportClasses.table.ITableColumn'},
        'columnWidth': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.supportClasses.table.ITableColumn'},
        'label': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.supportClasses.table.ITableColumn'},
        'dataField': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.supportClasses.table.ITableColumn'},
        'className': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.supportClasses.table.ITableColumn'},
        'align': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.supportClasses.table.ITableColumn'},
        'columnLabelAlign': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.supportClasses.table.ITableColumn'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.jewel.supportClasses.table.ITableColumn.prototype.ROYALE_COMPILE_FLAGS = 10;
