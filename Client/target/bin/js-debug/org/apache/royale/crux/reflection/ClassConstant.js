/**
 * Generated by Apache Royale Compiler from org/apache/royale/crux/reflection/ClassConstant.as
 * org.apache.royale.crux.reflection.ClassConstant
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.crux.reflection.ClassConstant');
/* Royale Dependency List: org.apache.royale.crux.reflection.TypeCache,org.apache.royale.reflection.getDefinitionByName,org.apache.royale.reflection.getQualifiedClassName,org.apache.royale.utils.Language*/




/**
 * @constructor
 */
org.apache.royale.crux.reflection.ClassConstant = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.crux.reflection.ClassConstant', org.apache.royale.crux.reflection.ClassConstant);


/**
 * @protected
 * @const
 * @type {RegExp}
 */
org.apache.royale.crux.reflection.ClassConstant.CLASS_CONSTANT_PATTERN = /([^.]+)\.([A-Z0-9_*]+)$/;


/**
 * @protected
 * @const
 * @type {RegExp}
 */
org.apache.royale.crux.reflection.ClassConstant.CLASS_PACKAGE_CONSTANT_PATTERN = /^(.*)\.([^.]+)\.([A-Z0-9_*]+)$/;


/**
 * Evaluates whether the specified value defines a class constant.  (Ex. 'Class.CONSTANT')
 *
 * @asparam value A text value that potentially defines a class constant.
 * @asreturns A Boolean evaluation of whether the specified value defines a class constant.
 * @export
 * @param {string} value
 * @return {boolean}
 */
org.apache.royale.crux.reflection.ClassConstant.isClassConstant = function(value) {
  return !!(org.apache.royale.crux.reflection.ClassConstant.CLASS_CONSTANT_PATTERN.exec(value));
};


/**
 * Gets the class name portion of a class constant.
 *
 * @asparam constant A String that defines a class constant. (Ex. 'Class.CONSTANT')
 * @asreturns Returns the class name portion of a class constant. (Ex. 'Class' for 'Class.CONSTANT')
 * @export
 * @param {string} constant
 * @return {string}
 */
org.apache.royale.crux.reflection.ClassConstant.getClassName = function(constant) {
  var /** @type {Object} */ match = org.apache.royale.crux.reflection.ClassConstant.CLASS_CONSTANT_PATTERN.exec(constant);
  if (match)
    return org.apache.royale.utils.Language.as(match[1], String);
  return null;
};


/**
 * Gets the constant name portion of a class constant.
 *
 * @asparam constant A String that defines a class constant. (Ex. 'Class.CONSTANT')
 * @asreturns Returns the constant name portion of a class constant. (Ex. 'CONSTANT' for 'Class.CONSTANT')
 * @export
 * @param {string} constant
 * @return {string}
 */
org.apache.royale.crux.reflection.ClassConstant.getConstantName = function(constant) {
  var /** @type {Object} */ match = org.apache.royale.crux.reflection.ClassConstant.CLASS_CONSTANT_PATTERN.exec(constant);
  if (match)
    return org.apache.royale.utils.Language.as(match[2], String);
  return null;
};


/**
 * Gets the associated value for the specified class and class constant name.
 *
 * @asparam definition The class definition.
 * @asparam constantName The constant name.
 * @asparam constantType The expected constant type.
 * @asreturn Returns the associated value for the specified class constant.
 * @export
 * @param {Object} definition
 * @param {string} constantName
 * @param {string=} constantType
 * @return {*}
 */
org.apache.royale.crux.reflection.ClassConstant.getConstantValue = function(definition, constantName, constantType) {
  constantType = typeof constantType !== 'undefined' ? constantType : "String";
  var /** @type {Array} */ constants = org.apache.royale.crux.reflection.TypeCache.getStaticConstantCollection(definition);
  if (constants.indexOf(constantName) == -1) {
    throw new Error(org.apache.royale.reflection.getQualifiedClassName(definition) + " has no constant named " + constantName + ".");
  }
  return definition[constantName];
};


