/**
 * Generated by Apache Royale Compiler from org/apache/royale/reflection/CompilationData.as
 * org.apache.royale.reflection.CompilationData
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.reflection.CompilationData');
/* Royale Dependency List: */



/**
 * @royaleignorecoercion Class
 * 
 * @constructor
 * @param {Object} inspect
 */
org.apache.royale.reflection.CompilationData = function(inspect) {
  if (!inspect)
    throw new Error('CompilationData constructor parameter cannot be null');
  var /** @type {Object} */ constructor = inspect.constructor;
  if (constructor === Object['constructor']) {
    if (inspect.prototype && inspect.prototype.ROYALE_REFLECTION_INFO) {
      this.org_apache_royale_reflection_CompilationData__qName = org.apache.royale.utils.Language.string(inspect.prototype.ROYALE_CLASS_INFO.names[0].qName);
      this.org_apache_royale_reflection_CompilationData__flags = (inspect.prototype.ROYALE_COMPILE_FLAGS) >>> 0;
      this.org_apache_royale_reflection_CompilationData__class =  /** @type {Object|null} */ (inspect);
    }
  } else {
    if (inspect.ROYALE_REFLECTION_INFO) {
      this.org_apache_royale_reflection_CompilationData__flags = (inspect.ROYALE_COMPILE_FLAGS) >>> 0;
      this.org_apache_royale_reflection_CompilationData__qName = org.apache.royale.utils.Language.string(inspect.ROYALE_CLASS_INFO.names[0].qName);
      this.org_apache_royale_reflection_CompilationData__class =  /** @type {Object|null} */ (constructor);
    }
  }
  if (!this.org_apache_royale_reflection_CompilationData__qName) {
    throw new Error('This is not a Royale Class, cannot get compilation data');
  }
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.reflection.CompilationData', org.apache.royale.reflection.CompilationData);


/**
 * @export
 * @const
 * @type {number}
 */
org.apache.royale.reflection.CompilationData.WITH_DEFAULT_INITIALIZERS = 1;


/**
 * @export
 * @const
 * @type {number}
 */
org.apache.royale.reflection.CompilationData.HAS_KEEP_AS3_METADATA = 2;


/**
 * @export
 * @const
 * @type {number}
 */
org.apache.royale.reflection.CompilationData.HAS_KEEP_CODE_WITH_METADATA = 4;


/**
 * @export
 * @const
 * @type {number}
 */
org.apache.royale.reflection.CompilationData.HAS_EXPORT_PUBLIC_SYMBOLS = 8;


/**
 * @export
 * @const
 * @type {number}
 */
org.apache.royale.reflection.CompilationData.EXPORT_PROTECTED_SYMBOLS = 16;


/**
 * @private
 * @const
 * @type {Array}
 */
org.apache.royale.reflection.CompilationData._ALL;


/**
 * @private
 * @const
 * @type {Object}
 */
org.apache.royale.reflection.CompilationData._DESCRIPTIONS = {'1':'Compiled with default initializers enabled', '2':'Compiled with request to keep specific as3 metadata, if present', '4':'Compiled to avoid deadcode elimination if code has metadata', '8':'Compiled with public symbols export enabled', '16':'Compiled with protected symbols export enabled'};


/**
 * @royalesuppressexport
 * @param {number} flags
 * @param {number} optionBits
 * @return {boolean}
 */
org.apache.royale.reflection.CompilationData.hasCompilationOption = function(flags, optionBits) {
  
  return Boolean((flags & optionBits) === optionBits);
};


/**
 * @royalesuppressexport
 * @param {number} flags
 * @return {Array}
 */
org.apache.royale.reflection.CompilationData.asStrings = function(flags) {
  var /** @type {Array} */ ret = [];
  var /** @type {Array} */ source = org.apache.royale.reflection.CompilationData._ALL;
  
/**
 * @const
 * @type {number}
 */
var l = (source.length) >>> 0;
  for (var /** @type {number} */ i = 0; i < l; i++) {
    var /** @type {number} */ itemFlag = (source[i]) >>> 0;
    if (Boolean(flags & itemFlag)) {
      ret.push(org.apache.royale.reflection.CompilationData._DESCRIPTIONS[itemFlag]);
    }
  }
  return ret;
};


/**
 * @royalesuppressexport
 * @param {number} flag
 * @return {string}
 */
org.apache.royale.reflection.CompilationData.describeSingleFlag = function(flag) {
  var /** @type {string} */ ret;
  if (flag in org.apache.royale.reflection.CompilationData._DESCRIPTIONS) {
    ret = org.apache.royale.utils.Language.string(org.apache.royale.reflection.CompilationData._DESCRIPTIONS[flag]);
  }
  if (!ret) {
    ret = 'Unknown Compilation Flag';
  }
  return ret;
};


/**
 * @private
 * @type {Object}
 */
org.apache.royale.reflection.CompilationData.prototype.org_apache_royale_reflection_CompilationData__class;


/**
 * Check the ancestry for consistent compilation settings.
 * @asparam specificFlags a flag or flag combination to check for on ancestor classes.
 * 		  If not specified or less than zero, then it is the full set of flags on this
 * 		  CompilationData.
 * @asreturn true if the ancestors have the same flags set, false otherwise
 * 
 * @royalesuppressexport
 * @param {number=} specificFlags
 * @return {boolean}
 */
org.apache.royale.reflection.CompilationData.prototype.hasSameAncestry = function(specificFlags) {
  specificFlags = typeof specificFlags !== 'undefined' ? specificFlags : -1;
  var /** @type {number} */ checkFlags = (specificFlags > -1 ? specificFlags : this.org_apache_royale_reflection_CompilationData__flags) >>> 0;
  var /** @type {Object} */ proto = this.org_apache_royale_reflection_CompilationData__class.prototype;
  while (proto && proto.ROYALE_REFLECTION_INFO) {
    if (!org.apache.royale.reflection.CompilationData.hasCompilationOption((proto.ROYALE_COMPILE_FLAGS) >>> 0, checkFlags)) {
      return false;
    }
    proto = proto.constructor.superClass_;
  }
  return true;
};


/**
 * @private
 * @type {string}
 */
org.apache.royale.reflection.CompilationData.prototype.org_apache_royale_reflection_CompilationData__qName;


/**
 * @private
 * @type {number}
 */
org.apache.royale.reflection.CompilationData.prototype.org_apache_royale_reflection_CompilationData__flags = 0;


/**
 * A string representation of this CompilationData definition
 * @export
 * @return {string}
 */
org.apache.royale.reflection.CompilationData.prototype.toString = function() {
  var /** @type {string} */ s = "CompilationData for: '" + this.org_apache_royale_reflection_CompilationData__qName + "\n";
  var /** @type {Array} */ contents = org.apache.royale.reflection.CompilationData.asStrings(this.org_apache_royale_reflection_CompilationData__flags);
  if (!contents.length) {
    s += '[no compilation flags recognized]\n';
  } else {
    s += ('[' + contents.join(',\n ') + ']\n');
  }
  return s;
};


org.apache.royale.reflection.CompilationData.prototype.get__qualifiedName = function() {
  return this.org_apache_royale_reflection_CompilationData__qName;
};


org.apache.royale.reflection.CompilationData.prototype.get__flags = function() {
  return this.flags;
};


Object.defineProperties(org.apache.royale.reflection.CompilationData.prototype, /** @lends {org.apache.royale.reflection.CompilationData.prototype} */ {
/**
  * @export
  * @type {string} */
qualifiedName: {
get: org.apache.royale.reflection.CompilationData.prototype.get__qualifiedName},
/**
  * @export
  * @type {number} */
flags: {
get: org.apache.royale.reflection.CompilationData.prototype.get__flags}}
);

org.apache.royale.reflection.CompilationData._ALL = [org.apache.royale.reflection.CompilationData.WITH_DEFAULT_INITIALIZERS, org.apache.royale.reflection.CompilationData.HAS_KEEP_AS3_METADATA, org.apache.royale.reflection.CompilationData.HAS_KEEP_CODE_WITH_METADATA, org.apache.royale.reflection.CompilationData.HAS_EXPORT_PUBLIC_SYMBOLS, org.apache.royale.reflection.CompilationData.EXPORT_PROTECTED_SYMBOLS];




/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.reflection.CompilationData.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'CompilationData', qName: 'org.apache.royale.reflection.CompilationData', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.reflection.CompilationData.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'qualifiedName': { type: 'String', access: 'readonly', declaredBy: 'org.apache.royale.reflection.CompilationData'},
        'flags': { type: 'uint', access: 'readonly', declaredBy: 'org.apache.royale.reflection.CompilationData'}
      };
    },
    methods: function () {
      return {
        'CompilationData': { type: '', declaredBy: 'org.apache.royale.reflection.CompilationData', parameters: function () { return [ 'Object', false ]; }},
        'toString': { type: 'String', declaredBy: 'org.apache.royale.reflection.CompilationData'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.reflection.CompilationData.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./CompilationData.js.map
