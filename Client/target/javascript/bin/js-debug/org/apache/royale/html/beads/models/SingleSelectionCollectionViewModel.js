/**
 * Generated by Apache Royale Compiler from org/apache/royale/html/beads/models/SingleSelectionCollectionViewModel.as
 * org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel');
/* Royale Dependency List: org.apache.royale.collections.ICollectionView,org.apache.royale.core.IStrand,org.apache.royale.events.Event*/

goog.require('org.apache.royale.events.EventDispatcher');
goog.require('org.apache.royale.core.IRollOverModel');
goog.require('org.apache.royale.core.ISelectionModel');



/**
 *  Constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9
 * @constructor
 * @extends {org.apache.royale.events.EventDispatcher}
 * @implements {org.apache.royale.core.ISelectionModel}
 * @implements {org.apache.royale.core.IRollOverModel}
 */
org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel = function() {
  org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel.base(this, 'constructor');
};
goog.inherits(org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel, org.apache.royale.events.EventDispatcher);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel', org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel);


/**
 * @private
 * @type {org.apache.royale.core.IStrand}
 */
org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel.prototype.org_apache_royale_html_beads_models_SingleSelectionCollectionViewModel__strand;


/**
 * @private
 * @type {org.apache.royale.collections.ICollectionView}
 */
org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel.prototype.org_apache_royale_html_beads_models_SingleSelectionCollectionViewModel__dataProvider;


/**
 * @private
 * @type {number}
 */
org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel.prototype.org_apache_royale_html_beads_models_SingleSelectionCollectionViewModel__selectedIndex = -1;


/**
 * @private
 * @type {number}
 */
org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel.prototype.org_apache_royale_html_beads_models_SingleSelectionCollectionViewModel__rollOverIndex = -1;


/**
 * @private
 * @type {string}
 */
org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel.prototype.org_apache_royale_html_beads_models_SingleSelectionCollectionViewModel__labelField = null;


/**
 * @private
 * @type {Object}
 */
org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel.prototype.org_apache_royale_html_beads_models_SingleSelectionCollectionViewModel__selectedItem;


/**
 * @private
 * @type {string}
 */
org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel.prototype.org_apache_royale_html_beads_models_SingleSelectionCollectionViewModel__selectedString;


org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel.prototype.set__strand = function(value) {
  this.org_apache_royale_html_beads_models_SingleSelectionCollectionViewModel__strand = value;
};


org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel.prototype.get__dataProvider = function() {
  return this.org_apache_royale_html_beads_models_SingleSelectionCollectionViewModel__dataProvider;
};


org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel.prototype.set__dataProvider = function(value) {
  if (value == this.org_apache_royale_html_beads_models_SingleSelectionCollectionViewModel__dataProvider)
    return;
  this.org_apache_royale_html_beads_models_SingleSelectionCollectionViewModel__dataProvider = value;
  if (!this.org_apache_royale_html_beads_models_SingleSelectionCollectionViewModel__dataProvider || this.org_apache_royale_html_beads_models_SingleSelectionCollectionViewModel__selectedIndex >= this.org_apache_royale_html_beads_models_SingleSelectionCollectionViewModel__dataProvider.length)
    this.org_apache_royale_html_beads_models_SingleSelectionCollectionViewModel__selectedIndex = -1;
  this.org_apache_royale_html_beads_models_SingleSelectionCollectionViewModel__selectedItem = this.org_apache_royale_html_beads_models_SingleSelectionCollectionViewModel__selectedIndex == -1 ? null : this.org_apache_royale_html_beads_models_SingleSelectionCollectionViewModel__dataProvider.getItemAt(this.org_apache_royale_html_beads_models_SingleSelectionCollectionViewModel__selectedIndex);
  this.dispatchEvent(new org.apache.royale.events.Event("dataProviderChanged"));
};


org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel.prototype.get__labelField = function() {
  return this.org_apache_royale_html_beads_models_SingleSelectionCollectionViewModel__labelField;
};


org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel.prototype.set__labelField = function(value) {
  if (value != this.org_apache_royale_html_beads_models_SingleSelectionCollectionViewModel__labelField) {
    this.org_apache_royale_html_beads_models_SingleSelectionCollectionViewModel__labelField = value;
    this.dispatchEvent(new org.apache.royale.events.Event("labelFieldChanged"));
  }
};


org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel.prototype.get__selectedIndex = function() {
  return this.org_apache_royale_html_beads_models_SingleSelectionCollectionViewModel__selectedIndex;
};


org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel.prototype.set__selectedIndex = function(value) {
  if (value == this.org_apache_royale_html_beads_models_SingleSelectionCollectionViewModel__selectedIndex)
    return;
  this.org_apache_royale_html_beads_models_SingleSelectionCollectionViewModel__selectedIndex = value;
  this.org_apache_royale_html_beads_models_SingleSelectionCollectionViewModel__selectedItem = (value == -1 || this.org_apache_royale_html_beads_models_SingleSelectionCollectionViewModel__dataProvider == null) ? null : (value < this.org_apache_royale_html_beads_models_SingleSelectionCollectionViewModel__dataProvider.length) ? this.org_apache_royale_html_beads_models_SingleSelectionCollectionViewModel__dataProvider.getItemAt(value) : null;
  this.dispatchEvent(new org.apache.royale.events.Event("selectedIndexChanged"));
};


