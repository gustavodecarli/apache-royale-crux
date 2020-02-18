/**
 * Generated by Apache Royale Compiler from mx/utils/Base64Encoder.as
 * mx.utils.Base64Encoder
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.utils.Base64Encoder');
/* Royale Dependency List: mx.utils.ByteArray,org.apache.royale.utils.Base64,org.apache.royale.utils.BinaryData,org.apache.royale.utils.Language,XML*/




/**
 * Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Royale 0.9.4
 * @constructor
 */
mx.utils.Base64Encoder = function() {
  
  this.mx_utils_Base64Encoder__work = [0, 0, 0];
  ;
  
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.utils.Base64Encoder', mx.utils.Base64Encoder);


/**
 * @export
 * @const
 * @type {string}
 */
mx.utils.Base64Encoder.CHARSET_UTF_8 = "UTF-8";


/**
 * @export
 * @type {number}
 */
mx.utils.Base64Encoder.newLine = 10;


/**
 * @export
 * @type {boolean}
 */
mx.utils.Base64Encoder.prototype.insertNewLines = true;


/**
 * @export
 * @return {string}
 */
mx.utils.Base64Encoder.prototype.drain = function() {
  return this.mx_utils_Base64Encoder_encodedString;
};


/**
 * @export
 * @param {string} data
 * @param {string=} encoding
 */
mx.utils.Base64Encoder.prototype.encode = function(data, encoding) {
  encoding = typeof encoding !== 'undefined' ? encoding : "utf-8";
  var /** @type {org.apache.royale.utils.BinaryData} */ bytes = new org.apache.royale.utils.BinaryData();
  bytes.writeUTFBytes(data);
  this.mx_utils_Base64Encoder_encodedString = org.apache.royale.utils.Base64.encode(bytes);
};


/**
 * @export
 * @param {string} data
 */
mx.utils.Base64Encoder.prototype.encodeUTFBytes = function(data) {
  this.encode(data);
};


/**
 * Encodes a ByteArray in Base64 and adds the result to an internal buffer.
 * Subsequent calls to this method add on to the internal buffer. After all
 * data have been encoded, call <code>toString()</code> to obtain a
 * Base64 encoded String.
 * 
 * @asparam data The ByteArray to encode.
 * @asparam offset The index from which to start encoding.
 * @asparam length The number of bytes to encode from the offset.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Royale 0.9.4
 * @export
 * @param {mx.utils.ByteArray} data
 * @param {number=} offset
 * @param {number=} length
 */
mx.utils.Base64Encoder.prototype.encodeBytes = function(data, offset, length) {
  offset = typeof offset !== 'undefined' ? offset : 0;
  length = typeof length !== 'undefined' ? length : 0;
  if (length == 0)
    length = (data.length) >>> 0;
  var /** @type {number} */ oldPosition = data.position;
  data.position = offset;
  var /** @type {number} */ currentIndex = offset;
  var /** @type {number} */ endIndex = (offset + length) >>> 0;
  if (endIndex > data.length)
    endIndex = (data.length) >>> 0;
  while (currentIndex < endIndex) {
    this.mx_utils_Base64Encoder__work[this.mx_utils_Base64Encoder__count] = data.readByteAt(currentIndex);
    this.mx_utils_Base64Encoder__count++;
    if (this.mx_utils_Base64Encoder__count == this.mx_utils_Base64Encoder__work.length || endIndex - currentIndex == 1) {
      this.mx_utils_Base64Encoder_encodeBlock();
      this.mx_utils_Base64Encoder__count = 0;
      this.mx_utils_Base64Encoder__work[0] = 0;
      this.mx_utils_Base64Encoder__work[1] = 0;
      this.mx_utils_Base64Encoder__work[2] = 0;
    }
    currentIndex++;
  }
  data.position = oldPosition;
};


/**
 * @asprivate
 * @export
 * @return {string}
 */
mx.utils.Base64Encoder.prototype.flush = function() {
  if (this.mx_utils_Base64Encoder__count > 0)
    this.mx_utils_Base64Encoder_encodeBlock();
  var /** @type {string} */ result = this.drain();
  this.reset();
  return result;
};


/**
 * Clears all buffers and resets the encoder to its initial state.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Royale 0.9.4
 * @export
 */
mx.utils.Base64Encoder.prototype.reset = function() {
  this.mx_utils_Base64Encoder__buffers = [];
  this.mx_utils_Base64Encoder__buffers.push([]);
  this.mx_utils_Base64Encoder__count = 0;
  this.mx_utils_Base64Encoder__line = 0;
  this.mx_utils_Base64Encoder__work[0] = 0;
  this.mx_utils_Base64Encoder__work[1] = 0;
  this.mx_utils_Base64Encoder__work[2] = 0;
};


/**
 * @export
 * @return {string}
 */
mx.utils.Base64Encoder.prototype.toString = function() {
  return this.mx_utils_Base64Encoder_encodedString;
};


/**
 * @asprivate
 * @private
 */
mx.utils.Base64Encoder.prototype.mx_utils_Base64Encoder_encodeBlock = function() {
  var /** @type {Array} */ currentBuffer = org.apache.royale.utils.Language.as(this.mx_utils_Base64Encoder__buffers[this.mx_utils_Base64Encoder__buffers.length - 1], Array);
  if (currentBuffer.length >= mx.utils.Base64Encoder.MAX_BUFFER_SIZE) {
    currentBuffer = [];
    this.mx_utils_Base64Encoder__buffers.push(currentBuffer);
  }
  currentBuffer.push(mx.utils.Base64Encoder.ALPHABET_CHAR_CODES[(this.mx_utils_Base64Encoder__work[0] & 0xFF) >> 2]);
  currentBuffer.push(mx.utils.Base64Encoder.ALPHABET_CHAR_CODES[((this.mx_utils_Base64Encoder__work[0] & 0x03) << 4) | ((this.mx_utils_Base64Encoder__work[1] & 0xF0) >> 4)]);
  if (this.mx_utils_Base64Encoder__count > 1)
    currentBuffer.push(mx.utils.Base64Encoder.ALPHABET_CHAR_CODES[((this.mx_utils_Base64Encoder__work[1] & 0x0F) << 2) | ((this.mx_utils_Base64Encoder__work[2] & 0xC0) >> 6)]);
  else
    currentBuffer.push(mx.utils.Base64Encoder.ESCAPE_CHAR_CODE);
  if (this.mx_utils_Base64Encoder__count > 2)
    currentBuffer.push(mx.utils.Base64Encoder.ALPHABET_CHAR_CODES[this.mx_utils_Base64Encoder__work[2] & 0x3F]);
  else
    currentBuffer.push(mx.utils.Base64Encoder.ESCAPE_CHAR_CODE);
  if (this.insertNewLines) {
    if ((this.mx_utils_Base64Encoder__line += 4) == 76) {
      currentBuffer.push(mx.utils.Base64Encoder.newLine);
      this.mx_utils_Base64Encoder__line = 0;
    }
  }
};


/**
 * @private
 * @type {Array}
 */
mx.utils.Base64Encoder.prototype.mx_utils_Base64Encoder__buffers;


/**
 * @private
 * @type {number}
 */
mx.utils.Base64Encoder.prototype.mx_utils_Base64Encoder__count = 0;


/**
 * @private
 * @type {number}
 */
mx.utils.Base64Encoder.prototype.mx_utils_Base64Encoder__line = 0;


/**
 * @private
 * @type {Array}
 */
mx.utils.Base64Encoder.prototype.mx_utils_Base64Encoder__work;


/**
 * @private
 * @type {string}
 */
mx.utils.Base64Encoder.prototype.mx_utils_Base64Encoder_encodedString;


/**
 * @export
 * @const
 * @type {number}
 */
mx.utils.Base64Encoder.MAX_BUFFER_SIZE = 32767;


/**
 * @private
 * @const
 * @type {number}
 */
mx.utils.Base64Encoder.ESCAPE_CHAR_CODE = 61;


/**
 * @private
 * @const
 * @type {Array}
 */
mx.utils.Base64Encoder.ALPHABET_CHAR_CODES = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 47];


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.utils.Base64Encoder.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Base64Encoder', qName: 'mx.utils.Base64Encoder', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.utils.Base64Encoder.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        '|newLine': { type: 'int', get_set: function (/** * */ v) {return v !== undefined ? mx.utils.Base64Encoder.newLine = v : mx.utils.Base64Encoder.newLine;}},
        'insertNewLines': { type: 'Boolean', get_set: function (/** mx.utils.Base64Encoder */ inst, /** * */ v) {return v !== undefined ? inst.insertNewLines = v : inst.insertNewLines;}}
      };
    },
    methods: function () {
      return {
        'Base64Encoder': { type: '', declaredBy: 'mx.utils.Base64Encoder'},
        'drain': { type: 'String', declaredBy: 'mx.utils.Base64Encoder'},
        'encode': { type: 'void', declaredBy: 'mx.utils.Base64Encoder', parameters: function () { return [ 'String', false ,'String', true ]; }},
        'encodeUTFBytes': { type: 'void', declaredBy: 'mx.utils.Base64Encoder', parameters: function () { return [ 'String', false ]; }},
        'encodeBytes': { type: 'void', declaredBy: 'mx.utils.Base64Encoder', parameters: function () { return [ 'mx.utils.ByteArray', false ,'uint', true ,'uint', true ]; }},
        'flush': { type: 'String', declaredBy: 'mx.utils.Base64Encoder'},
        'reset': { type: 'void', declaredBy: 'mx.utils.Base64Encoder'},
        'toString': { type: 'String', declaredBy: 'mx.utils.Base64Encoder'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.utils.Base64Encoder.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./Base64Encoder.js.map
