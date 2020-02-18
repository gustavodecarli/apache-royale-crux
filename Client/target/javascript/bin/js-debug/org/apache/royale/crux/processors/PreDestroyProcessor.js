/**
 * Generated by Apache Royale Compiler from org/apache/royale/crux/processors/PreDestroyProcessor.as
 * org.apache.royale.crux.processors.PreDestroyProcessor
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.crux.processors.PreDestroyProcessor');
/* Royale Dependency List: org.apache.royale.crux.Bean,org.apache.royale.crux.metadata.PreDestroyMetadataTag,org.apache.royale.crux.processors.ProcessorPriority,org.apache.royale.crux.reflection.IMetadataTag,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.crux.processors.BaseMetadataProcessor');



/**
 * Constructor
 * @constructor
 * @extends {org.apache.royale.crux.processors.BaseMetadataProcessor}
 * @param {Array=} metadataNames
 */
org.apache.royale.crux.processors.PreDestroyProcessor = function(metadataNames) {
  metadataNames = typeof metadataNames !== 'undefined' ? metadataNames : null;
  org.apache.royale.crux.processors.PreDestroyProcessor.base(this, 'constructor', (metadataNames == null) ? [org.apache.royale.crux.processors.PreDestroyProcessor.PRE_DESTROY] : metadataNames, org.apache.royale.crux.metadata.PreDestroyMetadataTag);
};
goog.inherits(org.apache.royale.crux.processors.PreDestroyProcessor, org.apache.royale.crux.processors.BaseMetadataProcessor);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.crux.processors.PreDestroyProcessor', org.apache.royale.crux.processors.PreDestroyProcessor);


/**
 * @protected
 * @const
 * @type {string}
 */
org.apache.royale.crux.processors.PreDestroyProcessor.PRE_DESTROY = "PreDestroy";


/**
 * @inheritDoc
 * @export
 * @override
 */
org.apache.royale.crux.processors.PreDestroyProcessor.prototype.tearDownMetadataTags = function(metadataTags, bean) {
  org.apache.royale.crux.processors.PreDestroyProcessor.superClass_.tearDownMetadataTags.apply(this, [ metadataTags, bean] );
  org.apache.royale.utils.Language.sortOn(metadataTags, "order", 16);
  var foreachiter0_target = metadataTags;
  for (var foreachiter0 in foreachiter0_target) 
  {
  var metadataTag = foreachiter0_target[foreachiter0];
  {
    var /** @type {Function} */ f = bean.source[metadataTag.host.name];
    f.apply(bean.source);
  }}
  
};


org.apache.royale.crux.processors.PreDestroyProcessor.prototype.get__priority = function() {
  return org.apache.royale.crux.processors.ProcessorPriority.PRE_DESTROY;
};


Object.defineProperties(org.apache.royale.crux.processors.PreDestroyProcessor.prototype, /** @lends {org.apache.royale.crux.processors.PreDestroyProcessor.prototype} */ {
/**
  * @export
  * @type {number} */
priority: {
get: org.apache.royale.crux.processors.PreDestroyProcessor.prototype.get__priority}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.crux.processors.PreDestroyProcessor.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'PreDestroyProcessor', qName: 'org.apache.royale.crux.processors.PreDestroyProcessor', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.crux.processors.PreDestroyProcessor.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'priority': { type: 'int', access: 'readonly', declaredBy: 'org.apache.royale.crux.processors.PreDestroyProcessor'}
      };
    },
    methods: function () {
      return {
        'PreDestroyProcessor': { type: '', declaredBy: 'org.apache.royale.crux.processors.PreDestroyProcessor', parameters: function () { return [ 'Array', true ]; }},
        'tearDownMetadataTags': { type: 'void', declaredBy: 'org.apache.royale.crux.processors.PreDestroyProcessor', parameters: function () { return [ 'Array', false ,'org.apache.royale.crux.Bean', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.crux.processors.PreDestroyProcessor.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./PreDestroyProcessor.js.map
