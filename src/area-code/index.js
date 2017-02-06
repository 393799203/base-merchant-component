import React, { Component } from 'react';
// import './style/index.less';

const _noop = function(){};

export default class AreaCode extends Component {
	constructor (props) {
		super(props);
		this.state = {
			value: props.value || '86',
			className: props.className || 'mc-area-select',
		}
        AreaCode.instance = this;
	}

    static clearData(){
        AreaCode.instance.setState({
            value : '86'
        },()=>{
            AreaCode.instance.props.onChange( String(Math.abs(+'86')) )
        })
    }

	handleChange (e) {
		let value = e.target.value || '86';
		this.setState({
			value: value
		}, () => {
			this.props.onChange( String(Math.abs(+value)) )
		})
	}

	render () {
		let { value, className } = this.state;
        let disabled = this.props.disabled || false;
		return (
            <select value={value} className={disabled ? className+' disabled' : className} onChange={disabled ? _noop : (e) => this.handleChange(e)}>
                <option value='93'>+93&nbsp;‫افغانستان‬‎ (Afghanistan)</option>
                <option value='355'>+355&nbsp;Shqipëri (Albania)</option>
                <option value='213'>+213&nbsp;Algeria</option>
                <option value='1684'>+1684&nbsp;American Samoa</option>
                <option value='376'>+376&nbsp;Andorra</option>
                <option value='244'>+244&nbsp;Angola</option>
                <option value='1264'>+1264&nbsp;Anguilla</option>
                <option value='1268'>+1268&nbsp;Antigua &amp; Barbuda</option>
                <option value='54'>+54&nbsp;Argentina</option>
                <option value='374'>+374&nbsp;Հայաստան (Armenia)</option>
                <option value='297'>+297&nbsp;Aruba</option>
                <option value='247'>+247&nbsp;Ascension Island</option>
                <option value='61'>+61&nbsp;Australia</option>
                <option value='43'>+43&nbsp;Österreich (Austria)</option>
                <option value='994'>+994&nbsp;Azərbaycan (Azerbaijan)</option>
                <option value='1242'>+1242&nbsp;Bahamas</option>
                <option value='973'>+973&nbsp;‫البحرين‬‎ (Bahrain)</option>
                <option value='880'>+880&nbsp;বাংলাদেশ (Bangladesh)</option>
                <option value='1246'>+1246&nbsp;Barbados</option>
                <option value='375'>+375&nbsp;Беларусь (Belarus)</option>
                <option value='32'>+32&nbsp;België (Belgium)</option>
                <option value='501'>+501&nbsp;Belize</option>
                <option value='229'>+229&nbsp;Bénin (Benin)</option>
                <option value='1441'>+1441&nbsp;Bermuda</option>
                <option value='975'>+975&nbsp;འབྲུག (Bhutan)</option>
                <option value='591'>+591&nbsp;Bolivia</option>
                <option value='387'>+387&nbsp;Босна и Херцеговина (Bosnia &amp; Herzegovina)</option>
                <option value='267'>+267&nbsp;Botswana</option>
                <option value='55'>+55&nbsp;Brasil (Brazil)</option>
                <option value='246'>+246&nbsp;British Indian Ocean Territory</option>
                <option value='1284'>+1284&nbsp;British Virgin Islands</option>
                <option value='673'>+673&nbsp;Brunei</option>
                <option value='359'>+359&nbsp;България (Bulgaria)</option>
                <option value='226'>+226&nbsp;Burkina Faso</option>
                <option value='257'>+257&nbsp;Uburundi (Burundi)</option>
                <option value='855'>+855&nbsp;កម្ពុជា (Cambodia)</option>
                <option value='237'>+237&nbsp;Cameroun (Cameroon)</option>
                <option value='1'>+1&nbsp;Canada</option>
                <option value='238'>+238&nbsp;Kabu Verdi (Cape Verde)</option>
                <option value='599'>+599&nbsp;Caribbean Netherlands</option>
                <option value='1345'>+1345&nbsp;Cayman Islands</option>
                <option value='236'>+236&nbsp;République centrafricaine (Central African Republic)</option>
                <option value='235'>+235&nbsp;Tchad (Chad)</option>
                <option value='56'>+56&nbsp;Chile</option>
                <option value='86'>+86&nbsp;中国 (China)</option>
                <option value='57'>+57&nbsp;Colombia</option>
                <option value='269'>+269&nbsp;‫جزر القمر‬‎ (Comoros)</option>
                <option value='243'>+243&nbsp;Jamhuri ya Kidemokrasia ya Kongo (Congo (DRC))</option>
                <option value='242'>+242&nbsp;Congo-Brazzaville (Congo (Republic))</option>
                <option value='682'>+682&nbsp;Cook Islands</option>
                <option value='506'>+506&nbsp;Costa Rica</option>
                <option value='225'>+225&nbsp;Côte d’Ivoire</option>
                <option value='385'>+385&nbsp;Hrvatska (Croatia)</option>
                <option value='53'>+53&nbsp;Cuba</option>
                <option value='599'>+599&nbsp;Curaçao</option>
                <option value='357'>+357&nbsp;Κύπρος (Cyprus)</option>
                <option value='420'>+420&nbsp;Česká republika (Czech Republic)</option>
                <option value='45'>+45&nbsp;Danmark (Denmark)</option>
                <option value='253'>+253&nbsp;Djibouti</option>
                <option value='1767'>+1767&nbsp;Dominica</option>
                <option value='1809'>+1809&nbsp;República Dominicana (Dominican Republic)</option>
                <option value='593'>+593&nbsp;Ecuador</option>
                <option value='20'>+20&nbsp;‫مصر‬‎ (Egypt)</option>
                <option value='503'>+503&nbsp;El Salvador</option>
                <option value='240'>+240&nbsp;Guinea Ecuatorial (Equatorial Guinea)</option>
                <option value='291'>+291&nbsp;Eritrea</option>
                <option value='372'>+372&nbsp;Eesti (Estonia)</option>
                <option value='251'>+251&nbsp;Ethiopia</option>
                <option value='500'>+500&nbsp;Islas Malvinas (Falkland Islands)</option>
                <option value='298'>+298&nbsp;Føroyar (Faroe Islands)</option>
                <option value='679'>+679&nbsp;Fiji</option>
                <option value='358'>+358&nbsp;Suomi (Finland)</option>
                <option value='33'>+33&nbsp;France</option>
                <option value='594'>+594&nbsp;Guyane française (French Guiana)</option>
                <option value='689'>+689&nbsp;Polynésie française (French Polynesia)</option>
                <option value='241'>+241&nbsp;Gabon</option>
                <option value='220'>+220&nbsp;Gambia</option>
                <option value='995'>+995&nbsp;საქართველო (Georgia)</option>
                <option value='49'>+49&nbsp;Deutschland (Germany)</option>
                <option value='233'>+233&nbsp;Gaana (Ghana)</option>
                <option value='350'>+350&nbsp;Gibraltar</option>
                <option value='30'>+30&nbsp;Ελλάδα (Greece)</option>
                <option value='299'>+299&nbsp;Kalaallit Nunaat (Greenland)</option>
                <option value='1473'>+1473&nbsp;Grenada</option>
                <option value='590'>+590&nbsp;Guadeloupe</option>
                <option value='1671'>+1671&nbsp;Guam</option>
                <option value='502'>+502&nbsp;Guatemala</option>
                <option value='224'>+224&nbsp;Guinée (Guinea)</option>
                <option value='245'>+245&nbsp;Guiné Bissau (Guinea-Bissau)</option>
                <option value='592'>+592&nbsp;Guyana</option>
                <option value='509'>+509&nbsp;Haiti</option>
                <option value='504'>+504&nbsp;Honduras</option>
                <option value='852'>+852&nbsp;香港 (Hong Kong)</option>
                <option value='36'>+36&nbsp;Magyarország (Hungary)</option>
                <option value='354'>+354&nbsp;Ísland (Iceland)</option>
                <option value='91'>+91&nbsp;भारत (India)</option>
                <option value='62'>+62&nbsp;Indonesia</option>
                <option value='98'>+98&nbsp;‫ایران‬‎ (Iran)</option>
                <option value='964'>+964&nbsp;‫العراق‬‎ (Iraq)</option>
                <option value='353'>+353&nbsp;Ireland</option>
                <option value='972'>+972&nbsp;‫ישראל‬‎ (Israel)</option>
                <option value='39'>+39&nbsp;Italia (Italy)</option>
                <option value='1876'>+1876&nbsp;Jamaica</option>
                <option value='81'>+81&nbsp;日本 (Japan)</option>
                <option value='962'>+962&nbsp;‫الأردن‬‎ (Jordan)</option>
                <option value='7'>+7&nbsp;Казахстан (Kazakhstan)</option>
                <option value='254'>+254&nbsp;Kenya</option>
                <option value='686'>+686&nbsp;Kiribati</option>
                <option value='965'>+965&nbsp;‫الكويت‬‎ (Kuwait)</option>
                <option value='996'>+996&nbsp;Кыргызстан (Kyrgyzstan)</option>
                <option value='856'>+856&nbsp;ລາວ (Laos)</option>
                <option value='371'>+371&nbsp;Latvija (Latvia)</option>
                <option value='961'>+961&nbsp;‫لبنان‬‎ (Lebanon)</option>
                <option value='266'>+266&nbsp;Lesotho</option>
                <option value='231'>+231&nbsp;Liberia</option>
                <option value='218'>+218&nbsp;‫ليبيا‬‎ (Libya)</option>
                <option value='423'>+423&nbsp;Liechtenstein</option>
                <option value='370'>+370&nbsp;Lietuva (Lithuania)</option>
                <option value='352'>+352&nbsp;Luxembourg</option>
                <option value='853'>+853&nbsp;澳門 (Macau)</option>
                <option value='389'>+389&nbsp;Македонија (Macedonia (FYROM))</option>
                <option value='261'>+261&nbsp;Madagasikara (Madagascar)</option>
                <option value='265'>+265&nbsp;Malawi</option>
                <option value='60'>+60&nbsp;Malaysia</option>
                <option value='960'>+960&nbsp;Maldives</option>
                <option value='223'>+223&nbsp;Mali</option>
                <option value='356'>+356&nbsp;Malta</option>
                <option value='692'>+692&nbsp;Marshall Islands</option>
                <option value='596'>+596&nbsp;Martinique</option>
                <option value='222'>+222&nbsp;‫موريتانيا‬‎ (Mauritania)</option>
                <option value='230'>+230&nbsp;Moris (Mauritius)</option>
                <option value='52'>+52&nbsp;México (Mexico)</option>
                <option value='691'>+691&nbsp;Micronesia</option>
                <option value='373'>+373&nbsp;Republica Moldova (Moldova)</option>
                <option value='377'>+377&nbsp;Monaco</option>
                <option value='976'>+976&nbsp;Монгол (Mongolia)</option>
                <option value='382'>+382&nbsp;Crna Gora (Montenegro)</option>
                <option value='1664'>+1664&nbsp;Montserrat</option>
                <option value='212'>+212&nbsp;Morocco</option>
                <option value='258'>+258&nbsp;Moçambique (Mozambique)</option>
                <option value='95'>+95&nbsp;မြန်မာ (Myanmar (Burma))</option>
                <option value='264'>+264&nbsp;Namibië (Namibia)</option>
                <option value='674'>+674&nbsp;Nauru</option>
                <option value='977'>+977&nbsp;नेपाल (Nepal)</option>
                <option value='31'>+31&nbsp;Nederland (Netherlands)</option>
                <option value='687'>+687&nbsp;Nouvelle-Calédonie (New Caledonia)</option>
                <option value='64'>+64&nbsp;New Zealand</option>
                <option value='505'>+505&nbsp;Nicaragua</option>
                <option value='227'>+227&nbsp;Nijar (Niger)</option>
                <option value='234'>+234&nbsp;Nigeria</option>
                <option value='683'>+683&nbsp;Niue</option>
                <option value='6723'>+6723&nbsp;Norfolk Island</option>
                <option value='1'>+1&nbsp;Northern Mariana Islands</option>
                <option value='850'>+850&nbsp;조선 민주주의 인민 공화국 (North Korea)</option>
                <option value='47'>+47&nbsp;Norge (Norway)</option>
                <option value='968'>+968&nbsp;‫عُمان‬‎ (Oman)</option>
                <option value='92'>+92&nbsp;‫پاکستان‬‎ (Pakistan)</option>
                <option value='680'>+680&nbsp;Palau</option>
                <option value='970'>+970&nbsp;‫فلسطين‬‎ (Palestine)</option>
                <option value='507'>+507&nbsp;Panamá (Panama)</option>
                <option value='675'>+675&nbsp;Papua New Guinea</option>
                <option value='595'>+595&nbsp;Paraguay</option>
                <option value='51'>+51&nbsp;Perú (Peru)</option>
                <option value='63'>+63&nbsp;Philippines</option>
                <option value='48'>+48&nbsp;Polska (Poland)</option>
                <option value='351'>+351&nbsp;Portugal</option>
                <option value='1787'>+1787&nbsp;Puerto Rico</option>
                <option value='974'>+974&nbsp;‫قطر‬‎ (Qatar)</option>
                <option value='262'>+262&nbsp;La Réunion (Réunion)</option>
                <option value='40'>+40&nbsp;România (Romania)</option>
                <option value='7'>+7&nbsp;Россия (Russia)</option>
                <option value='250'>+250&nbsp;Rwanda</option>
                <option value='685'>+685&nbsp;Samoa</option>
                <option value='378'>+378&nbsp;San Marino</option>
                <option value='239'>+239&nbsp;São Tomé e Príncipe (São Tomé &amp; Príncipe)</option>
                <option value='966'>+966&nbsp;‫المملكة العربية السعودية‬‎ (Saudi Arabia)</option>
                <option value='221'>+221&nbsp;Senegal</option>
                <option value='381'>+381&nbsp;Србија (Serbia)</option>
                <option value='248'>+248&nbsp;Seychelles</option>
                <option value='232'>+232&nbsp;Sierra Leone</option>
                <option value='65'>+65&nbsp;Singapore</option>
                <option value='1721'>+1721&nbsp;Sint Maarten</option>
                <option value='421'>+421&nbsp;Slovensko (Slovakia)</option>
                <option value='386'>+386&nbsp;Slovenija (Slovenia)</option>
                <option value='677'>+677&nbsp;Solomon Islands</option>
                <option value='252'>+252&nbsp;Soomaaliya (Somalia)</option>
                <option value='27'>+27&nbsp;South Africa</option>
                <option value='82'>+82&nbsp;대한민국 (South Korea)</option>
                <option value='211'>+211&nbsp;‫جنوب السودان‬‎ (South Sudan)</option>
                <option value='34'>+34&nbsp;España (Spain)</option>
                <option value='94'>+94&nbsp;ශ්‍රී ලංකාව (Sri Lanka)</option>
                <option value='590'>+590&nbsp;Saint-Barthélemy (St. Barthélemy)</option>
                <option value='290'>+290&nbsp;St. Helena</option>
                <option value='1869'>+1869&nbsp;St. Kitts &amp; Nevis</option>
                <option value='1758'>+1758&nbsp;St. Lucia</option>
                <option value='590'>+590&nbsp;partie française) (St. Martin (Saint-Martin)</option>
                <option value='508'>+508&nbsp;Saint-Pierre-et-Miquelon (St. Pierre &amp; Miquelon)</option>
                <option value='1784'>+1784&nbsp;St. Vincent &amp; Grenadines</option>
                <option value='249'>+249&nbsp;‫السودان‬‎ (Sudan)</option>
                <option value='597'>+597&nbsp;Suriname</option>
                <option value='268'>+268&nbsp;Swaziland</option>
                <option value='46'>+46&nbsp;Sverige (Sweden)</option>
                <option value='41'>+41&nbsp;Schweiz (Switzerland)</option>
                <option value='963'>+963&nbsp;‫سوريا‬‎ (Syria)</option>
                <option value='886'>+886&nbsp;台灣 (Taiwan)</option>
                <option value='992'>+992&nbsp;Tajikistan</option>
                <option value='255'>+255&nbsp;Tanzania</option>
                <option value='66'>+66&nbsp;ไทย (Thailand)</option>
                <option value='670'>+670&nbsp;Timor-Leste</option>
                <option value='228'>+228&nbsp;Togo</option>
                <option value='690'>+690&nbsp;Tokelau</option>
                <option value='676'>+676&nbsp;Tonga</option>
                <option value='1868'>+1868&nbsp;Trinidad &amp; Tobago</option>
                <option value='216'>+216&nbsp;Tunisia</option>
                <option value='90'>+90&nbsp;Türkiye (Turkey)</option>
                <option value='993'>+993&nbsp;Turkmenistan</option>
                <option value='1649'>+1649&nbsp;Turks &amp; Caicos Islands</option>
                <option value='688'>+688&nbsp;Tuvalu</option>
                <option value='1340'>+1340&nbsp;U.S. Virgin Islands</option>
                <option value='256'>+256&nbsp;Uganda</option>
                <option value='380'>+380&nbsp;Україна (Ukraine)</option>
                <option value='971'>+971&nbsp;‫الإمارات العربية المتحدة‬‎ (United Arab Emirates)</option>
                <option value='44'>+44&nbsp;United Kingdom</option>
                <option value='-1'>+1&nbsp;United States</option>
                <option value='598'>+598&nbsp;Uruguay</option>
                <option value='998'>+998&nbsp;Oʻzbekiston (Uzbekistan)</option>
                <option value='678'>+678&nbsp;Vanuatu</option>
                <option value='379'>+379&nbsp;Città del Vaticano (Vatican City)</option>
                <option value='58'>+58&nbsp;Venezuela</option>
                <option value='84'>+84&nbsp;Việt Nam (Vietnam)</option>
                <option value='681'>+681&nbsp;Wallis &amp; Futuna</option>
                <option value='967'>+967&nbsp;‫اليمن‬‎ (Yemen)</option>
                <option value='260'>+260&nbsp;Zambia</option>
                <option value='263'>+263&nbsp;Zimbabwe</option>
            </select>
        );
	}
}