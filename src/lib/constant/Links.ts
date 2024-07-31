// about
const about = '/about';
const AboutNa = about + '/na';

// metting
const metting = '/metting';
const OnlineMetting = metting + '/online';
const physicalMetting = metting + '/physical';
const hybridMetting = metting + '/hybrid';

// event
const Event = '/event';
const UpcommingEvent = Event + '/upcomming';
const PastEvent = Event + '/past';
const Workshop = Event + '/workshop';

const Merchandise = '/merchandise';
const Literature = '/literature';
const LINKS = {
  HOME: '/',
  METTING: {
    default: metting,
    ONLINE: OnlineMetting,
    PHYSICAL: physicalMetting,
    HYBRID: hybridMetting,
  },
  ABOUT: { default: '/about', NA: AboutNa },
  CONTACT: '/contact',
  COMMITTEE: { default: '/committee' },
  EVENT: {
    default: '/event',
    UPCOMMING: UpcommingEvent,
    PAST: PastEvent,
    WORKSHOP: Workshop,
  },
  MERCHANDISE: { default: Merchandise },
  LITERATURE: { default: Literature },
};
export const {
  HOME,
  ABOUT,
  COMMITTEE,
  CONTACT,
  EVENT,
  LITERATURE,
  MERCHANDISE,
  METTING,
} = LINKS;
