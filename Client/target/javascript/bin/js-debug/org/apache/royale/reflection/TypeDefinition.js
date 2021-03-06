/**
 * Generated by Apache Royale Compiler from org/apache/royale/reflection/TypeDefinition.as
 * org.apache.royale.reflection.TypeDefinition
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.reflection.TypeDefinition');
/* Royale Dependency List: org.apache.royale.reflection.AccessorDefinition,org.apache.royale.reflection.ExtraData,org.apache.royale.reflection.MemberDefinitionBase,org.apache.royale.reflection.MethodDefinition,org.apache.royale.reflection.VariableDefinition,org.apache.royale.reflection.getDefinitionByName*/

goog.require('org.apache.royale.reflection.DefinitionWithMetaData');



/**
 * The static TypeDefinitions.getDefinition method is the primary access to TypeDefinitions. Although the
 * constructor does not have a lock to prevent use (for performance reasons), using it directly
 * is discouraged.
 * Most of the time you should retrieve TypeDefinitions with org.apache.royale.reflection.describeType()
 * @constructor
 * @extends {org.apache.royale.reflection.DefinitionWithMetaData}
 * @param {string} name
 * @param {Object=} rawData
 */
org.apache.royale.reflection.TypeDefinition = function(name, rawData) {
  rawData = typeof rawData !== 'undefined' ? rawData : null;
  var /** @type {number} */ c = 0;
  
  if (org.apache.royale.reflection.TypeDefinition._cache)
    org.apache.royale.reflection.TypeDefinition._cache[name] = this;
  //var /** @type {number} */ c = 0;
  
  c = (name.lastIndexOf(".")) >> 0;
  if (c > -1 && name.indexOf('Vector.') != 0) {
    this._packageName = name.substr(0, c);
    name = name.substr(c + 1);
  }
  else
    this._packageName = "";
  this.org_apache_royale_reflection_TypeDefinition__specialCase = this._packageName == "" && org.apache.royale.reflection.TypeDefinition.SC.indexOf(name) != -1;
  org.apache.royale.reflection.TypeDefinition.base(this, 'constructor', name, rawData);
};
goog.inherits(org.apache.royale.reflection.TypeDefinition, org.apache.royale.reflection.DefinitionWithMetaData);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.reflection.TypeDefinition', org.apache.royale.reflection.TypeDefinition);


/**
 * @private
 * @type {Object}
 */
org.apache.royale.reflection.TypeDefinition._aliasMappings = {};


/**
 * @asprivate
 * @asparam aliasName
 * @asparam classObject
 * @export
 * @param {string} aliasName
 * @param {Object} classObject
 */
org.apache.royale.reflection.TypeDefinition.registerClassAlias = function(aliasName, classObject) {
  var /** @type {*} */ info = classObject.prototype.ROYALE_CLASS_INFO;
  if (info) {
    var /** @type {string} */ alias = org.apache.royale.utils.Language.string(info.alias);
    if (alias) {
      if (alias == aliasName) {
        if (org.apache.royale.reflection.TypeDefinition._aliasMappings[aliasName] == classObject)
          return;
      }
    }
    var /** @type {Object} */ altClass = org.apache.royale.reflection.TypeDefinition._aliasMappings[aliasName];
    if (altClass) {
      var /** @type {*} */ altInfo = altClass.prototype.ROYALE_CLASS_INFO;
      delete altInfo.alias;
    }
    org.apache.royale.reflection.TypeDefinition._aliasMappings[aliasName] = classObject;
    info.alias = aliasName;
  }
  else
    throw new Error("registerClassAlias error: classObject is not Reflectable " + classObject);
};


/**
 * @asprivate
 * @asparam aliasName
 * @asreturn the class that is mapped to by the alias
 * @export
 * @param {string} aliasName
 * @return {Object}
 */
org.apache.royale.reflection.TypeDefinition.getClassByAlias = function(aliasName) {
  return org.apache.royale.reflection.TypeDefinition._aliasMappings[aliasName];
};


/**
 * @private
 * @const
 * @type {Array}
 */
org.apache.royale.reflection.TypeDefinition.SC = ['void', 'null', '*', ''];


/**
 * @private
 * @type {Object}
 */
org.apache.royale.reflection.TypeDefinition._cache;


