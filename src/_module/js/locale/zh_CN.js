import objectAssign from 'object-assign';
import GregorianCalendarLocale from 'gregorian-calendar/lib/locale/zh_CN';
import CalendarLocale from 'rc-calendar/lib/locale/zh_CN';

// 统一合并为完整的 Locale
const locale = objectAssign({}, GregorianCalendarLocale);
locale.lang = objectAssign({
    placeholder: '请选择日期',
    timePlaceholder: '请选择时间'
}, CalendarLocale);

locale.lang.ok = '确 定';

export default locale;
