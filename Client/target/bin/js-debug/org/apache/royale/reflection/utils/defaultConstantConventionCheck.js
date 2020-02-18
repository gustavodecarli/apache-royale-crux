/**
 * Generated by Apache Royale Compiler from org/apache/royale/reflection/utils/defaultConstantConventionCheck.as
 * org.apache.royale.reflection.utils.defaultConstantConventionCheck
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.reflection.utils.defaultConstantConventionCheck');
/* Royale Dependency List: */



/**
 * @asparam candidate the string name to check for conformance with naming convention for constants
 * @asreturn true if the candidate string matches the naming convention for constants
 * @export
 * @param {string} candidate
 * @return {boolean}
 */
org.apache.royale.reflection.utils.defaultConstantConventionCheck = function(candidate) {
  return !!(candidate && /^[A-Z][A-Z_0-9]+$/.test(candidate));
}
