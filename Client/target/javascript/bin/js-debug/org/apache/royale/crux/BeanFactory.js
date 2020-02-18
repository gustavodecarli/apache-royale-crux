/**
 * Generated by Apache Royale Compiler from org/apache/royale/crux/BeanFactory.as
 * org.apache.royale.crux.BeanFactory
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.crux.BeanFactory');
/* Royale Dependency List: org.apache.royale.core.IFlexInfo,org.apache.royale.core.UIBase,org.apache.royale.crux.Bean,org.apache.royale.crux.CruxManager,org.apache.royale.crux.IBeanProvider,org.apache.royale.crux.ICrux,org.apache.royale.crux.ISetUpValidator,org.apache.royale.crux.ITearDownValidator,org.apache.royale.crux.Prototype,org.apache.royale.crux.events.BeanEvent,org.apache.royale.crux.events.CruxEvent,org.apache.royale.crux.processors.IBeanProcessor,org.apache.royale.crux.processors.IFactoryProcessor,org.apache.royale.crux.processors.IMetadataProcessor,org.apache.royale.crux.processors.IProcessor,org.apache.royale.crux.reflection.TypeCache,org.apache.royale.crux.utils.view.simulatedSingleEnterFrame,org.apache.royale.events.Event,org.apache.royale.reflection.getQualifiedClassName,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.crux.IBeanFactory');
goog.require('org.apache.royale.events.EventDispatcher');



/**
 * Constructor
 * @constructor
 * @extends {org.apache.royale.events.EventDispatcher}
 * @implements {org.apache.royale.crux.IBeanFactory}
 */
org.apache.royale.crux.BeanFactory = function() {
  
  this._beans = [];
  this.removedDisplayObjects = [];
  org.apache.royale.crux.BeanFactory.base(this, 'constructor');
};
goog.inherits(org.apache.royale.crux.BeanFactory, org.apache.royale.events.EventDispatcher);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.crux.BeanFactory', org.apache.royale.crux.BeanFactory);


/**
 * @protected
 * @const
 * @type {RegExp}
 */
org.apache.royale.crux.BeanFactory.prototype.ignoredClasses = /^mx\.|^spark\.|^flash\.|^fl\.|^org\.apache\.royale\.|__/;


/**
 * @protected
 * @type {org.apache.royale.crux.ICrux}
 */
org.apache.royale.crux.BeanFactory.prototype.crux;


/**
 * @protected
 * @type {org.apache.royale.crux.IBeanFactory}
 */
org.apache.royale.crux.BeanFactory.prototype._parentBeanFactory;


/**
 * @protected
 * @type {Array}
 */
org.apache.royale.crux.BeanFactory.prototype._beans;


/**
 * @protected
 * @type {Array}
 */
org.apache.royale.crux.BeanFactory.prototype.removedDisplayObjects;


/**
 * @protected
 * @type {boolean}
 */
org.apache.royale.crux.BeanFactory.prototype.isListeningForEnterFrame = false;


/**
 * @export
 * @type {boolean}
 */
org.apache.royale.crux.BeanFactory.prototype.waitForSetup = false;


/**
 * @export
 * @param {org.apache.royale.crux.ICrux} crux
 */
org.apache.royale.crux.BeanFactory.prototype.setUp = function(crux) {
  this.crux = crux;
  crux.dispatcher.addEventListener(org.apache.royale.crux.events.BeanEvent.ADD_BEAN, org.apache.royale.utils.Language.closure(this.handleBeanEvent, this, 'handleBeanEvent'));
  crux.dispatcher.addEventListener(org.apache.royale.crux.events.BeanEvent.SET_UP_BEAN, org.apache.royale.utils.Language.closure(this.handleBeanEvent, this, 'handleBeanEvent'));
  crux.dispatcher.addEventListener(org.apache.royale.crux.events.BeanEvent.TEAR_DOWN_BEAN, org.apache.royale.utils.Language.closure(this.handleBeanEvent, this, 'handleBeanEvent'));
  crux.dispatcher.addEventListener(org.apache.royale.crux.events.BeanEvent.REMOVE_BEAN, org.apache.royale.utils.Language.closure(this.handleBeanEvent, this, 'handleBeanEvent'));
  var foreachiter0_target = crux.beanProviders;
  for (var foreachiter0 in foreachiter0_target) 
  {
  var beanProvider = foreachiter0_target[foreachiter0];
  {
    this.addBeanProvider(beanProvider, false);
  }}
  
  this.runFactoryProcessors();
  this.completeBeanFactorySetup();
};


