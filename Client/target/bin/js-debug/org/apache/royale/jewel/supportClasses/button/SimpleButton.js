/**
 * Generated by Apache Royale Compiler from org/apache/royale/jewel/supportClasses/button/SimpleButton.as
 * org.apache.royale.jewel.supportClasses.button.SimpleButton
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.jewel.supportClasses.button.SimpleButton');
/* Royale Dependency List: org.apache.royale.core.WrappedHTMLElement,org.apache.royale.html.util.addElementToWrapper*/

goog.require('org.apache.royale.core.StyledUIBase');
goog.require('org.apache.royale.core.IStrand');
goog.require('org.apache.royale.core.IUIBase');
goog.require('org.apache.royale.events.IEventDispatcher');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.6
 * @constructor
 * @extends {org.apache.royale.core.StyledUIBase}
 * @implements {org.apache.royale.core.IStrand}
 * @implements {org.apache.royale.core.IUIBase}
 * @implements {org.apache.royale.events.IEventDispatcher}
 */
org.apache.royale.jewel.supportClasses.button.SimpleButton = function() {
  org.apache.royale.jewel.supportClasses.button.SimpleButton.base(this, 'constructor');
  this.typeNames = "jewel button";
};
goog.inherits(org.apache.royale.jewel.supportClasses.button.SimpleButton, org.apache.royale.core.StyledUIBase);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.jewel.supportClasses.button.SimpleButton', org.apache.royale.jewel.supportClasses.button.SimpleButton);


/**
 * @royaleignorecoercion org.apache.royale.core.WrappedHTMLElement
 * @royaleignorecoercion org.apache.royale.html.util.addElementToWrapper
 * @protected
 * @override
 */
org.apache.royale.jewel.supportClasses.button.SimpleButton.prototype.createElement = function() {
  org.apache.royale.html.util.addElementToWrapper(this, 'button');
  this.element.setAttribute('type', 'button');
  return this.element;
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.jewel.supportClasses.button.SimpleButton.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'SimpleButton', qName: 'org.apache.royale.jewel.supportClasses.button.SimpleButton', kind: 'class' }], interfaces: [org.apache.royale.core.IStrand, org.apache.royale.core.IUIBase, org.apache.royale.events.IEventDispatcher] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.jewel.supportClasses.button.SimpleButton.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'SimpleButton': { type: '', declaredBy: 'org.apache.royale.jewel.supportClasses.button.SimpleButton'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.jewel.supportClasses.button.SimpleButton.prototype.ROYALE_COMPILE_FLAGS = 10;
