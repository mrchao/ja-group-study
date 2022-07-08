declare module "kuroshiro" {
  import KuromojiAnalyzer from "kuroshiro-analyzer-kuromoji";

  type To = "hiragana" | "katakana" | "romaji";
  type Mode = "normal" | "spaced" | "okurigana" | "furigana";
  type System = "nippon" | "passport" | "hepburn";
  export interface Opts {
    to?: To;
    mode?: Mode;
    romajiSystem?: System;
    delimiter_start?: string;
    delimiter_end?: string;
  }

  export class Kuroshiro {
    constructor();
    init: (analyzer: KuromojiAnalyzer) => Promise<void>;
    convert: (str: string, opts?: Opts) => Promise<string>;
    static Util: {
      isHiragana: (char: string) => boolean;
      isKatakana: (char: string) => boolean;
      isKana: (char: string) => boolean;
      isKanji: (char: string) => boolean;
      isJapanese: () => boolean;
      hasHiragana: (char: string) => boolean;
      hasKatakana: (char: string) => boolean;
      hasKana: (char: string) => boolean;
      hasKanji: (char: string) => boolean;
      hasJapanese: () => boolean;
      kanaToHiragana: (char: string) => string;
      kanaToKatakana: (char: string) => string;
      kanaToRomaji: (str, system: System) => string;
    };
  }
  export default Kuroshiro;
}

declare module "kuroshiro-analyzer-kuromoji" {
  export default class {
    constructor(opts?: { dictPath: string });
  }
}
