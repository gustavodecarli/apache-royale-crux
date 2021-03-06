/**
 * Generated by Apache Royale Compiler from org/apache/royale/jewel/beads/views/ListView.as
 * org.apache.royale.jewel.beads.views.ListView
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.jewel.beads.views.ListView');
/* Royale Dependency List: org.apache.royale.core.IItemRendererParent,org.apache.royale.core.ILayoutView,org.apache.royale.core.IRollOverModel,org.apache.royale.core.ISelectableItemRenderer,org.apache.royale.core.ISelectionModel,org.apache.royale.core.IStrand,org.apache.royale.events.Event,org.apache.royale.events.IEventDispatcher,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.html.beads.DataContainerView');



/**
 * @constructor
 * @extends {org.apache.royale.html.beads.DataContainerView}
 */
org.apache.royale.jewel.beads.views.ListView = function() {
  org.apache.royale.jewel.beads.views.ListView.base(this, 'constructor');
};
goog.inherits(org.apache.royale.jewel.beads.views.ListView, org.apache.royale.html.beads.DataContainerView);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.jewel.beads.views.ListView', org.apache.royale.jewel.beads.views.ListView);


/**
 * @private
 * @type {org.apache.royale.core.IItemRendererParent}
 */
org.apache.royale.jewel.beads.views.ListView.prototype.org_apache_royale_jewel_beads_views_ListView__dataGroup;


/**
 * @protected
 * @type {org.apache.royale.core.ISelectionModel}
 */
org.apache.royale.jewel.beads.views.ListView.prototype.listModel;


/**
 * @protected
 * @type {number}
 */
org.apache.royale.jewel.beads.views.ListView.prototype.lastSelectedIndex = -1;


/**
 * @asprivate
 * @royaleignorecoercion org.apache.royale.core.ISelectionModel
 * @protected
 * @override
 */
org.apache.royale.jewel.beads.views.ListView.prototype.handleInitComplete = function(event) {
  this.listModel = this._strand.getBeadByType(org.apache.royale.core.ISelectionModel);
  this.listModel.addEventListener("selectionChanged", org.apache.royale.utils.Language.closure(this.selectionChangeHandler, this, 'selectionChangeHandler'));
  this.listModel.addEventListener("rollOverIndexChanged", org.apache.royale.utils.Language.closure(this.rollOverIndexChangeHandler, this, 'rollOverIndexChangeHandler'));
  org.apache.royale.utils.Language.as(this._strand, org.apache.royale.events.IEventDispatcher, true).addEventListener("itemsCreated", org.apache.royale.utils.Language.closure(this.itemsCreatedHandler, this, 'itemsCreatedHandler'));
  org.apache.royale.jewel.beads.views.ListView.superClass_.handleInitComplete.apply(this, [ event] );
};


/**
 * @asprivate
 * Ensure the list selects the selectedItem if some is set by the user at creation time
 * @protected
 * @override
 */
org.apache.royale.jewel.beads.views.ListView.prototype.itemsCreatedHandler = function(event) {
  org.apache.royale.jewel.beads.views.ListView.superClass_.itemsCreatedHandler.apply(this, [ event] );
  if (this.listModel.selectedIndex != -1)
    this.selectionChangeHandler(null);
};


/**
 * @asprivate
 * @royaleignorecoercion org.apache.royale.core.ISelectableItemRenderer
 * @protected
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.jewel.beads.views.ListView.prototype.selectionChangeHandler = function(event) {
  var /** @type {Object} */ ir = this.dataGroup.getItemRendererAt(this.lastSelectedIndex);
  if (ir)
    ir.selected = false;
  ir = this.dataGroup.getItemRendererAt(this.listModel.selectedIndex);
  if (ir)
    ir.selected = true;
  this.lastSelectedIndex = this.listModel.selectedIndex;
};


/**
 * @protected
 * @type {number}
 */
org.apache.royale.jewel.beads.views.ListView.prototype.lastRollOverIndex = -1;


/**
 * @asprivate
 * @royaleignorecoercion org.apache.royale.core.ISelectableItemRenderer
 * @royaleignorecoercion org.apache.royale.core.IRollOverModel
 * @protected
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.jewel.beads.views.ListView.prototype.rollOverIndexChangeHandler = function(event) {
  var /** @type {Object} */ ir = this.dataGroup.getItemRendererAt(this.lastRollOverIndex);
  if (ir)
    ir.hovered = false;
  ir = this.dataGroup.getItemRendererAt(this.listModel.rollOverIndex);
  if (ir)
    ir.hovered = true;
  this.lastRollOverIndex = this.listModel.rollOverIndex;
};


org.apache.royale.jewel.beads.views.ListView.prototype.set__strand = function(value) {
  org.apache.royale.jewel.beads.views.ListView.superClass_.set__strand.apply(this, [ value] );
};


org.apache.royale.jewel.beads.views.ListView.prototype.get__dataGroup = function() {
  if (!this.org_apache_royale_jewel_beads_views_ListView__dataGroup) {
    var /** @type {org.apache.royale.core.ILayoutView} */ c = this.contentView;
    if (c && org.apache.royale.utils.Language.is(c, org.apache.royale.core.IItemRendererParent))
      this.org_apache_royale_jewel_beads_views_ListView__dataGroup = c;
    else
      this.org_apache_royale_jewel_beads_views_ListView__dataGroup = org.apache.royale.jewel.beads.views.ListView.superClass_.get__dataGroup.apply(this);
  }
  return this.org_apache_royale_jewel_beads_views_ListView__dataGroup;
};


Object.defineProperties(org.apache.royale.jewel.beads.views.ListView.prototype, /** @lends {org.apache.royale.jewel.beads.views.ListView.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.core.IStrand} */
strand: {
set: org.apache.royale.jewel.beads.views.ListView.prototype.set__strand},
/**
  * @export
  * @type {org.apache.royale.core.IItemRendererParent} */
dataGroup: {
get: org.apache.royale.jewel.beads.views.ListView.prototype.get__dataGroup}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.jewel.beads.views.ListView.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ListView', qName: 'org.apache.royale.jewel.beads.views.ListView', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.jewel.beads.views.ListView.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.jewel.beads.views.ListView'},
        'dataGroup': { type: 'org.apache.royale.core.IItemRendererParent', access: 'readonly', declaredBy: 'org.apache.royale.jewel.beads.views.ListView'}
      };
    },
    methods: function () {
      return {
        'ListView': { type: '', declaredBy: 'org.apache.royale.jewel.beads.views.ListView'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.jewel.beads.views.ListView.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./ListView.js.map
