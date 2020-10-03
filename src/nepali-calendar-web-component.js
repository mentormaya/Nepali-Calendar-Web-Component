/*
    Project : Nepali Calendar Web Component
    Description:This is the simple library for developers who wants a Nepali Calendar in there app with JS. The objective of this library is to provide a complete solution for the nepali calendar needs. Either that being need for calendar for UI design or may be its for datepicker. This library will also be usefull and provide an option to convert the dates back and forth in nepali and international calendar.
    Author: Ajay Kumar Singh
    ©copyright: Authors@2020
    License: MIT
*/

const nepali_digits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
const days = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
];
const months = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPETEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
];
const days_nepali = [
    "आइतवार",
    "साेमवार",
    "मंगलवार",
    "बुधवार",
    "विहीवार",
    "शुक्रवार",
    "शनिवार",
];
const months_nepali = [
    "बैशाख",
    "जेठ",
    "असार",
    "श्रावण",
    "भदाै",
    "असाेज",
    "कातिक",
    "मंसिर",
    "पुस",
    "माघ",
    "फागुन",
    "चैत",
];

const intdates = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const reference = {
    int: {
        year: 2020,
        month: 4,
        date: 13,
        day: 2,
    },
    np: {
        year: 2077,
        month: 1,
        date: 1,
        day: 2,
    },
};

const npdates = {
    2000: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 365],
    2001: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
    2002: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
    2003: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
    2004: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 365],
    2005: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
    2006: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
    2007: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
    2008: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31, 365],
    2009: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
    2010: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
    2011: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
    2012: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30, 365],
    2013: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
    2014: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
    2015: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
    2016: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30, 365],
    2017: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
    2018: [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
    2019: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 366],
    2020: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365],
    2021: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
    2022: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30, 365],
    2023: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 366],
    2024: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365],
    2025: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
    2026: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
    2027: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 365],
    2028: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
    2029: [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30, 365],
    2030: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
    2031: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 365],
    2032: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
    2033: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
    2034: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
    2035: [30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31, 365],
    2036: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
    2037: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
    2038: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
    2039: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30, 365],
    2040: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
    2041: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
    2042: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
    2043: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30, 365],
    2044: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
    2045: [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
    2046: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
    2047: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365],
    2048: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
    2049: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30, 365],
    2050: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 366],
    2051: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365],
    2052: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
    2053: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30, 365],
    2054: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 366],
    2055: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
    2056: [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30, 365],
    2057: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
    2058: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 365],
    2059: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
    2060: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
    2061: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
    2062: [30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31, 365],
    2063: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
    2064: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
    2065: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
    2066: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31, 365],
    2067: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
    2068: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
    2069: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
    2070: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30, 365],
    2071: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
    2072: [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
    2073: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
    2074: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365],
    2075: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
    2076: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30, 365],
    2077: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 366],
    2078: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365],
    2079: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
    2080: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30, 365],
    2081: [31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30, 366],
    2082: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30, 365],
    2083: [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30, 365],
    2084: [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30, 365],
    2085: [31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30, 366],
    2086: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30, 365],
    2087: [31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30, 366],
    2088: [30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30, 365],
    2089: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30, 365],
    2090: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30, 365],
    2091: [31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30, 366],
    2092: [30, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30, 365],
    2093: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30, 365],
    2094: [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30, 365],
    2095: [31, 31, 32, 31, 31, 31, 30, 29, 30, 30, 30, 30, 366],
    2096: [30, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 364],
    2097: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30, 366],
    2098: [31, 31, 32, 31, 31, 31, 29, 30, 29, 30, 29, 31, 365],
    2099: [31, 31, 32, 31, 31, 31, 30, 29, 29, 30, 30, 30, 365],
};

let today = new Date();
let now = {};

const daysInYear = 365;

String.prototype.toNepaliDigits = function () {
    return this.replace(/[0-9]/g, (match) => {
        return nepali_digits[match];
    });
};

String.prototype.revNepaliNumber = function () {
    return this.replace(/['०','१','२','३','४','५','६','७','८','९']/g, (match) => {
        return nepali_digits.findIndex((element) => element == match);
    });
};

