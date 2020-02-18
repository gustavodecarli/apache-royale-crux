/**
 * Generated by Apache Royale Compiler from org/apache/royale/reflection/utils/getMembersWithMetadata.as
 * org.apache.royale.reflection.utils.getMembersWithMetadata
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.reflection.utils.getMembersWithMetadata');
/* Royale Dependency List: org.apache.royale.reflection.TypeDefinition,org.apache.royale.reflection.utils.MemberTypes,org.apache.royale.reflection.utils.filterForMetaTags,org.apache.royale.utils.Language*/




/**
 *  A utility method to retrieve all members with a single metadata tag name (String) 
 *  or one of various tag names (an Array of Strings)
 *  It will return variables, accessors or methods (by default) that have the specified metadata (assuming it is included in the build)
 *  
 *  @asparam fromDefinition the definition to retrieve the member definitions from
 *  @asparam tagsOrTag either a String or and Array of Strings to search for
 *  @asparam includeStatics true if static members should be searched. Defaults to false, so only instance members are searched
 *  @asparam memberTypes a bitwise combination of MemberTypes constants to restrict returned items
 *  to VARIABLES, ACCESSORS, METHODS or specific combinations thereof, defaults to VARIABLES | ACCESSORS | METHODS
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {org.apache.royale.reflection.TypeDefinition} fromDefinition
 * @param {Object} tagsOrTag
 * @param {boolean=} includeStatics
 * @param {number=} memberTypes
 * @return {Array}
 */
org.apache.royale.reflection.utils.getMembersWithMetadata = function(fromDefinition, tagsOrTag, includeStatics, memberTypes) {
  includeStatics = typeof includeStatics !== 'undefined' ? includeStatics : false;
  memberTypes = typeof memberTypes !== 'undefined' ? memberTypes : 7;
  var /** @type {Array} */ ret = [];
  if (!fromDefinition)
    return ret;
  var /** @type {Array} */ search = org.apache.royale.utils.Language.is(tagsOrTag, Array) ? org.apache.royale.utils.Language.as(tagsOrTag, Array) : [tagsOrTag + ''];
  if (includeStatics) {
    if ((memberTypes & org.apache.royale.reflection.utils.MemberTypes.VARIABLES) != 0)
      org.apache.royale.reflection.utils.filterForMetaTags(fromDefinition.staticVariables, search, ret);
    if ((memberTypes & org.apache.royale.reflection.utils.MemberTypes.ACCESSORS) != 0)
      org.apache.royale.reflection.utils.filterForMetaTags(fromDefinition.staticAccessors, search, ret);
    if ((memberTypes & org.apache.royale.reflection.utils.MemberTypes.METHODS) != 0)
      org.apache.royale.reflection.utils.filterForMetaTags(fromDefinition.staticMethods, search, ret);
  }
  if ((memberTypes & org.apache.royale.reflection.utils.MemberTypes.VARIABLES) != 0)
    org.apache.royale.reflection.utils.filterForMetaTags(fromDefinition.variables, search, ret);
  if ((memberTypes & org.apache.royale.reflection.utils.MemberTypes.ACCESSORS) != 0)
    org.apache.royale.reflection.utils.filterForMetaTags(fromDefinition.accessors, search, ret);
  if ((memberTypes & org.apache.royale.reflection.utils.MemberTypes.METHODS) != 0)
    org.apache.royale.reflection.utils.filterForMetaTags(fromDefinition.methods, search, ret);
  return ret;
}