/**
 * Executes any Factory Processors
 * @export
 */
org.apache.royale.crux.BeanFactory.prototype.runFactoryProcessors = function() {
  var foreachiter1_target = this.crux.processors;
  for (var foreachiter1 in foreachiter1_target) 
  {
  var processor = foreachiter1_target[foreachiter1];
  {
    if (org.apache.royale.utils.Language.is(processor, org.apache.royale.crux.processors.IFactoryProcessor)) {
      org.apache.royale.utils.Language.as(processor, org.apache.royale.crux.processors.IFactoryProcessor, true).setUpFactory(this);
    }
  }}
  
};


/**
 * @export
 */
org.apache.royale.crux.BeanFactory.prototype.completeBeanFactorySetup = function() {
  if (this.waitForSetup)
    return;
  var foreachiter2_target = this.beans;
  for (var foreachiter2 in foreachiter2_target) 
  {
  var bean = foreachiter2_target[foreachiter2];
  {
    if (!org.apache.royale.utils.Language.is(bean, org.apache.royale.crux.Prototype))
      this.setUpBean(bean);
  }}
  
  if (this.crux.catchViews == false)
    return;
  var /** @type {string} */ className = org.apache.royale.reflection.getQualifiedClassName(this.crux.dispatcher);
  goog.events.listen(this.crux.dispatcher, this.crux.config.setUpEventType, org.apache.royale.utils.Language.closure(this.setUpEventHandler, this, 'setUpEventHandler'), (this.crux.config.setUpEventPhase == 1));
  goog.events.listen(this.crux.dispatcher, this.crux.config.tearDownEventType, org.apache.royale.utils.Language.closure(this.tearDownEventHandler, this, 'tearDownEventHandler'), (this.crux.config.tearDownEventPhase == 1));
  
  this.crux.dispatcher.dispatchEvent(new org.apache.royale.crux.events.CruxEvent(org.apache.royale.crux.events.CruxEvent.LOAD_COMPLETE, this.crux));
};


/**
 * @export
 */
org.apache.royale.crux.BeanFactory.prototype.tearDown = function() {
  var foreachiter3_target = this.crux.beanProviders;
  for (var foreachiter3 in foreachiter3_target) 
  {
  var beanProvider = foreachiter3_target[foreachiter3];
  {
    this.removeBeanProvider(beanProvider);
  }}
  
  this.crux.dispatcher.removeEventListener(org.apache.royale.crux.events.BeanEvent.ADD_BEAN, org.apache.royale.utils.Language.closure(this.handleBeanEvent, this, 'handleBeanEvent'));
  this.crux.dispatcher.removeEventListener(org.apache.royale.crux.events.BeanEvent.SET_UP_BEAN, org.apache.royale.utils.Language.closure(this.handleBeanEvent, this, 'handleBeanEvent'));
  this.crux.dispatcher.removeEventListener(org.apache.royale.crux.events.BeanEvent.TEAR_DOWN_BEAN, org.apache.royale.utils.Language.closure(this.handleBeanEvent, this, 'handleBeanEvent'));
  this.crux.dispatcher.removeEventListener(org.apache.royale.crux.events.BeanEvent.REMOVE_BEAN, org.apache.royale.utils.Language.closure(this.handleBeanEvent, this, 'handleBeanEvent'));
  goog.events.unlisten(this.crux.dispatcher, this.crux.config.setUpEventType, org.apache.royale.utils.Language.closure(this.setUpEventHandler, this, 'setUpEventHandler'), (this.crux.config.setUpEventPhase == 0));
  goog.events.unlisten(this.crux.dispatcher, this.crux.config.tearDownEventType, org.apache.royale.utils.Language.closure(this.tearDownEventHandler, this, 'tearDownEventHandler'), (this.crux.config.tearDownEventPhase == 0));
  
};


