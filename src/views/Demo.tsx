import { defineComponent, ref } from "vue";
import Kuroshiro from "kuroshiro";
import KuromojiAnalyzer from "kuroshiro-analyzer-kuromoji";

export default defineComponent({
  setup(this) {
    const message = "查询";
    const inputValue = ref<string>();
    const romaji = ref<string>();
    const kana = ref<string>();
    const kanji = ref<string>();

    const ka = new KuromojiAnalyzer({
      dictPath: "/static/dict/",
    });
    const k = new Kuroshiro();
    k.init(ka);

    const submit = async () => {
      const result =  Kuroshiro.Util.isKatakana(inputValue.value)
      console.log(result);
    //   if (inputValue.value) {
    //     const value = k.Util.isHiragana(inputValue.value);
    //     console.log(value);
    //     const result = await k.convert(inputValue.value);
    //     console.log(result);
    //   }
    };

    return () => (
      <>
        <div>{message}</div>
        <van-field v-model={inputValue.value} />
        <van-button
          block
          type="primary"
          onClick={submit}
          text="转换"
        ></van-button>
        <van-cell title="罗马音" value={romaji.value} />
        <van-cell title="假名" value={kana.value} />
        <van-cell title="汉字" value={kanji.value} />
      </>
    );
  },
});
