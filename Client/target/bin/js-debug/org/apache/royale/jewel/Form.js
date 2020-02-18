/**
 * Generated by Apache Royale Compiler from org/apache/royale/jewel/Form.as
 * org.apache.royale.jewel.Form
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.jewel.Form');
/* Royale Dependency List: org.apache.royale.core.WrappedHTMLElement,org.apache.royale.html.util.addElementToWrapper*/

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
org.apache.royale.jewel.Form = function() {
  org.apache.royale.jewel.Form.base(this, 'constructor');
  this.typeNames = "jewel form";
};
goog.inherits(org.apache.royale.jewel.Form, org.apache.royale.jewel.Group);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.jewel.Form', org.apache.royale.jewel.Form);


/**
 * @royaleignorecoercion org.apache.royale.core.WrappedHTMLElement
 * @protected
 * @override
 */
org.apache.royale.jewel.Form.prototype.createElement = function() {
  return org.apache.royale.html.util.addElementToWrapper(this, 'form');
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.jewel.Form.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Form', qName: 'org.apache.royale.jewel.Form', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.jewel.Form.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'Form': { type: '', declaredBy: 'org.apache.royale.jewel.Form'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.jewel.Form.prototype.ROYALE_COMPILE_FLAGS = 10;
