/**
 * Generated by Apache Royale Compiler from org/apache/royale/net/URLRequest.as
 * org.apache.royale.net.URLRequest
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.net.URLRequest');
/* Royale Dependency List: org.apache.royale.net.HTTPConstants*/




/**
 *   Set the URL request string.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.7.0
 * @constructor
 * @param {string=} url
 */
org.apache.royale.net.URLRequest = function(url) {
  url = typeof url !== 'undefined' ? url : null;
  
  this.contentType = org.apache.royale.net.HTTPConstants.FORM_URL_ENCODED;
  this.method = org.apache.royale.net.HTTPConstants.GET;
  ;
  if (url != null) {
    this.url = url;
  }
  this.requestHeaders = [];
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.net.URLRequest', org.apache.royale.net.URLRequest);


/**
 * @export
 * @type {string}
 */
org.apache.royale.net.URLRequest.prototype.url;


/**
 * @export
 * @type {Object}
 */
org.apache.royale.net.URLRequest.prototype.data;


/**
 * @export
 * @type {string}
 */
org.apache.royale.net.URLRequest.prototype.contentType;


/**
 * @export
 * @type {string}
 */
org.apache.royale.net.URLRequest.prototype.method;


/**
 * @private
 * @type {Array}
 */
org.apache.royale.net.URLRequest.prototype.org_apache_royale_net_URLRequest__requestHeaders;


org.apache.royale.net.URLRequest.prototype.get__requestHeaders = function() {
  return this.org_apache_royale_net_URLRequest__requestHeaders;
};


org.apache.royale.net.URLRequest.prototype.set__requestHeaders = function(value) {
  this.org_apache_royale_net_URLRequest__requestHeaders = value;
};


Object.defineProperties(org.apache.royale.net.URLRequest.prototype, /** @lends {org.apache.royale.net.URLRequest.prototype} */ {
/**
  * @export
  * @type {Array} */
requestHeaders: {
get: org.apache.royale.net.URLRequest.prototype.get__requestHeaders,
set: org.apache.royale.net.URLRequest.prototype.set__requestHeaders}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.net.URLRequest.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'URLRequest', qName: 'org.apache.royale.net.URLRequest', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.net.URLRequest.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'url': { type: 'String', get_set: function (/** org.apache.royale.net.URLRequest */ inst, /** * */ v) {return v !== undefined ? inst.url = v : inst.url;}},
        'data': { type: 'Object', get_set: function (/** org.apache.royale.net.URLRequest */ inst, /** * */ v) {return v !== undefined ? inst.data = v : inst.data;}},
        'contentType': { type: 'String', get_set: function (/** org.apache.royale.net.URLRequest */ inst, /** * */ v) {return v !== undefined ? inst.contentType = v : inst.contentType;}},
        'method': { type: 'String', get_set: function (/** org.apache.royale.net.URLRequest */ inst, /** * */ v) {return v !== undefined ? inst.method = v : inst.method;}}
      };
    },
    accessors: function () {
      return {
        'requestHeaders': { type: 'Array', access: 'readwrite', declaredBy: 'org.apache.royale.net.URLRequest'}
      };
    },
    methods: function () {
      return {
        'URLRequest': { type: '', declaredBy: 'org.apache.royale.net.URLRequest', parameters: function () { return [ 'String', true ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.net.URLRequest.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./URLRequest.js.map
