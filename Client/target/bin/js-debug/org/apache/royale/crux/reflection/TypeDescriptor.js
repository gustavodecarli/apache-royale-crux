/**
 * Generated by Apache Royale Compiler from org/apache/royale/crux/reflection/TypeDescriptor.as
 * org.apache.royale.crux.reflection.TypeDescriptor
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.crux.reflection.TypeDescriptor');
/* Royale Dependency List: org.apache.royale.crux.CruxManager,org.apache.royale.crux.factories.MetadataHostFactory,org.apache.royale.crux.reflection.BaseMetadataTag,org.apache.royale.crux.reflection.IMetadataHost,org.apache.royale.crux.reflection.IMetadataTag,org.apache.royale.crux.reflection.MetadataArg,org.apache.royale.crux.reflection.MetadataHostMethod,org.apache.royale.crux.reflection.MetadataHostProperty,org.apache.royale.reflection.MemberDefinitionBase,org.apache.royale.reflection.MetaDataArgDefinition,org.apache.royale.reflection.MetaDataDefinition,org.apache.royale.reflection.ParameterDefinition,org.apache.royale.reflection.TypeDefinition,org.apache.royale.reflection.VariableDefinition,org.apache.royale.reflection.utils.getMembersWithMetadata,org.apache.royale.reflection.utils.getStaticConstantsByConvention,org.apache.royale.utils.Language*/




/**
 * Constructor
 * @constructor
 */
