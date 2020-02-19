/**
 * Generated by Apache Royale Compiler from org/apache/royale/jewel/Container.as
 * org.apache.royale.jewel.Container
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.jewel.Container');
/* Royale Dependency List: org.apache.royale.core.ValuesManager,org.apache.royale.events.Event,org.apache.royale.jewel.beads.layouts.StyledLayoutBase,org.apache.royale.utils.MXMLDataInterpreter,org.apache.royale.utils.StringUtil*/

goog.require('org.apache.royale.jewel.supportClasses.container.ContainerBase');
goog.require('org.apache.royale.core.IMXMLDocument');
goog.require('org.apache.royale.utils.IClassSelectorListSupport');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.4
 * @constructor
 * @extends {org.apache.royale.jewel.supportClasses.container.ContainerBase}
 * @implements {org.apache.royale.core.IMXMLDocument}
 * @implements {org.apache.royale.utils.IClassSelectorListSupport}
 */
org.apache.royale.jewel.Container = function() {
  
  this.org_apache_royale_jewel_Container__mxmlDocument = this;
  org.apache.royale.jewel.Container.base(this, 'constructor');
  this.typeNames = "";
};
goog.inherits(org.apache.royale.jewel.Container, org.apache.royale.jewel.supportClasses.container.ContainerBase);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.jewel.Container', org.apache.royale.jewel.Container);


/**
 * @protected
 * @type {org.apache.royale.jewel.beads.layouts.StyledLayoutBase}
 */
org.apache.royale.jewel.Container.prototype._layout;


/**
 * @private
 * @type {Array}
 */
org.apache.royale.jewel.Container.prototype.org_apache_royale_jewel_Container__mxmlDescriptor;


/**
 * @private
 * @type {Object}
 */
org.apache.royale.jewel.Container.prototype.org_apache_royale_jewel_Container__mxmlDocument;


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.jewel.Container.prototype.org_apache_royale_jewel_Container__initialized;


/**
 * @asprivate
 * @export
 * @override
 */
org.apache.royale.jewel.Container.prototype.addedToParent = function() {
  if (!this.org_apache_royale_jewel_Container__initialized) {
    org.apache.royale.core.ValuesManager["valuesImpl"].init(this);
  }
  org.apache.royale.jewel.Container.superClass_.addedToParent.apply(this);
  if (!this.org_apache_royale_jewel_Container__initialized) {
    org.apache.royale.utils.MXMLDataInterpreter.generateMXMLInstances(this.org_apache_royale_jewel_Container__mxmlDocument, this, this.MXMLDescriptor);
    this.dispatchEvent(new org.apache.royale.events.Event("initBindings"));
    this.dispatchEvent(new org.apache.royale.events.Event("initComplete"));
    this.org_apache_royale_jewel_Container__initialized = true;
  }
};


/**
 *  @asprivate
 * @export
 * @param {Object} document
 * @param {Array} value
 */
