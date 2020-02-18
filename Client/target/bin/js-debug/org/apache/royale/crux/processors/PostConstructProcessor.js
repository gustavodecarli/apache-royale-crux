/**
 * Generated by Apache Royale Compiler from org/apache/royale/crux/processors/PostConstructProcessor.as
 * org.apache.royale.crux.processors.PostConstructProcessor
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.crux.processors.PostConstructProcessor');
/* Royale Dependency List: org.apache.royale.crux.Bean,org.apache.royale.crux.metadata.PostConstructMetadataTag,org.apache.royale.crux.processors.ProcessorPriority,org.apache.royale.crux.reflection.IMetadataTag,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.crux.processors.BaseMetadataProcessor');



/**
 * Constructor
 * @constructor
 * @extends {org.apache.royale.crux.processors.BaseMetadataProcessor}
 * @param {Array=} metadataNames
 */
org.apache.royale.crux.processors.PostConstructProcessor = function(metadataNames) {
  metadataNames = typeof metadataNames !== 'undefined' ? metadataNames : null;
  org.apache.royale.crux.processors.PostConstructProcessor.base(this, 'constructor', (metadataNames == null) ? [org.apache.royale.crux.processors.PostConstructProcessor.POST_CONSTRUCT] : metadataNames, org.apache.royale.crux.metadata.PostConstructMetadataTag);
};
goog.inherits(org.apache.royale.crux.processors.PostConstructProcessor, org.apache.royale.crux.processors.BaseMetadataProcessor);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.crux.processors.PostConstructProcessor', org.apache.royale.crux.processors.PostConstructProcessor);


/**
 * @protected
 * @const
 * @type {string}
 */
org.apache.royale.crux.processors.PostConstructProcessor.POST_CONSTRUCT = "PostConstruct";


/**
 * @inheritDoc
 * @export
 * @override
 */
org.apache.royale.crux.processors.PostConstructProcessor.prototype.setUpMetadataTags = function(metadataTags, bean) {
  org.apache.royale.crux.processors.PostConstructProcessor.superClass_.setUpMetadataTags.apply(this, [ metadataTags, bean] );
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


org.apache.royale.crux.processors.PostConstructProcessor.prototype.get__priority = function() {
  return org.apache.royale.crux.processors.ProcessorPriority.POST_CONSTRUCT;
};


Object.defineProperties(org.apache.royale.crux.processors.PostConstructProcessor.prototype, /** @lends {org.apache.royale.crux.processors.PostConstructProcessor.prototype} */ {
/**
  * @export
  * @type {number} */
priority: {
get: org.apache.royale.crux.processors.PostConstructProcessor.prototype.get__priority}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.crux.processors.PostConstructProcessor.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'PostConstructProcessor', qName: 'org.apache.royale.crux.processors.PostConstructProcessor', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.crux.processors.PostConstructProcessor.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'priority': { type: 'int', access: 'readonly', declaredBy: 'org.apache.royale.crux.processors.PostConstructProcessor'}
      };
    },
    methods: function () {
      return {
        'PostConstructProcessor': { type: '', declaredBy: 'org.apache.royale.crux.processors.PostConstructProcessor', parameters: function () { return [ 'Array', true ]; }},
        'setUpMetadataTags': { type: 'void', declaredBy: 'org.apache.royale.crux.processors.PostConstructProcessor', parameters: function () { return [ 'Array', false ,'org.apache.royale.crux.Bean', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.crux.processors.PostConstructProcessor.prototype.ROYALE_COMPILE_FLAGS = 10;
