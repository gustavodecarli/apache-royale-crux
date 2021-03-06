/**
 * Generated by Apache Royale Compiler from org/apache/royale/crux/utils/services/ServiceHelper.as
 * org.apache.royale.crux.utils.services.ServiceHelper
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.crux.utils.services.ServiceHelper');
/* Royale Dependency List: mx.rpc.AsyncToken,org.apache.royale.crux.ICrux,org.apache.royale.crux.utils.services.CruxResponder*/

goog.require('org.apache.royale.crux.ICruxAware');
goog.require('org.apache.royale.crux.utils.services.IServiceHelper');



/**
 * @constructor
 * @implements {org.apache.royale.crux.utils.services.IServiceHelper}
 * @implements {org.apache.royale.crux.ICruxAware}
 */
org.apache.royale.crux.utils.services.ServiceHelper = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.crux.utils.services.ServiceHelper', org.apache.royale.crux.utils.services.ServiceHelper);


/**
 * @protected
 * @type {org.apache.royale.crux.ICrux}
 */
org.apache.royale.crux.utils.services.ServiceHelper.prototype._crux;


/**
 * @export
 * @param {mx.rpc.AsyncToken} call
 * @param {Function} resultHandler
 * @param {Function=} faultHandler
 * @param {Array=} handlerArgs
 * @return {mx.rpc.AsyncToken}
 */
org.apache.royale.crux.utils.services.ServiceHelper.prototype.executeServiceCall = function(call, resultHandler, faultHandler, handlerArgs) {
  faultHandler = typeof faultHandler !== 'undefined' ? faultHandler : null;
  handlerArgs = typeof handlerArgs !== 'undefined' ? handlerArgs : null;
  if (faultHandler == null && this._crux != null && this._crux.config.defaultFaultHandler != null)
    faultHandler = this._crux.config.defaultFaultHandler;
  call.addResponder(new org.apache.royale.crux.utils.services.CruxResponder(resultHandler, faultHandler, handlerArgs));
  return call;
};


org.apache.royale.crux.utils.services.ServiceHelper.prototype.set__crux = function(crux) {
  this._crux = crux;
};


Object.defineProperties(org.apache.royale.crux.utils.services.ServiceHelper.prototype, /** @lends {org.apache.royale.crux.utils.services.ServiceHelper.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.crux.ICrux} */
crux: {
set: org.apache.royale.crux.utils.services.ServiceHelper.prototype.set__crux}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.crux.utils.services.ServiceHelper.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ServiceHelper', qName: 'org.apache.royale.crux.utils.services.ServiceHelper', kind: 'class' }], interfaces: [org.apache.royale.crux.utils.services.IServiceHelper, org.apache.royale.crux.ICruxAware] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.crux.utils.services.ServiceHelper.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'crux': { type: 'org.apache.royale.crux.ICrux', access: 'writeonly', declaredBy: 'org.apache.royale.crux.utils.services.ServiceHelper'}
      };
    },
    methods: function () {
      return {
        'executeServiceCall': { type: 'mx.rpc.AsyncToken', declaredBy: 'org.apache.royale.crux.utils.services.ServiceHelper', parameters: function () { return [ 'mx.rpc.AsyncToken', false ,'Function', false ,'Function', true ,'Array', true ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.crux.utils.services.ServiceHelper.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./ServiceHelper.js.map