String.prototype.dateObjects = function (monthFirst = true) {
    date = {};
    //parse the element of dates
    let data = /(\d+)[/.-](\d+)[/.-](\d+)/gi.exec(this.toString());
    data.forEach((elem) => {
        elem = parseInt(elem);
        if (elem > 32) {
            date.year = elem;
            return;
        }
        if (monthFirst) {
            if (typeof date.month == "undefined") {
                date.month = elem;
            }
            date.date = elem;
        } else {
            if (typeof date.date == "undefined") {
                date.date = elem;
            }
            date.month = elem;
        }
    });
    return date;
};

Date.prototype.format = function (seprator = "-") {
    return (
        this.getFullYear() +
        seprator +
        (this.getMonth() + 1).toString().padStart(2, 0) +
        seprator +
        this.getDate().toString().padStart(2, 0)
    );
};

function formatDate(date, sep = "-") {
    return `${date.year}${sep}${date.month}${sep}${date.date}`;
}

function createDate(
    year = now.np.year,
    month = now.np.month,
    date = now.np.date,
    sep = "-"
) {
    return `${year}${sep}${month}${sep}${date}`;
}

function countDaysInYear(year) {
    if (typeof npdates[year] === "undefined") {
        return daysInYear;
    }
    return npdates[year][12];
}

function countPartialDays(date, dir) {
    let count = 0;
    //add up the days from top up to previous of given date
    for (let i = 0; i < date.month - 1; i++) {
        count += npdates[date.year][i];
    }
    //add the date of given date to the count
    count += date.date;
    //if direction is opposite then complement the count with year sum
    if (!dir) {
        //if dir is set then count top to bottom
        count = npdates[date.year][12] - count + 1;
    } else {
        count--;
    }
    //return the value of count
    return count;
}

function daysInMonth(year = now.np.year, month = now.np.month) {
    // let iny = year,
    //     inm = month;
    //to make it array compatible subtract one in month
    month--;
    if (month < 0) {
        month += 11;
        year--;
    }
    let days = npdates[year][month];
    //console.log(`${iny}-${inm} : ${days} days`);
    return days;
}

function isLeapYear(year) {
    return daysInYear !== countDaysInYear(year);
}

function countBSDays(date) {
    if (typeof date !== "string") {
        console.error("Invalid date!");
        return;
    }

    let dayCount = {
        value: 0,
        dir: 0,
        npdate: date,
    };

    //convert the date provided to an json object
    date = date.toString().dateObjects();

    if (date.year < 2000) {
        console.error("Invalid date range: Ahead of 2000 BS");
        return 0;
    }

    if (date.year > 2099) {
        console.error("Invalid date range: After 1999 BS");
        return 0;
    }

    dayCount.dir = compNpDates(date, reference.np);

    if (dayCount.dir == 0) return dayCount;

    let i =
        dayCount.dir < 0 ? reference.np.year + dayCount.dir : reference.np.year;
    let loop = true;

    while (loop && reference.np.year !== date.year) {
        dayCount.value += countDaysInYear(i);
        i += dayCount.dir;
        if (dayCount.dir < 0) {
            if (i <= date.year) loop = false;
        } else {
            if (i >= date.year) loop = false;
        }
    }
    dayCount.value += countPartialDays(date, dayCount.dir < 0 ? false : true);
    return dayCount;
}

function compNpDates(date1, date2) {
    if (date1.year > date2.year) return 1;
    if (date1.year === date2.year && date1.month > date2.month) return 1;
    if (
        date1.year === date2.year &&
        date1.month === date2.month &&
        date1.date > date2.date
    )
        return 1;
    if (
        date1.year === date2.year &&
        date1.month === date2.month &&
        date1.date === date2.date
    )
        return 0;
    return -1;
}

function countADDays(ad) {
    let date = ad.toString().dateObjects();
    let refDate = new Date(
        reference.int.year,
        reference.int.month - 1,
        reference.int.date
    );
    date = new Date(date.year, date.month - 1, date.date);
    let timeDiff = date.getTime() - refDate.getTime();
    let diffDays = parseInt(Math.ceil(timeDiff / (1000 * 3600 * 24)));
    return {
        value: Math.abs(diffDays),
        dir: diffDays < 0 ? -1 : 1,
        intdate: ad,
    };
}