/**
 * The static getDefinition method is the primary access to TypeDefinitions. Although the
 * constructor does not have a lock to prevent use (for performance reasons), using it directly
 * is discouraged.
 * @asparam name the qualified name of the definition,
 * @asparam rawData (optional) the reflection data if already available
 * @asparam clazz (optional) a class reference to store internally for performance of getClass method
 * @asreturn a TypeDefinition representing the class or interface represented by the parameters
 * @export
 * @param {string} name
 * @param {Object=} rawData
 * @param {Object=} clazz
 * @return {org.apache.royale.reflection.TypeDefinition}
 */
org.apache.royale.reflection.TypeDefinition.getDefinition = function(name, rawData, clazz) {
  rawData = typeof rawData !== 'undefined' ? rawData : null;
  clazz = typeof clazz !== 'undefined' ? clazz : null;
  if (rawData == null)
    return null;
  
/**
 * @const
 * @type {org.apache.royale.reflection.TypeDefinition}
 */
var def = org.apache.royale.reflection.TypeDefinition.internalGetDefinition(name, rawData);
  if (clazz) {
    def.org_apache_royale_reflection_TypeDefinition__class = clazz;
  }
  return def;
};


/**
 * @export
 * @param {string} name
 * @param {Object=} rawData
 * @return {org.apache.royale.reflection.TypeDefinition}
 */
org.apache.royale.reflection.TypeDefinition.internalGetDefinition = function(name, rawData) {
  rawData = typeof rawData !== 'undefined' ? rawData : null;
  
  return org.apache.royale.reflection.TypeDefinition._cache ? (org.apache.royale.reflection.TypeDefinition._cache[name] || new org.apache.royale.reflection.TypeDefinition(name, rawData)) : new org.apache.royale.reflection.TypeDefinition(name, rawData);
};


/**
 * @protected
 * @type {string}
 */
org.apache.royale.reflection.TypeDefinition.prototype._kind;


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.reflection.TypeDefinition.prototype.org_apache_royale_reflection_TypeDefinition__specialCase;


/**
 * @protected
 * @type {string}
 */
org.apache.royale.reflection.TypeDefinition.prototype._packageName;


/**
 * @private
 * @type {Object}
 */
org.apache.royale.reflection.TypeDefinition.prototype.org_apache_royale_reflection_TypeDefinition__class;


/**
 * convenience method to access the class definition from this TypeDefinition
 * @asreturn the original class (or interface) described by this TypeDefinition
 * 
 * @royaleignorecoercion Class
 * @export
 * @return {Object}
 */
org.apache.royale.reflection.TypeDefinition.prototype.getClass = function() {
  if (!this.org_apache_royale_reflection_TypeDefinition__class)
    this.org_apache_royale_reflection_TypeDefinition__class =  /** @type {Object|null} */ (org.apache.royale.reflection.getDefinitionByName(this.qualifiedName));
  return this.org_apache_royale_reflection_TypeDefinition__class;
};


/**
 * @private
 * @type {org.apache.royale.reflection.MethodDefinition}
 */
org.apache.royale.reflection.TypeDefinition.prototype.org_apache_royale_reflection_TypeDefinition__constructorMethod;


/**
 * @private
 * @type {Array}
 */
org.apache.royale.reflection.TypeDefinition.prototype.org_apache_royale_reflection_TypeDefinition__baseClasses;


/**
 * @private
 * @type {Array}
 */
org.apache.royale.reflection.TypeDefinition.prototype.org_apache_royale_reflection_TypeDefinition__interfaces;


/**
 * @private
 * @type {Array}
 */
org.apache.royale.reflection.TypeDefinition.prototype.org_apache_royale_reflection_TypeDefinition__staticVars;


/**
 * @private
 * @type {Array}
 */
org.apache.royale.reflection.TypeDefinition.prototype.org_apache_royale_reflection_TypeDefinition__staticAccessors;


/**
 * @private
 * @type {Array}
 */
org.apache.royale.reflection.TypeDefinition.prototype.org_apache_royale_reflection_TypeDefinition__staticMethods;


/**
 * @private
 * @type {Array}
 */
org.apache.royale.reflection.TypeDefinition.prototype.org_apache_royale_reflection_TypeDefinition__variables;


/**
 * @private
 * @type {Array}
 */
