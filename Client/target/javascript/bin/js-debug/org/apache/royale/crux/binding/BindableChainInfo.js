/**
 * Generated by Apache Royale Compiler from org/apache/royale/crux/binding/BindableChainInfo.as
 * org.apache.royale.crux.binding.BindableChainInfo
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.crux.binding.BindableChainInfo');
/* Royale Dependency List: org.apache.royale.reflection.AccessorDefinition*/




/**
 * @constructor
 */
org.apache.royale.crux.binding.BindableChainInfo = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.crux.binding.BindableChainInfo', org.apache.royale.crux.binding.BindableChainInfo);


/**
 * @export
 * @type {Object}
 */
org.apache.royale.crux.binding.BindableChainInfo.prototype.changeEvents;


/**
 * @export
 * @type {org.apache.royale.reflection.AccessorDefinition}
 */
org.apache.royale.crux.binding.BindableChainInfo.prototype.accessorDefinition;


/**
 * @export
 * @type {string}
 */
org.apache.royale.crux.binding.BindableChainInfo.prototype.name;


/**
 * @export
 * @type {org.apache.royale.crux.binding.BindableChainInfo}
 */
org.apache.royale.crux.binding.BindableChainInfo.prototype.next;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.crux.binding.BindableChainInfo.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'BindableChainInfo', qName: 'org.apache.royale.crux.binding.BindableChainInfo', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.crux.binding.BindableChainInfo.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'changeEvents': { type: 'Object', get_set: function (/** org.apache.royale.crux.binding.BindableChainInfo */ inst, /** * */ v) {return v !== undefined ? inst.changeEvents = v : inst.changeEvents;}},
        'accessorDefinition': { type: 'org.apache.royale.reflection.AccessorDefinition', get_set: function (/** org.apache.royale.crux.binding.BindableChainInfo */ inst, /** * */ v) {return v !== undefined ? inst.accessorDefinition = v : inst.accessorDefinition;}},
        'name': { type: 'String', get_set: function (/** org.apache.royale.crux.binding.BindableChainInfo */ inst, /** * */ v) {return v !== undefined ? inst.name = v : inst.name;}},
        'next': { type: 'org.apache.royale.crux.binding.BindableChainInfo', get_set: function (/** org.apache.royale.crux.binding.BindableChainInfo */ inst, /** * */ v) {return v !== undefined ? inst.next = v : inst.next;}}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.crux.binding.BindableChainInfo.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./BindableChainInfo.js.map