function offsetBSDays(days) {
    let dayCount = days.value;
    let dateInAd = new Date(days.intdate);
    let refDate = JSON.parse(JSON.stringify(reference.np));
    if (days.value === 0) {
        return refDate;
    } else if (days.dir > 0) {
        refDate.date += dayCount;
        while (refDate.date > daysInMonth(refDate.year, refDate.month)) {
            refDate.date -= daysInMonth(refDate.year, refDate.month);
            refDate.month++;
            if (refDate.month > 12) {
                refDate.year++;
                refDate.month = 1;
            }
        }
    } else {
        dayCount = Math.abs(dayCount);
        let days;
        while (dayCount >= 0) {
            refDate.month--;
            if (refDate.month < 1) {
                refDate.year--;
                refDate.month = 12;
            }
            days = daysInMonth(refDate.year, refDate.month);
            if (dayCount < days) {
                dayCount = days - dayCount + 1;
                break;
            }
            dayCount -= days;
        }
        refDate.date = dayCount;
    }
    refDate.day = dateInAd.getDay() + 1;
    return refDate;
}

function offsetADDays(days) {
    let date = new Date(
        reference.int.year,
        reference.int.month - 1,
        reference.int.date
    );
    let shift = days.value * days.dir;
    date.setDate(date.getDate() + shift);
    return {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        date: date.getDate(),
        day: date.getDay() + 1,
    };
}

function ad2bs(ad) {
    return offsetBSDays(countADDays(ad));
}

function bs2ad(bs) {
    return offsetADDays(countBSDays(bs));
}

function startDate(year = now.np.year, month = now.np.month) {
    let string = `${year}-${month}-1`;
    return bs2ad(string);
}

function getMonthName(month, nep = true) {
    //subtract one from month to make array compatible
    month--;
    if (month < 0) month += 11;
    if (month > 11) month -= 12;
    if (nep) return months_nepali[month];
    return months[month];
}

const npCalTemplate = document.createElement("template");

