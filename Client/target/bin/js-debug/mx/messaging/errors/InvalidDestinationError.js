/**
 * Generated by Apache Royale Compiler from mx/messaging/errors/InvalidDestinationError.as
 * mx.messaging.errors.InvalidDestinationError
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.messaging.errors.InvalidDestinationError');
/* Royale Dependency List: XML*/

goog.require('mx.messaging.errors.ChannelError');



/**
 *  Constructs a new instance of an InvalidDestinationError with the specified message.
 *
 *  @asparam msg String that contains the message that describes this InvalidDestinationError.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion BlazeDS 4
 *  @productversion LCDS 3 
 * @constructor
 * @extends {mx.messaging.errors.ChannelError}
 * @param {string} msg
 */
mx.messaging.errors.InvalidDestinationError = function(msg) {
  mx.messaging.errors.InvalidDestinationError.base(this, 'constructor', msg);
};
goog.inherits(mx.messaging.errors.InvalidDestinationError, mx.messaging.errors.ChannelError);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.messaging.errors.InvalidDestinationError', mx.messaging.errors.InvalidDestinationError);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.messaging.errors.InvalidDestinationError.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'InvalidDestinationError', qName: 'mx.messaging.errors.InvalidDestinationError', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.messaging.errors.InvalidDestinationError.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'InvalidDestinationError': { type: '', declaredBy: 'mx.messaging.errors.InvalidDestinationError', parameters: function () { return [ 'String', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.messaging.errors.InvalidDestinationError.prototype.ROYALE_COMPILE_FLAGS = 26;
