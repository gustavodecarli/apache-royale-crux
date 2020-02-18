/**
 * Generated by Apache Royale Compiler from org/apache/royale/jewel/beads/models/IJewelSelectionModel.as
 * org.apache.royale.jewel.beads.models.IJewelSelectionModel
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.jewel.beads.models.IJewelSelectionModel');
/* Royale Dependency List: org.apache.royale.events.IEventDispatcher*/

goog.require('org.apache.royale.core.ISelectionModel');



/**
 * @interface
 * @extends {org.apache.royale.core.ISelectionModel}
 */
org.apache.royale.jewel.beads.models.IJewelSelectionModel = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.jewel.beads.models.IJewelSelectionModel', org.apache.royale.jewel.beads.models.IJewelSelectionModel);
/**  * @type {org.apache.royale.events.IEventDispatcher}
 */org.apache.royale.jewel.beads.models.IJewelSelectionModel.prototype.dispatcher;
/**  * @type {boolean}
 */org.apache.royale.jewel.beads.models.IJewelSelectionModel.prototype.hasDispatcher;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.jewel.beads.models.IJewelSelectionModel.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IJewelSelectionModel', qName: 'org.apache.royale.jewel.beads.models.IJewelSelectionModel', kind: 'interface' }], interfaces: [org.apache.royale.core.ISelectionModel] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.jewel.beads.models.IJewelSelectionModel.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'dispatcher': { type: 'org.apache.royale.events.IEventDispatcher', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.beads.models.IJewelSelectionModel'},
        'hasDispatcher': { type: 'Boolean', access: 'readonly', declaredBy: 'org.apache.royale.jewel.beads.models.IJewelSelectionModel'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.jewel.beads.models.IJewelSelectionModel.prototype.ROYALE_COMPILE_FLAGS = 10;
