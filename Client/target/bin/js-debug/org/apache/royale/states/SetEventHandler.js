/**
 * Generated by Apache Royale Compiler from org/apache/royale/states/SetEventHandler.as
 * org.apache.royale.states.SetEventHandler
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.states.SetEventHandler');
/* Royale Dependency List: org.apache.royale.utils.Language*/

goog.require('org.apache.royale.core.IDocument');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Royale 1.0.0
 * @constructor
 * @implements {org.apache.royale.core.IDocument}
 */
org.apache.royale.states.SetEventHandler = function() {
  ;
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.states.SetEventHandler', org.apache.royale.states.SetEventHandler);


/**
 * @private
 * @type {string}
 */
org.apache.royale.states.SetEventHandler.prototype.org_apache_royale_states_SetEventHandler__target;


/**
 * @private
 * @type {string}
 */
org.apache.royale.states.SetEventHandler.prototype.org_apache_royale_states_SetEventHandler__name;


/**
 * @private
 * @type {Function}
 */
org.apache.royale.states.SetEventHandler.prototype.org_apache_royale_states_SetEventHandler__handlerFunction;


/**
 * @private
 * @type {Object}
 */
org.apache.royale.states.SetEventHandler.prototype.org_apache_royale_states_SetEventHandler__document;


/**
 * @export
 * @param {Object} document
 * @param {string=} id
 */
org.apache.royale.states.SetEventHandler.prototype.setDocument = function(document, id) {
  id = typeof id !== 'undefined' ? id : null;
  this.document = document;
};


/**
 * @asprivate 
 * Initialize this object from a descriptor.
 * @export
 * @param {Object} properties
 * @return {Object}
 */
org.apache.royale.states.SetEventHandler.prototype.initializeFromObject = function(properties) {
  for (var /** @type {string} */ p in properties) {
    this[p] = properties[p];
  }
  return org.apache.royale.utils.Language.resolveUncertain(Object(this));
};


org.apache.royale.states.SetEventHandler.prototype.get__target = function() {
  return this.org_apache_royale_states_SetEventHandler__target;
};


org.apache.royale.states.SetEventHandler.prototype.set__target = function(value) {
  this.org_apache_royale_states_SetEventHandler__target = value;
};


org.apache.royale.states.SetEventHandler.prototype.get__name = function() {
  return this.org_apache_royale_states_SetEventHandler__name;
};


org.apache.royale.states.SetEventHandler.prototype.set__name = function(value) {
  this.org_apache_royale_states_SetEventHandler__name = value;
};


org.apache.royale.states.SetEventHandler.prototype.get__handlerFunction = function() {
  return this.org_apache_royale_states_SetEventHandler__handlerFunction;
};


org.apache.royale.states.SetEventHandler.prototype.set__handlerFunction = function(value) {
  this.org_apache_royale_states_SetEventHandler__handlerFunction = value;
};


org.apache.royale.states.SetEventHandler.prototype.get__document = function() {
  return this.org_apache_royale_states_SetEventHandler__document;
};


org.apache.royale.states.SetEventHandler.prototype.set__document = function(value) {
  this.org_apache_royale_states_SetEventHandler__document = value;
};


Object.defineProperties(org.apache.royale.states.SetEventHandler.prototype, /** @lends {org.apache.royale.states.SetEventHandler.prototype} */ {
/**
  * @export
  * @type {string} */
target: {
get: org.apache.royale.states.SetEventHandler.prototype.get__target,
set: org.apache.royale.states.SetEventHandler.prototype.set__target},
/**
  * @export
  * @type {string} */
name: {
get: org.apache.royale.states.SetEventHandler.prototype.get__name,
set: org.apache.royale.states.SetEventHandler.prototype.set__name},
/**
  * @export
  * @type {Function} */
handlerFunction: {
get: org.apache.royale.states.SetEventHandler.prototype.get__handlerFunction,
set: org.apache.royale.states.SetEventHandler.prototype.set__handlerFunction},
/**
  * @export
  * @type {Object} */
document: {
get: org.apache.royale.states.SetEventHandler.prototype.get__document,
set: org.apache.royale.states.SetEventHandler.prototype.set__document}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.states.SetEventHandler.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'SetEventHandler', qName: 'org.apache.royale.states.SetEventHandler', kind: 'class' }], interfaces: [org.apache.royale.core.IDocument] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.states.SetEventHandler.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'target': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.states.SetEventHandler'},
        'name': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.states.SetEventHandler'},
        'handlerFunction': { type: 'Function', access: 'readwrite', declaredBy: 'org.apache.royale.states.SetEventHandler'},
        'document': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.royale.states.SetEventHandler'}
      };
    },
    methods: function () {
      return {
        'SetEventHandler': { type: '', declaredBy: 'org.apache.royale.states.SetEventHandler'},
        'setDocument': { type: 'void', declaredBy: 'org.apache.royale.states.SetEventHandler', parameters: function () { return [ 'Object', false ,'String', true ]; }},
        'initializeFromObject': { type: 'Object', declaredBy: 'org.apache.royale.states.SetEventHandler', parameters: function () { return [ 'Object', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.states.SetEventHandler.prototype.ROYALE_COMPILE_FLAGS = 10;
