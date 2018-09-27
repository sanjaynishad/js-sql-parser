var root = this
// AMD / RequireJS
if (typeof define !== 'undefined' && define.amd) {
    define([], function () {
        return tsqlParser;
    });
}
// Node.js
else if (typeof module !== 'undefined' && module.exports) {
    module.exports = tsqlParser;
}
// included directly via <script> tag
else {
    root.tsqlParser = tsqlParser;
}

