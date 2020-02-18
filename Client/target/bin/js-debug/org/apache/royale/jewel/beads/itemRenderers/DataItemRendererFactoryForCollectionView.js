/**
 * Generated by Apache Royale Compiler from org/apache/royale/jewel/beads/itemRenderers/DataItemRendererFactoryForCollectionView.as
 * org.apache.royale.jewel.beads.itemRenderers.DataItemRendererFactoryForCollectionView
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.jewel.beads.itemRenderers.DataItemRendererFactoryForCollectionView');
/* Royale Dependency List: org.apache.royale.collections.ICollectionView,org.apache.royale.core.IBeadModel,org.apache.royale.core.IDataProviderModel,org.apache.royale.core.IItemRendererClassFactory,org.apache.royale.core.IItemRendererParent,org.apache.royale.core.ISelectableItemRenderer,org.apache.royale.core.IStrand,org.apache.royale.core.UIBase,org.apache.royale.events.Event,org.apache.royale.events.IEventDispatcher,org.apache.royale.html.beads.IListView,org.apache.royale.jewel.beads.itemRenderers.IAlignItemRenderer,org.apache.royale.jewel.supportClasses.list.IListPresentationModel,org.apache.royale.utils.loadBeadFromValuesManager,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.events.EventDispatcher');
goog.require('org.apache.royale.core.IBead');
goog.require('org.apache.royale.core.IDataProviderItemRendererMapper');



/**
 * @constructor
 * @extends {org.apache.royale.events.EventDispatcher}
 * @implements {org.apache.royale.core.IBead}
 * @implements {org.apache.royale.core.IDataProviderItemRendererMapper}
 * @param {Object=} target
 */
org.apache.royale.jewel.beads.itemRenderers.DataItemRendererFactoryForCollectionView = function(target) {
  target = typeof target !== 'undefined' ? target : null;
  org.apache.royale.jewel.beads.itemRenderers.DataItemRendererFactoryForCollectionView.base(this, 'constructor', target);
};
goog.inherits(org.apache.royale.jewel.beads.itemRenderers.DataItemRendererFactoryForCollectionView, org.apache.royale.events.EventDispatcher);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.jewel.beads.itemRenderers.DataItemRendererFactoryForCollectionView', org.apache.royale.jewel.beads.itemRenderers.DataItemRendererFactoryForCollectionView);


/**
 * @protected
 * @type {org.apache.royale.core.IStrand}
 */
org.apache.royale.jewel.beads.itemRenderers.DataItemRendererFactoryForCollectionView.prototype._strand;


/**
 *  finish setup
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.4
 *  @royaleignorecoercion org.apache.royale.events.IEventDispatcher
 *  @royaleignorecoercion org.apache.royale.html.beads.IListView
 * @protected
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.jewel.beads.itemRenderers.DataItemRendererFactoryForCollectionView.prototype.initComplete = function(event) {
  this._strand.removeEventListener("initComplete", org.apache.royale.utils.Language.closure(this.initComplete, this, 'initComplete'));
  var /** @type {Object} */ listView = this._strand.getBeadByType(org.apache.royale.html.beads.IListView);
  this.dataGroup = listView.dataGroup;
  var /** @type {Object} */ model = this._strand.getBeadByType(org.apache.royale.core.IBeadModel);
  model.addEventListener("dataProviderChanged", org.apache.royale.utils.Language.closure(this.dataProviderChangeHandler, this, 'dataProviderChangeHandler'));
  this.dataProviderChangeHandler(null);
};


/**
 * @protected
 * @type {org.apache.royale.core.IDataProviderModel}
 */
org.apache.royale.jewel.beads.itemRenderers.DataItemRendererFactoryForCollectionView.prototype._dataProviderModel;


/**
 * @protected
 * @type {string}
 */
org.apache.royale.jewel.beads.itemRenderers.DataItemRendererFactoryForCollectionView.prototype.labelField;


/**
 * @private
 * @type {org.apache.royale.core.IItemRendererClassFactory}
 */
org.apache.royale.jewel.beads.itemRenderers.DataItemRendererFactoryForCollectionView.prototype.org_apache_royale_jewel_beads_itemRenderers_DataItemRendererFactoryForCollectionView__itemRendererFactory;


/**
 * @protected
 * @type {org.apache.royale.core.IItemRendererParent}
 */
org.apache.royale.jewel.beads.itemRenderers.DataItemRendererFactoryForCollectionView.prototype.dataGroup;


/**
 * @asprivate
 * @royaleignorecoercion org.apache.royale.collections.ICollectionView
 * @royaleignorecoercion org.apache.royale.jewel.supportClasses.list.IListPresentationModel
 * @royaleignorecoercion org.apache.royale.core.ISelectableItemRenderer
 * @royaleignorecoercion org.apache.royale.events.IEventDispatcher
 * @protected
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.jewel.beads.itemRenderers.DataItemRendererFactoryForCollectionView.prototype.dataProviderChangeHandler = function(event) {
  if (!this.dataProviderModel)
    return;
  var /** @type {Object} */ dp = this.dataProviderModel.dataProvider;
  if (!dp)
    return;
  this.dataGroup.removeAllItemRenderers();
  var /** @type {Object} */ presentationModel = this._strand.getBeadByType(org.apache.royale.jewel.supportClasses.list.IListPresentationModel);
  this.labelField = this.dataProviderModel.labelField;
  var /** @type {number} */ n = dp.length;
  for (var /** @type {number} */ i = 0; i < n; i++) {
    var /** @type {Object} */ ir = this.itemRendererFactory.createItemRenderer(this.dataGroup);
    var /** @type {Object} */ item = dp.getItemAt(i);
    this.fillRenderer(i, item, ir, presentationModel);
  }
  this._strand.dispatchEvent(new org.apache.royale.events.Event("itemsCreated"));
};


