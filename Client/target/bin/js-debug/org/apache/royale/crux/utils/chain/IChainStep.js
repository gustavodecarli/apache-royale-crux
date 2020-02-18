/**
 * Generated by Apache Royale Compiler from org/apache/royale/crux/utils/chain/IChainStep.as
 * org.apache.royale.crux.utils.chain.IChainStep
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.crux.utils.chain.IChainStep');
/* Royale Dependency List: org.apache.royale.crux.utils.chain.IChain*/




/**
 * @interface
 */
org.apache.royale.crux.utils.chain.IChainStep = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.crux.utils.chain.IChainStep', org.apache.royale.crux.utils.chain.IChainStep);
/**  * @type {org.apache.royale.crux.utils.chain.IChain}
 */org.apache.royale.crux.utils.chain.IChainStep.prototype.chain;
/**  * @type {boolean}
 */org.apache.royale.crux.utils.chain.IChainStep.prototype.isComplete;
org.apache.royale.crux.utils.chain.IChainStep.prototype.complete = function() {
};
org.apache.royale.crux.utils.chain.IChainStep.prototype.error = function() {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.crux.utils.chain.IChainStep.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IChainStep', qName: 'org.apache.royale.crux.utils.chain.IChainStep', kind: 'interface' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.crux.utils.chain.IChainStep.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'chain': { type: 'org.apache.royale.crux.utils.chain.IChain', access: 'readwrite', declaredBy: 'org.apache.royale.crux.utils.chain.IChainStep'},
        'isComplete': { type: 'Boolean', access: 'readonly', declaredBy: 'org.apache.royale.crux.utils.chain.IChainStep'}
      };
    },
    methods: function () {
      return {
        'complete': { type: 'void', declaredBy: 'org.apache.royale.crux.utils.chain.IChainStep'},
        'error': { type: 'void', declaredBy: 'org.apache.royale.crux.utils.chain.IChainStep'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.crux.utils.chain.IChainStep.prototype.ROYALE_COMPILE_FLAGS = 10;
