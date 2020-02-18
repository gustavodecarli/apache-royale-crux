/**
 * Generated by Apache Royale Compiler from org/apache/royale/jewel/GridCell.as
 * org.apache.royale.jewel.GridCell
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.jewel.GridCell');
/* Royale Dependency List: org.apache.royale.jewel.beads.layouts.GridCellLayout,org.apache.royale.utils.StringUtil,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.jewel.Group');



/**
 *  constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.4
 * @constructor
 * @extends {org.apache.royale.jewel.Group}
 */
org.apache.royale.jewel.GridCell = function() {
  org.apache.royale.jewel.GridCell.base(this, 'constructor');
  this.typeNames = "jewel " + org.apache.royale.jewel.beads.layouts.GridCellLayout.LAYOUT_TYPE_NAMES;
  this.layout = new org.apache.royale.jewel.beads.layouts.GridCellLayout();
  this.addBead(this.layout);
};
goog.inherits(org.apache.royale.jewel.GridCell, org.apache.royale.jewel.Group);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.jewel.GridCell', org.apache.royale.jewel.GridCell);


/**
 * @private
 * @param {string} screen
 * @param {number} num
 * @param {number} den
 */
org.apache.royale.jewel.GridCell.prototype.org_apache_royale_jewel_GridCell_setFractionForScreen = function(screen, num, den) {
  if (num && den) {
    if (num <= 0 || num > org.apache.royale.jewel.beads.layouts.GridCellLayout.MAX_COLUMNS)
      throw new Error(screen + " numerator must be between 1 and " + org.apache.royale.jewel.beads.layouts.GridCellLayout.MAX_COLUMNS);
    if (den <= 0 || den > org.apache.royale.jewel.beads.layouts.GridCellLayout.MAX_COLUMNS)
      throw new Error(screen + " denominator must be between 1 and " + org.apache.royale.jewel.beads.layouts.GridCellLayout.MAX_COLUMNS);
    this.typeNames = org.apache.royale.utils.StringUtil.removeWord(this.typeNames, " " + screen + "-col-" + this.layout.desktopNumerator + "-" + this.layout.desktopDenominator);
    this.typeNames += " " + screen + "-col-" + num + "-" + den;
  }
};


org.apache.royale.jewel.GridCell.prototype.get__layout = function() {
  return org.apache.royale.utils.Language.as(this._layout, org.apache.royale.jewel.beads.layouts.GridCellLayout);
};


org.apache.royale.jewel.GridCell.prototype.set__layout = function(value) {
  this._layout = value;
};


org.apache.royale.jewel.GridCell.prototype.get__wideScreenNumerator = function() {
  return this.layout.wideScreenNumerator;
};


org.apache.royale.jewel.GridCell.prototype.set__wideScreenNumerator = function(value) {
  this.org_apache_royale_jewel_GridCell_setFractionForScreen(org.apache.royale.jewel.beads.layouts.GridCellLayout.DESKTOP, value, this.layout.wideScreenDenominator);
  if (this.parent)
    this.setClassName(this.computeFinalClassNames());
  this.layout.wideScreenNumerator = value;
};


org.apache.royale.jewel.GridCell.prototype.get__wideScreenDenominator = function() {
  return this.layout.wideScreenDenominator;
};


org.apache.royale.jewel.GridCell.prototype.set__wideScreenDenominator = function(value) {
  this.org_apache_royale_jewel_GridCell_setFractionForScreen(org.apache.royale.jewel.beads.layouts.GridCellLayout.DESKTOP, this.layout.wideScreenNumerator, value);
  if (this.parent)
    this.setClassName(this.computeFinalClassNames());
  this.layout.wideScreenDenominator = value;
};


org.apache.royale.jewel.GridCell.prototype.get__desktopNumerator = function() {
  return this.layout.desktopNumerator;
};


org.apache.royale.jewel.GridCell.prototype.set__desktopNumerator = function(value) {
  this.org_apache_royale_jewel_GridCell_setFractionForScreen(org.apache.royale.jewel.beads.layouts.GridCellLayout.DESKTOP, value, this.layout.desktopDenominator);
  if (this.parent)
    this.setClassName(this.computeFinalClassNames());
  this.layout.desktopNumerator = value;
};


org.apache.royale.jewel.GridCell.prototype.get__desktopDenominator = function() {
  return this.layout.desktopDenominator;
};


org.apache.royale.jewel.GridCell.prototype.set__desktopDenominator = function(value) {
  this.org_apache_royale_jewel_GridCell_setFractionForScreen(org.apache.royale.jewel.beads.layouts.GridCellLayout.DESKTOP, this.layout.desktopNumerator, value);
  if (this.parent)
    this.setClassName(this.computeFinalClassNames());
  this.layout.desktopDenominator = value;
};


