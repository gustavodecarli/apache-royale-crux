/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/IBorderPaddingMarginValuesImpl.as
 * org.apache.royale.core.IBorderPaddingMarginValuesImpl
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.IBorderPaddingMarginValuesImpl');
/* Royale Dependency List: org.apache.royale.core.IUIBase,org.apache.royale.core.layout.EdgeData,org.apache.royale.core.layout.LayoutData,org.apache.royale.core.layout.MarginData,org.apache.royale.core.styles.BorderStyles*/

goog.require('org.apache.royale.core.IValuesImpl');



/**
 * @interface
 * @extends {org.apache.royale.core.IValuesImpl}
 */
org.apache.royale.core.IBorderPaddingMarginValuesImpl = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.core.IBorderPaddingMarginValuesImpl', org.apache.royale.core.IBorderPaddingMarginValuesImpl);
/**
 *  Return the styles needed to determine how to draw the border
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {org.apache.royale.core.IUIBase} thisObject
 * @param {string=} state
 * @return {org.apache.royale.core.styles.BorderStyles}
 */
org.apache.royale.core.IBorderPaddingMarginValuesImpl.prototype.getBorderStyles = function(thisObject, state) {
};
/**
 *  Return a rectangle that contains the width of the border sides.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {org.apache.royale.core.IUIBase} thisObject
 * @param {string=} state
 * @return {org.apache.royale.core.layout.EdgeData}
 */
org.apache.royale.core.IBorderPaddingMarginValuesImpl.prototype.getBorderMetrics = function(thisObject, state) {
};
/**
 *  Return a rectangle that contains the width of the padding sides.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {org.apache.royale.core.IUIBase} thisObject
 * @param {number=} hostWidth
 * @param {number=} hostHeight
 * @param {string=} state
 * @return {org.apache.royale.core.layout.EdgeData}
 */
org.apache.royale.core.IBorderPaddingMarginValuesImpl.prototype.getPaddingMetrics = function(thisObject, hostWidth, hostHeight, state) {
};
/**
 *  Return a rectangle that contains the width of the border sides
 *  along with the padding.  The space left should be client area.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {org.apache.royale.core.IUIBase} thisObject
 * @param {number=} hostWidth
 * @param {number=} hostHeight
 * @param {string=} state
 * @return {org.apache.royale.core.layout.EdgeData}
 */
org.apache.royale.core.IBorderPaddingMarginValuesImpl.prototype.getBorderAndPaddingMetrics = function(thisObject, hostWidth, hostHeight, state) {
};
/**
 *  Return a MarginData that contains the margins for the object.
 *  MarginData is more than just a rectangle as it needs to account
 *  for values like "auto".
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {org.apache.royale.core.IUIBase} thisObject
 * @param {number=} hostWidth
 * @param {number=} hostHeight
 * @param {string=} state
 * @return {org.apache.royale.core.layout.MarginData}
 */
org.apache.royale.core.IBorderPaddingMarginValuesImpl.prototype.getMargins = function(thisObject, hostWidth, hostHeight, state) {
};
/**
 *  Return a LayoutData that contains the margins, border and padding for the object.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {org.apache.royale.core.IUIBase} thisObject
 * @param {number=} hostWidth
 * @param {number=} hostHeight
 * @param {string=} state
 * @return {org.apache.royale.core.layout.EdgeData}
 */
org.apache.royale.core.IBorderPaddingMarginValuesImpl.prototype.getPositions = function(thisObject, hostWidth, hostHeight, state) {
};
/**
 *  Return a LayoutData that contains the margins, border and padding for the object.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {org.apache.royale.core.IUIBase} thisObject
 * @param {number=} hostWidth
 * @param {number=} hostHeight
 * @param {string=} state
 * @return {org.apache.royale.core.layout.LayoutData}
 */
org.apache.royale.core.IBorderPaddingMarginValuesImpl.prototype.getBorderPaddingAndMargins = function(thisObject, hostWidth, hostHeight, state) {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.IBorderPaddingMarginValuesImpl.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IBorderPaddingMarginValuesImpl', qName: 'org.apache.royale.core.IBorderPaddingMarginValuesImpl', kind: 'interface' }], interfaces: [org.apache.royale.core.IValuesImpl] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.IBorderPaddingMarginValuesImpl.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'getBorderStyles': { type: 'org.apache.royale.core.styles.BorderStyles', declaredBy: 'org.apache.royale.core.IBorderPaddingMarginValuesImpl', parameters: function () { return [ 'org.apache.royale.core.IUIBase', false ,'String', true ]; }},
        'getBorderMetrics': { type: 'org.apache.royale.core.layout.EdgeData', declaredBy: 'org.apache.royale.core.IBorderPaddingMarginValuesImpl', parameters: function () { return [ 'org.apache.royale.core.IUIBase', false ,'String', true ]; }},
        'getPaddingMetrics': { type: 'org.apache.royale.core.layout.EdgeData', declaredBy: 'org.apache.royale.core.IBorderPaddingMarginValuesImpl', parameters: function () { return [ 'org.apache.royale.core.IUIBase', false ,'Number', true ,'Number', true ,'String', true ]; }},
        'getBorderAndPaddingMetrics': { type: 'org.apache.royale.core.layout.EdgeData', declaredBy: 'org.apache.royale.core.IBorderPaddingMarginValuesImpl', parameters: function () { return [ 'org.apache.royale.core.IUIBase', false ,'Number', true ,'Number', true ,'String', true ]; }},
        'getMargins': { type: 'org.apache.royale.core.layout.MarginData', declaredBy: 'org.apache.royale.core.IBorderPaddingMarginValuesImpl', parameters: function () { return [ 'org.apache.royale.core.IUIBase', false ,'Number', true ,'Number', true ,'String', true ]; }},
        'getPositions': { type: 'org.apache.royale.core.layout.EdgeData', declaredBy: 'org.apache.royale.core.IBorderPaddingMarginValuesImpl', parameters: function () { return [ 'org.apache.royale.core.IUIBase', false ,'Number', true ,'Number', true ,'String', true ]; }},
        'getBorderPaddingAndMargins': { type: 'org.apache.royale.core.layout.LayoutData', declaredBy: 'org.apache.royale.core.IBorderPaddingMarginValuesImpl', parameters: function () { return [ 'org.apache.royale.core.IUIBase', false ,'Number', true ,'Number', true ,'String', true ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.core.IBorderPaddingMarginValuesImpl.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./IBorderPaddingMarginValuesImpl.js.map