org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel.prototype.get__rollOverIndex = function() {
  return this.org_apache_royale_html_beads_models_SingleSelectionCollectionViewModel__rollOverIndex;
};


org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel.prototype.set__rollOverIndex = function(value) {
  if (value != this.org_apache_royale_html_beads_models_SingleSelectionCollectionViewModel__rollOverIndex) {
    this.org_apache_royale_html_beads_models_SingleSelectionCollectionViewModel__rollOverIndex = value;
    this.dispatchEvent(new org.apache.royale.events.Event("rollOverIndexChanged"));
  }
};


org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel.prototype.get__selectedItem = function() {
  return this.org_apache_royale_html_beads_models_SingleSelectionCollectionViewModel__selectedItem;
};


org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel.prototype.set__selectedItem = function(value) {
  if (value == this.org_apache_royale_html_beads_models_SingleSelectionCollectionViewModel__selectedItem)
    return;
  this.org_apache_royale_html_beads_models_SingleSelectionCollectionViewModel__selectedItem = value;
  var /** @type {number} */ n = this.org_apache_royale_html_beads_models_SingleSelectionCollectionViewModel__dataProvider.length;
  for (var /** @type {number} */ i = 0; i < n; i++) {
    if (this.org_apache_royale_html_beads_models_SingleSelectionCollectionViewModel__dataProvider.getItemAt(i) == value) {
      this.org_apache_royale_html_beads_models_SingleSelectionCollectionViewModel__selectedIndex = i;
      break;
    }
  }
  this.dispatchEvent(new org.apache.royale.events.Event("selectedItemChanged"));
  this.dispatchEvent(new org.apache.royale.events.Event("selectedIndexChanged"));
};


org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel.prototype.get__selectedString = function() {
  return String(this.org_apache_royale_html_beads_models_SingleSelectionCollectionViewModel__selectedItem);
};


org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel.prototype.set__selectedString = function(value) {
  this.org_apache_royale_html_beads_models_SingleSelectionCollectionViewModel__selectedString = value;
  var /** @type {number} */ n = this.org_apache_royale_html_beads_models_SingleSelectionCollectionViewModel__dataProvider.length;
  for (var /** @type {number} */ i = 0; i < n; i++) {
    if (String(this.org_apache_royale_html_beads_models_SingleSelectionCollectionViewModel__dataProvider.getItemAt(i)) == value) {
      this.org_apache_royale_html_beads_models_SingleSelectionCollectionViewModel__selectedIndex = i;
      break;
    }
  }
  this.dispatchEvent(new org.apache.royale.events.Event("selectedItemChanged"));
  this.dispatchEvent(new org.apache.royale.events.Event("selectedIndexChanged"));
};


Object.defineProperties(org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel.prototype, /** @lends {org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.core.IStrand} */
strand: {
set: org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel.prototype.set__strand},
/**
  * @export
  * @type {Object} */
dataProvider: {
get: org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel.prototype.get__dataProvider,
set: org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel.prototype.set__dataProvider},
/**
  * @export
  * @type {string} */
labelField: {
get: org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel.prototype.get__labelField,
set: org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel.prototype.set__labelField},
/**
  * @export
  * @type {number} */
selectedIndex: {
get: org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel.prototype.get__selectedIndex,
set: org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel.prototype.set__selectedIndex},
/**
  * @export
  * @type {number} */
rollOverIndex: {
get: org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel.prototype.get__rollOverIndex,
set: org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel.prototype.set__rollOverIndex},
/**
  * @export
  * @type {Object} */
selectedItem: {
get: org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel.prototype.get__selectedItem,
set: org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel.prototype.set__selectedItem},
/**
  * @export
  * @type {string} */
selectedString: {
get: org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel.prototype.get__selectedString,
set: org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel.prototype.set__selectedString}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'SingleSelectionCollectionViewModel', qName: 'org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel', kind: 'class' }], interfaces: [org.apache.royale.core.ISelectionModel, org.apache.royale.core.IRollOverModel] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel'},
        'dataProvider': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'dataProviderChanged' } ] } ]; }},
        'labelField': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel'},
        'selectedIndex': { type: 'int', access: 'readwrite', declaredBy: 'org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel'},
        'rollOverIndex': { type: 'int', access: 'readwrite', declaredBy: 'org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel'},
        'selectedItem': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel'},
        'selectedString': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel'}
      };
    },
    methods: function () {
      return {
        'SingleSelectionCollectionViewModel': { type: '', declaredBy: 'org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./SingleSelectionCollectionViewModel.js.map
