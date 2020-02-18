/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/SimpleCSSValuesImpl.as
 * org.apache.royale.core.SimpleCSSValuesImpl
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.SimpleCSSValuesImpl');
/* Royale Dependency List: org.apache.royale.core.IChild,org.apache.royale.core.IDocument,org.apache.royale.core.IStyleableObject,org.apache.royale.core.IUIBase,org.apache.royale.core.layout.EdgeData,org.apache.royale.core.layout.LayoutData,org.apache.royale.core.layout.MarginData,org.apache.royale.core.styles.BorderStyles,org.apache.royale.events.ValueChangeEvent,org.apache.royale.utils.CSSUtils,org.apache.royale.utils.string.splitAndTrim,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.events.EventDispatcher');
goog.require('org.apache.royale.core.IBorderPaddingMarginValuesImpl');
goog.require('org.apache.royale.core.ICSSImpl');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 * @constructor
 * @extends {org.apache.royale.events.EventDispatcher}
 * @implements {org.apache.royale.core.IBorderPaddingMarginValuesImpl}
 * @implements {org.apache.royale.core.ICSSImpl}
 */
org.apache.royale.core.SimpleCSSValuesImpl = function() {
  org.apache.royale.core.SimpleCSSValuesImpl.base(this, 'constructor');
};
goog.inherits(org.apache.royale.core.SimpleCSSValuesImpl, org.apache.royale.events.EventDispatcher);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.core.SimpleCSSValuesImpl', org.apache.royale.core.SimpleCSSValuesImpl);


/**
 * @private
 * @const
 * @type {string}
 */
org.apache.royale.core.SimpleCSSValuesImpl.INHERIT = "inherit";


/**
 * @private
 * @const
 * @type {string}
 */
org.apache.royale.core.SimpleCSSValuesImpl.INDEX = "__index__";


/**
 * @private
 * @type {Object}
 */
org.apache.royale.core.SimpleCSSValuesImpl.prototype.org_apache_royale_core_SimpleCSSValuesImpl_mainClass;


/**
 * @private
 * @type {number}
 */
org.apache.royale.core.SimpleCSSValuesImpl.prototype.org_apache_royale_core_SimpleCSSValuesImpl_lastIndex = 0;


/**
 * @protected
 * @type {number}
 */
org.apache.royale.core.SimpleCSSValuesImpl.prototype.foundIndex = 0;


/**
 * @export
 * @param {Object} main
 */
org.apache.royale.core.SimpleCSSValuesImpl.prototype.init = function(main) {
  var /** @type {Array} */ cssData = main.cssData;
  var /** @type {Object} */ newValues = this.values;
  this.org_apache_royale_core_SimpleCSSValuesImpl_mainClass = main;
  if (newValues == null)
    newValues = {};
  if (cssData) {
    var /** @type {number} */ n = (cssData.length) >> 0;
    var /** @type {number} */ i = 0;
    while (i < n) {
      var /** @type {number} */ numMQ = (cssData[i++]) >> 0;
      if (numMQ > 0) {
        i += numMQ;
      }
      var /** @type {number} */ numSel = (cssData[i++]) >> 0;
      var /** @type {Function} */ propFn = cssData[i + numSel];
      var /** @type {Object} */ props;
      for (var /** @type {number} */ j = 0; j < numSel; j++) {
        var /** @type {string} */ selName = org.apache.royale.utils.Language.string(cssData[i++]);
        if (newValues[selName]) {
          props = newValues[selName];
          propFn.prototype = props;
        }
        newValues[selName] = new propFn();
        newValues[selName][org.apache.royale.core.SimpleCSSValuesImpl.INDEX] = this.org_apache_royale_core_SimpleCSSValuesImpl_lastIndex++;
      }
      props = cssData[i++];
    }
  }
  this.values = newValues;
};


/**
 * @private
 * @param {string} mq
 * @return {boolean}
 */
org.apache.royale.core.SimpleCSSValuesImpl.prototype.org_apache_royale_core_SimpleCSSValuesImpl_isValidStaticMediaQuery = function(mq) {
  if (mq == null)
    return true;
  if (mq == "-royale-swf")
    return true;
  return false;
};


/**
 * @private
 * @param {string} s
 * @param {string} mq
 * @return {string}
 */
org.apache.royale.core.SimpleCSSValuesImpl.prototype.org_apache_royale_core_SimpleCSSValuesImpl_fixNames = function(s, mq) {
  if (mq != null)
    s = s.substr(mq.length + 1);
  if (s == "")
    return "*";
  var /** @type {Array} */ arr = s.split(" ");
  var /** @type {number} */ n = (arr.length) >> 0;
  for (var /** @type {number} */ i = 0; i < n; i++) {
    var /** @type {string} */ segmentName = org.apache.royale.utils.Language.string(arr[i]);
    if (segmentName.charAt(0) == "#" || segmentName.charAt(0) == ".")
      continue;
    var /** @type {number} */ c = (segmentName.lastIndexOf(".")) >> 0;
    if (c > -1) {
      segmentName = segmentName.substr(0, c) + "::" + segmentName.substr(c + 1);
      arr[i] = segmentName;
    }
  }
  return arr.join(" ");
};