org.apache.royale.reflection.TypeDefinition.prototype.org_apache_royale_reflection_TypeDefinition__accessors;


/**
 * @private
 * @type {Array}
 */
org.apache.royale.reflection.TypeDefinition.prototype.org_apache_royale_reflection_TypeDefinition__methods;


/**
 * @protected
 * @param {string} collection
 * @param {string=} type
 * @param {boolean=} resolve
 * @return {Array}
 */
org.apache.royale.reflection.TypeDefinition.prototype.getCollection = function(collection, type, resolve) {
  type = typeof type !== 'undefined' ? type : "instance";
  resolve = typeof resolve !== 'undefined' ? resolve : true;
  var /** @type {number} */ l = 0, /** @type {number} */ i = 0;
  var /** @type {Object} */ lookups = {variables:org.apache.royale.reflection.VariableDefinition, accessors:org.apache.royale.reflection.AccessorDefinition, methods:org.apache.royale.reflection.MethodDefinition};
  if (!(collection in lookups))
    throw new Error("ArgumentError: name must be a standard name [variables,accessors,methods]");
  var /** @type {boolean} */ isStatic = type == "static";
  var /** @type {Array} */ results = [];
  var /** @type {Object} */ data = this.rawData;
  var /** @type {string} */ qname = org.apache.royale.utils.Language.string(data.names[0].qName);
  var /** @type {Object} */ def = org.apache.royale.reflection.getDefinitionByName(qname);
  
/**
 * @const
 * @type {Function}
 */
var infoDataSource = def.prototype.ROYALE_REFLECTION_INFO || org.apache.royale.reflection.ExtraData.getData(qname)['ROYALE_REFLECTION_INFO'];
  var /** @type {*} */ rdata = infoDataSource();
  var /** @type {Object} */ itemClass = lookups[collection];
  //var /** @type {number} */ l = 0, /** @type {number} */ i = 0;
  if (resolve) {
    if (isStatic)
      throw new Error("ArgumentError : resolve and static are not compatible");
    var /** @type {Array} */ oldNames = [];
    var /** @type {Object} */ superClass = def.superClass_;
    if (superClass)
      data = superClass.ROYALE_CLASS_INFO;
    else
      data = null;
    if (data) {
      results = org.apache.royale.reflection.TypeDefinition.getDefinition(org.apache.royale.utils.Language.string(data.names[0].qName), data)[collection];
      l = (results.length) >> 0;
      for (i = 0; i < l; i++)
        oldNames[i] = results[i].uri + "::" + results[i].name;
    }
    else
      results = [];
  }
  if (rdata !== undefined) {
    var /** @type {Object} */ items = rdata[collection] ? rdata[collection]() : null;
    if (items) {
      for (var /** @type {string} */ item in items) {
        var /** @type {Object} */ itemDef = items[item];
        if (isStatic) {
          if (item.charAt(0) == "|")
            results[i++] = new itemClass(item.substr(1), true, this, itemDef);
        } else {
          if (item.charAt(0) == "|")
            continue;
          var /** @type {org.apache.royale.reflection.MemberDefinitionBase} */ itemClassDef;
          if (resolve) {
            var /** @type {number} */ oldIdx = (oldNames.indexOf(item)) >> 0;
            if (oldIdx != -1) {
              if (collection == 'accessors') {
                if (itemDef.access != 'readwrite') {
                  var /** @type {string} */ oldAccess = org.apache.royale.utils.Language.string(results[oldIdx].access);
                  if (oldAccess == 'readwrite')
                    itemDef.access = 'readwrite'; else {
                    if (itemDef.access != oldAccess)
                      itemDef.access = 'readwrite';
                  }
                }
              }
              results[oldIdx] = new itemClass(item, false, this, itemDef);
              continue;
            }
          }
          itemClassDef = new itemClass(item, false, this, itemDef);
          results[i++] = itemClassDef;
        }
      }
    }
  }
  return results;
};


/**
 * Used primarily for debugging purposes, this provides a string representation of this
 * TypeDefinition
 * @asparam includeDetail whether to output member definitions and other detailed information
 * @asreturn a stringified representation of this TypeDefinition
 * @export
 * @param {boolean=} includeDetail
 * @return {string}
 */
