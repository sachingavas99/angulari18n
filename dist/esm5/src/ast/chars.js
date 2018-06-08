/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export var /** @type {?} */ $EOF = 0;
export var /** @type {?} */ $TAB = 9;
export var /** @type {?} */ $LF = 10;
export var /** @type {?} */ $VTAB = 11;
export var /** @type {?} */ $FF = 12;
export var /** @type {?} */ $CR = 13;
export var /** @type {?} */ $SPACE = 32;
export var /** @type {?} */ $BANG = 33;
export var /** @type {?} */ $DQ = 34;
export var /** @type {?} */ $HASH = 35;
export var /** @type {?} */ $$ = 36;
export var /** @type {?} */ $PERCENT = 37;
export var /** @type {?} */ $AMPERSAND = 38;
export var /** @type {?} */ $SQ = 39;
export var /** @type {?} */ $LPAREN = 40;
export var /** @type {?} */ $RPAREN = 41;
export var /** @type {?} */ $STAR = 42;
export var /** @type {?} */ $PLUS = 43;
export var /** @type {?} */ $COMMA = 44;
export var /** @type {?} */ $MINUS = 45;
export var /** @type {?} */ $PERIOD = 46;
export var /** @type {?} */ $SLASH = 47;
export var /** @type {?} */ $COLON = 58;
export var /** @type {?} */ $SEMICOLON = 59;
export var /** @type {?} */ $LT = 60;
export var /** @type {?} */ $EQ = 61;
export var /** @type {?} */ $GT = 62;
export var /** @type {?} */ $QUESTION = 63;
export var /** @type {?} */ $0 = 48;
export var /** @type {?} */ $9 = 57;
export var /** @type {?} */ $A = 65;
export var /** @type {?} */ $E = 69;
export var /** @type {?} */ $F = 70;
export var /** @type {?} */ $X = 88;
export var /** @type {?} */ $Z = 90;
export var /** @type {?} */ $LBRACKET = 91;
export var /** @type {?} */ $BACKSLASH = 92;
export var /** @type {?} */ $RBRACKET = 93;
export var /** @type {?} */ $CARET = 94;
export var /** @type {?} */ $_ = 95;
export var /** @type {?} */ $a = 97;
export var /** @type {?} */ $e = 101;
export var /** @type {?} */ $f = 102;
export var /** @type {?} */ $n = 110;
export var /** @type {?} */ $r = 114;
export var /** @type {?} */ $t = 116;
export var /** @type {?} */ $u = 117;
export var /** @type {?} */ $v = 118;
export var /** @type {?} */ $x = 120;
export var /** @type {?} */ $z = 122;
export var /** @type {?} */ $LBRACE = 123;
export var /** @type {?} */ $BAR = 124;
export var /** @type {?} */ $RBRACE = 125;
export var /** @type {?} */ $NBSP = 160;
export var /** @type {?} */ $PIPE = 124;
export var /** @type {?} */ $TILDA = 126;
export var /** @type {?} */ $AT = 64;
export var /** @type {?} */ $BT = 96;
/**
 * @param {?} code
 * @return {?}
 */
export function isWhitespace(code) {
    return (code >= $TAB && code <= $SPACE) || code === $NBSP;
}
/**
 * @param {?} code
 * @return {?}
 */
export function isDigit(code) {
    return $0 <= code && code <= $9;
}
/**
 * @param {?} code
 * @return {?}
 */
export function isAsciiLetter(code) {
    return (code >= $a && code <= $z) || (code >= $A && code <= $Z);
}
/**
 * @param {?} code
 * @return {?}
 */
