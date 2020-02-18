/**
 * Generated by Apache Royale Compiler from org/apache/royale/reflection/beads/ClassAliasBead.as
 * org.apache.royale.reflection.beads.ClassAliasBead
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.reflection.beads.ClassAliasBead');
/* Royale Dependency List: org.apache.royale.core.IFlexInfo,org.apache.royale.core.IStrand,org.apache.royale.reflection.getDefinitionByName,org.apache.royale.reflection.registerClassAlias*/

goog.require('org.apache.royale.core.IBead');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @implements {org.apache.royale.core.IBead}
 */
org.apache.royale.reflection.beads.ClassAliasBead = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.reflection.beads.ClassAliasBead', org.apache.royale.reflection.beads.ClassAliasBead);


/**
 * @private
 * @type {org.apache.royale.core.IStrand}
 */
org.apache.royale.reflection.beads.ClassAliasBead.prototype.org_apache_royale_reflection_beads_ClassAliasBead__strand;


org.apache.royale.reflection.beads.ClassAliasBead.prototype.set__strand = function(value) {
  this.org_apache_royale_reflection_beads_ClassAliasBead__strand = value;
  var /** @type {org.apache.royale.core.IFlexInfo} */ app = value;
  var /** @type {Object} */ info = app.info();
  var /** @type {Object} */ map = info['remoteClassAliases'];
  if (map) {
    for (var /** @type {string} */ cn in map) {
      var /** @type {string} */ alias = org.apache.royale.utils.Language.string(map[cn]);
      var /** @type {Object} */ c =  /** @type {Object|null} */ (org.apache.royale.reflection.getDefinitionByName(cn));
      if (c)
        org.apache.royale.reflection.registerClassAlias(alias, c);
    }
  }
};


Object.defineProperties(org.apache.royale.reflection.beads.ClassAliasBead.prototype, /** @lends {org.apache.royale.reflection.beads.ClassAliasBead.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.core.IStrand} */
strand: {
set: org.apache.royale.reflection.beads.ClassAliasBead.prototype.set__strand}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.reflection.beads.ClassAliasBead.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ClassAliasBead', qName: 'org.apache.royale.reflection.beads.ClassAliasBead', kind: 'class' }], interfaces: [org.apache.royale.core.IBead] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.reflection.beads.ClassAliasBead.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.reflection.beads.ClassAliasBead'}
      };
    },
    methods: function () {
      return {
        'ClassAliasBead': { type: '', declaredBy: 'org.apache.royale.reflection.beads.ClassAliasBead'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.reflection.beads.ClassAliasBead.prototype.ROYALE_COMPILE_FLAGS = 10;