/**
 * @protected
 * @param {Object} source
 * @param {string=} beanName
 * @return {org.apache.royale.crux.Bean}
 */
org.apache.royale.crux.BeanFactory.prototype.createBeanFromSource = function(source, beanName) {
  beanName = typeof beanName !== 'undefined' ? beanName : null;
  var /** @type {org.apache.royale.crux.Bean} */ bean = this.getBeanForSource(source);
  if (bean == null)
    bean = org.apache.royale.crux.BeanFactory.constructBean(source, beanName);
  return bean;
};


/**
 * @protected
 * @param {Object} source
 * @return {org.apache.royale.crux.Bean}
 */
org.apache.royale.crux.BeanFactory.prototype.getBeanForSource = function(source) {
  var foreachiter4_target = this.beans;
  for (var foreachiter4 in foreachiter4_target) 
  {
  var bean = foreachiter4_target[foreachiter4];
  {
    if (org.apache.royale.utils.Language.is(bean, org.apache.royale.crux.Prototype) && (org.apache.royale.utils.Language.as(bean, org.apache.royale.crux.Prototype, true).singleton == false || org.apache.royale.utils.Language.as(bean, org.apache.royale.crux.Prototype, true).initialized == false))
      continue;
    else if (bean.source === source)
      return bean;
  }}
  
  return null;
};


/**
 * @export
 * @param {org.apache.royale.crux.IBeanProvider} beanProvider
 * @param {boolean=} autoSetUpBeans
 */
org.apache.royale.crux.BeanFactory.prototype.addBeanProvider = function(beanProvider, autoSetUpBeans) {
  autoSetUpBeans = typeof autoSetUpBeans !== 'undefined' ? autoSetUpBeans : true;
  var /** @type {org.apache.royale.crux.Bean} */ bean;
  var foreachiter5_target = beanProvider.beans;
  for (var foreachiter5 in foreachiter5_target) 
  {
  bean = foreachiter5_target[foreachiter5];
  {
    this.addBean(bean, false);
  }}
  
  if (autoSetUpBeans) {
    var foreachiter6_target = beanProvider.beans;
    for (var foreachiter6 in foreachiter6_target) 
    {
    bean = foreachiter6_target[foreachiter6];
    {
      if (!org.apache.royale.utils.Language.is(bean, org.apache.royale.crux.Prototype))
        this.setUpBean(bean);
    }}
    
  }
};


/**
 * @export
 * @param {org.apache.royale.crux.Bean} bean
 * @param {boolean=} autoSetUpBean
 * @return {org.apache.royale.crux.Bean}
 */
org.apache.royale.crux.BeanFactory.prototype.addBean = function(bean, autoSetUpBean) {
  autoSetUpBean = typeof autoSetUpBean !== 'undefined' ? autoSetUpBean : true;
  bean.beanFactory = this;
  this.beans.push(bean);
  if (autoSetUpBean && !org.apache.royale.utils.Language.is(bean, org.apache.royale.crux.Prototype))
    this.setUpBean(bean);
  return bean;
};


/**
 * @export
 * @param {org.apache.royale.crux.IBeanProvider} beanProvider
 */
org.apache.royale.crux.BeanFactory.prototype.removeBeanProvider = function(beanProvider) {
  var foreachiter7_target = beanProvider.beans;
  for (var foreachiter7 in foreachiter7_target) 
  {
  var bean = foreachiter7_target[foreachiter7];
  {
    this.removeBean(bean);
  }}
  
};


/**
 * @export
 * @param {org.apache.royale.crux.Bean} bean
 */
org.apache.royale.crux.BeanFactory.prototype.removeBean = function(bean) {
  if (this.beans.indexOf(bean) > -1)
    this.beans.splice(this.beans.indexOf(bean), 1);
  this.tearDownBean(bean);
  bean.beanFactory = null;
  bean.typeDescriptor = null;
  bean.source = null;
  bean = null;
};


/**
 * @export
 * @param {string} name
 * @return {org.apache.royale.crux.Bean}
 */