org.apache.royale.reflection.TypeDefinition.prototype.toString = function(includeDetail) {
  includeDetail = typeof includeDetail !== 'undefined' ? includeDetail : false;
  var /** @type {number} */ i = 0;
  var /** @type {string} */ kind = this.kind;
  var /** @type {string} */ s = "Typedefinition: " + this.qualifiedName + ", kind:" + kind;
  if (includeDetail) {
    s += "\n";
    var /** @type {Array} */ meta = this.metadata;
    //var /** @type {number} */ i = 0;
    var /** @type {number} */ l = (meta.length) >>> 0;
    if (l) {
      s += "\tmetadata:";
      for (i = 0; i < l; i++) {
        s += "\n\t\t" + meta[i].toString().split("\n").join("\n\t\t");
      }
      s += "\n";
    }
    var /** @type {Array} */ collections;
    if (kind == "class") {
      var /** @type {org.apache.royale.reflection.MethodDefinition} */ constructorDef = this.constructorMethod;
      var /** @type {Array} */ construct = constructorDef ? [constructorDef] : [];
      collections = ["constructor", construct, "interfaces", this.interfaces, "baseClasses", this.baseClasses, "variables", this.variables, "accessors", this.accessors, "methods", this.methods, "static variables", this.staticVariables, "static accessors", this.staticAccessors, "static methods", this.staticMethods];
    } else {
      if (kind == "interface") {
        collections = ["interfaces", this.interfaces, "accessors", this.accessors, "methods", this.methods];
      }
    }
    if (collections)
      s += this.stringifyCollections(collections);
    else
      s += "\t{no detail available}";
  }
  return s;
};


/**
 * utility method to create friendly output of collections,
 * primarily for debugging purposes - used via toString(includeDetail=true)
 * @asparam collections array of alternating collection names and collections
 * @asreturn stringified representation of the collections
 * @protected
 * @param {Array} collections
 * @return {string}
 */
org.apache.royale.reflection.TypeDefinition.prototype.stringifyCollections = function(collections) {
  var /** @type {string} */ s = "";
  while (collections.length) {
    var /** @type {string} */ collectionType = org.apache.royale.utils.Language.string(collections.shift());
    var /** @type {Array} */ collection = collections.shift();
    s += collectionType + " :";
    if (!collection || !collection.length) {
      s += "\n\t{none}\n";
    } else {
      s += "\n";
      var /** @type {string} */ outData = "\t";
      var /** @type {number} */ l = (collection.length) >>> 0;
      while (l) {
        l--;
        outData += collection.shift().toString();
        if (l)
          outData += "\n";
      }
      outData = outData.replace(/\u000a/g, "\n\t") + "\n";
      s += outData;
    }
  }
  return s;
};


org.apache.royale.reflection.TypeDefinition.prototype.get__kind = function() {
  if (this._kind)
    return this._kind;
  
  var /** @type {Object} */ data = this.rawData;
  this._kind = org.apache.royale.utils.Language.string(data.names[0].kind);
  return this._kind || "unknown";
};


org.apache.royale.reflection.TypeDefinition.prototype.get__isClass = function() {
  return (this._kind || this.kind) == "class";
};


org.apache.royale.reflection.TypeDefinition.prototype.get__isInterface = function() {
  return (this._kind || this.kind) == "interface";
};


org.apache.royale.reflection.TypeDefinition.prototype.get__packageName = function() {
  return this._packageName;
};


org.apache.royale.reflection.TypeDefinition.prototype.get__qualifiedName = function() {
  if (this._packageName.length)
    return this._packageName + "." + this._name;
  else
    return this._name;
};


org.apache.royale.reflection.TypeDefinition.prototype.get__rawData = function() {
  var /** @type {Object} */ def;
  
  if (this._rawData == null) {
    if (this._packageName.length)
      def = org.apache.royale.reflection.getDefinitionByName(this._packageName + "." + this._name);
    else
      def = org.apache.royale.reflection.getDefinitionByName(this._name);
    this._rawData = def.prototype.ROYALE_CLASS_INFO;
    if (this._rawData == null) {
      this._rawData = org.apache.royale.reflection.ExtraData.hasData(def) ? org.apache.royale.reflection.ExtraData.getData(def)['ROYALE_CLASS_INFO'] : null;
    }
  }
  return this._rawData;
};


