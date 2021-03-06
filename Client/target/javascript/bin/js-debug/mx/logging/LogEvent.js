/**
 * Generated by Apache Royale Compiler from mx/logging/LogEvent.as
 * mx.logging.LogEvent
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.logging.LogEvent');
/* Royale Dependency List: mx.logging.LogEventLevel,XML*/

goog.require('org.apache.royale.events.Event');



/**
 *  Constructor.
 *
 *  @asparam msg String containing the log data.
 *
 *  @asparam level The level for this log event.
 *  Valid values are:
 *  <ul>
 *    <li><code>LogEventLevel.FATAL</code> designates events that are very
 *    harmful and will eventually lead to application failure</li>
 *
 *    <li><code>LogEventLevel.ERROR</code> designates error events that might
 *    still allow the application to continue running.</li>
 *
 *    <li><code>LogEventLevel.WARN</code> designates events that could be
 *    harmful to the application operation</li>
 *
 *    <li><code>LogEventLevel.INFO</code> designates informational messages
 *    that highlight the progress of the application at
 *    coarse-grained level.</li>
 *
 *    <li><code>LogEventLevel.DEBUG</code> designates informational
 *    level messages that are fine grained and most helpful when
 *    debugging an application.</li>
 *
 *    <li><code>LogEventLevel.ALL</code> intended to force a target to
 *    process all messages.</li>
 *  </ul>
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @constructor
 * @extends {org.apache.royale.events.Event}
 * @param {string=} message
 * @param {number=} level
 */
mx.logging.LogEvent = function(message, level) {
  message = typeof message !== 'undefined' ? message : "";
  level = typeof level !== 'undefined' ? level : 0;
  mx.logging.LogEvent.base(this, 'constructor', mx.logging.LogEvent.LOG, false, false);
  this.message = message;
  this.level = level;
};
goog.inherits(mx.logging.LogEvent, org.apache.royale.events.Event);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.logging.LogEvent', mx.logging.LogEvent);


/**
 * @export
 * @const
 * @type {string}
 */
mx.logging.LogEvent.LOG = "log";


/**
 *  Returns a string value representing the level specified.
 *
 *  @asparam The level a string is desired for.
 *
 *  @asreturn The level specified in English.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {number} value
 * @return {string}
 */
mx.logging.LogEvent.getLevelString = function(value) {
  switch (value) {
    case mx.logging.LogEventLevel.INFO:
      return "INFO";
    case mx.logging.LogEventLevel.DEBUG:
      return "DEBUG";
    case mx.logging.LogEventLevel.ERROR:
      return "ERROR";
    case mx.logging.LogEventLevel.WARN:
      return "WARN";
    case mx.logging.LogEventLevel.FATAL:
      return "FATAL";
    case mx.logging.LogEventLevel.ALL:
      return "ALL";
  }
  return "UNKNOWN";
};


/**
 * @export
 * @type {number}
 */
mx.logging.LogEvent.prototype.level = 0;


/**
 * @export
 * @type {string}
 */
mx.logging.LogEvent.prototype.message;


/**
 *  @asprivate
 * @export
 * @return {org.apache.royale.events.Event}
 */
mx.logging.LogEvent.prototype.clone = function() {
  return new mx.logging.LogEvent(this.message, this.level);
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.logging.LogEvent.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'LogEvent', qName: 'mx.logging.LogEvent', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.logging.LogEvent.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'level': { type: 'int', get_set: function (/** mx.logging.LogEvent */ inst, /** * */ v) {return v !== undefined ? inst.level = v : inst.level;}},
        'message': { type: 'String', get_set: function (/** mx.logging.LogEvent */ inst, /** * */ v) {return v !== undefined ? inst.message = v : inst.message;}}
      };
    },
    methods: function () {
      return {
        '|getLevelString': { type: 'String', declaredBy: 'mx.logging.LogEvent', parameters: function () { return [ 'uint', false ]; }},
        'LogEvent': { type: '', declaredBy: 'mx.logging.LogEvent', parameters: function () { return [ 'String', true ,'int', true ]; }},
        'clone': { type: 'org.apache.royale.events.Event', declaredBy: 'mx.logging.LogEvent'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.logging.LogEvent.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./LogEvent.js.map