npCalTemplate.innerHTML = `
<link rel="stylesheet" href="https://mentormaya.github.io/Nepali-Calendar-Web-Component/src/nepali-calendar-1.0.0-min.css">
<div class="calendar-container">
            <div class="calendar-head">
                <span class="calendar-title">
                    <slot name="title" />
                </span>
                <div class="cal-nav">
                    <div class="cal-head-left">
                        <div class="cal-btn cal-prev-year"> 
                        <small><<</small>
                        </div>
                        <div class="cal-btn cal-prev"> 
                        <small><</small>
                        </div>
                    </div>
                    <div class="cal-head-center">
                        <span class="cal-year"> <strong>२०७७/</strong><small>2020</small> </span>
                        <span class="month"><strong>भाद्र</strong></span>
                        <span class="int-month"><small>(August/September)</small></span>

                    </div>
                    <div class="cal-head-right">
                        <div class="cal-btn cal-next">
                            <small>></small>
                        </div>
                        <div class="cal-btn cal-next-year">
                            <small>>></small>
                        </div>
                    </div>
                </div>
            </div>
            <div class="calendar-body">
                <div class="week">
                    <div class="days-name">SUN</div>
                    <div class="days-name">MON</div>
                    <div class="days-name">TUE</div>
                    <div class="days-name">WED</div>
                    <div class="days-name">THU</div>
                    <div class="days-name">FRI</div>
                    <div class="days-name">SAT</div>
                </div>
                <div class="days">
                    <div class="day inactive">
                        <span class="np-date">01</span>
                        <span class="int-date">1</span>
                        <span class="task">something</span>
                    </div>
                    <div class="day inactive">
                        <span class="np-date">02</span>
                        <span class="int-date">2</span>
                        <span class="task"></span>
                    </div>
                    <div class="day inactive">
                        <span class="np-date">03</span>
                        <span class="int-date">3</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">04</span>
                        <span class="int-date">4</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">05</span>
                        <span class="int-date">5</span>
                        <span class="task">something</span>
                    </div>
                    <div class="day">
                        <span class="np-date">06</span>
                        <span class="int-date">6</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">07</span>
                        <span class="int-date">7</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">08</span>
                        <span class="int-date">8</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">09</span>
                        <span class="int-date">9</span>
                        <span class="task">something</span>
                    </div>
                    <div class="day">
                        <span class="np-date">10</span>
                        <span class="int-date">10</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">11</span>
                        <span class="int-date">11</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">12</span>
                        <span class="int-date">12</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">13</span>
                        <span class="int-date">13</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">14</span>
                        <span class="int-date">14</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">15</span>
                        <span class="int-date">15</span>
                        <span class="task"></span>
                    </div>
                    <div class="day today">
                        <span class="np-date">16</span>
                        <span class="int-date">16</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">17</span>
                        <span class="int-date">17</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">18</span>
                        <span class="int-date">18</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">19</span>
                        <span class="int-date">19</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">20</span>
                        <span class="int-date">20</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">21</span>
                        <span class="int-date">21</span>
                        <span class="task">something</span>
                    </div>
                    <div class="day">
                        <span class="np-date">22</span>
                        <span class="int-date">22</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">23</span>
                        <span class="int-date">23</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">24</span>
                        <span class="int-date">24</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">25</span>
                        <span class="int-date">25</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">26</span>
                        <span class="int-date">26</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">27</span>
                        <span class="int-date">27</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">28</span>
                        <span class="int-date">28</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">29</span>
                        <span class="int-date">29</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">30</span>
                        <span class="int-date">30</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">31</span>
                        <span class="int-date">31</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">32</span>
                        <span class="int-date">32</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">33</span>
                        <span class="int-date">33</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">34</span>
                        <span class="int-date">34</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">35</span>
                        <span class="int-date">35</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">36</span>
                        <span class="int-date">36</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">37</span>
                        <span class="int-date">37</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">38</span>
                        <span class="int-date">38</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">39</span>
                        <span class="int-date">39</span>
                        <span class="task"></span>
                    </div>
                    <div class="day inactive">
                        <span class="np-date">1</span>
                        <span class="int-date">1</span>
                        <span class="task"></span>
                    </div>
                    <div class="day inactive">
                        <span class="np-date">2</span>
                        <span class="int-date">2</span>
                        <span class="task"></span>
                    </div>
                    <div class="day inactive">
                        <span class="np-date">3</span>
                        <span class="int-date">3</span>
                        <span class="task"></span>
                    </div>
                </div>
            </div>
            <div class="calendar-footer">
                <div class="cal-foot-left"><strong class="footer-time">०२:१५:४५ पुर्वान्ह</strong></div>
                <div class="cal-foot-center"><strong class="footer-today">२०७७ - असार - १६ मंगलवार</strong></div>
                <div class="cal-foot-right">
                    <div class="cal-copy">&copy; <a href="http://mentormaya.com">mentormaya</a> </div>
                </div>
            </div>
        </div>
`;