/**
 * @private
 * @param {string} value
 * @return {string}
 */
org.apache.royale.core.SimpleCSSValuesImpl.prototype.org_apache_royale_core_SimpleCSSValuesImpl_toCamelCase = function(value) {
  var /** @type {number} */ c = (value.indexOf("-")) >> 0;
  while (c > -1) {
    value = value.substr(0, c) + value.charAt(c + 1).toUpperCase() + value.substr(c + 2);
    c = (value.indexOf("-")) >> 0;
  }
  return value;
};


/**
 * @export
 * @type {Object}
 */
org.apache.royale.core.SimpleCSSValuesImpl.prototype.values;


/**
 *  @copy org.apache.royale.core.IValuesImpl#getValue()
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 *  @royaleignorecoercion org.apache.royale.core.IStyleableObject
 *  @royaleignorecoercion org.apache.royale.core.IChild
 * @export
 * @param {Object} thisObject
 * @param {string} valueName
 * @param {string=} state
 * @param {Object=} attrs
 * @return {*}
 */
org.apache.royale.core.SimpleCSSValuesImpl.prototype.getValue = function(thisObject, valueName, state, attrs) {
  state = typeof state !== 'undefined' ? state : null;
  attrs = typeof attrs !== 'undefined' ? attrs : null;
  valueName = this.org_apache_royale_core_SimpleCSSValuesImpl_toCamelCase(valueName);
  var /** @type {*} */ value;
  var /** @type {*} */ o;
  var /** @type {string} */ className;
  var /** @type {string} */ selectorName;
  if (org.apache.royale.utils.Language.is(thisObject, org.apache.royale.core.IStyleableObject)) {
    var /** @type {Object} */ styleable = thisObject;
    if (styleable.style != null) {
      
      value = styleable.style[valueName];
      this.foundIndex = (this.org_apache_royale_core_SimpleCSSValuesImpl_lastIndex * 2) >> 0;
      if (value === org.apache.royale.core.SimpleCSSValuesImpl.INHERIT)
        return this.org_apache_royale_core_SimpleCSSValuesImpl_getInheritingValue(thisObject, valueName, state, attrs);
      if (value !== undefined)
        return value;
    }
    if (styleable.id != null) {
      o = this.values["#" + styleable.id];
      if (o !== undefined) {
        this.foundIndex = (o[org.apache.royale.core.SimpleCSSValuesImpl.INDEX] + this.org_apache_royale_core_SimpleCSSValuesImpl_lastIndex) >> 0;
        value = o[valueName];
        if (value === org.apache.royale.core.SimpleCSSValuesImpl.INHERIT)
          return this.org_apache_royale_core_SimpleCSSValuesImpl_getInheritingValue(thisObject, valueName, state, attrs);
        if (value !== undefined)
          return value;
      }
    }
    var /** @type {string} */ classNames = styleable.className;
    var /** @type {*} */ classValue;
    if (classNames != null) {
      var /** @type {Array} */ classNameList = classNames.split(" ");
      var foreachiter0_target = classNameList;
      for (var foreachiter0 in foreachiter0_target) 
      {
      className = foreachiter0_target[foreachiter0];
      {
        if (state != null) {
          selectorName = className + ":" + state;
          o = this.values["." + selectorName];
          if (o !== undefined) {
            this.foundIndex = (o[org.apache.royale.core.SimpleCSSValuesImpl.INDEX]) >> 0;
            value = o[valueName];
            if (value === org.apache.royale.core.SimpleCSSValuesImpl.INHERIT)
              classValue = this.org_apache_royale_core_SimpleCSSValuesImpl_getInheritingValue(thisObject, valueName, state, attrs);
            if (value !== undefined)
              classValue = value;
          }
        }
        o = this.values["." + className];
        if (o !== undefined) {
          this.foundIndex = (o[org.apache.royale.core.SimpleCSSValuesImpl.INDEX]) >> 0;
          value = o[valueName];
          if (value === org.apache.royale.core.SimpleCSSValuesImpl.INHERIT)
            classValue = this.org_apache_royale_core_SimpleCSSValuesImpl_getInheritingValue(thisObject, valueName, state, attrs);
          if (value !== undefined)
            classValue = value;
        }
      }}
      
    }
    if (classValue !== undefined)
      return classValue;
  }
  o = this.values["*"];
  if (o !== undefined) {
    this.foundIndex = this.org_apache_royale_core_SimpleCSSValuesImpl_lastIndex;
    value = o[valueName];
    if (value !== undefined)
      return value;
  }
  
  className = org.apache.royale.utils.Language.string(thisObject.ROYALE_CLASS_INFO.names[0].qName);
  var /** @type {Object} */ thisInstance = thisObject;
  while (className != "Object") {
    if (state != null) {
      selectorName = className + ":" + state;
      o = this.values[selectorName];
      if (o !== undefined) {
        this.foundIndex = (0 - o[org.apache.royale.core.SimpleCSSValuesImpl.INDEX]) >> 0;
        value = o[valueName];
        if (value === org.apache.royale.core.SimpleCSSValuesImpl.INHERIT)
          return this.org_apache_royale_core_SimpleCSSValuesImpl_getInheritingValue(thisObject, valueName, state, attrs);
        if (value !== undefined)
          return value;
      }
    }
    o = this.values[className];
    if (o !== undefined) {
      this.foundIndex = (0 - o[org.apache.royale.core.SimpleCSSValuesImpl.INDEX]) >> 0;
      value = o[valueName];
      if (value === org.apache.royale.core.SimpleCSSValuesImpl.INHERIT)
        return this.org_apache_royale_core_SimpleCSSValuesImpl_getInheritingValue(thisObject, valueName, state, attrs);
      if (value !== undefined)
        return value;
    }
    
    var /** @type {Object} */ constructorAsObject = thisInstance["constructor"];
    thisInstance = constructorAsObject.superClass_;
    if (!thisInstance || !thisInstance.ROYALE_CLASS_INFO)
      break;
    className = org.apache.royale.utils.Language.string(thisInstance.ROYALE_CLASS_INFO.names[0].qName);
  }
  if (org.apache.royale.core.SimpleCSSValuesImpl.inheritingStyles[valueName] !== undefined && org.apache.royale.utils.Language.is(thisObject, org.apache.royale.core.IChild)) {
    var /** @type {Object} */ parentObject = thisObject.parent;
    if (parentObject)
      return this.getValue(parentObject, valueName, state, attrs);
  }
  this.foundIndex = (0 - this.org_apache_royale_core_SimpleCSSValuesImpl_lastIndex) >> 0;
  o = this.values["global"];
  if (o !== undefined) {
    return o[valueName];
  }
  return undefined;
};