/**
 * @asprivate
 * @royaleignorecoercion org.apache.royale.core.UIBase
 * @protected
 * @param {number} index
 * @param {Object} item
 * @param {org.apache.royale.core.ISelectableItemRenderer} itemRenderer
 * @param {org.apache.royale.jewel.supportClasses.list.IListPresentationModel} presentationModel
 */
org.apache.royale.jewel.beads.itemRenderers.DataItemRendererFactoryForCollectionView.prototype.fillRenderer = function(index, item, itemRenderer, presentationModel) {
  itemRenderer.labelField = this.labelField;
  if (presentationModel) {
    itemRenderer.height = presentationModel.rowHeight;
    if (org.apache.royale.utils.Language.is(itemRenderer, org.apache.royale.jewel.beads.itemRenderers.IAlignItemRenderer)) {
      org.apache.royale.utils.Language.as(itemRenderer, org.apache.royale.jewel.beads.itemRenderers.IAlignItemRenderer).align = presentationModel.align;
    }
  }
  this.setData(itemRenderer, item, index);
  this.dataGroup.addItemRendererAt(itemRenderer, index);
};


/**
 * @asprivate
 * @protected
 * @param {org.apache.royale.core.ISelectableItemRenderer} itemRenderer
 * @param {Object} data
 * @param {number} index
 */
org.apache.royale.jewel.beads.itemRenderers.DataItemRendererFactoryForCollectionView.prototype.setData = function(itemRenderer, data, index) {
  itemRenderer.index = index;
  itemRenderer.data = data;
};


org.apache.royale.jewel.beads.itemRenderers.DataItemRendererFactoryForCollectionView.prototype.set__strand = function(value) {
  this._strand = value;
  value.addEventListener("initComplete", org.apache.royale.utils.Language.closure(this.initComplete, this, 'initComplete'));
};


org.apache.royale.jewel.beads.itemRenderers.DataItemRendererFactoryForCollectionView.prototype.get__dataProviderModel = function() {
  if (this._dataProviderModel == null) {
    this._dataProviderModel = this._strand.getBeadByType(org.apache.royale.core.IBeadModel);
  }
  return this._dataProviderModel;
};


org.apache.royale.jewel.beads.itemRenderers.DataItemRendererFactoryForCollectionView.prototype.get__itemRendererFactory = function() {
  if (!this.org_apache_royale_jewel_beads_itemRenderers_DataItemRendererFactoryForCollectionView__itemRendererFactory)
    this.org_apache_royale_jewel_beads_itemRenderers_DataItemRendererFactoryForCollectionView__itemRendererFactory = org.apache.royale.utils.loadBeadFromValuesManager(org.apache.royale.core.IItemRendererClassFactory, "iItemRendererClassFactory", this._strand);
  return this.org_apache_royale_jewel_beads_itemRenderers_DataItemRendererFactoryForCollectionView__itemRendererFactory;
};


org.apache.royale.jewel.beads.itemRenderers.DataItemRendererFactoryForCollectionView.prototype.set__itemRendererFactory = function(value) {
  this.org_apache_royale_jewel_beads_itemRenderers_DataItemRendererFactoryForCollectionView__itemRendererFactory = value;
};


Object.defineProperties(org.apache.royale.jewel.beads.itemRenderers.DataItemRendererFactoryForCollectionView.prototype, /** @lends {org.apache.royale.jewel.beads.itemRenderers.DataItemRendererFactoryForCollectionView.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.core.IStrand} */
strand: {
set: org.apache.royale.jewel.beads.itemRenderers.DataItemRendererFactoryForCollectionView.prototype.set__strand},
/**
  * @export
  * @type {org.apache.royale.core.IDataProviderModel} */
dataProviderModel: {
get: org.apache.royale.jewel.beads.itemRenderers.DataItemRendererFactoryForCollectionView.prototype.get__dataProviderModel},
/**
  * @export
  * @type {org.apache.royale.core.IItemRendererClassFactory} */
itemRendererFactory: {
get: org.apache.royale.jewel.beads.itemRenderers.DataItemRendererFactoryForCollectionView.prototype.get__itemRendererFactory,
set: org.apache.royale.jewel.beads.itemRenderers.DataItemRendererFactoryForCollectionView.prototype.set__itemRendererFactory}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.jewel.beads.itemRenderers.DataItemRendererFactoryForCollectionView.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'DataItemRendererFactoryForCollectionView', qName: 'org.apache.royale.jewel.beads.itemRenderers.DataItemRendererFactoryForCollectionView', kind: 'class' }], interfaces: [org.apache.royale.core.IBead, org.apache.royale.core.IDataProviderItemRendererMapper] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.jewel.beads.itemRenderers.DataItemRendererFactoryForCollectionView.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.jewel.beads.itemRenderers.DataItemRendererFactoryForCollectionView'},
        'dataProviderModel': { type: 'org.apache.royale.core.IDataProviderModel', access: 'readonly', declaredBy: 'org.apache.royale.jewel.beads.itemRenderers.DataItemRendererFactoryForCollectionView'},
        'itemRendererFactory': { type: 'org.apache.royale.core.IItemRendererClassFactory', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.beads.itemRenderers.DataItemRendererFactoryForCollectionView'}
      };
    },
    methods: function () {
      return {
        'DataItemRendererFactoryForCollectionView': { type: '', declaredBy: 'org.apache.royale.jewel.beads.itemRenderers.DataItemRendererFactoryForCollectionView', parameters: function () { return [ 'Object', true ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.jewel.beads.itemRenderers.DataItemRendererFactoryForCollectionView.prototype.ROYALE_COMPILE_FLAGS = 10;
