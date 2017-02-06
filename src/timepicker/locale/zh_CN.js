import objectAssign from 'object-assign';
import GregorianCalendarLocale from 'gregorian-calendar/lib/locale/zh_CN';
import TimepickerLocale from 'rc-time-picker/lib/locale/zh_CN';

// 统一合并为完整的 Locale
const locale = objectAssign({}, GregorianCalendarLocale);
locale.lang = objectAssign({
    placeholder: '请选择时间'
}, TimepickerLocale);

export default locale;