/**
 * @royaleignorecoercion org.apache.royale.core.IChild
 * @private
 * @param {Object} thisObject
 * @param {string} valueName
 * @param {string=} state
 * @param {Object=} attrs
 * @return {*}
 */
org.apache.royale.core.SimpleCSSValuesImpl.prototype.org_apache_royale_core_SimpleCSSValuesImpl_getInheritingValue = function(thisObject, valueName, state, attrs) {
  state = typeof state !== 'undefined' ? state : null;
  attrs = typeof attrs !== 'undefined' ? attrs : null;
  var /** @type {*} */ value;
  if (org.apache.royale.utils.Language.is(thisObject, org.apache.royale.core.IChild)) {
    var /** @type {Object} */ parentObject = thisObject.parent;
    if (parentObject) {
      value = this.getValue(parentObject, valueName, state, attrs);
      if (value === org.apache.royale.core.SimpleCSSValuesImpl.INHERIT || value === undefined) {
        return this.org_apache_royale_core_SimpleCSSValuesImpl_getInheritingValue(parentObject, valueName, state, attrs);
      }
      return value;
    }
    return undefined;
  }
  return org.apache.royale.core.SimpleCSSValuesImpl.INHERIT;
};


/**
 *  A method that stores a value to be shared with other objects.
 *  It is global, not per instance.  Fancier implementations
 *  may store shared values per-instance.
 * 
 *  @asparam thisObject An object associated with this value.  Thiis
 *                parameter is ignored.
 *  @asparam valueName The name or key of the value being stored.
 *  @asparam The value to be stored.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 * @export
 * @param {Object} thisObject
 * @param {string} valueName
 * @param {*} value
 */
org.apache.royale.core.SimpleCSSValuesImpl.prototype.setValue = function(thisObject, valueName, value) {
  valueName = this.org_apache_royale_core_SimpleCSSValuesImpl_toCamelCase(valueName);
  var /** @type {Object} */ oldValue = this.values[valueName];
  if (oldValue !== value) {
    this.values[valueName] = value;
    this.dispatchEvent(new org.apache.royale.events.ValueChangeEvent(org.apache.royale.events.ValueChangeEvent.VALUE_CHANGE, false, false, oldValue, value));
  }
};


/**
 *  @copy org.apache.royale.core.IValuesImpl#newInstance()
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 * @export
 * @param {Object} thisObject
 * @param {string} valueName
 * @param {string=} state
 * @param {Object=} attrs
 * @return {*}
 */
org.apache.royale.core.SimpleCSSValuesImpl.prototype.newInstance = function(thisObject, valueName, state, attrs) {
  state = typeof state !== 'undefined' ? state : null;
  attrs = typeof attrs !== 'undefined' ? attrs : null;
  var /** @type {Object} */ c = this.getValue(thisObject, valueName, state, attrs);
  if (c)
    return new c();
  return null;
};


/**
 *  @copy org.apache.royale.core.IValuesImpl#getInstance()
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 *  @royaleignorecoercion Function
 *  @royaleignorecoercion org.apache.royale.core.IDocument
 * @export
 * @param {string} valueName
 * @return {Object}
 */
org.apache.royale.core.SimpleCSSValuesImpl.prototype.getInstance = function(valueName) {
  var /** @type {Object} */ o = this.values["global"];
  o = o[valueName];
  
  var /** @type {Function} */ i = null;
  if (typeof(o) == "function")
    i =  /** @type {Function} */ (o);
  if (i) {
    o[valueName] = new i();
    var /** @type {Object} */ d = o[valueName];
    if (d)
      d.setDocument(this.org_apache_royale_core_SimpleCSSValuesImpl_mainClass);
  }
  return o;
};


