/**
 * Generated by Apache Royale Compiler from mx/netmon/NetworkMonitor.as
 * mx.netmon.NetworkMonitor
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.netmon.NetworkMonitor');
/* Royale Dependency List: org.apache.royale.events.Event,org.apache.royale.net.URLRequest,XML*/




/**
 * @constructor
 */
mx.netmon.NetworkMonitor = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.netmon.NetworkMonitor', mx.netmon.NetworkMonitor);


/**
 * @export
 * @type {Function}
 */
mx.netmon.NetworkMonitor.isMonitoringImpl;


/**
 * @export
 * @type {Function}
 */
mx.netmon.NetworkMonitor.adjustURLRequestImpl;


/**
 * @export
 * @type {Function}
 */
mx.netmon.NetworkMonitor.adjustNetConnectionURLImpl;


/**
 * @export
 * @type {Function}
 */
mx.netmon.NetworkMonitor.monitorEventImpl;


/**
 * @export
 * @type {Function}
 */
mx.netmon.NetworkMonitor.monitorInvocationImpl;


/**
 * @export
 * @type {Function}
 */
mx.netmon.NetworkMonitor.monitorResultImpl;


/**
 * @export
 * @type {Function}
 */
mx.netmon.NetworkMonitor.monitorFaultImpl;


/**
 *  Returns true if the monitor is linked and monitoring.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @return {boolean}
 */
mx.netmon.NetworkMonitor.isMonitoring = function() {
  return !!(mx.netmon.NetworkMonitor.isMonitoringImpl != null ? mx.netmon.NetworkMonitor.isMonitoringImpl() : false);
};


/**
 *  Adjust the URLRequest so that it goes through the monitor. 
 *  The URLRequest sent to the monitor will have two headers:
 *  <ul>
 *    <li><code>actualHostPort</code>: The real <code>host:port</code> for the URL.</li>
 *    <li><code>correlationID</code>: The correlationID for the request in case it's from 
 *                    messaging (Image/Loader requests need to create their  own correlationIDs)</li>
 *  </ul>
 *
 *  @asparam urlRequest The URLRequest to adjust.
 *  (Relative URLs are supported.)
 *
 *  @asparam rootURL Computes an absolute URL from the relative URL.
 *  If necessary, pass the SWF file's URL as this value.
 *
 *  @asparam correlationID The correlationID that may be used
 *  for associated events.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {org.apache.royale.net.URLRequest} urlRequest
 * @param {string} rootURL
 * @param {string} correlationID
 */
mx.netmon.NetworkMonitor.adjustURLRequest = function(urlRequest, rootURL, correlationID) {
  if (mx.netmon.NetworkMonitor.adjustURLRequestImpl != null)
    mx.netmon.NetworkMonitor.adjustURLRequestImpl(urlRequest, rootURL, correlationID);
};


/**
 *  Adjust the URL for NetConnectionChannel and HTTPChannel Requests
 *  so that it goes through the monitor. 
 *  Returns the modified url.
 *
 *  @asparam url to adjust.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {string} rootUrl
 * @param {string} url
 * @return {string}
 */
mx.netmon.NetworkMonitor.adjustNetConnectionURL = function(rootUrl, url) {
  if (mx.netmon.NetworkMonitor.adjustNetConnectionURLImpl != null)
    return org.apache.royale.utils.Language.string(mx.netmon.NetworkMonitor.adjustNetConnectionURLImpl(rootUrl, url));
  return null;
};


/**
 *  Tell the monitor that an event occurred.
 *  This may be used by the Loader to monitor security and IO errors.
 *  It should not be used for the Loader's <code>complete</code> event.
 * 
 *  @asparam event The event that is about to occur (or occurred).
 *
 *  @asparam correlationID The correlationID to associate with other events
 *  or the request.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {org.apache.royale.events.Event} event
 * @param {string} correlationID
 */
mx.netmon.NetworkMonitor.monitorEvent = function(event, correlationID) {
  if (mx.netmon.NetworkMonitor.monitorEventImpl != null)
    mx.netmon.NetworkMonitor.monitorEventImpl(event, correlationID);
};


/**
 *  Tell the monitor that an invocation is occuring.
 *
 *  @asparam id The id of the tag causing the invocation
 *  if it can be determined.
 *
 *  @asparam invocationMessage The Message that will be sent across the wire.
 *  (It is untyped here to avoid linking in the dependency.)
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {string} id
 * @param {Object} invocationMessage
 * @param {Object} messageAgent
 */
mx.netmon.NetworkMonitor.monitorInvocation = function(id, invocationMessage, messageAgent) {
  if (mx.netmon.NetworkMonitor.monitorInvocationImpl != null)
    mx.netmon.NetworkMonitor.monitorInvocationImpl(id, invocationMessage, messageAgent);
};


