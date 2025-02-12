import translate from "./translate";

describe("Translation Function", () => {
    test("should return English translation for exact match", () => {
        expect(translate("データセーフティ", "en", "")).toBe("data safety");
    });

    test("should return screen-specific translation if screenName is given", () => {
        expect(translate("WOVN.io", "en", "MainActivity")).toBe("WOVN.io - MainScreen");
    });

    test("should return default translation if no screenName is given", () => {
        expect(translate("WOVN.io", "en", "")).toBe("WOVN.io");
    });

    test("should return Vietnamnese translation for exact match", () => {
        expect(translate("データセーフティ", "vi", "")).toBe("an toàn dữ liệu");
    });

    test("should return original text if no translation is found", () => {
        expect(translate("Non-existing text", "en", "")).toBe("Non-existing text");
    });
});