/**
 *  @copy org.apache.royale.core.IValuesImpl#convertColor()
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 * @export
 * @param {Object} value
 * @return {number}
 */
org.apache.royale.core.SimpleCSSValuesImpl.prototype.convertColor = function(value) {
  return org.apache.royale.utils.CSSUtils.toColor(value);
};


/**
 *  @copy org.apache.royale.core.IValuesImpl#parseStyles()
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 * @export
 * @param {string} styles
 * @return {Object}
 */
org.apache.royale.core.SimpleCSSValuesImpl.prototype.parseStyles = function(styles) {
  var /** @type {Object} */ obj = {};
  var /** @type {Array} */ parts = styles.split(";");
  var foreachiter1_target = parts;
  for (var foreachiter1 in foreachiter1_target) 
  {
  var part = foreachiter1_target[foreachiter1];
  {
    var /** @type {Array} */ pieces = org.apache.royale.utils.string.splitAndTrim(part, ":");
    if (pieces.length < 2)
      continue;
    var /** @type {string} */ valueName = org.apache.royale.utils.Language.string(pieces[0]);
    valueName = this.org_apache_royale_core_SimpleCSSValuesImpl_toCamelCase(valueName);
    var /** @type {string} */ value = org.apache.royale.utils.Language.string(pieces[1]);
    if (value == "null")
      obj[valueName] = null;
    else if (value == "true")
      obj[valueName] = true;
    else if (value == "false")
      obj[valueName] = false; else {
      var /** @type {number} */ n = Number(value);
      if (isNaN(n)) {
        if (value.charAt(0) == "#" || value.indexOf("rgb") == 0) {
          obj[valueName] = org.apache.royale.utils.CSSUtils.toColor(value);
        } else {
          if (value.charAt(0) == "'")
            value = value.substr(1, value.length - 2);
          else if (value.charAt(0) == '"')
            value = value.substr(1, value.length - 2);
          obj[valueName] = value;
        }
      }
      else
        obj[valueName] = n;
    }
  }}
  
  return obj;
};


/**
 *  @copy org.apache.royale.core.IValuesImpl#addRule()
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 *
 *  @royaleignorecoercion HTMLStyleElement
 *  @royaleignorecoercion CSSStyleSheet
 *  @royaleignorecoercion uint
 * @export
 * @param {string} ruleName
 * @param {Object} ruleValues
 */
org.apache.royale.core.SimpleCSSValuesImpl.prototype.addRule = function(ruleName, ruleValues) {
  var /** @type {Object} */ asValues = {};
  for (var /** @type {string} */ valueName in ruleValues) {
    var /** @type {*} */ v = ruleValues[valueName];
    valueName = this.org_apache_royale_core_SimpleCSSValuesImpl_toCamelCase(valueName);
    asValues[valueName] = v;
  }
  this.values[ruleName] = asValues;
  if (!this.org_apache_royale_core_SimpleCSSValuesImpl_ss) {
    var /** @type {HTMLStyleElement} */ styleElement = document.createElement('style');
    document.head.appendChild(styleElement);
    this.org_apache_royale_core_SimpleCSSValuesImpl_ss = styleElement.sheet;
  }
  var /** @type {string} */ cssString = ruleName + " {";
  for (var /** @type {string} */ p in this.values) {
    var /** @type {Object} */ value = this.values[p];
    if (typeof(value) == 'function')
      continue;
    cssString += p + ": ";
    if (typeof(value) == 'number') {
      if (this.colorStyles[p])
        value = org.apache.royale.utils.CSSUtils.attributeFromColor((value) >>> 0);
      else
        value = value.toString() + 'px';
    } else if (p == 'backgroundImage') {
      if (p.indexOf('url') != 0)
        value = 'url(' + value + ')';
    }
    cssString += value + ";";
  }
  cssString += "}";
  this.org_apache_royale_core_SimpleCSSValuesImpl_ss.insertRule(cssString, this.org_apache_royale_core_SimpleCSSValuesImpl_ss.cssRules.length);
};


/**
 * @private
 * @type {CSSStyleSheet}
 */
org.apache.royale.core.SimpleCSSValuesImpl.prototype.org_apache_royale_core_SimpleCSSValuesImpl_ss;


/**
 * @protected
 * @const
 * @type {Object}
 */
org.apache.royale.core.SimpleCSSValuesImpl.inheritingStyles = {"color":1, "fontFamily":1, "fontSize":1, "fontStyle":1, "textAlign":1};


/**
 * @private
 * @const
 * @type {Object}
 */
org.apache.royale.core.SimpleCSSValuesImpl._perInstanceStyles = {'backgroundColor':1, 'backgroundImage':1, 'color':1, 'fontFamily':1, 'fontWeight':1, 'fontSize':1, 'fontStyle':1};


/**
 * @private
 * @const
 * @type {Object}
 */
org.apache.royale.core.SimpleCSSValuesImpl._colorStyles = {'background':1, 'backgroundColor':1, 'borderColor':1, 'color':1};


/**
 * @private
 * @const
 * @type {Object}
 */
org.apache.royale.core.SimpleCSSValuesImpl._skipStyles = {'constructor':1};


/**
 * @private
 * @const
 * @type {Object}
 */
