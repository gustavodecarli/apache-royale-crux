/**
 * Generated by Apache Royale Compiler from org/apache/royale/jewel/supportClasses/Viewport.as
 * org.apache.royale.jewel.supportClasses.Viewport
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.jewel.supportClasses.Viewport');
/* Royale Dependency List: org.apache.royale.core.IContentView,org.apache.royale.core.IStrand,org.apache.royale.core.UIBase,org.apache.royale.utils.loadBeadFromValuesManager*/

goog.require('org.apache.royale.html.supportClasses.Viewport');



/**
 * Constructor
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.3
 * @constructor
 * @extends {org.apache.royale.html.supportClasses.Viewport}
 */
org.apache.royale.jewel.supportClasses.Viewport = function() {
  org.apache.royale.jewel.supportClasses.Viewport.base(this, 'constructor');
};
goog.inherits(org.apache.royale.jewel.supportClasses.Viewport, org.apache.royale.html.supportClasses.Viewport);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.jewel.supportClasses.Viewport', org.apache.royale.jewel.supportClasses.Viewport);


org.apache.royale.jewel.supportClasses.Viewport.prototype.set__strand = function(value) {
  this._strand = value;
  this.contentArea = org.apache.royale.utils.loadBeadFromValuesManager(org.apache.royale.core.IContentView, "iContentView", this._strand);
  if (!this.contentArea)
    this.contentArea = value;
  this.contentArea.element.classList.add("viewport");
};


Object.defineProperties(org.apache.royale.jewel.supportClasses.Viewport.prototype, /** @lends {org.apache.royale.jewel.supportClasses.Viewport.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.core.IStrand} */
strand: {
set: org.apache.royale.jewel.supportClasses.Viewport.prototype.set__strand}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.jewel.supportClasses.Viewport.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Viewport', qName: 'org.apache.royale.jewel.supportClasses.Viewport', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.jewel.supportClasses.Viewport.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.jewel.supportClasses.Viewport'}
      };
    },
    methods: function () {
      return {
        'Viewport': { type: '', declaredBy: 'org.apache.royale.jewel.supportClasses.Viewport'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.jewel.supportClasses.Viewport.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./Viewport.js.map