/**
 *  Tell the monitor that a result was returned.
 *
 *  @asparam resultMessage The Message that came back indicating the result.
 *  (It is untyped here to avoid linking in the dependency.)
 *
 *  @asparam actualResult the decoded result
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {Object} resultMessage
 * @param {Object} actualResult
 */
mx.netmon.NetworkMonitor.monitorResult = function(resultMessage, actualResult) {
  if (mx.netmon.NetworkMonitor.monitorResultImpl != null)
    mx.netmon.NetworkMonitor.monitorResultImpl(resultMessage, actualResult);
};


/**
 *  Tell the monitor that a fault occurred.
 *
 *  @asparam faultMessage The Message that came back indicating the result.
 *  It be null if this was due to an invocation failure.
 *  (It is untyped here to avoid linking in the dependency.)
 *
 *  @asparam actualFault The Fault that occurred.
 *  (It is untyped here to avoid linking in the dependency.)
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {Object} faultMessage
 * @param {Object} actualFault
 */
mx.netmon.NetworkMonitor.monitorFault = function(faultMessage, actualFault) {
  if (mx.netmon.NetworkMonitor.monitorFaultImpl != null)
    mx.netmon.NetworkMonitor.monitorFaultImpl(faultMessage, actualFault);
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.netmon.NetworkMonitor.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'NetworkMonitor', qName: 'mx.netmon.NetworkMonitor', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.netmon.NetworkMonitor.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        '|isMonitoringImpl': { type: 'Function', get_set: function (/** * */ v) {return v !== undefined ? mx.netmon.NetworkMonitor.isMonitoringImpl = v : mx.netmon.NetworkMonitor.isMonitoringImpl;}},
        '|adjustURLRequestImpl': { type: 'Function', get_set: function (/** * */ v) {return v !== undefined ? mx.netmon.NetworkMonitor.adjustURLRequestImpl = v : mx.netmon.NetworkMonitor.adjustURLRequestImpl;}},
        '|adjustNetConnectionURLImpl': { type: 'Function', get_set: function (/** * */ v) {return v !== undefined ? mx.netmon.NetworkMonitor.adjustNetConnectionURLImpl = v : mx.netmon.NetworkMonitor.adjustNetConnectionURLImpl;}},
        '|monitorEventImpl': { type: 'Function', get_set: function (/** * */ v) {return v !== undefined ? mx.netmon.NetworkMonitor.monitorEventImpl = v : mx.netmon.NetworkMonitor.monitorEventImpl;}},
        '|monitorInvocationImpl': { type: 'Function', get_set: function (/** * */ v) {return v !== undefined ? mx.netmon.NetworkMonitor.monitorInvocationImpl = v : mx.netmon.NetworkMonitor.monitorInvocationImpl;}},
        '|monitorResultImpl': { type: 'Function', get_set: function (/** * */ v) {return v !== undefined ? mx.netmon.NetworkMonitor.monitorResultImpl = v : mx.netmon.NetworkMonitor.monitorResultImpl;}},
        '|monitorFaultImpl': { type: 'Function', get_set: function (/** * */ v) {return v !== undefined ? mx.netmon.NetworkMonitor.monitorFaultImpl = v : mx.netmon.NetworkMonitor.monitorFaultImpl;}}
      };
    },
    methods: function () {
      return {
        '|isMonitoring': { type: 'Boolean', declaredBy: 'mx.netmon.NetworkMonitor'},
        '|adjustURLRequest': { type: 'void', declaredBy: 'mx.netmon.NetworkMonitor', parameters: function () { return [ 'org.apache.royale.net.URLRequest', false ,'String', false ,'String', false ]; }},
        '|adjustNetConnectionURL': { type: 'String', declaredBy: 'mx.netmon.NetworkMonitor', parameters: function () { return [ 'String', false ,'String', false ]; }},
        '|monitorEvent': { type: 'void', declaredBy: 'mx.netmon.NetworkMonitor', parameters: function () { return [ 'org.apache.royale.events.Event', false ,'String', false ]; }},
        '|monitorInvocation': { type: 'void', declaredBy: 'mx.netmon.NetworkMonitor', parameters: function () { return [ 'String', false ,'Object', false ,'Object', false ]; }},
        '|monitorResult': { type: 'void', declaredBy: 'mx.netmon.NetworkMonitor', parameters: function () { return [ 'Object', false ,'Object', false ]; }},
        '|monitorFault': { type: 'void', declaredBy: 'mx.netmon.NetworkMonitor', parameters: function () { return [ 'Object', false ,'Object', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.netmon.NetworkMonitor.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./NetworkMonitor.js.map