org.apache.royale.crux.reflection.TypeDescriptor = function() {

this.constants = [];
this.superClasses = [];
this.interfaces = [];
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.crux.reflection.TypeDescriptor', org.apache.royale.crux.reflection.TypeDescriptor);


/**
 * @private
 * @type {org.apache.royale.reflection.MetaDataDefinition}
 */
org.apache.royale.crux.reflection.TypeDescriptor.prototype.org_apache_royale_crux_reflection_TypeDescriptor_mtd;


/**
 * @private
 * @type {org.apache.royale.reflection.MetaDataArgDefinition}
 */
org.apache.royale.crux.reflection.TypeDescriptor.prototype.org_apache_royale_crux_reflection_TypeDescriptor_mtdarg;


/**
 * @private
 * @type {org.apache.royale.reflection.VariableDefinition}
 */
org.apache.royale.crux.reflection.TypeDescriptor.prototype.org_apache_royale_crux_reflection_TypeDescriptor_vdef;


/**
 * @private
 * @type {org.apache.royale.reflection.ParameterDefinition}
 */
org.apache.royale.crux.reflection.TypeDescriptor.prototype.org_apache_royale_crux_reflection_TypeDescriptor_pdef;


/**
 * @export
 * @type {org.apache.royale.reflection.TypeDefinition}
 */
org.apache.royale.crux.reflection.TypeDescriptor.prototype.typeDefinition;


/**
 * @export
 * @type {Object}
 */
org.apache.royale.crux.reflection.TypeDescriptor.prototype.type;


/**
 * @export
 * @type {string}
 */
org.apache.royale.crux.reflection.TypeDescriptor.prototype.className;


/**
 * @export
 * @type {Array}
 */
org.apache.royale.crux.reflection.TypeDescriptor.prototype.constants;


/**
 * @export
 * @type {Array}
 */
org.apache.royale.crux.reflection.TypeDescriptor.prototype.superClasses;


/**
 * @export
 * @type {Array}
 */
org.apache.royale.crux.reflection.TypeDescriptor.prototype.interfaces;


/**
 * @export
 * @type {Object}
 */
org.apache.royale.crux.reflection.TypeDescriptor.prototype.metadataHosts;


/**
 * Gather and return all properties, methods or the class itself that
 * are decorated with metadata.
 *
 * @asreturn <code>IMetadataHost</code> instances
 * @protected
 * @param {org.apache.royale.reflection.TypeDefinition} description
 * @return {Object}
 */
org.apache.royale.crux.reflection.TypeDescriptor.prototype.getMetadataHosts = function(description) {
  if (this.metadataHosts != null)
    return this.metadataHosts;
  this.metadataHosts = {};
  var /** @type {Array} */ members = org.apache.royale.reflection.utils.getMembersWithMetadata(this.typeDefinition, org.apache.royale.crux.CruxManager.metadataNames, false);
  var foreachiter0_target = members;
  for (var foreachiter0 in foreachiter0_target) 
  {
  var metaDef = foreachiter0_target[foreachiter0];
  {
    var foreachiter1_target = org.apache.royale.crux.CruxManager.metadataNames;
    for (var foreachiter1 in foreachiter1_target) 
    {
    var defName = foreachiter1_target[foreachiter1];
    {
      var /** @type {Array} */ defNames = metaDef.retrieveMetaDataByName(defName);
      if (defNames.length) {
        if (defNames.length > 1) {
          org.apache.royale.utils.Language.trace('unexpected - more than one metadata with the same name');
        }
        var /** @type {org.apache.royale.reflection.MetaDataDefinition} */ metaDataDef = defNames[0];
        var /** @type {org.apache.royale.crux.reflection.IMetadataHost} */ host = this.getMetadataHost(metaDef);
        var /** @type {org.apache.royale.crux.reflection.IMetadataTag} */ metadataTag = new org.apache.royale.crux.reflection.BaseMetadataTag();
        var /** @type {Array} */ args = [];
        var foreachiter2_target = metaDataDef.args;
        for (var foreachiter2 in foreachiter2_target) 
        {
        var metaArg = foreachiter2_target[foreachiter2];
        {
          args.push(new org.apache.royale.crux.reflection.MetadataArg(metaArg.key, metaArg.value));
        }}
        
        metadataTag.name = defName;
        metadataTag.args = args;
        metadataTag.host = host;
        host.metadataTags.push(metadataTag);
      }
    }}
    
  }}
  
  return this.metadataHosts;
};


/**
 * Get <code>IMetadataHost</code> for provided MemberDefinitionBase.
 *
 * @asparam hostNode Node from <code>flash.utils.describeType</code> output
 * @asreturn <code>IMetadataHost</code> instance
 * @protected
 * @param {org.apache.royale.reflection.MemberDefinitionBase} hostNode
 * @return {org.apache.royale.crux.reflection.IMetadataHost}
 */
org.apache.royale.crux.reflection.TypeDescriptor.prototype.getMetadataHost = function(hostNode) {
  var /** @type {string} */ metadataHostName = hostNode.name;
  if (this.metadataHosts[metadataHostName] != null)
    return org.apache.royale.utils.Language.as(this.metadataHosts[metadataHostName], org.apache.royale.crux.reflection.IMetadataHost, true);
  return this.metadataHosts[metadataHostName] = org.apache.royale.crux.factories.MetadataHostFactory.getMetadataHost(hostNode);
};


/**
 * Populates the <code>TypeDescriptor</code> instance from the data returned
 * by <code>org.apache.royale.reflection.describeType</code>.
 *
 * @see org.apache.royale.reflection.describeType
 * @export
 * @param {org.apache.royale.reflection.TypeDefinition} typeDefinition
 * @return {org.apache.royale.crux.reflection.TypeDescriptor}
 */
org.apache.royale.crux.reflection.TypeDescriptor.prototype.fromTypeDefinition = function(typeDefinition) {
  this.typeDefinition = typeDefinition;
  this.className = typeDefinition.qualifiedName;
  this.constants = org.apache.royale.reflection.utils.getStaticConstantsByConvention(typeDefinition.getClass());
  this.superClasses = typeDefinition.baseClasses;
  this.interfaces = typeDefinition.interfaces;
  this.metadataHosts = this.getMetadataHosts(typeDefinition);
  return this;
};


/**
 * Determine whether or not this class has any instances of
 * metadata tags with the provided name.
 *
 * @asparam metadataTagName
 * @asreturn Flag indicating whether or not the metadata tag is present
 * @export
 * @param {string} metadataTagName
 * @return {boolean}
 */
org.apache.royale.crux.reflection.TypeDescriptor.prototype.hasMetadataTag = function(metadataTagName) {
  var foreachiter3_target = this.metadataHosts;
  for (var foreachiter3 in foreachiter3_target) 
  {
  var metadataHost = foreachiter3_target[foreachiter3];
  {
    var foreachiter4_target = metadataHost.metadataTags;
    for (var foreachiter4 in foreachiter4_target) 
    {
    var metadataTag = foreachiter4_target[foreachiter4];
    {
      if (metadataTag.name.toLowerCase() == metadataTagName.toLowerCase())
        return true;
    }}
    
  }}
  
  return false;
};


/**
 * Get all <code>IMetadataHost</code> instances for this type that are decorated
 * with metadata tags with the provided name.
 *
 * @asparam metadataTagName Name of tags to retrieve
 * @asreturn <code>IMetadataHost</code> instances
 * @export
 * @param {string} metadataTagName
 * @return {Array}
 */
org.apache.royale.crux.reflection.TypeDescriptor.prototype.getMetadataHostsWithTag = function(metadataTagName) {
  var /** @type {Array} */ hosts = [];
  var foreachiter5_target = this.metadataHosts;
  for (var foreachiter5 in foreachiter5_target) 
  {
  var metadataHost = foreachiter5_target[foreachiter5];
  {
    var foreachiter6_target = metadataHost.metadataTags;
    for (var foreachiter6 in foreachiter6_target) 
    {
    var metadataTag = foreachiter6_target[foreachiter6];
    {
      if (metadataTag.name.toLowerCase() == metadataTagName.toLowerCase()) {
        hosts.push(metadataHost);
        continue;
      }
    }}
    
  }}
  
  return hosts;
};


/**
 * Get all <code>IMetadataTag</code> instances for class member with the provided name.
 *
 * @asparam tagName Name of metadata tags to find
 * @asreturn <code>IMetadataTag</code> instances
 * @export
 * @param {string} tagName
 * @return {Array}
 */
org.apache.royale.crux.reflection.TypeDescriptor.prototype.getMetadataTagsByName = function(tagName) {
  var /** @type {Array} */ tags = [];
  var foreachiter7_target = this.metadataHosts;
  for (var foreachiter7 in foreachiter7_target) 
  {
  var metadataHost = foreachiter7_target[foreachiter7];
  {
    var foreachiter8_target = metadataHost.metadataTags;
    for (var foreachiter8 in foreachiter8_target) 
    {
    var metadataTag = foreachiter8_target[foreachiter8];
    {
      if (metadataTag.name.toLowerCase() == tagName.toLowerCase()) {
        tags.push(metadataTag);
      }
    }}
    
  }}
  
  return tags;
};


/**
 * Get all <code>IMetadataTag</code> instances for class member with the provided name.
 *
 * @asparam memberName Name of class member (property or method)
 * @asreturn  <code>IMetadataTag</code> instances
 * @export
 * @param {string} memberName
 * @return {Array}
 */
org.apache.royale.crux.reflection.TypeDescriptor.prototype.getMetadataTagsForMember = function(memberName) {
  var /** @type {Array} */ tags;
  var foreachiter9_target = this.metadataHosts;
  for (var foreachiter9 in foreachiter9_target) 
  {
  var metadataHost = foreachiter9_target[foreachiter9];
  {
    if (metadataHost.name == memberName) {
      tags = metadataHost.metadataTags;
    }
  }}
  
  return tags;
};


/**
 * Return all <code>MetadataHostProperty</code> instances for this type.
 *
 * @asreturn <code>MetadataHostProperty</code> instances
 *
 * @see org.apache.royale.crux.reflection.MetadataHostProperty
 * @export
 * @return {Array}
 */
org.apache.royale.crux.reflection.TypeDescriptor.prototype.getMetadataHostProperties = function() {
  var /** @type {Array} */ hostProps = [];
  var foreachiter10_target = this.metadataHosts;
  for (var foreachiter10 in foreachiter10_target) 
  {
  var metadataHost = foreachiter10_target[foreachiter10];
  {
    if (org.apache.royale.utils.Language.is(metadataHost, org.apache.royale.crux.reflection.MetadataHostProperty)) {
      hostProps.push(metadataHost);
      continue;
    }
  }}
  
  return hostProps;
};


/**
 * Return all <code>MetadataHostMethod</code> instances for this type.
 *
 * @asreturn <code>MetadataHostMethod</code> instances
 *
 * @see org.apache.royale.crux.reflection.MetadataHostMethod
 * @export
 * @return {Array}
 */
org.apache.royale.crux.reflection.TypeDescriptor.prototype.getMetadataHostMethods = function() {
  var /** @type {Array} */ hostMethods = [];
  var foreachiter11_target = this.metadataHosts;
  for (var foreachiter11 in foreachiter11_target) 
  {
  var metadataHost = foreachiter11_target[foreachiter11];
  {
    if (org.apache.royale.utils.Language.is(metadataHost, org.apache.royale.crux.reflection.MetadataHostMethod)) {
      hostMethods.push(metadataHost);
      continue;
    }
  }}
  
  return hostMethods;
};


/**
 * Returns true if this descriptor's className, superClass, or any interfaces
 * match a typeName.
 * @export
 * @param {string} typeName
 * @return {boolean}
 */
org.apache.royale.crux.reflection.TypeDescriptor.prototype.satisfiesType = function(typeName) {
  
  if (this.className == typeName)
    return true;
  var foreachiter12_target = this.superClasses;
  for (var foreachiter12 in foreachiter12_target) 
  {
  var superClass = foreachiter12_target[foreachiter12];
  
    if (superClass == typeName)
      return true;}
  
  var foreachiter13_target = this.interfaces;
  for (var foreachiter13 in foreachiter13_target) 
  {
  var interfaceName = foreachiter13_target[foreachiter13];
  
    if (interfaceName == typeName)
      return true;}
  
  return false;
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.crux.reflection.TypeDescriptor.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'TypeDescriptor', qName: 'org.apache.royale.crux.reflection.TypeDescriptor', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.crux.reflection.TypeDescriptor.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'typeDefinition': { type: 'org.apache.royale.reflection.TypeDefinition', get_set: function (/** org.apache.royale.crux.reflection.TypeDescriptor */ inst, /** * */ v) {return v !== undefined ? inst.typeDefinition = v : inst.typeDefinition;}},
        'type': { type: 'Class', get_set: function (/** org.apache.royale.crux.reflection.TypeDescriptor */ inst, /** * */ v) {return v !== undefined ? inst.type = v : inst.type;}},
        'className': { type: 'String', get_set: function (/** org.apache.royale.crux.reflection.TypeDescriptor */ inst, /** * */ v) {return v !== undefined ? inst.className = v : inst.className;}},
        'constants': { type: 'Array', get_set: function (/** org.apache.royale.crux.reflection.TypeDescriptor */ inst, /** * */ v) {return v !== undefined ? inst.constants = v : inst.constants;}},
        'superClasses': { type: 'Array', get_set: function (/** org.apache.royale.crux.reflection.TypeDescriptor */ inst, /** * */ v) {return v !== undefined ? inst.superClasses = v : inst.superClasses;}},
        'interfaces': { type: 'Array', get_set: function (/** org.apache.royale.crux.reflection.TypeDescriptor */ inst, /** * */ v) {return v !== undefined ? inst.interfaces = v : inst.interfaces;}},
        'metadataHosts': { type: 'Object', get_set: function (/** org.apache.royale.crux.reflection.TypeDescriptor */ inst, /** * */ v) {return v !== undefined ? inst.metadataHosts = v : inst.metadataHosts;}}
      };
    },
    methods: function () {
      return {
        'TypeDescriptor': { type: '', declaredBy: 'org.apache.royale.crux.reflection.TypeDescriptor'},
        'fromTypeDefinition': { type: 'org.apache.royale.crux.reflection.TypeDescriptor', declaredBy: 'org.apache.royale.crux.reflection.TypeDescriptor', parameters: function () { return [ 'org.apache.royale.reflection.TypeDefinition', false ]; }},
        'hasMetadataTag': { type: 'Boolean', declaredBy: 'org.apache.royale.crux.reflection.TypeDescriptor', parameters: function () { return [ 'String', false ]; }},
        'getMetadataHostsWithTag': { type: 'Array', declaredBy: 'org.apache.royale.crux.reflection.TypeDescriptor', parameters: function () { return [ 'String', false ]; }},
        'getMetadataTagsByName': { type: 'Array', declaredBy: 'org.apache.royale.crux.reflection.TypeDescriptor', parameters: function () { return [ 'String', false ]; }},
        'getMetadataTagsForMember': { type: 'Array', declaredBy: 'org.apache.royale.crux.reflection.TypeDescriptor', parameters: function () { return [ 'String', false ]; }},
        'getMetadataHostProperties': { type: 'Array', declaredBy: 'org.apache.royale.crux.reflection.TypeDescriptor'},
        'getMetadataHostMethods': { type: 'Array', declaredBy: 'org.apache.royale.crux.reflection.TypeDescriptor'},
        'satisfiesType': { type: 'Boolean', declaredBy: 'org.apache.royale.crux.reflection.TypeDescriptor', parameters: function () { return [ 'String', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.crux.reflection.TypeDescriptor.prototype.ROYALE_COMPILE_FLAGS = 10;