org.apache.royale.reflection.TypeDefinition.prototype.get__constructorMethod = function() {
  if ((this._kind || this.kind) != "class")
    return null;
  
  if (!this.org_apache_royale_reflection_TypeDefinition__constructorMethod) {
    var /** @type {Array} */ temp = this.getCollection("methods", "instance", false);
    var /** @type {number} */ i = 0, /** @type {number} */ l = (temp.length) >> 0;
    for (; i < l; i++) {
      if (temp[i].name == this._name) {
        this.org_apache_royale_reflection_TypeDefinition__constructorMethod = temp[i];
        break;
      }
    }
  }
  return this.org_apache_royale_reflection_TypeDefinition__constructorMethod;
};


org.apache.royale.reflection.TypeDefinition.prototype.get__baseClasses = function() {
  var /** @type {Array} */ results;
  if (this.org_apache_royale_reflection_TypeDefinition__baseClasses) {
    results = this.org_apache_royale_reflection_TypeDefinition__baseClasses.slice();
    if (!org.apache.royale.reflection.TypeDefinition._cache)
      this.org_apache_royale_reflection_TypeDefinition__baseClasses = null;
    return results;
  }
  if ((this._kind || this.kind) != "class")
    return [];
  results = [];
  if (this.org_apache_royale_reflection_TypeDefinition__specialCase) {
    if (org.apache.royale.reflection.TypeDefinition._cache) {
      this.org_apache_royale_reflection_TypeDefinition__baseClasses = results;
      results = results.slice();
    }
    return results;
  }
  
  var /** @type {Object} */ data = this.rawData;
  var /** @type {string} */ qname = org.apache.royale.utils.Language.string(data.names[0].qName);
  var /** @type {Object} */ def = org.apache.royale.reflection.getDefinitionByName(qname);
  var /** @type {Object} */ superClass = def.superClass_;
  if (!superClass) {
  }
  else
    while (superClass) {
      if (superClass.ROYALE_CLASS_INFO !== undefined) {
        qname = org.apache.royale.utils.Language.string(superClass.ROYALE_CLASS_INFO.names[0].qName);
        results.push(org.apache.royale.reflection.TypeDefinition.internalGetDefinition(qname));
        def = org.apache.royale.reflection.getDefinitionByName(qname);
        superClass = def.superClass_;
      } else {
        superClass = null;
      }
    }
  if (org.apache.royale.reflection.TypeDefinition._cache) {
    this.org_apache_royale_reflection_TypeDefinition__baseClasses = results;
    results = results.slice();
  }
  return results;
};


org.apache.royale.reflection.TypeDefinition.prototype.get__interfaces = function() {
  var /** @type {number} */ i = 0;
  var /** @type {number} */ n = 0;
  var /** @type {Array} */ results;
  if (this.org_apache_royale_reflection_TypeDefinition__interfaces) {
    results = this.org_apache_royale_reflection_TypeDefinition__interfaces.slice();
    if (!org.apache.royale.reflection.TypeDefinition._cache)
      this.org_apache_royale_reflection_TypeDefinition__interfaces = null;
    return results;
  }
  results = [];
  if (this.org_apache_royale_reflection_TypeDefinition__specialCase) {
    if (org.apache.royale.reflection.TypeDefinition._cache) {
      this.org_apache_royale_reflection_TypeDefinition__interfaces = results;
      results = results.slice();
    }
    return results;
  }
  
  var /** @type {*} */ data = this.rawData;
  //var /** @type {number} */ i = 0;
  //var /** @type {number} */ n = 0;
  if (data !== undefined) {
    var /** @type {Array} */ collect = data.interfaces ? data.interfaces.slice() : [];
    var /** @type {string} */ qname = org.apache.royale.utils.Language.string(data.names[0].qName);
    var /** @type {Object} */ def = org.apache.royale.reflection.getDefinitionByName(qname);
    if ((this._kind || this.kind) == "interface") {
      for (i = 0; i < collect.length; i++) {
        collect.push.apply(collect, (collect[i].prototype.ROYALE_CLASS_INFO.interfaces || []));
      }
    } else {
      var /** @type {Object} */ superClass = def.superClass_;
      while (superClass && superClass.ROYALE_CLASS_INFO !== undefined) {
        data = superClass.ROYALE_CLASS_INFO;
        var /** @type {Array} */ latest = data.interfaces;
        if (latest) {
          n = (latest.length) >> 0;
          for (i = 0; i < n; i++)
            if (collect.indexOf(latest[i]) == -1)
              collect.push(latest[i]);
        }
        qname = org.apache.royale.utils.Language.string(data.names[0].qName);
        def = org.apache.royale.reflection.getDefinitionByName(qname);
        superClass = def.superClass_;
      }
    }
    n = (collect.length) >> 0;
    for (i = 0; i < n; i++) {
      var /** @type {Object} */ iface = collect[i];
      data = iface.prototype.ROYALE_CLASS_INFO;
      results[i] = org.apache.royale.reflection.TypeDefinition.getDefinition(org.apache.royale.utils.Language.string(data.names[0].qName), data);
    }
  }
  if (org.apache.royale.reflection.TypeDefinition._cache) {
    this.org_apache_royale_reflection_TypeDefinition__interfaces = results;
    results = results.slice();
  }
  return results;
};


