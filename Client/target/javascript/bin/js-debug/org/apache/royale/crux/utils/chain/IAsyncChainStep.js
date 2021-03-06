/**
 * Generated by Apache Royale Compiler from org/apache/royale/crux/utils/chain/IAsyncChainStep.as
 * org.apache.royale.crux.utils.chain.IAsyncChainStep
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.crux.utils.chain.IAsyncChainStep');
/* Royale Dependency List: org.apache.royale.crux.utils.async.IAsynchronousOperation*/

goog.require('org.apache.royale.crux.utils.chain.IChainStep');



/**
 * @interface
 * @extends {org.apache.royale.crux.utils.chain.IChainStep}
 */
org.apache.royale.crux.utils.chain.IAsyncChainStep = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.crux.utils.chain.IAsyncChainStep', org.apache.royale.crux.utils.chain.IAsyncChainStep);
/**
 * Add a pending asynchronous operation to this chain step.
 * @export
 * @param {org.apache.royale.crux.utils.async.IAsynchronousOperation} operation
 */
org.apache.royale.crux.utils.chain.IAsyncChainStep.prototype.addAsynchronousOperation = function(operation) {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.crux.utils.chain.IAsyncChainStep.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IAsyncChainStep', qName: 'org.apache.royale.crux.utils.chain.IAsyncChainStep', kind: 'interface' }], interfaces: [org.apache.royale.crux.utils.chain.IChainStep] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.crux.utils.chain.IAsyncChainStep.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'addAsynchronousOperation': { type: 'void', declaredBy: 'org.apache.royale.crux.utils.chain.IAsyncChainStep', parameters: function () { return [ 'org.apache.royale.crux.utils.async.IAsynchronousOperation', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.crux.utils.chain.IAsyncChainStep.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./IAsyncChainStep.js.map