org.apache.royale.core.SimpleCSSValuesImpl._numericStyles = {};


/**
 * @asparam thisObject The object to apply styles to;
 * @asparam styles The styles.
 * @royaleignorecoercion HTMLElement
 * @export
 * @param {org.apache.royale.core.IUIBase} thisObject
 * @param {Object} styles
 */
org.apache.royale.core.SimpleCSSValuesImpl.prototype.applyStyles = function(thisObject, styles) {
  var /** @type {Object} */ styleList = this.perInstanceStyles;
  var /** @type {Object} */ colorStyles = this.colorStyles;
  var /** @type {Object} */ skipStyles = this.skipStyles;
  var /** @type {Object} */ numericStyles = this.numericStyles;
  var /** @type {Object} */ listObj = styles;
  if (styles && styles.styleList)
    listObj = styles.styleList;
  for (var /** @type {string} */ p in listObj) {
    if (skipStyles[p])
      continue;
    var /** @type {*} */ value = styles[p];
    if (value === undefined)
      continue;
    if (typeof(value) == 'number') {
      if (colorStyles[p])
        value = org.apache.royale.utils.CSSUtils.attributeFromColor((value) >>> 0);
      else if (numericStyles[p])
        value = value.toString();
      else
        value = value.toString() + 'px';
    } else if (p == 'backgroundImage' && value.indexOf('url') != 0) {
      value = 'url(' + value + ')';
    }
    thisObject.element.style[p] = value;
  }
};


/**
 * @private
 * @type {CSSStyleDeclaration}
 */
org.apache.royale.core.SimpleCSSValuesImpl.prototype.org_apache_royale_core_SimpleCSSValuesImpl_computedStyles;


/**
 *  Compute the width/thickness of the four border edges.
 *  
 *  @asparam object The object with style values.
 *  @asparam quick True to assume all four edges have the same widths.
 *  @asreturn A Rectangle representing the four sides.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 *  @royaleignorecoercion String
 * @export
 * @param {org.apache.royale.core.IUIBase} object
 * @param {string=} state
 * @return {org.apache.royale.core.styles.BorderStyles}
 */
org.apache.royale.core.SimpleCSSValuesImpl.prototype.getBorderStyles = function(object, state) {
  state = typeof state !== 'undefined' ? state : null;
  var /** @type {org.apache.royale.core.styles.BorderStyles} */ bs = new org.apache.royale.core.styles.BorderStyles();
  
  var /** @type {boolean} */ madeit;
  if (!this.org_apache_royale_core_SimpleCSSValuesImpl_computedStyles) {
    this.org_apache_royale_core_SimpleCSSValuesImpl_computedStyles = getComputedStyle(object.element, state);
    madeit = true;
  }
  bs.style = org.apache.royale.utils.Language.string(this.org_apache_royale_core_SimpleCSSValuesImpl_computedStyles["border-style"]);
  bs.width = org.apache.royale.utils.CSSUtils.toNumber(org.apache.royale.utils.Language.string(this.org_apache_royale_core_SimpleCSSValuesImpl_computedStyles["border-width"]));
  bs.color = org.apache.royale.utils.CSSUtils.toColor(this.org_apache_royale_core_SimpleCSSValuesImpl_computedStyles["border-color"]);
  if (madeit)
    this.org_apache_royale_core_SimpleCSSValuesImpl_computedStyles = null;
  return bs;
};


/**
 *  Compute the width/thickness of the four border edges.
 *  
 *  @asparam object The object with style values.
 *  @asparam quick True to assume all four edges have the same widths.
 *  @asreturn A Rectangle representing the four sides.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 * @export
 * @param {org.apache.royale.core.IUIBase} object
 * @param {string=} state
 * @return {org.apache.royale.core.layout.EdgeData}
 */
org.apache.royale.core.SimpleCSSValuesImpl.prototype.getBorderMetrics = function(object, state) {
  state = typeof state !== 'undefined' ? state : null;
  var /** @type {org.apache.royale.core.layout.EdgeData} */ ed = new org.apache.royale.core.layout.EdgeData();
  
  var /** @type {boolean} */ madeit;
  if (!this.org_apache_royale_core_SimpleCSSValuesImpl_computedStyles) {
    this.org_apache_royale_core_SimpleCSSValuesImpl_computedStyles = getComputedStyle(object.element, state);
    madeit = true;
  }
  ed.left = org.apache.royale.utils.CSSUtils.toNumber(org.apache.royale.utils.Language.string(this.org_apache_royale_core_SimpleCSSValuesImpl_computedStyles["border-left-width"]));
  ed.right = org.apache.royale.utils.CSSUtils.toNumber(org.apache.royale.utils.Language.string(this.org_apache_royale_core_SimpleCSSValuesImpl_computedStyles["border-right-width"]));
  ed.top = org.apache.royale.utils.CSSUtils.toNumber(org.apache.royale.utils.Language.string(this.org_apache_royale_core_SimpleCSSValuesImpl_computedStyles["border-top-width"]));
  ed.bottom = org.apache.royale.utils.CSSUtils.toNumber(org.apache.royale.utils.Language.string(this.org_apache_royale_core_SimpleCSSValuesImpl_computedStyles["border-bottom-width"]));
  if (madeit)
    this.org_apache_royale_core_SimpleCSSValuesImpl_computedStyles = null;
  return ed;
};


