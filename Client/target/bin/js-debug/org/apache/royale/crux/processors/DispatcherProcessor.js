/**
 * Generated by Apache Royale Compiler from org/apache/royale/crux/processors/DispatcherProcessor.as
 * org.apache.royale.crux.processors.DispatcherProcessor
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.crux.processors.DispatcherProcessor');
/* Royale Dependency List: org.apache.royale.crux.Bean,org.apache.royale.crux.CruxConfig,org.apache.royale.crux.processors.ProcessorPriority,org.apache.royale.crux.reflection.IMetadataTag,org.apache.royale.crux.reflection.MetadataArg,org.apache.royale.crux.reflection.MetadataHostProperty,org.apache.royale.events.IEventDispatcher,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.crux.processors.BaseMetadataProcessor');



/**
 * Constructor
 * @constructor
 * @extends {org.apache.royale.crux.processors.BaseMetadataProcessor}
 * @param {Array=} metadataNames
 */
org.apache.royale.crux.processors.DispatcherProcessor = function(metadataNames) {
  metadataNames = typeof metadataNames !== 'undefined' ? metadataNames : null;
  org.apache.royale.crux.processors.DispatcherProcessor.base(this, 'constructor', (metadataNames == null) ? [org.apache.royale.crux.processors.DispatcherProcessor.DISPATCHER] : metadataNames);
};
goog.inherits(org.apache.royale.crux.processors.DispatcherProcessor, org.apache.royale.crux.processors.BaseMetadataProcessor);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.crux.processors.DispatcherProcessor', org.apache.royale.crux.processors.DispatcherProcessor);


/**
 * @protected
 * @const
 * @type {string}
 */
org.apache.royale.crux.processors.DispatcherProcessor.DISPATCHER = "Dispatcher";


/**
 * @inheritDoc
 * @export
 * @override
 */
org.apache.royale.crux.processors.DispatcherProcessor.prototype.setUpMetadataTag = function(metadataTag, bean) {
  var /** @type {string} */ scope;
  if (metadataTag.hasArg("scope"))
    scope = metadataTag.getArg("scope").value;
  else if (metadataTag.args.length > 0 && org.apache.royale.utils.Language.as(metadataTag.args[0], org.apache.royale.crux.reflection.MetadataArg, true).key == "")
    scope = org.apache.royale.utils.Language.as(metadataTag.args[0], org.apache.royale.crux.reflection.MetadataArg, true).value;
  var /** @type {org.apache.royale.events.IEventDispatcher} */ dispatcher = null;
  if (scope == org.apache.royale.crux.CruxConfig.GLOBAL_DISPATCHER)
    dispatcher = this.crux.globalDispatcher;
  else if (scope == org.apache.royale.crux.CruxConfig.LOCAL_DISPATCHER)
    dispatcher = this.crux.dispatcher;
  else
    dispatcher = this.crux.config.defaultDispatcher == org.apache.royale.crux.CruxConfig.LOCAL_DISPATCHER ? this.crux.dispatcher : this.crux.globalDispatcher;
  var /** @type {org.apache.royale.crux.reflection.MetadataHostProperty} */ property = org.apache.royale.utils.Language.as(metadataTag.host, org.apache.royale.crux.reflection.MetadataHostProperty);
  if (property) {
    property.sourceDefinition.setValue(bean.source, dispatcher);
  } else {
    org.apache.royale.utils.Language.trace('unexpected branch in \'DispatcherProcessor\'');
    bean.source[metadataTag.host.name] = dispatcher;
  }
};


/**
 * @inheritDoc
 * @export
 * @override
 */
org.apache.royale.crux.processors.DispatcherProcessor.prototype.tearDownMetadataTag = function(metadataTag, bean) {
  var /** @type {org.apache.royale.crux.reflection.MetadataHostProperty} */ property = org.apache.royale.utils.Language.as(metadataTag.host, org.apache.royale.crux.reflection.MetadataHostProperty);
  if (property) {
    property.sourceDefinition.setValue(bean.source, null);
  } else {
    org.apache.royale.utils.Language.trace('unexpected branch in \'DispatcherProcessor\'');
    bean.source[metadataTag.host.name] = null;
  }
};


org.apache.royale.crux.processors.DispatcherProcessor.prototype.get__priority = function() {
  return org.apache.royale.crux.processors.ProcessorPriority.DISPATCHER;
};


Object.defineProperties(org.apache.royale.crux.processors.DispatcherProcessor.prototype, /** @lends {org.apache.royale.crux.processors.DispatcherProcessor.prototype} */ {
/**
  * @export
  * @type {number} */
priority: {
get: org.apache.royale.crux.processors.DispatcherProcessor.prototype.get__priority}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.crux.processors.DispatcherProcessor.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'DispatcherProcessor', qName: 'org.apache.royale.crux.processors.DispatcherProcessor', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.crux.processors.DispatcherProcessor.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'priority': { type: 'int', access: 'readonly', declaredBy: 'org.apache.royale.crux.processors.DispatcherProcessor'}
      };
    },
    methods: function () {
      return {
        'DispatcherProcessor': { type: '', declaredBy: 'org.apache.royale.crux.processors.DispatcherProcessor', parameters: function () { return [ 'Array', true ]; }},
        'setUpMetadataTag': { type: 'void', declaredBy: 'org.apache.royale.crux.processors.DispatcherProcessor', parameters: function () { return [ 'org.apache.royale.crux.reflection.IMetadataTag', false ,'org.apache.royale.crux.Bean', false ]; }},
        'tearDownMetadataTag': { type: 'void', declaredBy: 'org.apache.royale.crux.processors.DispatcherProcessor', parameters: function () { return [ 'org.apache.royale.crux.reflection.IMetadataTag', false ,'org.apache.royale.crux.Bean', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.crux.processors.DispatcherProcessor.prototype.ROYALE_COMPILE_FLAGS = 10;
