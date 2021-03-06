/**
 * Generated by Apache Royale Compiler from org/apache/royale/crux/IBeanFactoryAware.as
 * org.apache.royale.crux.IBeanFactoryAware
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.crux.IBeanFactoryAware');
/* Royale Dependency List: org.apache.royale.crux.IBeanFactory*/

goog.require('org.apache.royale.crux.ICruxInterface');



/**
 * @interface
 * @extends {org.apache.royale.crux.ICruxInterface}
 */
org.apache.royale.crux.IBeanFactoryAware = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.crux.IBeanFactoryAware', org.apache.royale.crux.IBeanFactoryAware);
/**  * @type {org.apache.royale.crux.IBeanFactory}
 */org.apache.royale.crux.IBeanFactoryAware.prototype.beanFactory;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.crux.IBeanFactoryAware.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IBeanFactoryAware', qName: 'org.apache.royale.crux.IBeanFactoryAware', kind: 'interface' }], interfaces: [org.apache.royale.crux.ICruxInterface] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.crux.IBeanFactoryAware.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'beanFactory': { type: 'org.apache.royale.crux.IBeanFactory', access: 'writeonly', declaredBy: 'org.apache.royale.crux.IBeanFactoryAware'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.crux.IBeanFactoryAware.prototype.ROYALE_COMPILE_FLAGS = 10;