org.apache.royale.crux.BeanFactory.prototype.getBeanByName = function(name) {
  var /** @type {org.apache.royale.crux.Bean} */ foundBean = null;
  var foreachiter8_target = this.beans;
  for (var foreachiter8 in foreachiter8_target) 
  {
  var bean = foreachiter8_target[foreachiter8];
  {
    if (bean.name == name) {
      foundBean = bean;
      break;
    }
  }}
  
  if (foundBean != null && !org.apache.royale.utils.Language.is(foundBean, org.apache.royale.crux.Prototype) && !foundBean.initialized)
    this.setUpBean(foundBean);
  else if (foundBean == null && this.parentBeanFactory != null)
    foundBean = this.parentBeanFactory.getBeanByName(name);
  return foundBean;
};


/**
 * @export
 * @param {Object} beanType
 * @return {org.apache.royale.crux.Bean}
 */
org.apache.royale.crux.BeanFactory.prototype.getBeanByType = function(beanType) {
  var /** @type {org.apache.royale.crux.Bean} */ foundBean;
  var /** @type {string} */ beanTypeName = org.apache.royale.reflection.getQualifiedClassName(beanType);
  var foreachiter9_target = this.beans;
  for (var foreachiter9 in foreachiter9_target) 
  {
  var bean = foreachiter9_target[foreachiter9];
  {
    if (bean.typeDescriptor.satisfiesType(beanTypeName)) {
      if (foundBean != null) {
        throw new Error("AmbiguousReferenceError. More than one bean was found with type: " + beanType);
      }
      foundBean = bean;
    }
  }}
  
  if (foundBean != null && !org.apache.royale.utils.Language.is(foundBean, org.apache.royale.crux.Prototype) && !foundBean.initialized)
    this.setUpBean(foundBean);
  else if (foundBean == null && this.parentBeanFactory != null)
    foundBean = this.parentBeanFactory.getBeanByType(beanType);
  return foundBean;
};


/**
 * Initialze Bean
 * @export
 * @param {org.apache.royale.crux.Bean} bean
 */
org.apache.royale.crux.BeanFactory.prototype.setUpBean = function(bean) {
  if (bean.initialized)
    return;
  bean.initialized = true;
  var /** @type {org.apache.royale.crux.processors.IProcessor} */ processor;
  var foreachiter10_target = this.crux.processors;
  for (var foreachiter10 in foreachiter10_target) 
  {
  processor = foreachiter10_target[foreachiter10];
  {
    if (org.apache.royale.utils.Language.is(processor, org.apache.royale.crux.processors.IFactoryProcessor))
      continue;
    if (org.apache.royale.utils.Language.is(processor, org.apache.royale.crux.processors.IMetadataProcessor)) {
      var /** @type {org.apache.royale.crux.processors.IMetadataProcessor} */ metadataProcessor = org.apache.royale.utils.Language.as(processor, org.apache.royale.crux.processors.IMetadataProcessor, true);
      var /** @type {Array} */ metadataTags = [];
      var foreachiter11_target = metadataProcessor.metadataNames;
      for (var foreachiter11 in foreachiter11_target) 
      {
      var metadataName = foreachiter11_target[foreachiter11];
      {
        metadataTags = metadataTags.concat(bean.typeDescriptor.getMetadataTagsByName(metadataName));
      }}
      
      metadataProcessor.setUpMetadataTags(metadataTags, bean);
    }
    if (org.apache.royale.utils.Language.is(processor, org.apache.royale.crux.processors.IBeanProcessor)) {
      org.apache.royale.utils.Language.as(processor, org.apache.royale.crux.processors.IBeanProcessor, true).setUpBean(bean);
    }
  }}
  
};


/**
 * Tear down the specified Bean, or any bean with the same source, and remove it from the cache.
 * @export
 * @param {org.apache.royale.crux.Bean} bean
 */