/**
 *  Compute the width/thickness of the four padding sides.
 *  
 *  @asparam object The object with style values.
 *  @asreturn A Rectangle representing the padding on each of the four sides.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 * @export
 * @param {org.apache.royale.core.IUIBase} object
 * @param {number=} hostWidth
 * @param {number=} hostHeight
 * @param {string=} state
 * @return {org.apache.royale.core.layout.EdgeData}
 */
org.apache.royale.core.SimpleCSSValuesImpl.prototype.getPaddingMetrics = function(object, hostWidth, hostHeight, state) {
  hostWidth = typeof hostWidth !== 'undefined' ? hostWidth : NaN;
  hostHeight = typeof hostHeight !== 'undefined' ? hostHeight : NaN;
  state = typeof state !== 'undefined' ? state : null;
  var /** @type {org.apache.royale.core.layout.EdgeData} */ ed = new org.apache.royale.core.layout.EdgeData();
  
  var /** @type {boolean} */ madeit;
  if (!this.org_apache_royale_core_SimpleCSSValuesImpl_computedStyles) {
    this.org_apache_royale_core_SimpleCSSValuesImpl_computedStyles = getComputedStyle(object.element, state);
    madeit = true;
  }
  ed.left = org.apache.royale.utils.CSSUtils.toNumber(org.apache.royale.utils.Language.string(this.org_apache_royale_core_SimpleCSSValuesImpl_computedStyles["padding-left"]));
  ed.right = org.apache.royale.utils.CSSUtils.toNumber(org.apache.royale.utils.Language.string(this.org_apache_royale_core_SimpleCSSValuesImpl_computedStyles["padding-right"]));
  ed.top = org.apache.royale.utils.CSSUtils.toNumber(org.apache.royale.utils.Language.string(this.org_apache_royale_core_SimpleCSSValuesImpl_computedStyles["padding-top"]));
  ed.bottom = org.apache.royale.utils.CSSUtils.toNumber(org.apache.royale.utils.Language.string(this.org_apache_royale_core_SimpleCSSValuesImpl_computedStyles["padding-bottom"]));
  if (madeit)
    this.org_apache_royale_core_SimpleCSSValuesImpl_computedStyles = null;
  return ed;
};


/**
 *  Combine padding and border.  Often used in non-containers.
 *  
 *  @asparam object The object with style values.
 *  @asreturn A Rectangle representing the padding and border on each of the four sides.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 * @export
 * @param {org.apache.royale.core.IUIBase} object
 * @param {number=} hostWidth
 * @param {number=} hostHeight
 * @param {string=} state
 * @return {org.apache.royale.core.layout.EdgeData}
 */
org.apache.royale.core.SimpleCSSValuesImpl.prototype.getBorderAndPaddingMetrics = function(object, hostWidth, hostHeight, state) {
  hostWidth = typeof hostWidth !== 'undefined' ? hostWidth : NaN;
  hostHeight = typeof hostHeight !== 'undefined' ? hostHeight : NaN;
  state = typeof state !== 'undefined' ? state : null;
  var /** @type {boolean} */ madeit;
  if (!this.org_apache_royale_core_SimpleCSSValuesImpl_computedStyles) {
    this.org_apache_royale_core_SimpleCSSValuesImpl_computedStyles = getComputedStyle(object.element, state);
    madeit = true;
  }
  var /** @type {org.apache.royale.core.layout.EdgeData} */ borderMetrics = this.getBorderMetrics(object);
  var /** @type {org.apache.royale.core.layout.EdgeData} */ paddingMetrics = this.getPaddingMetrics(object);
  borderMetrics.left += paddingMetrics.left;
  borderMetrics.top += paddingMetrics.top;
  borderMetrics.right += paddingMetrics.right;
  borderMetrics.bottom += paddingMetrics.bottom;
  if (madeit)
    this.org_apache_royale_core_SimpleCSSValuesImpl_computedStyles = null;
  return borderMetrics;
};


/**
 * Returns a MarginData for the given child.
 * 
 * @asparam child Object The element whose margins are required.
 * @asparam hostWidth Number The usable width dimension of the host.
 * @asparam hostHeight Number The usable height dimension of the host.
 * 
 * @asreturn MarginData
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 *  @royaleignorecoercion String
 * @export
 * @param {org.apache.royale.core.IUIBase} child
 * @param {number=} hostWidth
 * @param {number=} hostHeight
 * @param {string=} state
 * @return {org.apache.royale.core.layout.MarginData}
 */
