// Banner Term Array
const bannerArray = [
  {
    term: '6S',
    definition: 'Study, Sort, Shine, Set in order, Standardize, Sustain.',
  },
  {
    term: 'A3 Report',
    definition:
      'A problem solving tool developed to fit on the size of A3 (11x17) paper. This is a guide to keep all steps as concise as possible.',
  },
  {
    term: 'Andon',
    definition:
      'A visual light used to show the current status of a machine or process.',
  },
  {
    term: 'Autonomation',
    definition:
      "English word for 'jidoka' is autonomation, based on autonomous or automation. Others call it intelligent automation, and again others describe it as automation with a human touch.",
  },
  {
    term: 'Current State',
    definition:
      'Current condition of anything. How something is currently being done.',
  },
  {
    term: 'Cycle Time',
    definition:
      "The time it takes a product to be built or moved within its process ('The Process' is typicall defined as the smallest reasonable timed event). There is no speed limit for cycle time, it may be readily improved upon, but must be sustainable, not a singular event.",
  },
  {
    term: 'Defects',
    definition:
      'Waste of inspection, repair, and scrapping of material to which value has already been added.',
  },
  {
    term: 'FIFO',
    definition: 'First in, First out.',
  },
  {
    term: 'Five Whys',
    definition:
      'Asking five why questions to get to the root cause of a problem.',
  },
  {
    term: 'Flow',
    definition: 'Move or process in a forward motion.',
  },
  {
    term: 'Future State',
    definition:
      'The condition we imagine something can be in once changes have taken place.',
  },
  {
    term: 'Gemba',
    definition: "'The Real Place' the place where work occures.",
  },
  {
    term: 'Genchi Gembutsu',
    definition:
      "'Go and See.' Go to the real source for first-hand knowledge. Immerse yourself in the process at the gemba to get full comprehension before making decisions.",
  },
  {
    term: 'Hai',
    definition: "'I accept the challenge'",
  },
  {
    term: 'Hansei',
    definition:
      "'Reflection'. Reflect on what went right or what went wrong. Make changes if needed and try something else.",
  },
  {
    term: 'Heijunka',
    definition:
      'A process to help manage production by leveling peaks and valleys of customer demand.',
  },
  {
    term: 'Hoshin Kanri',
    definition:
      'A method for ensuring that the strategic goals of a company drive progress and action at every level within that company. This eliminates the waste that comes from inconsistent direction and poor communication. We use publicly declared goals on our Hoshin Kanri Boards.',
  },
  {
    term: 'Jidoka',
    definition:
      'Jidoka is the concept of stopping the process automatically if there are problems or abnormalities. “Autonomation”.',
  },
  {
    term: 'JIT (Just In Time)',
    definition:
      'Product delivered to customer or next process at exactly the moment they need it. Not one moment too soon, not moment too late.',
  },
  {
    term: 'Kaizen',
    definition:
      'Many small changes for the better, created by the people that do the work.',
  },
  {
    term: 'Kanban',
    definition:
      'A visual system that shows you to replace what has been consumed.',
  },
  {
    term: 'Kata',
    definition:
      'The practice of kata is the act of practicing a pattern so it becomes second nature. Having a shared understanding of how you want to improve. (Our kata, the In the Ditch way)',
  },
  {
    term: 'KPI (Key Performance Indicators)',
    definition:
      'These are ways to measure if we are winning or losing by monitoring performance objectives.',
  },
  {
    term: 'Lean',
    definition:
      "Creating value by minimizing waste. Lean is centered on making obvious what adds value by reducing everything else. 'Value' is any action or process that a customer would be willing to pay for.",
  },
  {
    term: 'Muda',
    definition:
      'Waste any step or process that does not add value in the eyes of the customer.',
  },
  {
    term: 'Over-production',
    definition:
      'Waste of making too much, too soon, too fast compared to the needs of the next process. Considered one of the worst wastes of company profits.',
  },
  {
    term: 'PDCA (Plan-Do-Check-Act)',
    definition:
      'A problem-solving method that leads you through continuous improvement cycles.',
  },
  {
    term: 'Poka-yoke',
    definition:
      'Device or procedure designed to help prevent the generation of most defects.',
  },
  {
    term: 'Push System',
    definition:
      'Building products that you have no customer for and trying to push those products onto the customer or next process.',
  },
  {
    term: 'Pull System',
    definition:
      'Building products at the pull of the customer; only building exactly what the customer wants, when they want it.',
  },
  {
    term: 'Pull the Rope',
    definition: 'To stop a machine or process any time a problem occurs.',
  },
  {
    term: 'Red Team',
    definition:
      'A team of people from various departments well versed in lean problem-solving techniques that people can call to help coach and mentor them through solving their problem within the company. They have the ability to get things done.',
  },
  {
    term: 'Socratic Method',
    definition:
      'Asking questions to stimulate critical thinking and to illuminate ideas.',
  },
  {
    term: 'Shadow Board',
    definition:
      'Location for tools which the tools location is clearly defined by the shadow of the tool.',
  },
  {
    term: 'Shu Ha Ri',
    definition:
      "Learning cycle to master a skill of a skill of a process. SHU - 'Follow our Processes and Protect Our Kata' Novice Learning fundamentals and techniques with help from a mentor. HA - 'Break Away' Proficient Able to perform at a high level without the need of a mentor. RI - 'Freedom to Create' Master Mastery of our kata to the point where you become the mentor",
  },
  {
    term: 'Stakeholder',
    definition:
      'Anyone who relies on the company, such as a supplier, customer communities, and employees',
  },
  {
    term: 'Supermarket',
    definition:
      'Area where items are stored in a defined, dedicated place and are continually replaced.',
  },
  {
    term: 'Value Added',
    definition:
      'Anything that adds value in the eyes of the customer. Something that the customer would be willing to pay more for.',
  },
  {
    term: "'T' Type Leader",
    definition:
      " A 'T' type leader grows like a tree. It starts with the roots. You gain deep-rooted understanding and experience in your gemba (the long stem of the 't'). Then you will broaden your leadership skills by branching out to gain exposure across departments and sometimes even the entire organization (the top horizontal part of the 'T'). Group leaders must be 'T' type leaders.",
  },
  {
    term: 'Takt Time',
    definition:
      'The rate at which product should be produced to satisfy customer and company needs. Takt time is a governor of time. Building faster than the takt time is overproduction and should be avoided. Takt time should only be changed by a group decision.',
  },
  {
    term: 'Teach and Learn',
    definition:
      'As you teach someone, they then have an obligation in our organization to teach others. Teach and learn, learn and teach. We want to teach the world it is a part of our very core.',
  },
  {
    term: 'Theory of Constraints (TOC)',
    definition:
      'Approach to capacity improvement by focusing on improving the constraint or bottleneck.',
  },
  {
    term: 'Toyota Production System (TPS)',
    definition:
      'A manufacturing strategy developed by Toyota motor corporation of Japan over a period of many years. TPS focuses on the complete elimination of waste from the manufacturing process.',
  },
  {
    term: 'Value Stream Mapping',
    definition:
      'A tool used to visually map the flow of production. Shows the current and future state of processes in a way that highlights opportunities for improvement.',
  },
  {
    term: 'Work in Process (WIP)',
    definition:
      'Adding value to the product that the customer is not willing to pay for yet',
  },
];

// Get objects to manipulate
const bannerTerm = document.getElementById('banner-term');
const bannerDef = document.getElementById('banner-definition');

// Get a random term from array
let bannerRand = [(bannerArray.length * Math.random()) | 0];

// Load function - Random term will load on page refresh or change
loadBanner();

// Replace
function loadBanner() {
  const bannerRandTerm = bannerArray[bannerRand];
  bannerTerm.innerText = bannerRandTerm.term;
  bannerDef.innerText = bannerRandTerm.definition;
}
