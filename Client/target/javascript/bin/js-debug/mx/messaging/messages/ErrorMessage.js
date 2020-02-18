/**
 * Generated by Apache Royale Compiler from mx/messaging/messages/ErrorMessage.as
 * mx.messaging.messages.ErrorMessage
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.messaging.messages.ErrorMessage');
/* Royale Dependency List: mx.messaging.messages.IMessage,XML*/

goog.require('mx.messaging.messages.AcknowledgeMessage');



/**
 *  Constructs an ErrorMessage instance.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion BlazeDS 4
 *  @productversion LCDS 3 
 * @constructor
 * @extends {mx.messaging.messages.AcknowledgeMessage}
 */
mx.messaging.messages.ErrorMessage = function() {
  mx.messaging.messages.ErrorMessage.base(this, 'constructor');
};
goog.inherits(mx.messaging.messages.ErrorMessage, mx.messaging.messages.AcknowledgeMessage);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.messaging.messages.ErrorMessage', mx.messaging.messages.ErrorMessage);


/**
 * @export
 * @const
 * @type {string}
 */
mx.messaging.messages.ErrorMessage.MESSAGE_DELIVERY_IN_DOUBT = "Client.Error.DeliveryInDoubt";


/**
 * @export
 * @const
 * @type {string}
 */
mx.messaging.messages.ErrorMessage.RETRYABLE_HINT_HEADER = "DSRetryableErrorHint";


/**
 * @private
 * @type {string}
 */
mx.messaging.messages.ErrorMessage.prototype.mx_messaging_messages_ErrorMessage__faultCode;


/**
 * @private
 * @type {string}
 */
mx.messaging.messages.ErrorMessage.prototype.mx_messaging_messages_ErrorMessage__faultString;


/**
 * @private
 * @type {string}
 */
mx.messaging.messages.ErrorMessage.prototype.mx_messaging_messages_ErrorMessage__faultDetail;


/**
 * @private
 * @type {Object}
 */
mx.messaging.messages.ErrorMessage.prototype.mx_messaging_messages_ErrorMessage__rootCause;


/**
 * @private
 * @type {Object}
 */
mx.messaging.messages.ErrorMessage.prototype.mx_messaging_messages_ErrorMessage__extendedData;


/**
 * @asprivate
 * @export
 * @override
 */
mx.messaging.messages.ErrorMessage.prototype.getSmallMessage = function() {
  return null;
};


mx.messaging.messages.ErrorMessage.prototype.get__faultCode = function() {
  return this.mx_messaging_messages_ErrorMessage__faultCode;
};


mx.messaging.messages.ErrorMessage.prototype.set__faultCode = function(value) {
  this.mx_messaging_messages_ErrorMessage__faultCode = value;
};


mx.messaging.messages.ErrorMessage.prototype.get__faultString = function() {
  return this.mx_messaging_messages_ErrorMessage__faultString;
};


mx.messaging.messages.ErrorMessage.prototype.set__faultString = function(value) {
  this.mx_messaging_messages_ErrorMessage__faultString = value;
};


mx.messaging.messages.ErrorMessage.prototype.get__faultDetail = function() {
  return this.mx_messaging_messages_ErrorMessage__faultDetail;
};


mx.messaging.messages.ErrorMessage.prototype.set__faultDetail = function(value) {
  this.mx_messaging_messages_ErrorMessage__faultDetail = value;
};


mx.messaging.messages.ErrorMessage.prototype.get__rootCause = function() {
  return this.mx_messaging_messages_ErrorMessage__rootCause;
};


mx.messaging.messages.ErrorMessage.prototype.set__rootCause = function(value) {
  this.mx_messaging_messages_ErrorMessage__rootCause = value;
};


mx.messaging.messages.ErrorMessage.prototype.get__extendedData = function() {
  return this.mx_messaging_messages_ErrorMessage__extendedData;
};


mx.messaging.messages.ErrorMessage.prototype.set__extendedData = function(value) {
  this.mx_messaging_messages_ErrorMessage__extendedData = value;
};


Object.defineProperties(mx.messaging.messages.ErrorMessage.prototype, /** @lends {mx.messaging.messages.ErrorMessage.prototype} */ {
/**
  * @export
  * @type {string} */
faultCode: {
get: mx.messaging.messages.ErrorMessage.prototype.get__faultCode,
set: mx.messaging.messages.ErrorMessage.prototype.set__faultCode},
/**
  * @export
  * @type {string} */
faultString: {
get: mx.messaging.messages.ErrorMessage.prototype.get__faultString,
set: mx.messaging.messages.ErrorMessage.prototype.set__faultString},
/**
  * @export
  * @type {string} */
faultDetail: {
get: mx.messaging.messages.ErrorMessage.prototype.get__faultDetail,
set: mx.messaging.messages.ErrorMessage.prototype.set__faultDetail},
/**
  * @export
  * @type {Object} */
rootCause: {
get: mx.messaging.messages.ErrorMessage.prototype.get__rootCause,
set: mx.messaging.messages.ErrorMessage.prototype.set__rootCause},
/**
  * @export
  * @type {Object} */
extendedData: {
get: mx.messaging.messages.ErrorMessage.prototype.get__extendedData,
set: mx.messaging.messages.ErrorMessage.prototype.set__extendedData}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.messaging.messages.ErrorMessage.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ErrorMessage', qName: 'mx.messaging.messages.ErrorMessage', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.messaging.messages.ErrorMessage.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'faultCode': { type: 'String', access: 'readwrite', declaredBy: 'mx.messaging.messages.ErrorMessage'},
        'faultString': { type: 'String', access: 'readwrite', declaredBy: 'mx.messaging.messages.ErrorMessage'},
        'faultDetail': { type: 'String', access: 'readwrite', declaredBy: 'mx.messaging.messages.ErrorMessage'},
        'rootCause': { type: 'Object', access: 'readwrite', declaredBy: 'mx.messaging.messages.ErrorMessage'},
        'extendedData': { type: 'Object', access: 'readwrite', declaredBy: 'mx.messaging.messages.ErrorMessage'}
      };
    },
    methods: function () {
      return {
        'ErrorMessage': { type: '', declaredBy: 'mx.messaging.messages.ErrorMessage'},
        'getSmallMessage': { type: 'mx.messaging.messages.IMessage', declaredBy: 'mx.messaging.messages.ErrorMessage'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.messaging.messages.ErrorMessage.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./ErrorMessage.js.map
