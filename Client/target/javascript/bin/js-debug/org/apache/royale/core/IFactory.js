/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/IFactory.as
 * org.apache.royale.core.IFactory
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.IFactory');
/* Royale Dependency List: */



/**
 * @interface
 */
org.apache.royale.core.IFactory = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.core.IFactory', org.apache.royale.core.IFactory);
/**
 *  This method is called to generate a new instance of
 *  an item renderer or other custom class.
 * 
 *  @asreturn A new instance of an item renderer or other custom class.
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @return {*}
 */
org.apache.royale.core.IFactory.prototype.newInstance = function() {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.IFactory.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IFactory', qName: 'org.apache.royale.core.IFactory', kind: 'interface' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.IFactory.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'newInstance': { type: '*', declaredBy: 'org.apache.royale.core.IFactory'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.core.IFactory.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./IFactory.js.map
