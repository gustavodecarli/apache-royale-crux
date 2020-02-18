/**
 * Generated by Apache Royale Compiler from org/apache/royale/utils/loadBeadFromValuesManager.as
 * org.apache.royale.utils.loadBeadFromValuesManager
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.utils.loadBeadFromValuesManager');
/* Royale Dependency List: org.apache.royale.core.IBead,org.apache.royale.core.IStrand,org.apache.royale.core.ValuesManager*/




/**
 *  @asreturn Loaded Bead.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 *  @royalesuppressexport
 *  @royaleignorecoercion Class
 *  @royaleignorecoercion Function
 *  @royaleignorecoercion org.apache.royale.core.IBead
 * @param {Object} classOrInterface
 * @param {string} classOrInterfaceName
 * @param {org.apache.royale.core.IStrand} strand
 * @return {Object}
 */
org.apache.royale.utils.loadBeadFromValuesManager = function(classOrInterface, classOrInterfaceName, strand) {
  var /** @type {Object} */ result = strand.getBeadByType(classOrInterface);
  if (!result) {
    var /** @type {Object} */ c =  /** @type {Object|null} */ (org.apache.royale.core.ValuesManager["valuesImpl"].getValue(strand, classOrInterfaceName));
    if (c) {
      var /** @type {Function} */ f =  /** @type {Function} */ (c);
      result = new f();
      
      if (result)
        strand.addBead(result);
    }
  }
  return result;
}