org.apache.royale.core.SimpleCSSValuesImpl.prototype.getMargins = function(child, hostWidth, hostHeight, state) {
  hostWidth = typeof hostWidth !== 'undefined' ? hostWidth : NaN;
  hostHeight = typeof hostHeight !== 'undefined' ? hostHeight : NaN;
  state = typeof state !== 'undefined' ? state : null;
  var /** @type {org.apache.royale.core.layout.MarginData} */ md = new org.apache.royale.core.layout.MarginData();
  
  var /** @type {boolean} */ madeit;
  if (!this.org_apache_royale_core_SimpleCSSValuesImpl_computedStyles) {
    this.org_apache_royale_core_SimpleCSSValuesImpl_computedStyles = getComputedStyle(child.element, state);
    madeit = true;
  }
  var /** @type {Object} */ marginLeft = this.org_apache_royale_core_SimpleCSSValuesImpl_computedStyles["margin-left"];
  var /** @type {Object} */ marginTop = this.org_apache_royale_core_SimpleCSSValuesImpl_computedStyles["margin-right"];
  var /** @type {Object} */ marginRight = this.org_apache_royale_core_SimpleCSSValuesImpl_computedStyles["margin-top"];
  var /** @type {Object} */ marginBottom = this.org_apache_royale_core_SimpleCSSValuesImpl_computedStyles["margin-bottom"];
  md.left = marginLeft == "auto" ? 0 : org.apache.royale.utils.CSSUtils.toNumber(marginLeft);
  md.right = marginRight == "auto" ? 0 : org.apache.royale.utils.CSSUtils.toNumber(marginRight);
  md.top = marginTop == "auto" ? 0 : org.apache.royale.utils.CSSUtils.toNumber(marginTop);
  md.bottom = marginBottom == "auto" ? 0 : org.apache.royale.utils.CSSUtils.toNumber(marginBottom);
  if (madeit)
    this.org_apache_royale_core_SimpleCSSValuesImpl_computedStyles = null;
  md.auto = marginLeft == "auto" && marginRight == "auto";
  return md;
};


/**
 * Returns an object containing the child's positioning values.
 * 
 * @asparam child Object The element whose positions are required.
 * 
 * @asreturn Rectangle A structure of {top:Number, left:Number, bottom:Number, right:Number}
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 * @export
 * @param {org.apache.royale.core.IUIBase} child
 * @param {number=} hostWidth
 * @param {number=} hostHeight
 * @param {string=} state
 * @return {org.apache.royale.core.layout.EdgeData}
 */
org.apache.royale.core.SimpleCSSValuesImpl.prototype.getPositions = function(child, hostWidth, hostHeight, state) {
  hostWidth = typeof hostWidth !== 'undefined' ? hostWidth : NaN;
  hostHeight = typeof hostHeight !== 'undefined' ? hostHeight : NaN;
  state = typeof state !== 'undefined' ? state : null;
  var /** @type {org.apache.royale.core.layout.EdgeData} */ data = new org.apache.royale.core.layout.EdgeData();
  
  var /** @type {CSSStyleDeclaration} */ css = getComputedStyle(child.element, state);
  data.left = org.apache.royale.utils.CSSUtils.toNumber(css.left);
  data.right = org.apache.royale.utils.CSSUtils.toNumber(css.right);
  data.top = org.apache.royale.utils.CSSUtils.toNumber(css.top);
  data.bottom = org.apache.royale.utils.CSSUtils.toNumber(css.bottom);
  return data;
};


/**
 *  Combine padding and border.  Often used in non-containers.
 *  
 *  @asparam object The object with style values.
 *  @asreturn A Rectangle representing the padding and border on each of the four sides.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 * @export
 * @param {org.apache.royale.core.IUIBase} object
 * @param {number=} hostWidth
 * @param {number=} hostHeight
 * @param {string=} state
 * @return {org.apache.royale.core.layout.LayoutData}
 */
org.apache.royale.core.SimpleCSSValuesImpl.prototype.getBorderPaddingAndMargins = function(object, hostWidth, hostHeight, state) {
  hostWidth = typeof hostWidth !== 'undefined' ? hostWidth : NaN;
  hostHeight = typeof hostHeight !== 'undefined' ? hostHeight : NaN;
  state = typeof state !== 'undefined' ? state : null;
  this.org_apache_royale_core_SimpleCSSValuesImpl_computedStyles = getComputedStyle(object.element, state);
  var /** @type {org.apache.royale.core.layout.LayoutData} */ out = new org.apache.royale.core.layout.LayoutData();
  out.border = this.getBorderMetrics(object, state);
  out.padding = this.getPaddingMetrics(object, hostWidth, hostHeight, state);
  out.margins = this.getMargins(object, hostWidth, hostHeight, state);
  this.org_apache_royale_core_SimpleCSSValuesImpl_computedStyles = null;
  return out;
};


org.apache.royale.core.SimpleCSSValuesImpl.prototype.get__perInstanceStyles = function() {
  return org.apache.royale.core.SimpleCSSValuesImpl._perInstanceStyles;
};


org.apache.royale.core.SimpleCSSValuesImpl.prototype.get__colorStyles = function() {
  return org.apache.royale.core.SimpleCSSValuesImpl._colorStyles;
};


org.apache.royale.core.SimpleCSSValuesImpl.prototype.get__skipStyles = function() {
  return org.apache.royale.core.SimpleCSSValuesImpl._skipStyles;
};


org.apache.royale.core.SimpleCSSValuesImpl.prototype.get__numericStyles = function() {
  return org.apache.royale.core.SimpleCSSValuesImpl._numericStyles;
};


