const config = {
    options: [
        { text: '- 请选择 -', value: '-1' },
        { text: '+93 ‫افغانستان‬‎ (Afghanistan)', value: '93' },
        { text: '+355 Shqipëri (Albania)', value: '355' },
        { text: '+213 Algeria', value: '213' },
        { text: '+1684 American Samoa', value: '1684' },
        { text: '+376 Andorra', value: '376' },
        { text: '+244 Angola', value: '244' },
        { text: '+1264 Anguilla', value: '1264' },
        { text: '+1268 Antigua & Barbuda', value: '1268' },
        { text: '+54 Argentina', value: '54' },
        { text: '+374 Հայաստան (Armenia)', value: '374' },
        { text: '+297 Aruba', value: '297' },
        { text: '+247 Ascension Island', value: '247' },
        { text: '+61 Australia', value: '61' },
        { text: '+43 Österreich (Austria)', value: '43' },
        { text: '+994 Azərbaycan (Azerbaijan)', value: '994' },
        { text: '+1242 Bahamas', value: '1242' },
        { text: '+973 ‫البحرين‬‎ (Bahrain)', value: '973' },
        { text: '+880 বাংলাদেশ (Bangladesh)', value: '880' },
        { text: '+1246 Barbados', value: '1246' },
        { text: '+375 Беларусь (Belarus)', value: '375' },
        { text: '+32 België (Belgium)', value: '32' },
        { text: '+501 Belize', value: '501' },
        { text: '+229 Bénin (Benin)', value: '229' },
        { text: '+1441 Bermuda', value: '1441' },
        { text: '+975 འབྲུག (Bhutan)', value: '975' },
        { text: '+591 Bolivia', value: '591' },
        { text: '+387 Босна и Херцеговина (Bosnia & Herzegovina)', value: '387' },
        { text: '+267 Botswana', value: '267' },
        { text: '+55 Brasil (Brazil)', value: '55' },
        { text: '+246 British Indian Ocean Territory', value: '246' },
        { text: '+1284 British Virgin Islands', value: '1284' },
        { text: '+673 Brunei', value: '673' },
        { text: '+359 България (Bulgaria)', value: '359' },
        { text: '+226 Burkina Faso', value: '226' },
        { text: '+257 Uburundi (Burundi)', value: '257' },
        { text: '+855 កម្ពុជា (Cambodia)', value: '855' },
        { text: '+237 Cameroun (Cameroon)', value: '237' },
        { text: '+1 Canada', value: '1' },
        { text: '+238 Kabu Verdi (Cape Verde)', value: '238' },
        { text: '+599 Caribbean Netherlands', value: '599' },
        { text: '+1345 Cayman Islands', value: '1345' },
        { text: '+236 République centrafricaine (Central African Republic)', value: '236' },
        { text: '+235 Tchad (Chad)', value: '235' },
        { text: '+56 Chile', value: '56' },
        { text: '+86 中国 (China)', value: '86' },
        { text: '+57 Colombia', value: '57' },
        { text: '+269 ‫جزر القمر‬‎ (Comoros)', value: '269' },
        { text: '+243 Jamhuri ya Kidemokrasia ya Kongo (Congo (DRC))', value: '243' },
        { text: '+242 Congo-Brazzaville (Congo (Republic))', value: '242' },
        { text: '+682 Cook Islands', value: '682' },
        { text: '+506 Costa Rica', value: '506' },
        { text: '+225 Côte d’Ivoire', value: '225' },
        { text: '+385 Hrvatska (Croatia)', value: '385' },
        { text: '+53 Cuba', value: '53' },
        { text: '+599 Curaçao', value: '599' },
        { text: '+357 Κύπρος (Cyprus)', value: '357' },
        { text: '+420 Česká republika (Czech Republic)', value: '420' },
        { text: '+45 Danmark (Denmark)', value: '45' },
        { text: '+253 Djibouti', value: '253' },
        { text: '+1767 Dominica', value: '1767' },
        { text: '+1809 República Dominicana (Dominican Republic)', value: '1809' },
        { text: '+593 Ecuador', value: '593' },
        { text: '+20 ‫مصر‬‎ (Egypt)', value: '20' },
        { text: '+503 El Salvador', value: '503' },
        { text: '+240 Guinea Ecuatorial (Equatorial Guinea)', value: '240' },
        { text: '+291 Eritrea', value: '291' },
        { text: '+372 Eesti (Estonia)', value: '372' },
        { text: '+251 Ethiopia', value: '251' },
        { text: '+500 Islas Malvinas (Falkland Islands)', value: '500' },
        { text: '+298 Føroyar (Faroe Islands)', value: '298' },
        { text: '+679 Fiji', value: '679' },
        { text: '+358 Suomi (Finland)', value: '358' },
        { text: '+33 France', value: '33' },
        { text: '+594 Guyane française (French Guiana)', value: '594' },
        { text: '+689 Polynésie française (French Polynesia)', value: '689' },
        { text: '+241 Gabon', value: '241' },
        { text: '+220 Gambia', value: '220' },
        { text: '+995 საქართველო (Georgia)', value: '995' },
        { text: '+49 Deutschland (Germany)', value: '49' },
        { text: '+233 Gaana (Ghana)', value: '233' },
        { text: '+350 Gibraltar', value: '350' },
        { text: '+30 Ελλάδα (Greece)', value: '30' },
        { text: '+299 Kalaallit Nunaat (Greenland)', value: '299' },
        { text: '+1473 Grenada', value: '1473' },
        { text: '+590 Guadeloupe', value: '590' },
        { text: '+1671 Guam', value: '1671' },
        { text: '+502 Guatemala', value: '502' },
        { text: '+224 Guinée (Guinea)', value: '224' },
        { text: '+245 Guiné Bissau (Guinea-Bissau)', value: '245' },
        { text: '+592 Guyana', value: '592' },
        { text: '+509 Haiti', value: '509' },
        { text: '+504 Honduras', value: '504' },
        { text: '+852 香港 (Hong Kong)', value: '852' },
        { text: '+36 Magyarország (Hungary)', value: '36' },
        { text: '+354 Ísland (Iceland)', value: '354' },
        { text: '+91 भारत (India)', value: '91' },
        { text: '+62 Indonesia', value: '62' },
        { text: '+98 ‫ایران‬‎ (Iran)', value: '98' },
        { text: '+964 ‫العراق‬‎ (Iraq)', value: '964' },
        { text: '+353 Ireland', value: '353' },
        { text: '+972 ‫ישראל‬‎ (Israel)', value: '972' },
        { text: '+39 Italia (Italy)', value: '39' },
        { text: '+1876 Jamaica', value: '1876' },
        { text: '+81 日本 (Japan)', value: '81' },
        { text: '+962 ‫الأردن‬‎ (Jordan)', value: '962' },
        { text: '+7 Казахстан (Kazakhstan)', value: '7' },
        { text: '+254 Kenya', value: '254' },
        { text: '+686 Kiribati', value: '686' },
        { text: '+965 ‫الكويت‬‎ (Kuwait)', value: '965' },
        { text: '+996 Кыргызстан (Kyrgyzstan)', value: '996' },
        { text: '+856 ລາວ (Laos)', value: '856' },
        { text: '+371 Latvija (Latvia)', value: '371' },
        { text: '+961 ‫لبنان‬‎ (Lebanon)', value: '961' },
        { text: '+266 Lesotho', value: '266' },
        { text: '+231 Liberia', value: '231' },
        { text: '+218 ‫ليبيا‬‎ (Libya)', value: '218' },
        { text: '+423 Liechtenstein', value: '423' },
        { text: '+370 Lietuva (Lithuania)', value: '370' },
        { text: '+352 Luxembourg', value: '352' },
        { text: '+853 澳門 (Macau)', value: '853' },
        { text: '+389 Македонија (Macedonia (FYROM))', value: '389' },
        { text: '+261 Madagasikara (Madagascar)', value: '261' },
        { text: '+265 Malawi', value: '265' },
        { text: '+60 Malaysia', value: '60' },
        { text: '+960 Maldives', value: '960' },
        { text: '+223 Mali', value: '223' },
        { text: '+356 Malta', value: '356' },
        { text: '+692 Marshall Islands', value: '692' },
        { text: '+596 Martinique', value: '596' },
        { text: '+222 ‫موريتانيا‬‎ (Mauritania)', value: '222' },
        { text: '+230 Moris (Mauritius)', value: '230' },
        { text: '+52 México (Mexico)', value: '52' },
        { text: '+691 Micronesia', value: '691' },
        { text: '+373 Republica Moldova (Moldova)', value: '373' },
        { text: '+377 Monaco', value: '377' },
        { text: '+976 Монгол (Mongolia)', value: '976' },
        { text: '+382 Crna Gora (Montenegro)', value: '382' },
        { text: '+1664 Montserrat', value: '1664' },
        { text: '+212 Morocco', value: '212' },
        { text: '+258 Moçambique (Mozambique)', value: '258' },
        { text: '+95 မြန်မာ (Myanmar (Burma))', value: '95' },
        { text: '+264 Namibië (Namibia)', value: '264' },
        { text: '+674 Nauru', value: '674' },
        { text: '+977 नेपाल (Nepal)', value: '977' },
        { text: '+31 Nederland (Netherlands)', value: '31' },
        { text: '+687 Nouvelle-Calédonie (New Caledonia)', value: '687' },
        { text: '+64 New Zealand', value: '64' },
        { text: '+505 Nicaragua', value: '505' },
        { text: '+227 Nijar (Niger)', value: '227' },
        { text: '+234 Nigeria', value: '234' },
        { text: '+683 Niue', value: '683' },
        { text: '+6723 Norfolk Island', value: '6723' },
        { text: '+1 Northern Mariana Islands', value: '1' },
        { text: '+850 조선 민주주의 인민 공화국 (North Korea)', value: '850' },
        { text: '+47 Norge (Norway)', value: '47' },
        { text: '+968 ‫عُمان‬‎ (Oman)', value: '968' },
        { text: '+92 ‫پاکستان‬‎ (Pakistan)', value: '92' },
        { text: '+680 Palau', value: '680' },
        { text: '+970 ‫فلسطين‬‎ (Palestine)', value: '970' },
        { text: '+507 Panamá (Panama)', value: '507' },
        { text: '+675 Papua New Guinea', value: '675' },
        { text: '+595 Paraguay', value: '595' },
        { text: '+51 Perú (Peru)', value: '51' },
        { text: '+63 Philippines', value: '63' },
        { text: '+48 Polska (Poland)', value: '48' },
        { text: '+351 Portugal', value: '351' },
        { text: '+1787 Puerto Rico', value: '1787' },
        { text: '+974 ‫قطر‬‎ (Qatar)', value: '974' },
        { text: '+262 La Réunion (Réunion)', value: '262' },
        { text: '+40 România (Romania)', value: '40' },
        { text: '+7 Россия (Russia)', value: '7' },
        { text: '+250 Rwanda', value: '250' },
        { text: '+685 Samoa', value: '685' },
        { text: '+378 San Marino', value: '378' },
        { text: '+239 São Tomé e Príncipe (São Tomé & Príncipe)', value: '239' },
        { text: '+966 ‫المملكة العربية السعودية‬‎ (Saudi Arabia)', value: '966' },
        { text: '+221 Senegal', value: '221' },
        { text: '+381 Србија (Serbia)', value: '381' },
        { text: '+248 Seychelles', value: '248' },
        { text: '+232 Sierra Leone', value: '232' },
        { text: '+65 Singapore', value: '65' },
        { text: '+1721 Sint Maarten', value: '1721' },
        { text: '+421 Slovensko (Slovakia)', value: '421' },
        { text: '+386 Slovenija (Slovenia)', value: '386' },
        { text: '+677 Solomon Islands', value: '677' },
        { text: '+252 Soomaaliya (Somalia)', value: '252' },
        { text: '+27 South Africa', value: '27' },
        { text: '+82 대한민국 (South Korea)', value: '82' },
        { text: '+211 ‫جنوب السودان‬‎ (South Sudan)', value: '211' },
        { text: '+34 España (Spain)', value: '34' },
        { text: '+94 ශ්‍රී ලංකාව (Sri Lanka)', value: '94' },
        { text: '+590 Saint-Barthélemy (St. Barthélemy)', value: '590' },
        { text: '+290 St. Helena', value: '290' },
        { text: '+1869 St. Kitts & Nevis', value: '1869' },
        { text: '+1758 St. Lucia', value: '1758' },
        { text: '+590 partie française) (St. Martin (Saint-Martin)', value: '590' },
        { text: '+508 Saint-Pierre-et-Miquelon (St. Pierre & Miquelon)', value: '508' },
        { text: '+1784 St. Vincent & Grenadines', value: '1784' },
        { text: '+249 ‫السودان‬‎ (Sudan)', value: '249' },
        { text: '+597 Suriname', value: '597' },
        { text: '+268 Swaziland', value: '268' },
        { text: '+46 Sverige (Sweden)', value: '46' },
        { text: '+41 Schweiz (Switzerland)', value: '41' },
        { text: '+963 ‫سوريا‬‎ (Syria)', value: '963' },
        { text: '+886 台灣 (Taiwan)', value: '886' },
        { text: '+992 Tajikistan', value: '992' },
        { text: '+255 Tanzania', value: '255' },
        { text: '+66 ไทย (Thailand)', value: '66' },
        { text: '+670 Timor-Leste', value: '670' },
        { text: '+228 Togo', value: '228' },
        { text: '+690 Tokelau', value: '690' },
        { text: '+676 Tonga', value: '676' },
        { text: '+1868 Trinidad & Tobago', value: '1868' },
        { text: '+216 Tunisia', value: '216' },
        { text: '+90 Türkiye (Turkey)', value: '90' },
        { text: '+993 Turkmenistan', value: '993' },
        { text: '+1649 Turks & Caicos Islands', value: '1649' },
        { text: '+688 Tuvalu', value: '688' },
        { text: '+1340 U.S. Virgin Islands', value: '1340' },
        { text: '+256 Uganda', value: '256' },
        { text: '+380 Україна (Ukraine)', value: '380' },
        { text: '+971 ‫الإمارات العربية المتحدة‬‎ (United Arab Emirates)', value: '971' },
        { text: '+44 United Kingdom', value: '44' },
        { text: '+1 United States', value: '-1' },
        { text: '+598 Uruguay', value: '598' },
        { text: '+998 Oʻzbekiston (Uzbekistan)', value: '998' },
        { text: '+678 Vanuatu', value: '678' },
        { text: '+379 Città del Vaticano (Vatican City)', value: '379' },
        { text: '+58 Venezuela', value: '58' },
        { text: '+84 Việt Nam (Vietnam)', value: '84' },
        { text: '+681 Wallis & Futuna', value: '681' },
        { text: '+967 ‫اليمن‬‎ (Yemen)', value: '967' },
        { text: '+260 Zambia', value: '260' },
        { text: '+263 Zimbabwe', value: '263' }
    ]
};

export default config;
