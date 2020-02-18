/**
 * Generated by Apache Royale Compiler from org/apache/royale/crux/IBeanFactory.as
 * org.apache.royale.crux.IBeanFactory
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.crux.IBeanFactory');
/* Royale Dependency List: org.apache.royale.crux.Bean,org.apache.royale.crux.IBeanProvider,org.apache.royale.crux.ICrux*/




/**
 * @interface
 */
org.apache.royale.crux.IBeanFactory = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.crux.IBeanFactory', org.apache.royale.crux.IBeanFactory);
/**
 * @export
 * @param {org.apache.royale.crux.ICrux} crux
 */
org.apache.royale.crux.IBeanFactory.prototype.setUp = function(crux) {
};
org.apache.royale.crux.IBeanFactory.prototype.tearDown = function() {
};
/**
 * @export
 * @param {org.apache.royale.crux.Bean} bean
 */
org.apache.royale.crux.IBeanFactory.prototype.setUpBean = function(bean) {
};
/**
 * @export
 * @param {org.apache.royale.crux.Bean} bean
 * @param {boolean=} autoSetUpBean
 * @return {org.apache.royale.crux.Bean}
 */
org.apache.royale.crux.IBeanFactory.prototype.addBean = function(bean, autoSetUpBean) {
};
/**
 * @export
 * @param {org.apache.royale.crux.IBeanProvider} beanProvider
 * @param {boolean=} autoSetUpBeans
 */
org.apache.royale.crux.IBeanFactory.prototype.addBeanProvider = function(beanProvider, autoSetUpBeans) {
};
/**
 * @export
 * @param {org.apache.royale.crux.Bean} bean
 */
org.apache.royale.crux.IBeanFactory.prototype.tearDownBean = function(bean) {
};
/**
 * @export
 * @param {org.apache.royale.crux.Bean} bean
 */
org.apache.royale.crux.IBeanFactory.prototype.removeBean = function(bean) {
};
/**
 * @export
 * @param {org.apache.royale.crux.IBeanProvider} beanProvider
 */
org.apache.royale.crux.IBeanFactory.prototype.removeBeanProvider = function(beanProvider) {
};
/**  * @type {Array}
 */org.apache.royale.crux.IBeanFactory.prototype.beans;
/**
 * @export
 * @param {string} name
 * @return {org.apache.royale.crux.Bean}
 */
org.apache.royale.crux.IBeanFactory.prototype.getBeanByName = function(name) {
};
/**
 * @export
 * @param {Object} type
 * @return {org.apache.royale.crux.Bean}
 */
org.apache.royale.crux.IBeanFactory.prototype.getBeanByType = function(type) {
};
/**  * @type {org.apache.royale.crux.IBeanFactory}
 */org.apache.royale.crux.IBeanFactory.prototype.parentBeanFactory;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.crux.IBeanFactory.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IBeanFactory', qName: 'org.apache.royale.crux.IBeanFactory', kind: 'interface' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.crux.IBeanFactory.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'beans': { type: 'Array', access: 'readonly', declaredBy: 'org.apache.royale.crux.IBeanFactory'},
        'parentBeanFactory': { type: 'org.apache.royale.crux.IBeanFactory', access: 'readwrite', declaredBy: 'org.apache.royale.crux.IBeanFactory'}
      };
    },
    methods: function () {
      return {
        'setUp': { type: 'void', declaredBy: 'org.apache.royale.crux.IBeanFactory', parameters: function () { return [ 'org.apache.royale.crux.ICrux', false ]; }},
        'tearDown': { type: 'void', declaredBy: 'org.apache.royale.crux.IBeanFactory'},
        'setUpBean': { type: 'void', declaredBy: 'org.apache.royale.crux.IBeanFactory', parameters: function () { return [ 'org.apache.royale.crux.Bean', false ]; }},
        'addBean': { type: 'org.apache.royale.crux.Bean', declaredBy: 'org.apache.royale.crux.IBeanFactory', parameters: function () { return [ 'org.apache.royale.crux.Bean', false ,'Boolean', true ]; }},
        'addBeanProvider': { type: 'void', declaredBy: 'org.apache.royale.crux.IBeanFactory', parameters: function () { return [ 'org.apache.royale.crux.IBeanProvider', false ,'Boolean', true ]; }},
        'tearDownBean': { type: 'void', declaredBy: 'org.apache.royale.crux.IBeanFactory', parameters: function () { return [ 'org.apache.royale.crux.Bean', false ]; }},
        'removeBean': { type: 'void', declaredBy: 'org.apache.royale.crux.IBeanFactory', parameters: function () { return [ 'org.apache.royale.crux.Bean', false ]; }},
        'removeBeanProvider': { type: 'void', declaredBy: 'org.apache.royale.crux.IBeanFactory', parameters: function () { return [ 'org.apache.royale.crux.IBeanProvider', false ]; }},
        'getBeanByName': { type: 'org.apache.royale.crux.Bean', declaredBy: 'org.apache.royale.crux.IBeanFactory', parameters: function () { return [ 'String', false ]; }},
        'getBeanByType': { type: 'org.apache.royale.crux.Bean', declaredBy: 'org.apache.royale.crux.IBeanFactory', parameters: function () { return [ 'Class', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.crux.IBeanFactory.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./IBeanFactory.js.map