org.apache.royale.jewel.Container.prototype.setMXMLDescriptor = function(document, value) {
  this.org_apache_royale_jewel_Container__mxmlDocument = document;
  this.org_apache_royale_jewel_Container__mxmlDescriptor = value;
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
org.apache.royale.jewel.Container.prototype.generateMXMLAttributes = function(data) {
  org.apache.royale.utils.MXMLDataInterpreter.generateMXMLProperties(this, data);
};


/**
 * @export
 * @type {Array}
 */
org.apache.royale.jewel.Container.prototype.mxmlContent;


org.apache.royale.jewel.Container.prototype.get__itemsHorizontalAlign = function() {
  return this._layout.itemsHorizontalAlign;
};


org.apache.royale.jewel.Container.prototype.set__itemsHorizontalAlign = function(value) {
  this.typeNames = org.apache.royale.utils.StringUtil.removeWord(this.typeNames, " " + this._layout.itemsHorizontalAlign);
  this._layout.itemsHorizontalAlign = value;
  this.typeNames += " " + this._layout.itemsHorizontalAlign;
  if (this.parent)
    this.setClassName(this.computeFinalClassNames());
};


org.apache.royale.jewel.Container.prototype.get__itemsVerticalAlign = function() {
  return this._layout.itemsVerticalAlign;
};


org.apache.royale.jewel.Container.prototype.set__itemsVerticalAlign = function(value) {
  this.typeNames = org.apache.royale.utils.StringUtil.removeWord(this.typeNames, " " + this._layout.itemsVerticalAlign);
  this._layout.itemsVerticalAlign = value;
  this.typeNames += " " + this._layout.itemsVerticalAlign;
  if (this.parent)
    this.setClassName(this.computeFinalClassNames());
};


org.apache.royale.jewel.Container.prototype.get__itemsExpand = function() {
  return this._layout.itemsExpand;
};


org.apache.royale.jewel.Container.prototype.set__itemsExpand = function(value) {
  this.typeNames = org.apache.royale.utils.StringUtil.removeWord(this.typeNames, " itemsExpand");
  this._layout.itemsExpand = value;
  if (this._layout.itemsExpand) {
    this.typeNames += " itemsExpand";
  }
  if (this.parent)
    this.setClassName(this.computeFinalClassNames());
};


org.apache.royale.jewel.Container.prototype.get__MXMLDescriptor = function() {
  return this.org_apache_royale_jewel_Container__mxmlDescriptor;
};


Object.defineProperties(org.apache.royale.jewel.Container.prototype, /** @lends {org.apache.royale.jewel.Container.prototype} */ {
/**
  * @export
  * @type {string} */
itemsHorizontalAlign: {
get: org.apache.royale.jewel.Container.prototype.get__itemsHorizontalAlign,
set: org.apache.royale.jewel.Container.prototype.set__itemsHorizontalAlign},
/**
  * @export
  * @type {string} */
itemsVerticalAlign: {
get: org.apache.royale.jewel.Container.prototype.get__itemsVerticalAlign,
set: org.apache.royale.jewel.Container.prototype.set__itemsVerticalAlign},
/**
  * @export
  * @type {boolean} */
itemsExpand: {
get: org.apache.royale.jewel.Container.prototype.get__itemsExpand,
set: org.apache.royale.jewel.Container.prototype.set__itemsExpand},
/**
  * @export
  * @type {Array} */
MXMLDescriptor: {
get: org.apache.royale.jewel.Container.prototype.get__MXMLDescriptor}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.jewel.Container.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Container', qName: 'org.apache.royale.jewel.Container', kind: 'class' }], interfaces: [org.apache.royale.core.IMXMLDocument, org.apache.royale.utils.IClassSelectorListSupport] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.jewel.Container.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'mxmlContent': { type: 'Array', get_set: function (/** org.apache.royale.jewel.Container */ inst, /** * */ v) {return v !== undefined ? inst.mxmlContent = v : inst.mxmlContent;}}
      };
    },
    accessors: function () {
      return {
        'itemsHorizontalAlign': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.Container'},
        'itemsVerticalAlign': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.Container'},
        'itemsExpand': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.Container'},
        'MXMLDescriptor': { type: 'Array', access: 'readonly', declaredBy: 'org.apache.royale.jewel.Container'}
      };
    },
    methods: function () {
      return {
        'Container': { type: '', declaredBy: 'org.apache.royale.jewel.Container'},
        'addedToParent': { type: 'void', declaredBy: 'org.apache.royale.jewel.Container'},
        'setMXMLDescriptor': { type: 'void', declaredBy: 'org.apache.royale.jewel.Container', parameters: function () { return [ 'Object', false ,'Array', false ]; }},
        'generateMXMLAttributes': { type: 'void', declaredBy: 'org.apache.royale.jewel.Container', parameters: function () { return [ 'Array', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.jewel.Container.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./Container.js.map