Object.defineProperties(org.apache.royale.core.SimpleCSSValuesImpl.prototype, /** @lends {org.apache.royale.core.SimpleCSSValuesImpl.prototype} */ {
/**
  * @type {Object} */
perInstanceStyles: {
get: org.apache.royale.core.SimpleCSSValuesImpl.prototype.get__perInstanceStyles},
/**
  * @type {Object} */
colorStyles: {
get: org.apache.royale.core.SimpleCSSValuesImpl.prototype.get__colorStyles},
/**
  * @type {Object} */
skipStyles: {
get: org.apache.royale.core.SimpleCSSValuesImpl.prototype.get__skipStyles},
/**
  * @type {Object} */
numericStyles: {
get: org.apache.royale.core.SimpleCSSValuesImpl.prototype.get__numericStyles}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.SimpleCSSValuesImpl.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'SimpleCSSValuesImpl', qName: 'org.apache.royale.core.SimpleCSSValuesImpl', kind: 'class' }], interfaces: [org.apache.royale.core.IBorderPaddingMarginValuesImpl, org.apache.royale.core.ICSSImpl] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.SimpleCSSValuesImpl.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'values': { type: 'Object', get_set: function (/** org.apache.royale.core.SimpleCSSValuesImpl */ inst, /** * */ v) {return v !== undefined ? inst.values = v : inst.values;}}
      };
    },
    methods: function () {
      return {
        'SimpleCSSValuesImpl': { type: '', declaredBy: 'org.apache.royale.core.SimpleCSSValuesImpl'},
        'init': { type: 'void', declaredBy: 'org.apache.royale.core.SimpleCSSValuesImpl', parameters: function () { return [ 'Object', false ]; }},
        'getValue': { type: '*', declaredBy: 'org.apache.royale.core.SimpleCSSValuesImpl', parameters: function () { return [ 'Object', false ,'String', false ,'String', true ,'Object', true ]; }},
        'setValue': { type: 'void', declaredBy: 'org.apache.royale.core.SimpleCSSValuesImpl', parameters: function () { return [ 'Object', false ,'String', false ,'*', false ]; }},
        'newInstance': { type: '*', declaredBy: 'org.apache.royale.core.SimpleCSSValuesImpl', parameters: function () { return [ 'Object', false ,'String', false ,'String', true ,'Object', true ]; }},
        'getInstance': { type: 'Object', declaredBy: 'org.apache.royale.core.SimpleCSSValuesImpl', parameters: function () { return [ 'String', false ]; }},
        'convertColor': { type: 'uint', declaredBy: 'org.apache.royale.core.SimpleCSSValuesImpl', parameters: function () { return [ 'Object', false ]; }},
        'parseStyles': { type: 'Object', declaredBy: 'org.apache.royale.core.SimpleCSSValuesImpl', parameters: function () { return [ 'String', false ]; }},
        'addRule': { type: 'void', declaredBy: 'org.apache.royale.core.SimpleCSSValuesImpl', parameters: function () { return [ 'String', false ,'Object', false ]; }},
        'applyStyles': { type: 'void', declaredBy: 'org.apache.royale.core.SimpleCSSValuesImpl', parameters: function () { return [ 'org.apache.royale.core.IUIBase', false ,'Object', false ]; }},
        'getBorderStyles': { type: 'org.apache.royale.core.styles.BorderStyles', declaredBy: 'org.apache.royale.core.SimpleCSSValuesImpl', parameters: function () { return [ 'org.apache.royale.core.IUIBase', false ,'String', true ]; }},
        'getBorderMetrics': { type: 'org.apache.royale.core.layout.EdgeData', declaredBy: 'org.apache.royale.core.SimpleCSSValuesImpl', parameters: function () { return [ 'org.apache.royale.core.IUIBase', false ,'String', true ]; }},
        'getPaddingMetrics': { type: 'org.apache.royale.core.layout.EdgeData', declaredBy: 'org.apache.royale.core.SimpleCSSValuesImpl', parameters: function () { return [ 'org.apache.royale.core.IUIBase', false ,'Number', true ,'Number', true ,'String', true ]; }},
        'getBorderAndPaddingMetrics': { type: 'org.apache.royale.core.layout.EdgeData', declaredBy: 'org.apache.royale.core.SimpleCSSValuesImpl', parameters: function () { return [ 'org.apache.royale.core.IUIBase', false ,'Number', true ,'Number', true ,'String', true ]; }},
        'getMargins': { type: 'org.apache.royale.core.layout.MarginData', declaredBy: 'org.apache.royale.core.SimpleCSSValuesImpl', parameters: function () { return [ 'org.apache.royale.core.IUIBase', false ,'Number', true ,'Number', true ,'String', true ]; }},
        'getPositions': { type: 'org.apache.royale.core.layout.EdgeData', declaredBy: 'org.apache.royale.core.SimpleCSSValuesImpl', parameters: function () { return [ 'org.apache.royale.core.IUIBase', false ,'Number', true ,'Number', true ,'String', true ]; }},
        'getBorderPaddingAndMargins': { type: 'org.apache.royale.core.layout.LayoutData', declaredBy: 'org.apache.royale.core.SimpleCSSValuesImpl', parameters: function () { return [ 'org.apache.royale.core.IUIBase', false ,'Number', true ,'Number', true ,'String', true ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.core.SimpleCSSValuesImpl.prototype.ROYALE_COMPILE_FLAGS = 10;
