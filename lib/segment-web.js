"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.segment = void 0;
// @ts-ignore
var segmentit_1 = require("segmentit");
var segmentit; // segmentit 加载词典。
var hansIntlSegmenter; // Intl.Segmenter
/**
 * TODO: 分词并带词性信息，需要调整 segment_pinyin 方法。
 * 分词并标注词性。
 */
function segment(hans, segment) {
    // segmentit (Node.js)
    if (segment === "segmentit") {
        if (!segmentit) {
            segmentit = (0, segmentit_1.useDefault)(new segmentit_1.Segment());
        }
        return segmentit.doSegment(hans, {
            simple: true,
        });
    }
    // Intl.Segmenter
    if (segment === "Intl.Segmenter") {
        if (Intl.Segmenter) {
            if (!hansIntlSegmenter) {
                hansIntlSegmenter = new Intl.Segmenter("zh-Hans-CN", {
                    granularity: "word",
                });
            }
            return __spreadArray([], __read(hansIntlSegmenter.segment(hans)), false).map(function (s) { return s.segment; });
        }
    }
    return [hans];
}
exports.segment = segment;
//# sourceMappingURL=segment-web.js.map