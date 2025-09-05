/**
 * Kids data - centralized content management
 * This follows best practice of separating data from components
 */

export const kidsData = [
  {
    id: 0,
    name: 'Christian Bowen',
    meta: '1y 2m',
    photo: require('../../assets/kid1.png'),
    stats: {
      weight: { 
        lbs: 15, 
        oz: 3, 
        time: '1:00 PM Dec 05 2023' 
      },
      diaper: { 
        type: 'Pee', 
        size: 'Medium', 
        ago: '2h 55m ago' 
      },
      feeding: { 
        type: 'Formula', 
        amount: '5oz', 
        ago: '2h 30m ago' 
      },
      sleep: { 
        duration: { h: 2, m: 20 }, 
        ago: '3h 35m ago' 
      },
    },
  },
  {
    id: 1,
    name: 'Aanya Kapoor',
    meta: '11m',
    photo: require('../../assets/kid2.png'),
    stats: {
      weight: { 
        lbs: 17, 
        oz: 1, 
        time: '3:10 PM Jan 14 2024' 
      },
      diaper: { 
        type: 'Poop', 
        size: 'Light', 
        ago: '1h 05m ago' 
      },
      feeding: { 
        type: 'Formula', 
        amount: '4oz', 
        ago: '45m ago' 
      },
      sleep: { 
        duration: { h: 1, m: 40 }, 
        ago: '2h 10m ago' 
      },
    },
  },
];