org.apache.royale.crux.BeanFactory.prototype.tearDownBean = function(bean) {
  if (bean.source == null)
    return;
  var foreachiter12_target = this.crux.processors;
  for (var foreachiter12 in foreachiter12_target) 
  {
  var processor = foreachiter12_target[foreachiter12];
  {
    if (org.apache.royale.utils.Language.is(processor, org.apache.royale.crux.processors.IFactoryProcessor))
      continue;
    if (org.apache.royale.utils.Language.is(processor, org.apache.royale.crux.processors.IMetadataProcessor)) {
      var /** @type {org.apache.royale.crux.processors.IMetadataProcessor} */ metadataProcessor = org.apache.royale.utils.Language.as(processor, org.apache.royale.crux.processors.IMetadataProcessor, true);
      var /** @type {Array} */ metadataTags = [];
      var foreachiter13_target = metadataProcessor.metadataNames;
      for (var foreachiter13 in foreachiter13_target) 
      {
      var metadataName = foreachiter13_target[foreachiter13];
      {
        metadataTags = metadataTags.concat(bean.typeDescriptor.getMetadataTagsByName(metadataName));
      }}
      
      metadataProcessor.tearDownMetadataTags(metadataTags, bean);
    }
    if (org.apache.royale.utils.Language.is(processor, org.apache.royale.crux.processors.IBeanProcessor)) {
      org.apache.royale.utils.Language.as(processor, org.apache.royale.crux.processors.IBeanProcessor, true).tearDownBean(bean);
    }
  }}
  
  bean.initialized = false;
};


/**
 * Handle bean set up and tear down events.
 * @protected
 * @param {org.apache.royale.crux.events.BeanEvent} event
 */
org.apache.royale.crux.BeanFactory.prototype.handleBeanEvent = function(event) {
  var /** @type {org.apache.royale.crux.Bean} */ existingBean = this.getBeanForSource(event.source);
  switch (event.type) {
    case org.apache.royale.crux.events.BeanEvent.ADD_BEAN:
      if (existingBean)
        org.apache.royale.utils.Language.trace("{0} already exists as a bean. Ignoring ADD_BEAN request.", event.source.toString());
      else
        this.addBean(org.apache.royale.crux.BeanFactory.constructBean(event.source, event.beanName));
      break;
    case org.apache.royale.crux.events.BeanEvent.SET_UP_BEAN:
      if (existingBean)
        if (existingBean.initialized)
          org.apache.royale.utils.Language.trace("{0} is already set up as a bean. Ignoring SET_UP_BEAN request.", event.source.toString());
        else
          this.setUpBean(existingBean);
      else
        this.setUpBean(org.apache.royale.crux.BeanFactory.constructBean(event.source, event.beanName));
      break;
    case org.apache.royale.crux.events.BeanEvent.TEAR_DOWN_BEAN:
      if (existingBean)
        this.tearDownBean(existingBean);
      else
        this.tearDownBean(org.apache.royale.crux.BeanFactory.constructBean(event.source, null));
      break;
    case org.apache.royale.crux.events.BeanEvent.REMOVE_BEAN:
      if (existingBean)
        this.removeBean(existingBean);
      else
        org.apache.royale.utils.Language.trace("Could not find bean with {0} as its source. Ignoring REMOVE_BEAN request.", event.source.toString());
      break;
  }
};


/**
 * Evaluate whether Crux is configured such that the specified class is a potential injection target.
 * @protected
 * @param {Object} instance
 * @return {boolean}
 */
org.apache.royale.crux.BeanFactory.prototype.isPotentialInjectionTarget = function(instance) {
  var /** @type {string} */ className = org.apache.royale.reflection.getQualifiedClassName(instance);
  if (this.crux.config.viewPackages.length > 0) {
    var foreachiter14_target = this.crux.config.viewPackages;
    for (var foreachiter14 in foreachiter14_target) 
    {
    var viewPackage = foreachiter14_target[foreachiter14];
    {
      if (className.indexOf(viewPackage) == 0 && className.indexOf("__") < 0)
        return true;
    }}
    
    return false;
  } else {
    return !this.ignoredClasses.test(className);
  }
};


