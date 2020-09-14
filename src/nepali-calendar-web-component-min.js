const nepali_digits=["०","१","२","३","४","५","६","७","८","९"],days=["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"],months=["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPETEMBER","OCTOBER","NOVEMBER","DECEMBER"],days_nepali=["आइतवार","साेमवार","मंगलवार","बुधवार","विहीवार","शुक्रवार","शनिवार"],months_nepali=["बैशाख","जेठ","असार","श्रावण","भदाै","असाेज","कातिक","मंसिर","पुस","माघ","फागुन","चैत"],intdates=[31,29,31,30,31,30,31,31,30,31,30,31],reference={int:{year:2020,month:4,date:13,day:2},np:{year:2077,month:1,date:1,day:2}},npdates={2e3:[30,32,31,32,31,30,30,30,29,30,29,31,365],2001:[31,31,32,31,31,31,30,29,30,29,30,30,365],2002:[31,31,32,32,31,30,30,29,30,29,30,30,365],2003:[31,32,31,32,31,30,30,30,29,29,30,31,366],2004:[30,32,31,32,31,30,30,30,29,30,29,31,365],2005:[31,31,32,31,31,31,30,29,30,29,30,30,365],2006:[31,31,32,32,31,30,30,29,30,29,30,30,365],2007:[31,32,31,32,31,30,30,30,29,29,30,31,366],2008:[31,31,31,32,31,31,29,30,30,29,29,31,365],2009:[31,31,32,31,31,31,30,29,30,29,30,30,365],2010:[31,31,32,32,31,30,30,29,30,29,30,30,365],2011:[31,32,31,32,31,30,30,30,29,29,30,31,366],2012:[31,31,31,32,31,31,29,30,30,29,30,30,365],2013:[31,31,32,31,31,31,30,29,30,29,30,30,365],2014:[31,31,32,32,31,30,30,29,30,29,30,30,365],2015:[31,32,31,32,31,30,30,30,29,29,30,31,366],2016:[31,31,31,32,31,31,29,30,30,29,30,30,365],2017:[31,31,32,31,31,31,30,29,30,29,30,30,365],2018:[31,32,31,32,31,30,30,29,30,29,30,30,365],2019:[31,32,31,32,31,30,30,30,29,30,29,31,366],2020:[31,31,31,32,31,31,30,29,30,29,30,30,365],2021:[31,31,32,31,31,31,30,29,30,29,30,30,365],2022:[31,32,31,32,31,30,30,30,29,29,30,30,365],2023:[31,32,31,32,31,30,30,30,29,30,29,31,366],2024:[31,31,31,32,31,31,30,29,30,29,30,30,365],2025:[31,31,32,31,31,31,30,29,30,29,30,30,365],2026:[31,32,31,32,31,30,30,30,29,29,30,31,366],2027:[30,32,31,32,31,30,30,30,29,30,29,31,365],2028:[31,31,32,31,31,31,30,29,30,29,30,30,365],2029:[31,31,32,31,32,30,30,29,30,29,30,30,365],2030:[31,32,31,32,31,30,30,30,29,29,30,31,366],2031:[30,32,31,32,31,30,30,30,29,30,29,31,365],2032:[31,31,32,31,31,31,30,29,30,29,30,30,365],2033:[31,31,32,32,31,30,30,29,30,29,30,30,365],2034:[31,32,31,32,31,30,30,30,29,29,30,31,366],2035:[30,32,31,32,31,31,29,30,30,29,29,31,365],2036:[31,31,32,31,31,31,30,29,30,29,30,30,365],2037:[31,31,32,32,31,30,30,29,30,29,30,30,365],2038:[31,32,31,32,31,30,30,30,29,29,30,31,366],2039:[31,31,31,32,31,31,29,30,30,29,30,30,365],2040:[31,31,32,31,31,31,30,29,30,29,30,30,365],2041:[31,31,32,32,31,30,30,29,30,29,30,30,365],2042:[31,32,31,32,31,30,30,30,29,29,30,31,366],2043:[31,31,31,32,31,31,29,30,30,29,30,30,365],2044:[31,31,32,31,31,31,30,29,30,29,30,30,365],2045:[31,32,31,32,31,30,30,29,30,29,30,30,365],2046:[31,32,31,32,31,30,30,30,29,29,30,31,366],2047:[31,31,31,32,31,31,30,29,30,29,30,30,365],2048:[31,31,32,31,31,31,30,29,30,29,30,30,365],2049:[31,32,31,32,31,30,30,30,29,29,30,30,365],2050:[31,32,31,32,31,30,30,30,29,30,29,31,366],2051:[31,31,31,32,31,31,30,29,30,29,30,30,365],2052:[31,31,32,31,31,31,30,29,30,29,30,30,365],2053:[31,32,31,32,31,30,30,30,29,29,30,30,365],2054:[31,32,31,32,31,30,30,30,29,30,29,31,366],2055:[31,31,32,31,31,31,30,29,30,29,30,30,365],2056:[31,31,32,31,32,30,30,29,30,29,30,30,365],2057:[31,32,31,32,31,30,30,30,29,29,30,31,366],2058:[30,32,31,32,31,30,30,30,29,30,29,31,365],2059:[31,31,32,31,31,31,30,29,30,29,30,30,365],2060:[31,31,32,32,31,30,30,29,30,29,30,30,365],2061:[31,32,31,32,31,30,30,30,29,29,30,31,366],2062:[30,32,31,32,31,31,29,30,29,30,29,31,365],2063:[31,31,32,31,31,31,30,29,30,29,30,30,365],2064:[31,31,32,32,31,30,30,29,30,29,30,30,365],2065:[31,32,31,32,31,30,30,30,29,29,30,31,366],2066:[31,31,31,32,31,31,29,30,30,29,29,31,365],2067:[31,31,32,31,31,31,30,29,30,29,30,30,365],2068:[31,31,32,32,31,30,30,29,30,29,30,30,365],2069:[31,32,31,32,31,30,30,30,29,29,30,31,366],2070:[31,31,31,32,31,31,29,30,30,29,30,30,365],2071:[31,31,32,31,31,31,30,29,30,29,30,30,365],2072:[31,32,31,32,31,30,30,29,30,29,30,30,365],2073:[31,32,31,32,31,30,30,30,29,29,30,31,366],2074:[31,31,31,32,31,31,30,29,30,29,30,30,365],2075:[31,31,32,31,31,31,30,29,30,29,30,30,365],2076:[31,32,31,32,31,30,30,30,29,29,30,30,365],2077:[31,32,31,32,31,30,30,30,29,30,29,31,366],2078:[31,31,31,32,31,31,30,29,30,29,30,30,365],2079:[31,31,32,31,31,31,30,29,30,29,30,30,365],2080:[31,32,31,32,31,30,30,30,29,29,30,30,365],2081:[31,31,32,32,31,30,30,30,29,30,30,30,366],2082:[30,32,31,32,31,30,30,30,29,30,30,30,365],2083:[31,31,32,31,31,30,30,30,29,30,30,30,365],2084:[31,31,32,31,31,30,30,30,29,30,30,30,365],2085:[31,32,31,32,30,31,30,30,29,30,30,30,366],2086:[30,32,31,32,31,30,30,30,29,30,30,30,365],2087:[31,31,32,31,31,31,30,30,29,30,30,30,366],2088:[30,31,32,32,30,31,30,30,29,30,30,30,365],2089:[30,32,31,32,31,30,30,30,29,30,30,30,365],2090:[30,32,31,32,31,30,30,30,29,30,30,30,365],2091:[31,31,32,31,31,31,30,30,29,30,30,30,366],2092:[30,31,32,32,31,30,30,30,29,30,30,30,365],2093:[30,32,31,32,31,30,30,30,29,30,30,30,365],2094:[31,31,32,31,31,30,30,30,29,30,30,30,365],2095:[31,31,32,31,31,31,30,29,30,30,30,30,366],2096:[30,31,32,32,31,30,30,29,30,29,30,30,364],2097:[31,32,31,32,31,30,30,30,29,30,30,30,366],2098:[31,31,32,31,31,31,29,30,29,30,29,31,365],2099:[31,31,32,31,31,31,30,29,29,30,30,30,365]};let today=new Date,now={};const daysInYear=365;function formatDate(n,a="-"){return`${n.year}${a}${n.month}${a}${n.date}`}function createDate(n=now.np.year,a=now.np.month,s=now.np.date,t="-"){return`${n}${t}${a}${t}${s}`}function countDaysInYear(n){return void 0===npdates[n]?365:npdates[n][12]}function countPartialDays(n,a){let s=0;for(let a=0;a<n.month-1;a++)s+=npdates[n.year][a];return s+=n.date,a?s--:s=npdates[n.year][12]-s+1,s}function daysInMonth(n=now.np.year,a=now.np.month){return--a<0&&(a+=11,n--),npdates[n][a]}function isLeapYear(n){return 365!==countDaysInYear(n)}function countBSDays(n){if("string"!=typeof n)return;let a={value:0,dir:0,npdate:n};if((n=n.toString().dateObjects()).year<2e3)return 0;if(n.year>2099)return 0;if(a.dir=compNpDates(n,reference.np),0==a.dir)return a;let s=a.dir<0?reference.np.year+a.dir:reference.np.year,t=!0;for(;t&&reference.np.year!==n.year;)a.value+=countDaysInYear(s),s+=a.dir,a.dir<0?s<=n.year&&(t=!1):s>=n.year&&(t=!1);return a.value+=countPartialDays(n,!(a.dir<0)),a}function compNpDates(n,a){return n.year>a.year||n.year===a.year&&n.month>a.month||n.year===a.year&&n.month===a.month&&n.date>a.date?1:n.year===a.year&&n.month===a.month&&n.date===a.date?0:-1}function countADDays(n){let a=n.toString().dateObjects(),s=new Date(reference.int.year,reference.int.month-1,reference.int.date);a=new Date(a.year,a.month-1,a.date);let t=a.getTime()-s.getTime(),e=parseInt(Math.ceil(t/864e5));return{value:Math.abs(e),dir:e<0?-1:1,intdate:n}}function offsetBSDays(n){let a=n.value,s=new Date(n.intdate),t=JSON.parse(JSON.stringify(reference.np));if(0===n.value)return t;if(n.dir>0)for(t.date+=a;t.date>daysInMonth(t.year,t.month);)t.date-=daysInMonth(t.year,t.month),t.month++,t.month>12&&(t.year++,t.month=1);else{let n;for(a=Math.abs(a);a>=0;){if(t.month--,t.month<1&&(t.year--,t.month=12),n=daysInMonth(t.year,t.month),a<n){a=n-a+1;break}a-=n}t.date=a}return t.day=s.getDay()+1,t}function offsetADDays(n){let a=new Date(reference.int.year,reference.int.month-1,reference.int.date),s=n.value*n.dir;return a.setDate(a.getDate()+s),{year:a.getFullYear(),month:a.getMonth()+1,date:a.getDate(),day:a.getDay()+1}}function ad2bs(n){return offsetBSDays(countADDays(n))}function bs2ad(n){return offsetADDays(countBSDays(n))}function startDate(n=now.np.year,a=now.np.month){return bs2ad(`${n}-${a}-1`)}function getMonthName(n,a=!0){return--n<0&&(n+=11),n>11&&(n-=12),a?months_nepali[n]:months[n]}String.prototype.toNepaliDigits=function(){return this.replace(/[0-9]/g,n=>nepali_digits[n])},String.prototype.revNepaliNumber=function(){return this.replace(/['०','१','२','३','४','५','६','७','८','९']/g,n=>nepali_digits.findIndex(a=>a==n))},String.prototype.dateObjects=function(n=!0){return date={},/(\d+)[/.-](\d+)[/.-](\d+)/gi.exec(this.toString()).forEach(a=>{(a=parseInt(a))>32?date.year=a:n?(void 0===date.month&&(date.month=a),date.date=a):(void 0===date.date&&(date.date=a),date.month=a)}),date},Date.prototype.format=function(n="-"){return this.getFullYear()+n+(this.getMonth()+1).toString().padStart(2,0)+n+this.getDate().toString().padStart(2,0)};const npCalTemplate=document.createElement("template");npCalTemplate.innerHTML='\n<link rel="stylesheet">\n<div class="calendar-container">\n            <div class="calendar-head">\n                <span class="calendar-title">\n                    <slot name="title" />\n                </span>\n                <div class="cal-nav">\n                    <div class="cal-head-left">\n                        <div class="cal-btn cal-prev-year"> \n                        <small><<</small>\n                        </div>\n                        <div class="cal-btn cal-prev"> \n                        <small><</small>\n                        </div>\n                    </div>\n                    <div class="cal-head-center">\n                        <span class="cal-year"> <strong>२०७७/</strong><small>2020</small> </span>\n                        <span class="month"><strong>भाद्र</strong></span>\n                        <span class="int-month"><small>(August/September)</small></span>\n\n                    </div>\n                    <div class="cal-head-right">\n                        <div class="cal-btn cal-next">\n                            <small>></small>\n                        </div>\n                        <div class="cal-btn cal-next-year">\n                            <small>>></small>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="calendar-body">\n                <div class="week">\n                    <div class="days-name">SUN</div>\n                    <div class="days-name">MON</div>\n                    <div class="days-name">TUE</div>\n                    <div class="days-name">WED</div>\n                    <div class="days-name">THU</div>\n                    <div class="days-name">FRI</div>\n                    <div class="days-name">SAT</div>\n                </div>\n                <div class="days">\n                    <div class="day inactive">\n                        <span class="np-date">01</span>\n                        <span class="int-date">1</span>\n                        <span class="task">something</span>\n                    </div>\n                    <div class="day inactive">\n                        <span class="np-date">02</span>\n                        <span class="int-date">2</span>\n                        <span class="task"></span>\n                    </div>\n                    <div class="day inactive">\n                        <span class="np-date">03</span>\n                        <span class="int-date">3</span>\n                        <span class="task"></span>\n                    </div>\n                    <div class="day">\n                        <span class="np-date">04</span>\n                        <span class="int-date">4</span>\n                        <span class="task"></span>\n                    </div>\n                    <div class="day">\n                        <span class="np-date">05</span>\n                        <span class="int-date">5</span>\n                        <span class="task">something</span>\n                    </div>\n                    <div class="day">\n                        <span class="np-date">06</span>\n                        <span class="int-date">6</span>\n                        <span class="task"></span>\n                    </div>\n                    <div class="day">\n                        <span class="np-date">07</span>\n                        <span class="int-date">7</span>\n                        <span class="task"></span>\n                    </div>\n                    <div class="day">\n                        <span class="np-date">08</span>\n                        <span class="int-date">8</span>\n                        <span class="task"></span>\n                    </div>\n                    <div class="day">\n                        <span class="np-date">09</span>\n                        <span class="int-date">9</span>\n                        <span class="task">something</span>\n                    </div>\n                    <div class="day">\n                        <span class="np-date">10</span>\n                        <span class="int-date">10</span>\n                        <span class="task"></span>\n                    </div>\n                    <div class="day">\n                        <span class="np-date">11</span>\n                        <span class="int-date">11</span>\n                        <span class="task"></span>\n                    </div>\n                    <div class="day">\n                        <span class="np-date">12</span>\n                        <span class="int-date">12</span>\n                        <span class="task"></span>\n                    </div>\n                    <div class="day">\n                        <span class="np-date">13</span>\n                        <span class="int-date">13</span>\n                        <span class="task"></span>\n                    </div>\n                    <div class="day">\n                        <span class="np-date">14</span>\n                        <span class="int-date">14</span>\n                        <span class="task"></span>\n                    </div>\n                    <div class="day">\n                        <span class="np-date">15</span>\n                        <span class="int-date">15</span>\n                        <span class="task"></span>\n                    </div>\n                    <div class="day today">\n                        <span class="np-date">16</span>\n                        <span class="int-date">16</span>\n                        <span class="task"></span>\n                    </div>\n                    <div class="day">\n                        <span class="np-date">17</span>\n                        <span class="int-date">17</span>\n                        <span class="task"></span>\n                    </div>\n                    <div class="day">\n                        <span class="np-date">18</span>\n                        <span class="int-date">18</span>\n                        <span class="task"></span>\n                    </div>\n                    <div class="day">\n                        <span class="np-date">19</span>\n                        <span class="int-date">19</span>\n                        <span class="task"></span>\n                    </div>\n                    <div class="day">\n                        <span class="np-date">20</span>\n                        <span class="int-date">20</span>\n                        <span class="task"></span>\n                    </div>\n                    <div class="day">\n                        <span class="np-date">21</span>\n                        <span class="int-date">21</span>\n                        <span class="task">something</span>\n                    </div>\n                    <div class="day">\n                        <span class="np-date">22</span>\n                        <span class="int-date">22</span>\n                        <span class="task"></span>\n                    </div>\n                    <div class="day">\n                        <span class="np-date">23</span>\n                        <span class="int-date">23</span>\n                        <span class="task"></span>\n                    </div>\n                    <div class="day">\n                        <span class="np-date">24</span>\n                        <span class="int-date">24</span>\n                        <span class="task"></span>\n                    </div>\n                    <div class="day">\n                        <span class="np-date">25</span>\n                        <span class="int-date">25</span>\n                        <span class="task"></span>\n                    </div>\n                    <div class="day">\n                        <span class="np-date">26</span>\n                        <span class="int-date">26</span>\n                        <span class="task"></span>\n                    </div>\n                    <div class="day">\n                        <span class="np-date">27</span>\n                        <span class="int-date">27</span>\n                        <span class="task"></span>\n                    </div>\n                    <div class="day">\n                        <span class="np-date">28</span>\n                        <span class="int-date">28</span>\n                        <span class="task"></span>\n                    </div>\n                    <div class="day">\n                        <span class="np-date">29</span>\n                        <span class="int-date">29</span>\n                        <span class="task"></span>\n                    </div>\n                    <div class="day">\n                        <span class="np-date">30</span>\n                        <span class="int-date">30</span>\n                        <span class="task"></span>\n                    </div>\n                    <div class="day">\n                        <span class="np-date">31</span>\n                        <span class="int-date">31</span>\n                        <span class="task"></span>\n                    </div>\n                    <div class="day">\n                        <span class="np-date">32</span>\n                        <span class="int-date">32</span>\n                        <span class="task"></span>\n                    </div>\n                    <div class="day">\n                        <span class="np-date">33</span>\n                        <span class="int-date">33</span>\n                        <span class="task"></span>\n                    </div>\n                    <div class="day">\n                        <span class="np-date">34</span>\n                        <span class="int-date">34</span>\n                        <span class="task"></span>\n                    </div>\n                    <div class="day">\n                        <span class="np-date">35</span>\n                        <span class="int-date">35</span>\n                        <span class="task"></span>\n                    </div>\n                    <div class="day">\n                        <span class="np-date">36</span>\n                        <span class="int-date">36</span>\n                        <span class="task"></span>\n                    </div>\n                    <div class="day">\n                        <span class="np-date">37</span>\n                        <span class="int-date">37</span>\n                        <span class="task"></span>\n                    </div>\n                    <div class="day">\n                        <span class="np-date">38</span>\n                        <span class="int-date">38</span>\n                        <span class="task"></span>\n                    </div>\n                    <div class="day">\n                        <span class="np-date">39</span>\n                        <span class="int-date">39</span>\n                        <span class="task"></span>\n                    </div>\n                    <div class="day inactive">\n                        <span class="np-date">1</span>\n                        <span class="int-date">1</span>\n                        <span class="task"></span>\n                    </div>\n                    <div class="day inactive">\n                        <span class="np-date">2</span>\n                        <span class="int-date">2</span>\n                        <span class="task"></span>\n                    </div>\n                    <div class="day inactive">\n                        <span class="np-date">3</span>\n                        <span class="int-date">3</span>\n                        <span class="task"></span>\n                    </div>\n                </div>\n            </div>\n            <div class="calendar-footer">\n                <div class="cal-foot-left"><strong class="footer-time">०२:१५:४५ पुर्वान्ह</strong></div>\n                <div class="cal-foot-center"><strong class="footer-today">२०७७ - असार - १६ मंगलवार</strong></div>\n                <div class="cal-foot-right">\n                    <div class="cal-copy">&copy; <a href="http://mentormaya.com">mentormaya</a> </div>\n                </div>\n            </div>\n        </div>\n';class NepaliCalendar extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(npCalTemplate.content.cloneNode(!0)),this.shadowRoot.querySelector("link").href=this.getAttribute("style"),now={int:today.format().dateObjects(),np:ad2bs(today.format())},now.int.today={year:now.int.year,month:now.int.month,date:now.int.date,day:today.getDay()+1},now.np.today={year:now.np.year,month:now.np.month,date:now.np.date,day:now.np.day},this.init(),this.lang()}lang(){"nep"==this.getAttribute("lang")&&(this.shadowRoot.querySelectorAll(".days-name").forEach((n,a)=>{n.innerHTML=days_nepali[a]}),this.shadowRoot.querySelectorAll(".np-date").forEach(n=>{n.innerHTML=n.innerHTML.toString().toNepaliDigits()}),this.shadowRoot.querySelectorAll(".footer-today").forEach(n=>{n.innerHTML=n.innerHTML.toString().toNepaliDigits()}),this.shadowRoot.querySelectorAll(".footer-time").forEach(n=>{n.innerHTML=n.innerHTML.toString().toNepaliDigits()}))}init(){now.int.day=now.np.day,now.np.days=daysInMonth(),now.np.start=this.startDay(),now.np.last=daysInMonth(now.np.year,now.np.month-1),now.int.start=startDate(),this.shadowRoot.querySelectorAll(".cal-year").forEach(n=>{n.innerHTML=`<strong>${now.np.year.toString().toNepaliDigits()}/</strong><small>${now.int.year}</small>`}),this.shadowRoot.querySelectorAll(".month").forEach(n=>{n.innerHTML=`<strong>${getMonthName(now.np.month)}</strong>`}),this.shadowRoot.querySelectorAll(".int-month").forEach(n=>{n.innerHTML=`<small>(${getMonthName(now.int.start.month,!1)}/${getMonthName(now.int.start.month+1,!1)})</small>`}),this.shadowRoot.querySelectorAll(".inactive").forEach(n=>{n.classList.remove("inactive")}),this.shadowRoot.querySelectorAll(".today").forEach(n=>{n.classList.remove("today")}),this.shadowRoot.querySelectorAll(".task").forEach(n=>{n.innerHTML=""}),this.shadowRoot.querySelectorAll(".footer-today").forEach(n=>{n.innerHTML=`${now.np.today.year} - ${months_nepali[now.np.today.month-1]} - ${now.np.today.date} ${days_nepali[now.np.today.day-1]}`}),this.renderNepaliDates(now.np),this.renderIntDates(now.int.start)}startDay(){let n=now.np.day-(now.np.date-1)%7;return n<1?n+7:n}renderNepaliDates(n){this.shadowRoot.querySelectorAll(".np-date").forEach((a,s)=>{s<n.start-1?(a.parentElement.classList.add("inactive"),a.innerHTML=n.last-(n.start-2-s)):s<=n.days+(n.start-2)?(n.year===n.today.year&&n.month===n.today.month&&s===n.today.date&&a.parentElement.classList.add("today"),a.innerHTML=s-(n.start-2)):(a.parentElement.classList.add("inactive"),a.innerHTML=s-(n.start-2+n.days))})}renderIntDates(n){this.shadowRoot.querySelectorAll(".int-date").forEach((a,s)=>{s<n.day-1?a.innerHTML=n.date-(n.day-1-s):s<intdates[n.month-1]-(n.date-1)+(n.day-1)?a.innerHTML=s-(n.day-1)+n.date:a.innerHTML=s-(intdates[n.month-1]-n.date+1)-(n.day-2)})}prevYear(){let n=new Date(now.int.year+"-"+now.int.month+"-"+now.int.date);n.setFullYear(now.int.year-1),now={int:{...now.int,...n.format().dateObjects()},np:{...now.np,...ad2bs(n.format())}},this.init(),this.lang()}prev(){let n=new Date(now.int.year+"-"+now.int.month+"-"+now.int.date);n.setDate(now.int.date-now.np.last),now={int:{...now.int,...n.format().dateObjects()},np:{...now.np,...ad2bs(n.format())}},this.init(),this.lang()}today(){now={int:{...now.int,...today.format().dateObjects()},np:{...now.np,...ad2bs(today.format())}},this.init(),this.lang()}next(){let n=new Date(now.int.year+"-"+now.int.month+"-"+now.int.date);n.setDate(now.int.date+now.np.days),now={int:{...now.int,...n.format().dateObjects()},np:{...now.np,...ad2bs(n.format())}},this.init(),this.lang()}nextYear(){let n=new Date(now.int.year+"-"+now.int.month+"-"+now.int.date);n.setFullYear(now.int.year+1),now={int:{...now.int,...n.format().dateObjects()},np:{...now.np,...ad2bs(n.format())}},this.init(),this.lang()}selectedDate(n){let a={np:n.getElementsByClassName("np-date")[0].innerHTML.toString().revNepaliNumber(),int:n.getElementsByClassName("int-date")[0].innerHTML.toString().revNepaliNumber(),task:n.getElementsByClassName("task")[0].innerHTML.toString().revNepaliNumber()};n.classList.contains("inactive")?a.np>20?a.np=createDate(now.np.year,now.np.month-1,a.np):a.np=createDate(now.np.year,now.np.month+1,a.np):a.np=createDate(now.np.year,now.np.month,a.np),a.int=bs2ad(a.np),a.day=a.int.day,a.int=formatDate(a.int);const s=new CustomEvent("select",{detail:a});this.dispatchEvent(s)}connectedCallback(){this.shadowRoot.querySelectorAll(".footer-time").forEach(n=>{setInterval(()=>{let a=new Date,s=a.getHours()>=12?"अपरान्ह":"पुर्वान्ह";a.setHours(a.getHours()>12?a.getHours()%12:a.getHours()),n.innerHTML=`${a.getHours().toString().padStart(2,0)}:${a.getMinutes().toString().padStart(2,0)}:${a.getSeconds().toString().padStart(2,0)} ${s}`,n.innerHTML=n.innerHTML.toString().toNepaliDigits()},100)}),this.shadowRoot.querySelector(".cal-prev").addEventListener("click",()=>{this.prev()}),this.shadowRoot.querySelector(".cal-next").addEventListener("click",()=>{this.next()}),this.shadowRoot.querySelector(".cal-prev-year").addEventListener("click",()=>{this.prevYear()}),this.shadowRoot.querySelector(".cal-next-year").addEventListener("click",()=>{this.nextYear()}),this.shadowRoot.querySelector(".footer-today").addEventListener("click",()=>{this.today()}),this.shadowRoot.querySelectorAll(".day").forEach(n=>{n.addEventListener("click",({path:n})=>{this.selectedDate(n[1])})})}}customElements.define("nepali-calendar",NepaliCalendar);