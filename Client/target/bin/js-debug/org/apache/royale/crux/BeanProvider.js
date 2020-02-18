/**
 * Generated by Apache Royale Compiler from org/apache/royale/crux/BeanProvider.as
 * org.apache.royale.crux.BeanProvider
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.crux.BeanProvider');
/* Royale Dependency List: org.apache.royale.crux.Bean,org.apache.royale.crux.BeanFactory,org.apache.royale.reflection.AccessorDefinition,org.apache.royale.reflection.TypeDefinition,org.apache.royale.reflection.VariableDefinition,org.apache.royale.reflection.describeType,org.apache.royale.utils.MXMLDataInterpreter,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.events.EventDispatcher');
goog.require('org.apache.royale.core.IDocument');
goog.require('org.apache.royale.core.IMXMLDocument');
goog.require('org.apache.royale.crux.IBeanProvider');



/**
 * Constructor
 * @constructor
 * @extends {org.apache.royale.events.EventDispatcher}
 * @implements {org.apache.royale.crux.IBeanProvider}
 * @implements {org.apache.royale.core.IMXMLDocument}
 * @implements {org.apache.royale.core.IDocument}
 * @param {Array=} beans
 */
org.apache.royale.crux.BeanProvider = function(beans) {
  beans = typeof beans !== 'undefined' ? beans : null;
  
  this._rawBeans = [];
  this._beans = [];
  this.org_apache_royale_crux_BeanProvider__mxmlDocument = this;
  org.apache.royale.crux.BeanProvider.base(this, 'constructor');
  this.beans = beans;
};
goog.inherits(org.apache.royale.crux.BeanProvider, org.apache.royale.events.EventDispatcher);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.crux.BeanProvider', org.apache.royale.crux.BeanProvider);


/**
 * @protected
 * @type {Array}
 */
org.apache.royale.crux.BeanProvider.prototype._rawBeans;


/**
 * @protected
 * @type {Array}
 */
org.apache.royale.crux.BeanProvider.prototype._beans;


/**
 * @export
 */
org.apache.royale.crux.BeanProvider.prototype.initialize = function() {
  this.initializeBeans();
  this.setBeanIds();
};


/**
 * @protected
 */
org.apache.royale.crux.BeanProvider.prototype.initializeBeans = function() {
  var foreachiter0_target = this._rawBeans;
  for (var foreachiter0 in foreachiter0_target) 
  {
  var beanSource = foreachiter0_target[foreachiter0];
  {
    this._beans.push(org.apache.royale.crux.BeanFactory.constructBean(beanSource, null));
  }}
  
};


/**
 * Since the setter for beans should have already created Bean objects for all children,
 * we are primarily trying to identify the id to set in the bean's name property.
 *
 * However, in some cases, we don't always have an array of beans at this time,
 * so if we don't find a Bean for an element we find in describeType, we create it.
 * @protected
 */
