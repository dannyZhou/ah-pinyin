import { ENUM_PINYIN_STYLE, ENUM_PINYIN_MODE } from "./constant";
export interface IPinyin {
    (han: string, options?: IPinyinOptions): string[][];
    compare: (a: string, b: string) => number;
    compact: (arr: string[][]) => string[][];
    STYLE_TONE: ENUM_PINYIN_STYLE;
    STYLE_TONE2: ENUM_PINYIN_STYLE;
    STYLE_TO3NE: ENUM_PINYIN_STYLE;
    STYLE_NORMAL: ENUM_PINYIN_STYLE;
    STYLE_INITIALS: ENUM_PINYIN_STYLE;
    STYLE_FIRST_LETTER: ENUM_PINYIN_STYLE;
    MODE_NORMAL: ENUM_PINYIN_MODE;
    MODE_SURNAME: ENUM_PINYIN_MODE;
}
export type IPinyinStyle = ENUM_PINYIN_STYLE | "normal" | "tone" | "tone2" | "to3ne" | "initials" | "first_letter" | // 推荐使用小写，和输出的拼音一致
"NORMAL" | "TONE" | "TONE2" | "TO3NE" | "INITIALS" | "FIRST_LETTER" | // 方便老版本迁移
0 | 1 | 2 | 5 | 3 | 4;
export type IPinyinMode = ENUM_PINYIN_MODE | "normal" | "surname" | "NORMAL" | "SURNAME";
export type IPinyinSegment = "nodejieba" | "segmentit" | "@node-rs/jieba" | "Intl.Segmenter";
export interface IPinyinAllOptions {
    style: ENUM_PINYIN_STYLE;
    mode: ENUM_PINYIN_MODE;
    segment?: IPinyinSegment;
    heteronym: boolean;
    group: boolean;
    compact: boolean;
}
export interface IPinyinOptions {
    style?: IPinyinStyle;
    mode?: IPinyinMode;
    segment?: IPinyinSegment | boolean;
    heteronym?: boolean;
    group?: boolean;
    compact?: boolean;
}
