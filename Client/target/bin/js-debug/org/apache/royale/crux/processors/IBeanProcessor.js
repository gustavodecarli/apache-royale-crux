/**
 * Generated by Apache Royale Compiler from org/apache/royale/crux/processors/IBeanProcessor.as
 * org.apache.royale.crux.processors.IBeanProcessor
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.crux.processors.IBeanProcessor');
/* Royale Dependency List: org.apache.royale.crux.Bean*/

goog.require('org.apache.royale.crux.processors.IProcessor');



/**
 * @interface
 * @extends {org.apache.royale.crux.processors.IProcessor}
 */
org.apache.royale.crux.processors.IBeanProcessor = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.crux.processors.IBeanProcessor', org.apache.royale.crux.processors.IBeanProcessor);
/**
 * @export
 * @param {org.apache.royale.crux.Bean} bean
 */
org.apache.royale.crux.processors.IBeanProcessor.prototype.setUpBean = function(bean) {
};
/**
 * @export
 * @param {org.apache.royale.crux.Bean} bean
 */
org.apache.royale.crux.processors.IBeanProcessor.prototype.tearDownBean = function(bean) {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.crux.processors.IBeanProcessor.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IBeanProcessor', qName: 'org.apache.royale.crux.processors.IBeanProcessor', kind: 'interface' }], interfaces: [org.apache.royale.crux.processors.IProcessor] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.crux.processors.IBeanProcessor.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'setUpBean': { type: 'void', declaredBy: 'org.apache.royale.crux.processors.IBeanProcessor', parameters: function () { return [ 'org.apache.royale.crux.Bean', false ]; }},
        'tearDownBean': { type: 'void', declaredBy: 'org.apache.royale.crux.processors.IBeanProcessor', parameters: function () { return [ 'org.apache.royale.crux.Bean', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.crux.processors.IBeanProcessor.prototype.ROYALE_COMPILE_FLAGS = 10;