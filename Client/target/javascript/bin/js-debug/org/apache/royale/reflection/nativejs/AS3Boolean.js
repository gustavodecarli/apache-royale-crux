/**
 * Generated by Apache Royale Compiler from org/apache/royale/reflection/nativejs/AS3Boolean.as
 * org.apache.royale.reflection.nativejs.AS3Boolean
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.reflection.nativejs.AS3Boolean');
/* Royale Dependency List: */



/**
 * Provides data for a stand-in TypeDefinition of the native as3 type for javascript
 * @export
 * @return {Object}
 */
org.apache.royale.reflection.nativejs.AS3Boolean = function() {
  var /** @type {Object} */ ret = {};
  ret['classRef'] = Boolean;
  ret['name'] = 'Boolean';
  ret['NATIVE_TYPE'] = true;
  ret['ROYALE_CLASS_INFO'] = {names:[{name:'Boolean', qName:'Boolean', kind:'class'}]};
  ret['ROYALE_REFLECTION_INFO'] = function() {
    return {'methods':function() {
      return {'Boolean':{'parameters':function() {
        return ['*', true];
      }, 'type':'', 'declaredBy':'Boolean'}};
    }};
  };
  return ret;
}