org.apache.royale.jewel.GridCell.prototype.get__tabletNumerator = function() {
  return this.layout.tabletNumerator;
};


org.apache.royale.jewel.GridCell.prototype.set__tabletNumerator = function(value) {
  this.org_apache_royale_jewel_GridCell_setFractionForScreen(org.apache.royale.jewel.beads.layouts.GridCellLayout.TABLET, value, this.layout.tabletDenominator);
  if (this.parent)
    this.setClassName(this.computeFinalClassNames());
  this.layout.tabletNumerator = value;
};


org.apache.royale.jewel.GridCell.prototype.get__tabletDenominator = function() {
  return this.layout.tabletDenominator;
};


org.apache.royale.jewel.GridCell.prototype.set__tabletDenominator = function(value) {
  this.org_apache_royale_jewel_GridCell_setFractionForScreen(org.apache.royale.jewel.beads.layouts.GridCellLayout.TABLET, this.layout.tabletNumerator, value);
  if (this.parent)
    this.setClassName(this.computeFinalClassNames());
  this.layout.tabletDenominator = value;
};


org.apache.royale.jewel.GridCell.prototype.get__phoneNumerator = function() {
  return this.layout.phoneNumerator;
};


org.apache.royale.jewel.GridCell.prototype.set__phoneNumerator = function(value) {
  this.org_apache_royale_jewel_GridCell_setFractionForScreen(org.apache.royale.jewel.beads.layouts.GridCellLayout.PHONE, value, this.layout.phoneDenominator);
  if (this.parent)
    this.setClassName(this.computeFinalClassNames());
  this.layout.phoneNumerator = value;
};


org.apache.royale.jewel.GridCell.prototype.get__phoneDenominator = function() {
  return this.layout.phoneDenominator;
};


org.apache.royale.jewel.GridCell.prototype.set__phoneDenominator = function(value) {
  this.org_apache_royale_jewel_GridCell_setFractionForScreen(org.apache.royale.jewel.beads.layouts.GridCellLayout.PHONE, this.layout.phoneNumerator, value);
  if (this.parent)
    this.setClassName(this.computeFinalClassNames());
  this.layout.phoneDenominator = value;
};


org.apache.royale.jewel.GridCell.prototype.get__phoneVisible = function() {
  return this.layout.phoneVisible;
};


org.apache.royale.jewel.GridCell.prototype.set__phoneVisible = function(value) {
  if (this.layout.phoneVisible != value) {
    this.layout.phoneVisible = value;
    if (this.layout.phoneVisible) {
      this.typeNames = org.apache.royale.utils.StringUtil.removeWord(this.typeNames, " hidden-phone");
      this.typeNames += " visible-phone";
    } else {
      this.typeNames = org.apache.royale.utils.StringUtil.removeWord(this.typeNames, " visible-phone");
      this.typeNames += " hidden-phone";
    }
    if (this.parent)
      this.setClassName(this.computeFinalClassNames());
  }
};


org.apache.royale.jewel.GridCell.prototype.get__tabletVisible = function() {
  return this.layout.tabletVisible;
};


org.apache.royale.jewel.GridCell.prototype.set__tabletVisible = function(value) {
  if (this.layout.tabletVisible != value) {
    this.layout.tabletVisible = value;
    if (this.layout.tabletVisible) {
      this.typeNames = org.apache.royale.utils.StringUtil.removeWord(this.typeNames, " hidden-tablet");
      this.typeNames += " visible-tablet";
    } else {
      this.typeNames = org.apache.royale.utils.StringUtil.removeWord(this.typeNames, " visible-tablet");
      this.typeNames += " hidden-tablet";
    }
    if (this.parent)
      this.setClassName(this.computeFinalClassNames());
  }
};


org.apache.royale.jewel.GridCell.prototype.get__desktopVisible = function() {
  return this.layout.desktopVisible;
};


org.apache.royale.jewel.GridCell.prototype.set__desktopVisible = function(value) {
  if (this.layout.desktopVisible != value) {
    this.layout.desktopVisible = value;
    if (this.layout.desktopVisible) {
      this.typeNames = org.apache.royale.utils.StringUtil.removeWord(this.typeNames, " hidden-desktop");
      this.typeNames += " visible-desktop";
    } else {
      this.typeNames = org.apache.royale.utils.StringUtil.removeWord(this.typeNames, " visible-desktop");
      this.typeNames += " hidden-desktop";
    }
    if (this.parent)
      this.setClassName(this.computeFinalClassNames());
  }
};


org.apache.royale.jewel.GridCell.prototype.get__wideScreenVisible = function() {
  return this.layout.wideScreenVisible;
};


