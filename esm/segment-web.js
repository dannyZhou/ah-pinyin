// @ts-ignore
import { Segment, useDefault } from "segmentit";
let segmentit; // segmentit 加载词典。
let hansIntlSegmenter; // Intl.Segmenter
/**
 * TODO: 分词并带词性信息，需要调整 segment_pinyin 方法。
 * 分词并标注词性。
 */
export function segment(hans, segment) {
    // segmentit (Node.js)
    if (segment === "segmentit") {
        if (!segmentit) {
            segmentit = useDefault(new Segment());
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
            return [...hansIntlSegmenter.segment(hans)].map((s) => s.segment);
        }
    }
    return [hans];
}
//# sourceMappingURL=segment-web.js.map