/**
 * Gets the class referenced by the specified relative or fully qualified class constant.
 *
 * @asparam constant A relative or fully qualified class constant.
 * @asparam packageNames A set of package names to search to for a relative class constant.  (Optional)
 * @asreturns The class referenced by the specified class constant, if found. Otherwise, returns null.
 * @export
 * @param {string} constant
 * @param {Array=} packageNames
 * @return {Object}
 */
org.apache.royale.crux.reflection.ClassConstant.getClass = function(constant, packageNames) {
  packageNames = typeof packageNames !== 'undefined' ? packageNames : null;
  var /** @type {Object} */ match = org.apache.royale.crux.reflection.ClassConstant.CLASS_CONSTANT_PATTERN.exec(constant);
  if (match) {
    var /** @type {string} */ className = org.apache.royale.utils.Language.as(match[1], String);
    var /** @type {Object} */ packageMatch = org.apache.royale.crux.reflection.ClassConstant.CLASS_PACKAGE_CONSTANT_PATTERN.exec(constant);
    if (packageMatch) {
      var /** @type {string} */ packageName = org.apache.royale.utils.Language.as(packageMatch[1], String);
      return org.apache.royale.crux.reflection.ClassConstant.getClassDefinition(packageName + "." + className);
    } else {
      return org.apache.royale.crux.reflection.ClassConstant.findClassDefinition(className, packageNames);
    }
  }
  return null;
};


/**
 * Finds the class definition given a class name and set of potential package names.
 *
 * @asparam className The class name.
 * @asparam packageNames The set of potential package names to search.
 * @asreturns Returns the class definition if found. Otherwise returns null.
 * @protected
 * @param {string} className
 * @param {Array} packageNames
 * @return {Object}
 */
org.apache.royale.crux.reflection.ClassConstant.findClassDefinition = function(className, packageNames) {
  var foreachiter0_target = packageNames;
  for (var foreachiter0 in foreachiter0_target) 
  {
  var packageName = foreachiter0_target[foreachiter0];
  {
    var /** @type {Object} */ definition = org.apache.royale.crux.reflection.ClassConstant.getClassDefinition(packageName + "." + className);
    if (definition != null)
      return definition;
  }}
  
  return null;
};


/**
 * Safely returns a reference to the class object of the class specified by the name parameter.
 *
 * @asparam name The fully qualified name of a class.
 * @asreturns Returns a reference to the class object of the class specified by the name parameter.
 * @protected
 * @param {string} name
 * @return {Object}
 */
org.apache.royale.crux.reflection.ClassConstant.getClassDefinition = function(name) {
  try {
    return org.apache.royale.utils.Language.as(org.apache.royale.reflection.getDefinitionByName(name), org.apache.royale.utils.Language.synthType('Class'));
  } catch (e) {
  }
  return null;
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.crux.reflection.ClassConstant.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ClassConstant', qName: 'org.apache.royale.crux.reflection.ClassConstant', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.crux.reflection.ClassConstant.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        '|isClassConstant': { type: 'Boolean', declaredBy: 'org.apache.royale.crux.reflection.ClassConstant', parameters: function () { return [ 'String', false ]; }},
        '|getClassName': { type: 'String', declaredBy: 'org.apache.royale.crux.reflection.ClassConstant', parameters: function () { return [ 'String', false ]; }},
        '|getConstantName': { type: 'String', declaredBy: 'org.apache.royale.crux.reflection.ClassConstant', parameters: function () { return [ 'String', false ]; }},
        '|getConstantValue': { type: '*', declaredBy: 'org.apache.royale.crux.reflection.ClassConstant', parameters: function () { return [ 'Class', false ,'String', false ,'String', true ]; }},
        '|getClass': { type: 'Class', declaredBy: 'org.apache.royale.crux.reflection.ClassConstant', parameters: function () { return [ 'String', false ,'Array', true ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.crux.reflection.ClassConstant.prototype.ROYALE_COMPILE_FLAGS = 10;