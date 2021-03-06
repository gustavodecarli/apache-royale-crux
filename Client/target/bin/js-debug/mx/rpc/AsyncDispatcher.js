/**
 * Generated by Apache Royale Compiler from mx/rpc/AsyncDispatcher.as
 * mx.rpc.AsyncDispatcher
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.rpc.AsyncDispatcher');
/* Royale Dependency List: org.apache.royale.events.Event,org.apache.royale.utils.Timer,org.apache.royale.utils.Language,XML*/




/**
 *  @asprivate
 * @constructor
 * @param {Function} method
 * @param {Array} args
 * @param {number} delay
 */
mx.rpc.AsyncDispatcher = function(method, args, delay) {
  ;
  this.mx_rpc_AsyncDispatcher__method = method;
  this.mx_rpc_AsyncDispatcher__args = args;
  this.mx_rpc_AsyncDispatcher__timer = new org.apache.royale.utils.Timer(delay);
  this.mx_rpc_AsyncDispatcher__timer.addEventListener(org.apache.royale.utils.Timer.TIMER, org.apache.royale.utils.Language.closure(this.mx_rpc_AsyncDispatcher_timerEventHandler, this, 'timerEventHandler'));
  this.mx_rpc_AsyncDispatcher__timer.start();
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.rpc.AsyncDispatcher', mx.rpc.AsyncDispatcher);


/**
 * @private
 * @param {org.apache.royale.events.Event} event
 */
mx.rpc.AsyncDispatcher.prototype.mx_rpc_AsyncDispatcher_timerEventHandler = function(event) {
  this.mx_rpc_AsyncDispatcher__timer.stop();
  this.mx_rpc_AsyncDispatcher__timer.removeEventListener(org.apache.royale.utils.Timer.TIMER, org.apache.royale.utils.Language.closure(this.mx_rpc_AsyncDispatcher_timerEventHandler, this, 'timerEventHandler'));
  this.mx_rpc_AsyncDispatcher__method.apply(null, this.mx_rpc_AsyncDispatcher__args);
};


/**
 * @private
 * @type {Function}
 */
mx.rpc.AsyncDispatcher.prototype.mx_rpc_AsyncDispatcher__method;


/**
 * @private
 * @type {Array}
 */
mx.rpc.AsyncDispatcher.prototype.mx_rpc_AsyncDispatcher__args;


/**
 * @private
 * @type {org.apache.royale.utils.Timer}
 */
mx.rpc.AsyncDispatcher.prototype.mx_rpc_AsyncDispatcher__timer;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.rpc.AsyncDispatcher.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'AsyncDispatcher', qName: 'mx.rpc.AsyncDispatcher', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.rpc.AsyncDispatcher.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'AsyncDispatcher': { type: '', declaredBy: 'mx.rpc.AsyncDispatcher', parameters: function () { return [ 'Function', false ,'Array', false ,'Number', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.rpc.AsyncDispatcher.prototype.ROYALE_COMPILE_FLAGS = 26;