class NepaliCalendar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({
            mode: "open",
        });
        this.shadowRoot.appendChild(npCalTemplate.content.cloneNode(true));
        this.shadowRoot.querySelector("link").href = this.getAttribute("style");

        //set the date, month and year to display
        now = {
            int: today.format().dateObjects(),
            np: ad2bs(today.format()),
        };

        now.int.today = {
            year: now.int.year,
            month: now.int.month,
            date: now.int.date,
            day: today.getDay() + 1,
        };
        now.np.today = {
            year: now.np.year,
            month: now.np.month,
            date: now.np.date,
            day: now.np.day,
        };

        //Initialize the calendar with the date provided above
        this.init();

        //set the language with attribute given
        this.lang();
    }

    lang() {
        if (this.getAttribute("lang") == "nep") {
            //change every nepali date in to unicode nepali
            this.shadowRoot.querySelectorAll(".days-name").forEach((dayname, itr) => {
                dayname.innerHTML = days_nepali[itr];
            });
            this.shadowRoot.querySelectorAll(".np-date").forEach((date) => {
                date.innerHTML = date.innerHTML.toString().toNepaliDigits();
            });
            this.shadowRoot.querySelectorAll(".footer-today").forEach((date) => {
                date.innerHTML = date.innerHTML.toString().toNepaliDigits();
            });
            this.shadowRoot.querySelectorAll(".footer-time").forEach((date) => {
                date.innerHTML = date.innerHTML.toString().toNepaliDigits();
            });
        }
    }

    init() {
        now.int.day = now.np.day;
        now.np.days = daysInMonth();
        now.np.start = this.startDay();
        now.np.last = daysInMonth(now.np.year, now.np.month - 1);

        now.int.start = startDate();

        this.shadowRoot.querySelectorAll(".cal-year").forEach((item) => {
            item.innerHTML = `<strong>${now.np.year
        .toString()
        .toNepaliDigits()}/</strong><small>${now.int.year}</small>`;
        });

        this.shadowRoot.querySelectorAll(".month").forEach((item) => {
            item.innerHTML = `<strong>${getMonthName(now.np.month)}</strong>`;
        });

        this.shadowRoot.querySelectorAll(".int-month").forEach((item) => {
            item.innerHTML = `<small>(${getMonthName(
        now.int.start.month,
        false
      )}/${getMonthName(now.int.start.month + 1, false)})</small>`;
        });

        this.shadowRoot.querySelectorAll(".inactive").forEach((elem) => {
            elem.classList.remove("inactive");
        });
        this.shadowRoot.querySelectorAll(".today").forEach((elem) => {
            elem.classList.remove("today");
        });

        this.shadowRoot.querySelectorAll(".task").forEach((elem) => {
            elem.innerHTML = "";
        });

        this.shadowRoot.querySelectorAll(".footer-today").forEach((elem) => {
            elem.innerHTML = `${now.np.today.year} - ${
        months_nepali[now.np.today.month - 1]
      } - ${now.np.today.date} ${days_nepali[now.np.today.day - 1]}`;
        });

        this.renderNepaliDates(now.np);
        this.renderIntDates(now.int.start);
    }

    startDay() {
        let day = now.np.day - ((now.np.date - 1) % 7);
        if (day < 1) return day + 7;
        return day;
    }

    renderNepaliDates(date) {
        this.shadowRoot.querySelectorAll(".np-date").forEach((day, itr) => {
            if (itr < date.start - 1) {
                day.parentElement.classList.add("inactive");
                day.innerHTML = date.last - (date.start - 2 - itr);
            } else if (itr <= date.days + (date.start - 2)) {
                if (
                    date.year === date.today.year &&
                    date.month === date.today.month &&
                    itr === date.today.date
                )
                    day.parentElement.classList.add("today");
                day.innerHTML = itr - (date.start - 2);
            } else {
                day.parentElement.classList.add("inactive");
                day.innerHTML = itr - (date.start - 2 + date.days);
            }
        });
    }

    renderIntDates(date) {
        this.shadowRoot.querySelectorAll(".int-date").forEach((day, itr) => {
            if (itr < date.day - 1) {
                day.innerHTML = date.date - (date.day - 1 - itr);
            } else if (
                itr <
                intdates[date.month - 1] - (date.date - 1) + (date.day - 1)
            ) {
                day.innerHTML = itr - (date.day - 1) + date.date;
            } else {
                day.innerHTML =
                    itr - (intdates[date.month - 1] - date.date + 1) - (date.day - 2);
            }
        });
    }

    prevYear() {
        let newDate = new Date(
            now.int.year + "-" + now.int.month + "-" + now.int.date
        );
        newDate.setFullYear(now.int.year - 1);
        //console.log(ad2bs(newDate.format()));
        now = {
            int: {
                ...now.int,
                ...newDate.format().dateObjects(),
            },
            np: {
                ...now.np,
                ...ad2bs(newDate.format()),
            },
        };
        this.init();
        this.lang();
    }

    prev() {
        let newDate = new Date(
            now.int.year + "-" + now.int.month + "-" + now.int.date
        );
        newDate.setDate(now.int.date - now.np.last);
        //console.log(ad2bs(newDate.format()));
        now = {
            int: {
                ...now.int,
                ...newDate.format().dateObjects(),
            },
            np: {
                ...now.np,
                ...ad2bs(newDate.format()),
            },
        };
        this.init();
        this.lang();
    }

    today() {
        now = {
            int: {
                ...now.int,
                ...today.format().dateObjects(),
            },
            np: {
                ...now.np,
                ...ad2bs(today.format()),
            },
        };
        this.init();
        this.lang();
    }

    next() {
        let newDate = new Date(
            now.int.year + "-" + now.int.month + "-" + now.int.date
        );
        newDate.setDate(now.int.date + now.np.days);

        now = {
            int: {
                ...now.int,
                ...newDate.format().dateObjects(),
            },
            np: {
                ...now.np,
                ...ad2bs(newDate.format()),
            },
        };
        this.init();
        this.lang();
    }
    nextYear() {
        let newDate = new Date(
            now.int.year + "-" + now.int.month + "-" + now.int.date
        );
        newDate.setFullYear(now.int.year + 1);

        now = {
            int: {
                ...now.int,
                ...newDate.format().dateObjects(),
            },
            np: {
                ...now.np,
                ...ad2bs(newDate.format()),
            },
        };
        this.init();
        this.lang();
    }

    selectedDate(day) {
        //get dates
        let date = {
            np: day
                .getElementsByClassName("np-date")[0]
                .innerHTML.toString()
                .revNepaliNumber(),
            int: day
                .getElementsByClassName("int-date")[0]
                .innerHTML.toString()
                .revNepaliNumber(),
            task: day
                .getElementsByClassName("task")[0]
                .innerHTML.toString()
                .revNepaliNumber(),
        };

        //check if inactive dates are selected
        let inactive = day.classList.contains("inactive");
        //prepare dates with format
        if (inactive) {
            if (date.np > 20) {
                date.np = createDate(now.np.year, now.np.month - 1, date.np);
            } else {
                date.np = createDate(now.np.year, now.np.month + 1, date.np);
            }
        } else {
            date.np = createDate(now.np.year, now.np.month, date.np);
        }
        date.int = bs2ad(date.np);
        date.day = date.int.day;
        date.int = formatDate(date.int);
        const event = new CustomEvent("select", {
            detail: date,
        });
        // Dispatch the event.
        this.dispatchEvent(event);
    }

    connectedCallback() {
        //update the time in the footer of the calendar
        this.shadowRoot.querySelectorAll(".footer-time").forEach((elem) => {
            setInterval(() => {
                let time = new Date();
                let suffix = time.getHours() >= 12 ? "अपरान्ह" : "पुर्वान्ह";
                time.setHours(
                    time.getHours() > 12 ? time.getHours() % 12 : time.getHours()
                );
                elem.innerHTML = `${time
          .getHours()
          .toString()
          .padStart(2, 0)}:${time
          .getMinutes()
          .toString()
          .padStart(2, 0)}:${time
          .getSeconds()
          .toString()
          .padStart(2, 0)} ${suffix}`;
                elem.innerHTML = elem.innerHTML.toString().toNepaliDigits();
            }, 100);
        });
        //add an event listener to the previous btn
        this.shadowRoot.querySelector(".cal-prev").addEventListener("click", () => {
            this.prev();
        });
        //add an event listener to the next btn
        this.shadowRoot.querySelector(".cal-next").addEventListener("click", () => {
            this.next();
        });

        //add an event listener to the previous year btn
        this.shadowRoot
            .querySelector(".cal-prev-year")
            .addEventListener("click", () => {
                this.prevYear();
            });
        //add an event listener to the next year btn
        this.shadowRoot
            .querySelector(".cal-next-year")
            .addEventListener("click", () => {
                this.nextYear();
            });

        //add an event listener to the today footer
        this.shadowRoot
            .querySelector(".footer-today")
            .addEventListener("click", () => {
                this.today();
            });

        //add an event listener to the day click
        this.shadowRoot.querySelectorAll(".day").forEach((elem) => {
            elem.addEventListener("click", ({
                path
            }) => {
                this.selectedDate(path[1]);
            });
        });
    }
}

customElements.define("nepali-calendar", NepaliCalendar);