export function isAsciiHexDigit(code) {
    return (code >= $a && code <= $f) || (code >= $A && code <= $F) || isDigit(code);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsLyIsInNvdXJjZXMiOlsic3JjL2FzdC9jaGFycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE1BQU0sQ0FBQyxxQkFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0FBQ3RCLE1BQU0sQ0FBQyxxQkFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0FBQ3RCLE1BQU0sQ0FBQyxxQkFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLE1BQU0sQ0FBQyxxQkFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ3hCLE1BQU0sQ0FBQyxxQkFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLE1BQU0sQ0FBQyxxQkFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLE1BQU0sQ0FBQyxxQkFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ3pCLE1BQU0sQ0FBQyxxQkFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ3hCLE1BQU0sQ0FBQyxxQkFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLE1BQU0sQ0FBQyxxQkFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ3hCLE1BQU0sQ0FBQyxxQkFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLE1BQU0sQ0FBQyxxQkFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQzNCLE1BQU0sQ0FBQyxxQkFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDO0FBQzdCLE1BQU0sQ0FBQyxxQkFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLE1BQU0sQ0FBQyxxQkFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBQzFCLE1BQU0sQ0FBQyxxQkFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBQzFCLE1BQU0sQ0FBQyxxQkFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ3hCLE1BQU0sQ0FBQyxxQkFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ3hCLE1BQU0sQ0FBQyxxQkFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ3pCLE1BQU0sQ0FBQyxxQkFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ3pCLE1BQU0sQ0FBQyxxQkFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBQzFCLE1BQU0sQ0FBQyxxQkFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ3pCLE1BQU0sQ0FBQyxxQkFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ3pCLE1BQU0sQ0FBQyxxQkFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDO0FBQzdCLE1BQU0sQ0FBQyxxQkFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLE1BQU0sQ0FBQyxxQkFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLE1BQU0sQ0FBQyxxQkFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLE1BQU0sQ0FBQyxxQkFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBRTVCLE1BQU0sQ0FBQyxxQkFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLE1BQU0sQ0FBQyxxQkFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBRXJCLE1BQU0sQ0FBQyxxQkFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLE1BQU0sQ0FBQyxxQkFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLE1BQU0sQ0FBQyxxQkFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLE1BQU0sQ0FBQyxxQkFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLE1BQU0sQ0FBQyxxQkFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBRXJCLE1BQU0sQ0FBQyxxQkFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQzVCLE1BQU0sQ0FBQyxxQkFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDO0FBQzdCLE1BQU0sQ0FBQyxxQkFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQzVCLE1BQU0sQ0FBQyxxQkFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ3pCLE1BQU0sQ0FBQyxxQkFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBRXJCLE1BQU0sQ0FBQyxxQkFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLE1BQU0sQ0FBQyxxQkFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDO0FBQ3RCLE1BQU0sQ0FBQyxxQkFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDO0FBQ3RCLE1BQU0sQ0FBQyxxQkFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDO0FBQ3RCLE1BQU0sQ0FBQyxxQkFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDO0FBQ3RCLE1BQU0sQ0FBQyxxQkFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDO0FBQ3RCLE1BQU0sQ0FBQyxxQkFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDO0FBQ3RCLE1BQU0sQ0FBQyxxQkFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDO0FBQ3RCLE1BQU0sQ0FBQyxxQkFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDO0FBQ3RCLE1BQU0sQ0FBQyxxQkFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDO0FBRXRCLE1BQU0sQ0FBQyxxQkFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDO0FBQzNCLE1BQU0sQ0FBQyxxQkFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQ3hCLE1BQU0sQ0FBQyxxQkFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDO0FBQzNCLE1BQU0sQ0FBQyxxQkFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDO0FBRXpCLE1BQU0sQ0FBQyxxQkFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDO0FBQ3pCLE1BQU0sQ0FBQyxxQkFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDO0FBQzFCLE1BQU0sQ0FBQyxxQkFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBRXRCLE1BQU0sQ0FBQyxxQkFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDOzs7OztBQUV0QixNQUFNLHVCQUF1QixJQUFZO0lBQ3ZDLE1BQU0sQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksS0FBSyxLQUFLLENBQUM7Q0FDM0Q7Ozs7O0FBRUQsTUFBTSxrQkFBa0IsSUFBWTtJQUNsQyxNQUFNLENBQUMsRUFBRSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDO0NBQ2pDOzs7OztBQUVELE1BQU0sd0JBQXdCLElBQVk7SUFDeEMsTUFBTSxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxJQUFJLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztDQUNqRTs7Ozs7QUFFRCxNQUFNLDBCQUEwQixJQUFZO0lBQzFDLE1BQU0sQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0NBQ2xGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5leHBvcnQgY29uc3QgJEVPRiA9IDA7XG5leHBvcnQgY29uc3QgJFRBQiA9IDk7XG5leHBvcnQgY29uc3QgJExGID0gMTA7XG5leHBvcnQgY29uc3QgJFZUQUIgPSAxMTtcbmV4cG9ydCBjb25zdCAkRkYgPSAxMjtcbmV4cG9ydCBjb25zdCAkQ1IgPSAxMztcbmV4cG9ydCBjb25zdCAkU1BBQ0UgPSAzMjtcbmV4cG9ydCBjb25zdCAkQkFORyA9IDMzO1xuZXhwb3J0IGNvbnN0ICREUSA9IDM0O1xuZXhwb3J0IGNvbnN0ICRIQVNIID0gMzU7XG5leHBvcnQgY29uc3QgJCQgPSAzNjtcbmV4cG9ydCBjb25zdCAkUEVSQ0VOVCA9IDM3O1xuZXhwb3J0IGNvbnN0ICRBTVBFUlNBTkQgPSAzODtcbmV4cG9ydCBjb25zdCAkU1EgPSAzOTtcbmV4cG9ydCBjb25zdCAkTFBBUkVOID0gNDA7XG5leHBvcnQgY29uc3QgJFJQQVJFTiA9IDQxO1xuZXhwb3J0IGNvbnN0ICRTVEFSID0gNDI7XG5leHBvcnQgY29uc3QgJFBMVVMgPSA0MztcbmV4cG9ydCBjb25zdCAkQ09NTUEgPSA0NDtcbmV4cG9ydCBjb25zdCAkTUlOVVMgPSA0NTtcbmV4cG9ydCBjb25zdCAkUEVSSU9EID0gNDY7XG5leHBvcnQgY29uc3QgJFNMQVNIID0gNDc7XG5leHBvcnQgY29uc3QgJENPTE9OID0gNTg7XG5leHBvcnQgY29uc3QgJFNFTUlDT0xPTiA9IDU5O1xuZXhwb3J0IGNvbnN0ICRMVCA9IDYwO1xuZXhwb3J0IGNvbnN0ICRFUSA9IDYxO1xuZXhwb3J0IGNvbnN0ICRHVCA9IDYyO1xuZXhwb3J0IGNvbnN0ICRRVUVTVElPTiA9IDYzO1xuXG5leHBvcnQgY29uc3QgJDAgPSA0ODtcbmV4cG9ydCBjb25zdCAkOSA9IDU3O1xuXG5leHBvcnQgY29uc3QgJEEgPSA2NTtcbmV4cG9ydCBjb25zdCAkRSA9IDY5O1xuZXhwb3J0IGNvbnN0ICRGID0gNzA7XG5leHBvcnQgY29uc3QgJFggPSA4ODtcbmV4cG9ydCBjb25zdCAkWiA9IDkwO1xuXG5leHBvcnQgY29uc3QgJExCUkFDS0VUID0gOTE7XG5leHBvcnQgY29uc3QgJEJBQ0tTTEFTSCA9IDkyO1xuZXhwb3J0IGNvbnN0ICRSQlJBQ0tFVCA9IDkzO1xuZXhwb3J0IGNvbnN0ICRDQVJFVCA9IDk0O1xuZXhwb3J0IGNvbnN0ICRfID0gOTU7XG5cbmV4cG9ydCBjb25zdCAkYSA9IDk3O1xuZXhwb3J0IGNvbnN0ICRlID0gMTAxO1xuZXhwb3J0IGNvbnN0ICRmID0gMTAyO1xuZXhwb3J0IGNvbnN0ICRuID0gMTEwO1xuZXhwb3J0IGNvbnN0ICRyID0gMTE0O1xuZXhwb3J0IGNvbnN0ICR0ID0gMTE2O1xuZXhwb3J0IGNvbnN0ICR1ID0gMTE3O1xuZXhwb3J0IGNvbnN0ICR2ID0gMTE4O1xuZXhwb3J0IGNvbnN0ICR4ID0gMTIwO1xuZXhwb3J0IGNvbnN0ICR6ID0gMTIyO1xuXG5leHBvcnQgY29uc3QgJExCUkFDRSA9IDEyMztcbmV4cG9ydCBjb25zdCAkQkFSID0gMTI0O1xuZXhwb3J0IGNvbnN0ICRSQlJBQ0UgPSAxMjU7XG5leHBvcnQgY29uc3QgJE5CU1AgPSAxNjA7XG5cbmV4cG9ydCBjb25zdCAkUElQRSA9IDEyNDtcbmV4cG9ydCBjb25zdCAkVElMREEgPSAxMjY7XG5leHBvcnQgY29uc3QgJEFUID0gNjQ7XG5cbmV4cG9ydCBjb25zdCAkQlQgPSA5NjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzV2hpdGVzcGFjZShjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIChjb2RlID49ICRUQUIgJiYgY29kZSA8PSAkU1BBQ0UpIHx8IGNvZGUgPT09ICROQlNQO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEaWdpdChjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuICQwIDw9IGNvZGUgJiYgY29kZSA8PSAkOTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXNjaWlMZXR0ZXIoY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiAoY29kZSA+PSAkYSAmJiBjb2RlIDw9ICR6KSB8fCAoY29kZSA+PSAkQSAmJiBjb2RlIDw9ICRaKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXNjaWlIZXhEaWdpdChjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIChjb2RlID49ICRhICYmIGNvZGUgPD0gJGYpIHx8IChjb2RlID49ICRBICYmIGNvZGUgPD0gJEYpIHx8IGlzRGlnaXQoY29kZSk7XG59XG4iXX0=