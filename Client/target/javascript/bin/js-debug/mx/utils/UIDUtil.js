/**
 * Generated by Apache Royale Compiler from mx/utils/UIDUtil.as
 * mx.utils.UIDUtil
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.utils.UIDUtil');
/* Royale Dependency List: XMLList,mx.core.IPropertyChangeNotifier,mx.core.IUIComponent,mx.core.IUID,mx.core.mx_internal,org.apache.royale.utils.BinaryData,org.apache.royale.utils.UIDUtil,org.apache.royale.utils.Language,XML*/




/**
 * @constructor
 */
mx.utils.UIDUtil = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.utils.UIDUtil', mx.utils.UIDUtil);


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
mx.utils.UIDUtil.createUID = function() {
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
mx.utils.UIDUtil.fromByteArray = function(ba) {
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
mx.utils.UIDUtil.isUID = function(uid) {
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
mx.utils.UIDUtil.toBinary = function(uid) {
  return org.apache.royale.utils.UIDUtil.toBinary(uid);
};


/**
 *  Returns the UID (unique identifier) for the specified object.
 *  If the specified object doesn't have an UID
 *  then the method assigns one to it.
 *  If a map is specified this method will use the map
 *  to construct the UID.
 *  As a special case, if the item passed in is null,
 *  this method returns a null UID.
 *  
 *  @asparam item Object that we need to find the UID for.
 *
 *  @asreturn The UID that was either found or generated.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {Object} item
 * @return {string}
 */
mx.utils.UIDUtil.getUID = function(item) {
  var /** @type {string} */ result = null;
  if (item == null)
    return result;
  if (org.apache.royale.utils.Language.is(item, mx.core.IUID)) {
    result = org.apache.royale.utils.Language.as(item, mx.core.IUID, true).uid;
    if (result == null || result.length == 0) {
      result = mx.utils.UIDUtil.createUID();
      org.apache.royale.utils.Language.as(item, mx.core.IUID, true).uid = result;
    }
  } else if (org.apache.royale.utils.Language.is(item, mx.core.IPropertyChangeNotifier) && !org.apache.royale.utils.Language.is(item, mx.core.IUIComponent)) {
    result = org.apache.royale.utils.Language.as(item, mx.core.IPropertyChangeNotifier, true).uid;
    if (result == null || result.length == 0) {
      result = mx.utils.UIDUtil.createUID();
      org.apache.royale.utils.Language.as(item, mx.core.IPropertyChangeNotifier, true).uid = result;
    }
  } else if (org.apache.royale.utils.Language.is(item, String)) {
    return org.apache.royale.utils.Language.as(item, String);
  } else {
    try {
      if (org.apache.royale.utils.Language.is(item, XMLList) && item.length == 1)
        item = item[0];
      if ("mx_internal_uid" in item)
        return org.apache.royale.utils.Language.string(item.mx_internal_uid);
      if ("uid" in item)
        return org.apache.royale.utils.Language.string(item.uid);
      
      if (!result) {
        result = mx.utils.UIDUtil.createUID();
        try {
          item.mx_internal_uid = result;
        } catch (e) {
          
        }
      }
    } catch (e) {
      result = item.toString();
    }
  }
  return result;
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.utils.UIDUtil.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'UIDUtil', qName: 'mx.utils.UIDUtil', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.utils.UIDUtil.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        '|createUID': { type: 'String', declaredBy: 'mx.utils.UIDUtil'},
        '|fromByteArray': { type: 'String', declaredBy: 'mx.utils.UIDUtil', parameters: function () { return [ 'Object', false ]; }},
        '|isUID': { type: 'Boolean', declaredBy: 'mx.utils.UIDUtil', parameters: function () { return [ 'String', false ]; }},
        '|toBinary': { type: 'org.apache.royale.utils.BinaryData', declaredBy: 'mx.utils.UIDUtil', parameters: function () { return [ 'String', false ]; }},
        '|getUID': { type: 'String', declaredBy: 'mx.utils.UIDUtil', parameters: function () { return [ 'Object', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.utils.UIDUtil.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./UIDUtil.js.map