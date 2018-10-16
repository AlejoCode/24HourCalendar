//default events given
const events = [{start: 0, end: 30}, {start: 30, end: 60}, {start: 60, end: 90}, {start: 90, end: 120}, {start: 120, end: 150}, {start: 150, end: 180}, {start: 180, end: 210}, {start: 210, end: 240}, {start: 240, end: 270}, {start: 270, end: 300}, {start: 300, end: 330}, {start: 330, end:360}, {start: 360, end:390}, {start: 390, end:420}, {start: 420, end:450}, {start: 450, end:480}, {start: 480, end:510}, {start: 510, end:540}, {start: 540, end:570}, {start: 570, end:600}, {start: 600, end:630}, {start: 630, end:660}, {start: 660, end:690}, {start: 690, end:720} ];

layOutDay(events);

//function to generate mock events for testing
function generateMockEvents (n) {
  let events = [];
  let minutesInDay = 60 * 12;

  while (n > 0) {
    let start = Math.floor(Math.random() * minutesInDay)
    let end = start + Math.floor(Math.random() * (minutesInDay - start));
    events.push({start: start, end: end})
    n --;
  }
  return events;
}

//-------------------- crear las de la tarde ---------------------------------------------

//default events given
const eventsPm = [{start: 0, end: 30}, {start: 30, end: 60}, {start: 60, end: 90}, {start: 90, end: 120}, {start: 120, end: 150}, {start: 150, end: 180}, {start: 180, end: 210}, {start: 210, end: 240}, {start: 240, end: 270}, {start: 270, end: 300}, {start: 300, end: 330}, {start: 330, end:360}, {start: 360, end:390}, {start: 390, end:420}, {start: 420, end:450}, {start: 450, end:480}, {start: 480, end:510}, {start: 510, end:540}, {start: 540, end:570}, {start: 570, end:600}, {start: 600, end:630}, {start: 630, end:660}, {start: 660, end:690}, {start: 690, end:720} ];

layOutDayPm(eventsPm);

//function to generate mock events for testing
function generateMockEventsPm (n) {
  let eventsPm = [];
  let minutesInDay = 60 * 12;

  while (n > 0) {
    let start = Math.floor(Math.random() * minutesInDay)
    let end = start + Math.floor(Math.random() * (minutesInDay - start));
    events.push({start: start, end: end})
    n --;
  }
  return eventsPm;
}

