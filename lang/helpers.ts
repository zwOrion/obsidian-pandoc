import ar from './locale/ar';
import cz from './locale/cz';
import da from './locale/da';
import de from './locale/de';
import en from './locale/en';
import es from './locale/es';
import fr from './locale/fr';
import hi from './locale/hi';
import id from './locale/id';
import it from './locale/it';
import ja from './locale/ja';
import ko from './locale/ko';
import nl from './locale/nl';
import no from './locale/no';
import pl from './locale/pl';
import pt from './locale/pt';
import ptBR from './locale/pt-br';
import ro from './locale/ro';
import ru from './locale/ru';
import sq from './locale/sq';
import tr from './locale/tr';
import uk from './locale/tr';
import zhCN from './locale/zh-cn';
import zhTW from './locale/zh-tw';

const localeMap: { [k: string]: Partial<typeof en> } = {
    ar,
    cz,
    da,
    de,
    en,
    es,
    fr,
    hi,
    id,
    it,
    ja,
    ko,
    nl,
    no,
    pl,
    'pt-BR': ptBR,
    pt,
    ro,
    ru,
    sq,
    tr,
    uk,
    'zh-TW': zhTW,
    zh: zhCN,
};

const lang = window.localStorage.getItem('language');
const locale = localeMap[lang || 'en'];
const stringFormat = function (formatted: string, ...args: string[]) {
    for (let i = 0; i < args.length; i++) {
        const regex = new RegExp("\\{" + i + "\\}", "g");
        formatted = formatted.replace(regex, args[i]);
    }
    return formatted;
};

export function t(str: keyof typeof en, ...args: string[]): string {
    if (!locale) {
        console.error('Error: pandoc locale not found', lang);
    }
    let localStr = (locale && locale[str]) || en[str];
    if (args && args.length > 0) {
        return stringFormat(localStr, ...args)
    }
    return localStr;
}