org.apache.royale.reflection.TypeDefinition.prototype.get__staticVariables = function() {
  if ((this._kind || this.kind) != "class")
    return [];
  var /** @type {Array} */ results;
  if (this.org_apache_royale_reflection_TypeDefinition__staticVars) {
    results = this.org_apache_royale_reflection_TypeDefinition__staticVars.slice();
    if (!org.apache.royale.reflection.TypeDefinition._cache)
      this.org_apache_royale_reflection_TypeDefinition__staticVars = null;
    return results;
  }
  
  results = this.getCollection("variables", "static", false);
  if (org.apache.royale.reflection.TypeDefinition._cache) {
    this.org_apache_royale_reflection_TypeDefinition__staticVars = results;
    results = results.slice();
  }
  return results;
};


org.apache.royale.reflection.TypeDefinition.prototype.get__staticAccessors = function() {
  if ((this._kind || this.kind) != "class")
    return [];
  var /** @type {Array} */ results;
  if (this.org_apache_royale_reflection_TypeDefinition__staticAccessors) {
    results = this.org_apache_royale_reflection_TypeDefinition__staticAccessors.slice();
    if (!org.apache.royale.reflection.TypeDefinition._cache)
      this.org_apache_royale_reflection_TypeDefinition__staticAccessors = null;
    return results;
  }
  
  results = this.getCollection("accessors", "static", false);
  if (org.apache.royale.reflection.TypeDefinition._cache) {
    this.org_apache_royale_reflection_TypeDefinition__staticAccessors = results;
    results = results.slice();
  }
  return results;
};


org.apache.royale.reflection.TypeDefinition.prototype.get__staticMethods = function() {
  if ((this._kind || this.kind) != "class")
    return [];
  var /** @type {Array} */ results;
  if (this.org_apache_royale_reflection_TypeDefinition__staticMethods) {
    results = this.org_apache_royale_reflection_TypeDefinition__staticMethods.slice();
    if (!org.apache.royale.reflection.TypeDefinition._cache)
      this.org_apache_royale_reflection_TypeDefinition__staticMethods = null;
    return results;
  }
  
  results = this.getCollection("methods", "static", false);
  if (org.apache.royale.reflection.TypeDefinition._cache) {
    this.org_apache_royale_reflection_TypeDefinition__staticMethods = results;
    results = results.slice();
  }
  return results;
};


org.apache.royale.reflection.TypeDefinition.prototype.get__variables = function() {
  var /** @type {Array} */ results;
  if (this.org_apache_royale_reflection_TypeDefinition__variables) {
    results = this.org_apache_royale_reflection_TypeDefinition__variables.slice();
    if (!org.apache.royale.reflection.TypeDefinition._cache)
      this.org_apache_royale_reflection_TypeDefinition__variables = null;
    return results;
  }
  if ((this._kind || this.kind) != "class")
    return [];
  if (this.org_apache_royale_reflection_TypeDefinition__specialCase) {
    results = [];
    if (org.apache.royale.reflection.TypeDefinition._cache) {
      this.org_apache_royale_reflection_TypeDefinition__variables = results = [];
      results = results.slice();
    }
    return results;
  }
  
  results = this.getCollection("variables");
  if (org.apache.royale.reflection.TypeDefinition._cache) {
    this.org_apache_royale_reflection_TypeDefinition__variables = results;
    results = results.slice();
  }
  return results;
};