/**
 * Injection Event Handler
 * @protected
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.crux.BeanFactory.prototype.setUpEventHandler = function(event) {
  if (org.apache.royale.utils.Language.is(event.target, org.apache.royale.crux.ISetUpValidator) && !org.apache.royale.utils.Language.as(event.target, org.apache.royale.crux.ISetUpValidator, true).allowSetUp())
    return;
  if (this.isPotentialInjectionTarget(event.target)) {
    var /** @type {number} */ i = (this.removedDisplayObjects.indexOf(event.target)) >> 0;
    if (i != -1) {
      this.removedDisplayObjects.splice(i, 1);
      if (this.removedDisplayObjects.length == 0) {
        org.apache.royale.crux.utils.view.simulatedSingleEnterFrame(org.apache.royale.utils.Language.as(this.crux.dispatcher, org.apache.royale.core.IFlexInfo, true), org.apache.royale.utils.Language.closure(this.enterFrameHandler, this, 'enterFrameHandler'), true);
        this.isListeningForEnterFrame = false;
      }
      return;
    }
    org.apache.royale.crux.CruxManager.setUp(org.apache.royale.utils.Language.as(event.target, org.apache.royale.core.UIBase, true));
  }
};


/**
 * Injection Event Handler defined on SysMgr
 * @protected
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.crux.BeanFactory.prototype.setUpEventHandlerSysMgr = function(event) {
  org.apache.royale.utils.Language.trace('todo setUpEventHandlerSysMgr');
};


/**
 * Remove Event Handler
 * @protected
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.crux.BeanFactory.prototype.tearDownEventHandler = function(event) {
  if (org.apache.royale.utils.Language.is(event.target, org.apache.royale.crux.ITearDownValidator) && !org.apache.royale.utils.Language.as(event.target, org.apache.royale.crux.ITearDownValidator, true).allowTearDown())
    return;
  
  if (org.apache.royale.crux.CruxManager.wiredViews.get(event.target)) {
    this.addRemovedDisplayObject(org.apache.royale.utils.Language.as(event.target, org.apache.royale.core.UIBase, true));
  }
};


/**
 * @protected
 * @param {org.apache.royale.core.UIBase} displayObject
 */
org.apache.royale.crux.BeanFactory.prototype.addRemovedDisplayObject = function(displayObject) {
  if (this.removedDisplayObjects.indexOf(displayObject) == -1)
    this.removedDisplayObjects.push(displayObject);
  if (!this.isListeningForEnterFrame) {
    org.apache.royale.crux.utils.view.simulatedSingleEnterFrame(org.apache.royale.utils.Language.as(this.crux.dispatcher, org.apache.royale.core.IFlexInfo, true), org.apache.royale.utils.Language.closure(this.enterFrameHandler, this, 'enterFrameHandler'), false);
    this.isListeningForEnterFrame = true;
  }
};


/**
 * @protected
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.crux.BeanFactory.prototype.enterFrameHandler = function(event) {
  this.isListeningForEnterFrame = false;
  var /** @type {org.apache.royale.core.UIBase} */ displayObject = org.apache.royale.utils.Language.as(this.removedDisplayObjects.shift(), org.apache.royale.core.UIBase, true);
  while (displayObject) {
    org.apache.royale.crux.CruxManager.tearDown(displayObject);
    displayObject = org.apache.royale.utils.Language.as(this.removedDisplayObjects.shift(), org.apache.royale.core.UIBase, true);
  }
};


/**
 *
 * @royaleignorecoercion org.apache.royale.crux.Bean
 * @export
 * @param {*} obj
 * @param {string} name
 * @return {Object}
 */
org.apache.royale.crux.BeanFactory.constructBean = function(obj, name) {
  var /** @type {Object} */ bean;
  if (org.apache.royale.utils.Language.is(obj, org.apache.royale.crux.Bean)) {
    bean = obj;
  } else {
    bean = new org.apache.royale.crux.Bean();
    bean.source = obj;
  }
  bean.name = bean.name || name;
  bean.typeDescriptor = org.apache.royale.crux.reflection.TypeCache.getTypeDescriptor(bean.type);
  return bean;
};


org.apache.royale.crux.BeanFactory.prototype.get__beans = function() {
  return this._beans;
};


org.apache.royale.crux.BeanFactory.prototype.get__parentBeanFactory = function() {
  return this._parentBeanFactory;
};


