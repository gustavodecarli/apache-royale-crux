/**
 * Generated by Apache Royale Compiler from mx/events/SecurityErrorEvent.as
 * mx.events.SecurityErrorEvent
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.events.SecurityErrorEvent');
/* Royale Dependency List: XML*/

goog.require('mx.events.ErrorEvent');



/**
 *  Constructor.
 *
 *  @asparam type The event type; indicates the action that caused the event.
 *
 *  @asparam bubbles Specifies whether the event can bubble
 *  up the display list hierarchy.
 *
 *  @asparam cancelable Specifies whether the behavior
 *  associated with the event can be prevented.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Royale 0.9.3
 * @constructor
 * @extends {mx.events.ErrorEvent}
 * @param {string} type
 * @param {boolean=} bubbles
 * @param {boolean=} cancelable
 * @param {string=} text
 * @param {number=} id
 */
mx.events.SecurityErrorEvent = function(type, bubbles, cancelable, text, id) {
  bubbles = typeof bubbles !== 'undefined' ? bubbles : false;
  cancelable = typeof cancelable !== 'undefined' ? cancelable : false;
  text = typeof text !== 'undefined' ? text : "";
  id = typeof id !== 'undefined' ? id : 0;
  mx.events.SecurityErrorEvent.base(this, 'constructor', type, bubbles, cancelable);
};
goog.inherits(mx.events.SecurityErrorEvent, mx.events.ErrorEvent);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.events.SecurityErrorEvent', mx.events.SecurityErrorEvent);


/**
 * @export
 * @const
 * @type {string}
 */
mx.events.SecurityErrorEvent.SECURITY_ERROR = "securityError";


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.events.SecurityErrorEvent.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'SecurityErrorEvent', qName: 'mx.events.SecurityErrorEvent', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.events.SecurityErrorEvent.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'SecurityErrorEvent': { type: '', declaredBy: 'mx.events.SecurityErrorEvent', parameters: function () { return [ 'String', false ,'Boolean', true ,'Boolean', true ,'String', true ,'int', true ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.events.SecurityErrorEvent.prototype.ROYALE_COMPILE_FLAGS = 26;