org.apache.royale.crux.BeanProvider.prototype.setBeanIds = function() {
  var /** @type {org.apache.royale.reflection.TypeDefinition} */ typeDefinition;
  var /** @type {Object} */ inspect;
  var /** @type {boolean} */ inspectOutside;
  if (this['constructor'] !== org.apache.royale.crux.BeanProvider) {
    inspect = this;
  } else {
    inspect = this.org_apache_royale_crux_BeanProvider__mxmlDocument;
    inspectOutside = true;
  }
  typeDefinition = org.apache.royale.reflection.describeType(inspect);
  var /** @type {Array} */ beanList = typeDefinition.variables;
  var /** @type {Array} */ accessors = typeDefinition.accessors;
  while (accessors.length) {
    var /** @type {org.apache.royale.reflection.AccessorDefinition} */ accessorDef = accessors.shift();
    if (accessorDef.access == 'readwrite')
      beanList.push(accessorDef);
  }
  var /** @type {*} */ child;
  var /** @type {string} */ name;
  var /** @type {string} */ beanId = null;
  var /** @type {boolean} */ found;
  var foreachiter1_target = beanList;
  for (var foreachiter1 in foreachiter1_target) 
  {
  var varDef = foreachiter1_target[foreachiter1];
  {
    name = varDef.name;
    beanId = org.apache.royale.utils.Language.string(org.apache.royale.utils.Language.is(varDef, org.apache.royale.reflection.AccessorDefinition) ? name : null);
    if (name != "beans") {
      if (name == 'model') {
        try {
          child = varDef.getValue(inspect);
        } catch (e) {
          child = null;
        }
      } else {
        child = varDef.getValue(inspect);
      }
      if (child != null) {
        found = false;
        var foreachiter2_target = this.beans;
        for (var foreachiter2 in foreachiter2_target) 
        {
        var bean = foreachiter2_target[foreachiter2];
        {
          if ((bean == child) || (bean.type == child)) {
            bean.name = beanId;
            found = true;
            break;
          }
        }}
        
        if (!found && !inspectOutside) {
          this.beans.push(org.apache.royale.crux.BeanFactory.constructBean(child, beanId));
        }
      }
    }
  }}
  
};


/**
 * @export
 * @param {org.apache.royale.crux.Bean} bean
 */
org.apache.royale.crux.BeanProvider.prototype.addBean = function(bean) {
  if (this.beans) {
    this.beans[this.beans.length] = bean;
  } else {
    this.beans = [bean];
  }
};


/**
 * @export
 * @param {org.apache.royale.crux.Bean} bean
 */
org.apache.royale.crux.BeanProvider.prototype.removeBean = function(bean) {
  if (this.beans) {
    this.beans.splice(this.beans.indexOf(bean), 1);
  }
};


/**
 * @private
 * @type {Array}
 */
org.apache.royale.crux.BeanProvider.prototype.org_apache_royale_crux_BeanProvider__mxmlDescriptor;


/**
 * @private
 * @type {Object}
 */
org.apache.royale.crux.BeanProvider.prototype.org_apache_royale_crux_BeanProvider__mxmlDocument;


/**
 *  @asprivate
 * @export
 * @param {Object} document
 * @param {Array} value
 */
org.apache.royale.crux.BeanProvider.prototype.setMXMLDescriptor = function(document, value) {
  this.org_apache_royale_crux_BeanProvider__mxmlDocument = document;
  this.org_apache_royale_crux_BeanProvider__mxmlDescriptor = value;
};


/**
 *  @asprivate
 * @export
 * @param {Object} document
 * @param {string=} id
 */
org.apache.royale.crux.BeanProvider.prototype.setDocument = function(document, id) {
  id = typeof id !== 'undefined' ? id : null;
  this.org_apache_royale_crux_BeanProvider__mxmlDocument = document;
};


/**
 *  @copy org.apache.royale.core.Application#generateMXMLAttributes()
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.4
 * @export
 * @param {Array} data
 */
org.apache.royale.crux.BeanProvider.prototype.generateMXMLAttributes = function(data) {
  org.apache.royale.utils.MXMLDataInterpreter.generateMXMLProperties(this, data);
  if ('_bindings' in this)
    this.processStartupBindings();
};


/**
 *  Supports lightweight basic cross-assignment values at startup only. No actual real bindings are created
 * @protected
 */
org.apache.royale.crux.BeanProvider.prototype.processStartupBindings = function() {
  var /** @type {number} */ i = 0;
  var /** @type {Array} */ bindingData = this["_bindings"];
  var /** @type {number} */ n = (bindingData[0]) >> 0;
  var /** @type {Object} */ binding = null;
  //var /** @type {number} */ i = 0;
  var /** @type {number} */ index = 1;
  for (i = 0; i < n; i++) {
    binding = {};
    binding.source = bindingData[index++];
    binding.destFunc = bindingData[index++];
    binding.destination = bindingData[index++];
    this.processStartupAssignment(binding.source, binding.destination);
  }
};