org.apache.royale.jewel.GridCell.prototype.set__wideScreenVisible = function(value) {
  if (this.layout.wideScreenVisible != value) {
    this.layout.wideScreenVisible = value;
    if (this.layout.wideScreenVisible) {
      this.typeNames = org.apache.royale.utils.StringUtil.removeWord(this.typeNames, " hidden-widescreen");
      this.typeNames += " visible-widescreen";
    } else {
      this.typeNames = org.apache.royale.utils.StringUtil.removeWord(this.typeNames, " visible-widescreen");
      this.typeNames += " hidden-widescreen";
    }
    if (this.parent)
      this.setClassName(this.computeFinalClassNames());
  }
};


Object.defineProperties(org.apache.royale.jewel.GridCell.prototype, /** @lends {org.apache.royale.jewel.GridCell.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.jewel.beads.layouts.GridCellLayout} */
layout: {
get: org.apache.royale.jewel.GridCell.prototype.get__layout,
set: org.apache.royale.jewel.GridCell.prototype.set__layout},
/**
  * @export
  * @type {number} */
wideScreenNumerator: {
get: org.apache.royale.jewel.GridCell.prototype.get__wideScreenNumerator,
set: org.apache.royale.jewel.GridCell.prototype.set__wideScreenNumerator},
/**
  * @export
  * @type {number} */
wideScreenDenominator: {
get: org.apache.royale.jewel.GridCell.prototype.get__wideScreenDenominator,
set: org.apache.royale.jewel.GridCell.prototype.set__wideScreenDenominator},
/**
  * @export
  * @type {number} */
desktopNumerator: {
get: org.apache.royale.jewel.GridCell.prototype.get__desktopNumerator,
set: org.apache.royale.jewel.GridCell.prototype.set__desktopNumerator},
/**
  * @export
  * @type {number} */
desktopDenominator: {
get: org.apache.royale.jewel.GridCell.prototype.get__desktopDenominator,
set: org.apache.royale.jewel.GridCell.prototype.set__desktopDenominator},
/**
  * @export
  * @type {number} */
tabletNumerator: {
get: org.apache.royale.jewel.GridCell.prototype.get__tabletNumerator,
set: org.apache.royale.jewel.GridCell.prototype.set__tabletNumerator},
/**
  * @export
  * @type {number} */
tabletDenominator: {
get: org.apache.royale.jewel.GridCell.prototype.get__tabletDenominator,
set: org.apache.royale.jewel.GridCell.prototype.set__tabletDenominator},
/**
  * @export
  * @type {number} */
phoneNumerator: {
get: org.apache.royale.jewel.GridCell.prototype.get__phoneNumerator,
set: org.apache.royale.jewel.GridCell.prototype.set__phoneNumerator},
/**
  * @export
  * @type {number} */
phoneDenominator: {
get: org.apache.royale.jewel.GridCell.prototype.get__phoneDenominator,
set: org.apache.royale.jewel.GridCell.prototype.set__phoneDenominator},
/**
  * @export
  * @type {boolean} */
phoneVisible: {
get: org.apache.royale.jewel.GridCell.prototype.get__phoneVisible,
set: org.apache.royale.jewel.GridCell.prototype.set__phoneVisible},
/**
  * @export
  * @type {boolean} */
tabletVisible: {
get: org.apache.royale.jewel.GridCell.prototype.get__tabletVisible,
set: org.apache.royale.jewel.GridCell.prototype.set__tabletVisible},
/**
  * @export
  * @type {boolean} */
desktopVisible: {
get: org.apache.royale.jewel.GridCell.prototype.get__desktopVisible,
set: org.apache.royale.jewel.GridCell.prototype.set__desktopVisible},
/**
  * @export
  * @type {boolean} */
wideScreenVisible: {
get: org.apache.royale.jewel.GridCell.prototype.get__wideScreenVisible,
set: org.apache.royale.jewel.GridCell.prototype.set__wideScreenVisible}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.jewel.GridCell.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'GridCell', qName: 'org.apache.royale.jewel.GridCell', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.jewel.GridCell.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'layout': { type: 'org.apache.royale.jewel.beads.layouts.GridCellLayout', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.GridCell'},
        'wideScreenNumerator': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.GridCell'},
        'wideScreenDenominator': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.GridCell'},
        'desktopNumerator': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.GridCell'},
        'desktopDenominator': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.GridCell'},
        'tabletNumerator': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.GridCell'},
        'tabletDenominator': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.GridCell'},
        'phoneNumerator': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.GridCell'},
        'phoneDenominator': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.GridCell'},
        'phoneVisible': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.GridCell'},
        'tabletVisible': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.GridCell'},
        'desktopVisible': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.GridCell'},
        'wideScreenVisible': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.GridCell'}
      };
    },
    methods: function () {
      return {
        'GridCell': { type: '', declaredBy: 'org.apache.royale.jewel.GridCell'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.jewel.GridCell.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./GridCell.js.map
