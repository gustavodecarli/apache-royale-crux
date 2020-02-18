/**
 * Generated by Apache Royale Compiler from mx/utils/RPCUIDUtil.as
 * mx.utils.RPCUIDUtil
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.utils.RPCUIDUtil');
/* Royale Dependency List: org.apache.royale.utils.BinaryData,org.apache.royale.utils.UIDUtil,org.apache.royale.utils.Language,XML*/




/**
 * @constructor
 */
mx.utils.RPCUIDUtil = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.utils.RPCUIDUtil', mx.utils.RPCUIDUtil);


/**
 *  Generates a UID (unique identifier) based on ActionScript's
 *  pseudo-random number generator and the current time.
 *
 *  <p>The UID has the form
 *  <code>"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"</code>
 *  where X is a hexadecimal digit (0-9, A-F).</p>
 *
 *  <p>This UID will not be truly globally unique; but it is the best
 *  we can do without player support for UID generation.</p>
 *
 *  @asreturn The newly-generated UID.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @return {string}
 */
mx.utils.RPCUIDUtil.createUID = function() {
  return org.apache.royale.utils.UIDUtil.createUID();
};


/**
 * Converts a 128-bit UID encoded as a ByteArray to a String representation.
 * The format matches that generated by createUID. If a suitable ByteArray
 * is not provided, null is returned.
 * 
 * @asparam ba ByteArray 16 bytes in length representing a 128-bit UID.
 * 
 * @asreturn String representation of the UID, or null if an invalid
 * ByteArray is provided.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {Object} ba
 * @return {string}
 */
mx.utils.RPCUIDUtil.fromBinary = function(ba) {
  return org.apache.royale.utils.UIDUtil.fromBinary(org.apache.royale.utils.Language.as(ba, org.apache.royale.utils.BinaryData));
};


/**
 * A utility method to check whether a String value represents a 
 * correctly formatted UID value. UID values are expected to be 
 * in the format generated by createUID(), implying that only
 * capitalized A-F characters in addition to 0-9 digits are
 * supported.
 * 
 * @asparam uid The value to test whether it is formatted as a UID.
 * 
 * @asreturn Returns true if the value is formatted as a UID.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {string} uid
 * @return {boolean}
 */
mx.utils.RPCUIDUtil.isUID = function(uid) {
  return org.apache.royale.utils.UIDUtil.isUID(uid);
};


/**
 * Converts a UID formatted String to a ByteArray. The UID must be in the
 * format generated by createUID, otherwise null is returned.
 * 
 * @asparam String representing a 128-bit UID
 * 
 * @asreturn ByteArray 16 bytes in length representing the 128-bits of the
 * UID or null if the uid could not be converted.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {string} uid
 * @return {org.apache.royale.utils.BinaryData}
 */
mx.utils.RPCUIDUtil.toBinary = function(uid) {
  return org.apache.royale.utils.UIDUtil.toBinary(uid);
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.utils.RPCUIDUtil.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'RPCUIDUtil', qName: 'mx.utils.RPCUIDUtil', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.utils.RPCUIDUtil.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        '|createUID': { type: 'String', declaredBy: 'mx.utils.RPCUIDUtil'},
        '|fromBinary': { type: 'String', declaredBy: 'mx.utils.RPCUIDUtil', parameters: function () { return [ 'Object', false ]; }},
        '|isUID': { type: 'Boolean', declaredBy: 'mx.utils.RPCUIDUtil', parameters: function () { return [ 'String', false ]; }},
        '|toBinary': { type: 'org.apache.royale.utils.BinaryData', declaredBy: 'mx.utils.RPCUIDUtil', parameters: function () { return [ 'String', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.utils.RPCUIDUtil.prototype.ROYALE_COMPILE_FLAGS = 26;
