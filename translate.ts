import fs from "fs";

type Translation = {
    published_dst: string;
    screen_name?: string | null;
};

type TranslationItem = {
    source: string;
    type: string;
    translations: { [key: string]: Translation[] };
};

type Data = {
    translation_data: TranslationItem[];
};

function loadData(): Data {
    const file = fs.readFileSync("data.json", "utf-8");
    return JSON.parse(file);
}

function translate(sourceText: string, targetLanguage: string, screenName: string): string {
    const data = loadData();

    for (const item of data.translation_data) {
        if (item.source === sourceText && item.type === "RdbTextValue") {
            const translations = item.translations[targetLanguage] || [];
            let defaultTranslation: string | null = null;

            for (const translation of translations) {

                if (screenName && translation.screen_name === screenName) {
                    return translation.published_dst;
                }

                if (translation.screen_name === null || translation.screen_name === undefined || translation.screen_name === "") {
                    defaultTranslation = translation.published_dst;
                }
            }

            return defaultTranslation ?? sourceText;
        }
    }

    return sourceText;
}

export default translate;