/**
 * @protected
 * @param {Object} source
 * @param {Object} destination
 */
org.apache.royale.crux.BeanProvider.prototype.processStartupAssignment = function(source, destination) {
  var /** @type {Object} */ sourceValue;
  var /** @type {Array} */ sourceArray;
  var /** @type {Array} */ destArray;
  if (org.apache.royale.utils.Language.is(source, String))
    sourceArray = [source];
  else
    sourceArray = org.apache.royale.utils.Language.as(source, Array).slice();
  sourceValue = this;
  while (sourceArray.length && sourceValue != null) {
    sourceValue = sourceValue[sourceArray.shift()];
  }
  if (sourceValue != null) {
    if (org.apache.royale.utils.Language.is(destination, String))
      destArray = [destination];
    else
      destArray = org.apache.royale.utils.Language.as(destination, Array).slice();
    destination = this;
    while (destArray.length > 1 && destination) {
      destination = destination[destArray.shift()];
    }
    if (destination) {
      destination[destArray[0]] = sourceValue;
    } else {
    }
  }
};


org.apache.royale.crux.BeanProvider.prototype.get__beans = function() {
  return this._beans;
};


org.apache.royale.crux.BeanProvider.prototype.set__beans = function(value) {
  if (value != null && value != this._beans && value != this._rawBeans) {
    this._rawBeans = value;
  }
};


org.apache.royale.crux.BeanProvider.prototype.get__MXMLDescriptor = function() {
  return this.org_apache_royale_crux_BeanProvider__mxmlDescriptor;
};


Object.defineProperties(org.apache.royale.crux.BeanProvider.prototype, /** @lends {org.apache.royale.crux.BeanProvider.prototype} */ {
/**
  * @export
  * @type {Array} */
beans: {
get: org.apache.royale.crux.BeanProvider.prototype.get__beans,
set: org.apache.royale.crux.BeanProvider.prototype.set__beans},
/**
  * @export
  * @type {Array} */
MXMLDescriptor: {
get: org.apache.royale.crux.BeanProvider.prototype.get__MXMLDescriptor}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.crux.BeanProvider.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'BeanProvider', qName: 'org.apache.royale.crux.BeanProvider', kind: 'class' }], interfaces: [org.apache.royale.crux.IBeanProvider, org.apache.royale.core.IMXMLDocument, org.apache.royale.core.IDocument] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.crux.BeanProvider.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'beans': { type: 'Array', access: 'readwrite', declaredBy: 'org.apache.royale.crux.BeanProvider'},
        'MXMLDescriptor': { type: 'Array', access: 'readonly', declaredBy: 'org.apache.royale.crux.BeanProvider'}
      };
    },
    methods: function () {
      return {
        'BeanProvider': { type: '', declaredBy: 'org.apache.royale.crux.BeanProvider', parameters: function () { return [ 'Array', true ]; }},
        'initialize': { type: 'void', declaredBy: 'org.apache.royale.crux.BeanProvider'},
        'addBean': { type: 'void', declaredBy: 'org.apache.royale.crux.BeanProvider', parameters: function () { return [ 'org.apache.royale.crux.Bean', false ]; }},
        'removeBean': { type: 'void', declaredBy: 'org.apache.royale.crux.BeanProvider', parameters: function () { return [ 'org.apache.royale.crux.Bean', false ]; }},
        'setMXMLDescriptor': { type: 'void', declaredBy: 'org.apache.royale.crux.BeanProvider', parameters: function () { return [ 'Object', false ,'Array', false ]; }},
        'setDocument': { type: 'void', declaredBy: 'org.apache.royale.crux.BeanProvider', parameters: function () { return [ 'Object', false ,'String', true ]; }},
        'generateMXMLAttributes': { type: 'void', declaredBy: 'org.apache.royale.crux.BeanProvider', parameters: function () { return [ 'Array', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.crux.BeanProvider.prototype.ROYALE_COMPILE_FLAGS = 10;