org.apache.royale.crux.BeanFactory.prototype.set__parentBeanFactory = function(beanFactory) {
  this._parentBeanFactory = beanFactory;
};


Object.defineProperties(org.apache.royale.crux.BeanFactory.prototype, /** @lends {org.apache.royale.crux.BeanFactory.prototype} */ {
/**
  * @export
  * @type {Array} */
beans: {
get: org.apache.royale.crux.BeanFactory.prototype.get__beans},
/**
  * @export
  * @type {org.apache.royale.crux.IBeanFactory} */
parentBeanFactory: {
get: org.apache.royale.crux.BeanFactory.prototype.get__parentBeanFactory,
set: org.apache.royale.crux.BeanFactory.prototype.set__parentBeanFactory}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.crux.BeanFactory.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'BeanFactory', qName: 'org.apache.royale.crux.BeanFactory', kind: 'class' }], interfaces: [org.apache.royale.crux.IBeanFactory] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.crux.BeanFactory.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'waitForSetup': { type: 'Boolean', get_set: function (/** org.apache.royale.crux.BeanFactory */ inst, /** * */ v) {return v !== undefined ? inst.waitForSetup = v : inst.waitForSetup;}}
      };
    },
    accessors: function () {
      return {
        'beans': { type: 'Array', access: 'readonly', declaredBy: 'org.apache.royale.crux.BeanFactory'},
        'parentBeanFactory': { type: 'org.apache.royale.crux.IBeanFactory', access: 'readwrite', declaredBy: 'org.apache.royale.crux.BeanFactory'}
      };
    },
    methods: function () {
      return {
        'BeanFactory': { type: '', declaredBy: 'org.apache.royale.crux.BeanFactory'},
        'setUp': { type: 'void', declaredBy: 'org.apache.royale.crux.BeanFactory', parameters: function () { return [ 'org.apache.royale.crux.ICrux', false ]; }},
        'runFactoryProcessors': { type: 'void', declaredBy: 'org.apache.royale.crux.BeanFactory'},
        'completeBeanFactorySetup': { type: 'void', declaredBy: 'org.apache.royale.crux.BeanFactory'},
        'tearDown': { type: 'void', declaredBy: 'org.apache.royale.crux.BeanFactory'},
        'addBeanProvider': { type: 'void', declaredBy: 'org.apache.royale.crux.BeanFactory', parameters: function () { return [ 'org.apache.royale.crux.IBeanProvider', false ,'Boolean', true ]; }},
        'addBean': { type: 'org.apache.royale.crux.Bean', declaredBy: 'org.apache.royale.crux.BeanFactory', parameters: function () { return [ 'org.apache.royale.crux.Bean', false ,'Boolean', true ]; }},
        'removeBeanProvider': { type: 'void', declaredBy: 'org.apache.royale.crux.BeanFactory', parameters: function () { return [ 'org.apache.royale.crux.IBeanProvider', false ]; }},
        'removeBean': { type: 'void', declaredBy: 'org.apache.royale.crux.BeanFactory', parameters: function () { return [ 'org.apache.royale.crux.Bean', false ]; }},
        'getBeanByName': { type: 'org.apache.royale.crux.Bean', declaredBy: 'org.apache.royale.crux.BeanFactory', parameters: function () { return [ 'String', false ]; }},
        'getBeanByType': { type: 'org.apache.royale.crux.Bean', declaredBy: 'org.apache.royale.crux.BeanFactory', parameters: function () { return [ 'Class', false ]; }},
        'setUpBean': { type: 'void', declaredBy: 'org.apache.royale.crux.BeanFactory', parameters: function () { return [ 'org.apache.royale.crux.Bean', false ]; }},
        'tearDownBean': { type: 'void', declaredBy: 'org.apache.royale.crux.BeanFactory', parameters: function () { return [ 'org.apache.royale.crux.Bean', false ]; }},
        '|constructBean': { type: 'org.apache.royale.crux.Bean', declaredBy: 'org.apache.royale.crux.BeanFactory', parameters: function () { return [ '*', false ,'String', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.crux.BeanFactory.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./BeanFactory.js.map
