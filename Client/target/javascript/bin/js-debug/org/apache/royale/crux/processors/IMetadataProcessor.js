/**
 * Generated by Apache Royale Compiler from org/apache/royale/crux/processors/IMetadataProcessor.as
 * org.apache.royale.crux.processors.IMetadataProcessor
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.crux.processors.IMetadataProcessor');
/* Royale Dependency List: org.apache.royale.crux.Bean*/

goog.require('org.apache.royale.crux.processors.IProcessor');



/**
 * @interface
 * @extends {org.apache.royale.crux.processors.IProcessor}
 */
org.apache.royale.crux.processors.IMetadataProcessor = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.crux.processors.IMetadataProcessor', org.apache.royale.crux.processors.IMetadataProcessor);
/**  * @type {Array}
 */org.apache.royale.crux.processors.IMetadataProcessor.prototype.metadataNames;
/**
 * Process the metadata tags for the provided <code>Bean</code>
 * so they are ready to use.
 *
 * @asparam metadataTags Array of tags culled from this <code>Bean</code>'s <code>TypeDescriptor</code>
 * @asparam bean		   <code>Bean</code> instance to process
 * @export
 * @param {Array} metadataTags
 * @param {org.apache.royale.crux.Bean} bean
 */
org.apache.royale.crux.processors.IMetadataProcessor.prototype.setUpMetadataTags = function(metadataTags, bean) {
};
/**
 * Process the metadata tags for the provided <code>Bean</code>
 * so they are ready to be cleaned up.
 *
 * @asparam metadataTags Array of tags culled from this <code>Bean</code>'s <code>TypeDescriptor</code>
 * @asparam bean		   <code>Bean</code> instance to process
 * @export
 * @param {Array} metadataTags
 * @param {org.apache.royale.crux.Bean} bean
 */
org.apache.royale.crux.processors.IMetadataProcessor.prototype.tearDownMetadataTags = function(metadataTags, bean) {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.crux.processors.IMetadataProcessor.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IMetadataProcessor', qName: 'org.apache.royale.crux.processors.IMetadataProcessor', kind: 'interface' }], interfaces: [org.apache.royale.crux.processors.IProcessor] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.crux.processors.IMetadataProcessor.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'metadataNames': { type: 'Array', access: 'readonly', declaredBy: 'org.apache.royale.crux.processors.IMetadataProcessor'}
      };
    },
    methods: function () {
      return {
        'setUpMetadataTags': { type: 'void', declaredBy: 'org.apache.royale.crux.processors.IMetadataProcessor', parameters: function () { return [ 'Array', false ,'org.apache.royale.crux.Bean', false ]; }},
        'tearDownMetadataTags': { type: 'void', declaredBy: 'org.apache.royale.crux.processors.IMetadataProcessor', parameters: function () { return [ 'Array', false ,'org.apache.royale.crux.Bean', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.crux.processors.IMetadataProcessor.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./IMetadataProcessor.js.map