org.apache.royale.reflection.TypeDefinition.prototype.get__accessors = function() {
  var /** @type {Array} */ results;
  if (this.org_apache_royale_reflection_TypeDefinition__accessors) {
    results = this.org_apache_royale_reflection_TypeDefinition__accessors.slice();
    if (!org.apache.royale.reflection.TypeDefinition._cache)
      this.org_apache_royale_reflection_TypeDefinition__accessors = null;
    return results;
  }
  if (this._packageName == "" && org.apache.royale.reflection.TypeDefinition.SC.indexOf(this.name) != -1) {
    results = [];
    if (org.apache.royale.reflection.TypeDefinition._cache) {
      this.org_apache_royale_reflection_TypeDefinition__accessors = results;
      results = results.slice();
    }
    return results;
  }
  
  results = this.getCollection("accessors");
  if (org.apache.royale.reflection.TypeDefinition._cache) {
    this.org_apache_royale_reflection_TypeDefinition__accessors = results;
    results = results.slice();
  }
  return results;
};


org.apache.royale.reflection.TypeDefinition.prototype.get__methods = function() {
  var /** @type {Array} */ results;
  if (this.org_apache_royale_reflection_TypeDefinition__methods) {
    results = this.org_apache_royale_reflection_TypeDefinition__methods.slice();
    if (!org.apache.royale.reflection.TypeDefinition._cache)
      this.org_apache_royale_reflection_TypeDefinition__methods = null;
    return results;
  }
  if (this._packageName == "" && org.apache.royale.reflection.TypeDefinition.SC.indexOf(this.name) != -1) {
    results = [];
    if (org.apache.royale.reflection.TypeDefinition._cache) {
      this.org_apache_royale_reflection_TypeDefinition__methods = results;
      results = results.slice();
    }
    return results;
  }
  
  results = this.getCollection("methods");
  var /** @type {number} */ i = 0, /** @type {number} */ l = (results.length) >>> 0;
  for (; i < l; i++) {
    if (results[i].name == this.name) {
      this.org_apache_royale_reflection_TypeDefinition__constructorMethod = results[i];
      results.splice(i, 1);
      break;
    }
  }
  if (org.apache.royale.reflection.TypeDefinition._cache) {
    this.org_apache_royale_reflection_TypeDefinition__methods = results;
    results = results.slice();
  }
  return results;
};


Object.defineProperties(org.apache.royale.reflection.TypeDefinition.prototype, /** @lends {org.apache.royale.reflection.TypeDefinition.prototype} */ {
/**
  * @export
  * @type {string} */
kind: {
get: org.apache.royale.reflection.TypeDefinition.prototype.get__kind},
/**
  * @export
  * @type {boolean} */
isClass: {
get: org.apache.royale.reflection.TypeDefinition.prototype.get__isClass},
/**
  * @export
  * @type {boolean} */
isInterface: {
get: org.apache.royale.reflection.TypeDefinition.prototype.get__isInterface},
/**
  * @export
  * @type {string} */
packageName: {
get: org.apache.royale.reflection.TypeDefinition.prototype.get__packageName},
/**
  * @export
  * @type {string} */
qualifiedName: {
get: org.apache.royale.reflection.TypeDefinition.prototype.get__qualifiedName},
/**
  * @type {Object} */
rawData: {
get: org.apache.royale.reflection.TypeDefinition.prototype.get__rawData},
/**
  * @export
  * @type {org.apache.royale.reflection.MethodDefinition} */
constructorMethod: {
get: org.apache.royale.reflection.TypeDefinition.prototype.get__constructorMethod},
/**
  * @export
  * @type {Array} */
baseClasses: {
get: org.apache.royale.reflection.TypeDefinition.prototype.get__baseClasses},
/**
  * @export
  * @type {Array} */
interfaces: {
get: org.apache.royale.reflection.TypeDefinition.prototype.get__interfaces},
/**
  * @export
  * @type {Array} */
staticVariables: {
get: org.apache.royale.reflection.TypeDefinition.prototype.get__staticVariables},
/**
  * @export
  * @type {Array} */
staticAccessors: {
get: org.apache.royale.reflection.TypeDefinition.prototype.get__staticAccessors},
/**
  * @export
  * @type {Array} */
staticMethods: {
get: org.apache.royale.reflection.TypeDefinition.prototype.get__staticMethods},
/**
  * @export
  * @type {Array} */
variables: {
get: org.apache.royale.reflection.TypeDefinition.prototype.get__variables},
/**
  * @export
  * @type {Array} */
accessors: {
get: org.apache.royale.reflection.TypeDefinition.prototype.get__accessors},
/**
  * @export
  * @type {Array} */
methods: {
get: org.apache.royale.reflection.TypeDefinition.prototype.get__methods}}
);


