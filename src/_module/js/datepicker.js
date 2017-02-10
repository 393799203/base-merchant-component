import GregorianCalendar from 'gregorian-calendar';
import DateTimeFormat from 'gregorian-calendar-format';

import defaultLocale from './locale/zh_CN';

// 统一合并为完整的 Locale
const DatepickerMinix = {
    getFormatTime: (value) => { // 设置默认时间
        const defaultDate = new Date();
        const timeReg = /^(\d{2}):(\d{2}):(\d{2})$/;

        if (!value) {
            return defaultDate.getTime();
        }

        if (!timeReg.test(value)) {
            return defaultDate.getTime();
        }

        defaultDate.setHours(Number(RegExp.$1));
        defaultDate.setMinutes(Number(RegExp.$2));
        defaultDate.setSeconds(Number(RegExp.$3));

        return defaultDate.getTime();
    },
    getLocale: (locale) => { // 统一合并为完整的 Locale
        const resultLocale = Object.assign({}, defaultLocale, locale);
        resultLocale.lang = Object.assign({}, defaultLocale.lang, locale.lang);
        return resultLocale;
    },
    getFormatter: (props) => { // 获取时间的格式
        const { showTime, locale } = props;
        let format = props.format;
        const formats = DatepickerMinix.formats = DatepickerMinix.formats || {};
        const defaultFormat = showTime ? 'yyyy-MM-dd HH:mm:ss' : 'yyyy-MM-dd';
        format = format || defaultFormat;
        if (formats[format]) {
            return formats[format];
        }
        formats[format] = new DateTimeFormat(format, DatepickerMinix.getLocale(locale).lang.format);
        return formats[format];
    },
    parseDateFromValue: (props, value) => { // 将时间转换成GregorianCalendar
        const { locale } = props;

        if (value === null) {
            return value;
        }

        if (typeof value === 'string') {
            return DatepickerMinix.getFormatter(props).parse(value, { locale: DatepickerMinix.getLocale(locale) });
        }

        if (value instanceof Date) {
            const date = new GregorianCalendar(DatepickerMinix.getLocale(locale));
            date.setTime(+value);
            return date;
        } else if (typeof value === 'number') {
            const valueDate = new Date(value);
            const date = new GregorianCalendar(DatepickerMinix.getLocale(locale));
            date.setTime(+valueDate);
            return date;
        }

        return undefined;
    }


};

export default DatepickerMinix;
