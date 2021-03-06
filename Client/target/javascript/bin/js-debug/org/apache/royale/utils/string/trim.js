/**
 * Generated by Apache Royale Compiler from org/apache/royale/utils/string/trim.as
 * org.apache.royale.utils.string.trim
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.utils.string.trim');
/* Royale Dependency List: org.apache.royale.debugging.assert*/




/**
 *  Trims all whitespace off the beginning and end of a string.
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9
 *  @royalesuppressexport
 * @param {string} str
 * @return {string}
 */
org.apache.royale.utils.string.trim = function(str) {
  org.apache.royale.debugging.assert(str != null, "trim() cannot be called on null");
  
  return str.trim();
}