org.apache.royale.reflection.TypeDefinition.get__useCache = function() {
  return org.apache.royale.reflection.TypeDefinition._cache != null;
};


org.apache.royale.reflection.TypeDefinition.set__useCache = function(value) {
  if (value) {
    if (!org.apache.royale.reflection.TypeDefinition._cache)
      org.apache.royale.reflection.TypeDefinition._cache = {};
  }
  else if (org.apache.royale.reflection.TypeDefinition._cache)
    org.apache.royale.reflection.TypeDefinition._cache = null;
};


Object.defineProperties(org.apache.royale.reflection.TypeDefinition, /** @lends {org.apache.royale.reflection.TypeDefinition} */ {
/**
  * @export
  * @type {boolean} */
useCache: {
get: org.apache.royale.reflection.TypeDefinition.get__useCache,
set: org.apache.royale.reflection.TypeDefinition.set__useCache}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.reflection.TypeDefinition.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'TypeDefinition', qName: 'org.apache.royale.reflection.TypeDefinition', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.reflection.TypeDefinition.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        '|useCache': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.reflection.TypeDefinition'},
        'kind': { type: 'String', access: 'readonly', declaredBy: 'org.apache.royale.reflection.TypeDefinition'},
        'isClass': { type: 'Boolean', access: 'readonly', declaredBy: 'org.apache.royale.reflection.TypeDefinition'},
        'isInterface': { type: 'Boolean', access: 'readonly', declaredBy: 'org.apache.royale.reflection.TypeDefinition'},
        'packageName': { type: 'String', access: 'readonly', declaredBy: 'org.apache.royale.reflection.TypeDefinition'},
        'qualifiedName': { type: 'String', access: 'readonly', declaredBy: 'org.apache.royale.reflection.TypeDefinition'},
        'constructorMethod': { type: 'org.apache.royale.reflection.MethodDefinition', access: 'readonly', declaredBy: 'org.apache.royale.reflection.TypeDefinition'},
        'baseClasses': { type: 'Array', access: 'readonly', declaredBy: 'org.apache.royale.reflection.TypeDefinition'},
        'interfaces': { type: 'Array', access: 'readonly', declaredBy: 'org.apache.royale.reflection.TypeDefinition'},
        'staticVariables': { type: 'Array', access: 'readonly', declaredBy: 'org.apache.royale.reflection.TypeDefinition'},
        'staticAccessors': { type: 'Array', access: 'readonly', declaredBy: 'org.apache.royale.reflection.TypeDefinition'},
        'staticMethods': { type: 'Array', access: 'readonly', declaredBy: 'org.apache.royale.reflection.TypeDefinition'},
        'variables': { type: 'Array', access: 'readonly', declaredBy: 'org.apache.royale.reflection.TypeDefinition'},
        'accessors': { type: 'Array', access: 'readonly', declaredBy: 'org.apache.royale.reflection.TypeDefinition'},
        'methods': { type: 'Array', access: 'readonly', declaredBy: 'org.apache.royale.reflection.TypeDefinition'}
      };
    },
    methods: function () {
      return {
        '|getDefinition': { type: 'org.apache.royale.reflection.TypeDefinition', declaredBy: 'org.apache.royale.reflection.TypeDefinition', parameters: function () { return [ 'String', false ,'Object', true ,'Class', true ]; }},
        'TypeDefinition': { type: '', declaredBy: 'org.apache.royale.reflection.TypeDefinition', parameters: function () { return [ 'String', false ,'Object', true ]; }},
        'getClass': { type: 'Class', declaredBy: 'org.apache.royale.reflection.TypeDefinition'},
        'toString': { type: 'String', declaredBy: 'org.apache.royale.reflection.TypeDefinition', parameters: function () { return [ 'Boolean', true ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.reflection.TypeDefinition.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./TypeDefinition.js.map
