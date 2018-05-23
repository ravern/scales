// Categories
const CATEGORY_NORMAL = 'Scales';
const CATEGORY_THIRD = 'Scales a Third Apart';
const CATEGORY_SIXTH = 'Scales a Sixth Apart';
const CATEGORY_LEGATO = 'Legato Scales in Thirds & Chormatic Scales in Minor Thirds';
const CATEGORY_CHROMATIC = 'Chromatic Scales a Minor Third Apart';
const CATEGORY_WHOLE = 'Whole Tone Scale';
const CATEGORY_ARPEGGIOS = 'Arpeggios';
const CATEGORY_DOMINANT = 'Dominant Sevenths';
const CATEGORY_DIMINISHED = 'Diminished Sevenths';
const CATEGORIES = [
  CATEGORY_NORMAL,
  CATEGORY_THIRD,
  CATEGORY_SIXTH,
  CATEGORY_LEGATO,
  CATEGORY_CHROMATIC,
  CATEGORY_WHOLE,
  CATEGORY_ARPEGGIOS,
  CATEGORY_DOMINANT,
  CATEGORY_DIMINISHED,
];

// Attributes
const CONTROL_STACATTO = 'Staccato';
const CONTROL_LEGATO = 'Legato';
const HANDS_TOGETHER = 'Hands together, one octave apart';
const HANDS_RIGHT = 'Right hand';
const HANDS_LEFT = 'Left hand';
const INVERSION_ROOT = 'Root Position';
const INVERSION_FIRST = 'First Inversion';
const INVERSION_SECOND = 'Second Inversion';
const ATTRIBUTES = {};
ATTRIBUTES[CONTROL_STACATTO] = 50;
ATTRIBUTES[CONTROL_LEGATO] = 50;
ATTRIBUTES[HANDS_TOGETHER] = 95;
ATTRIBUTES[HANDS_RIGHT] = 2.5;
ATTRIBUTES[HANDS_LEFT] = 2.5;
ATTRIBUTES[INVERSION_ROOT] = 33;
ATTRIBUTES[INVERSION_FIRST] = 33;
ATTRIBUTES[INVERSION_SECOND] = 34;

// Scales
const SCALES = {}; 
SCALES[CATEGORY_NORMAL] = {
  attributes: [
    [CONTROL_STACATTO, CONTROL_LEGATO],
    [HANDS_TOGETHER, HANDS_RIGHT, HANDS_LEFT],
  ],
  names: [
    'C Major',
    'C Minor Melodic',
    'C Minor Harmonic',
    'D Major',
    'D Minor Melodic',
    'D Minor Harmonic',
    'B Major',
    'B Minor Melodic',
    'B Minor Harmonic',
    'F# Major',
    'F# Minor Melodic',
    'F# Minor Harmonic',
    'F Major',
    'F Minor Melodic',
    'F Minor Harmonic',
    'Eb Major',
    'Eb Minor Melodic',
    'Eb Minor Harmonic',
    'Ab Major',
    'G# Minor Melodic',
    'G# Minor Harmonic',
    'Db Major',
    'C# Minor Melodic',
    'C# Minor Harmonic',
  ],
};
SCALES[CATEGORY_THIRD] = {
  attributes: [
    [CONTROL_STACATTO, CONTROL_LEGATO],
    [HANDS_TOGETHER],
  ],
  names: [
    'C Major',
    'C Minor Harmonic',
    'D Major',
    'D Minor Harmonic',
    'B Major',
    'B Minor Harmonic',
    'F# Major',
    'F# Minor Harmonic',
    'F Major',
    'F Minor Harmonic',
    'Eb Major',
    'Eb Minor Harmonic',
    'Ab Major',
    'G# Minor Harmonic',
    'Db Major',
    'C# Minor Harmonic',
  ],
};
SCALES[CATEGORY_SIXTH] = {
  attributes: [
    [CONTROL_STACATTO, CONTROL_LEGATO],
    [HANDS_TOGETHER],
  ],
  names: [
    'C Major',
    'C Minor Harmonic',
    'D Major',
    'D Minor Harmonic',
    'B Major',
    'B Minor Harmonic',
    'F# Major',
    'F# Minor Harmonic',
    'F Major ',
    'F Minor Harmonic',
    'Eb Major',
    'Eb Minor Harmonic',
    'Ab Major',
    'G# Minor Harmonic',
    'Db Major',
    'C# Minor Harmonic',
  ],
};
SCALES[CATEGORY_LEGATO] = {
  attributes: [],
  names: [
    'C Major R.H,',
    'C Major L.H.',
    'Bb Major R.H.',
    'Bb Major L.H.',
    'Beginning on A# and C# R.H.',
    'Beginning on A# and C# L.H.',
  ],
};
SCALES[CATEGORY_CHROMATIC] = {
  attributes: [
    [CONTROL_STACATTO, CONTROL_LEGATO],
    [HANDS_TOGETHER],
  ],
  names: [
    '(C Eb)',
    '(C# E)',
    '(D F)',
    '(D# F#)',
    '(E G)',
    '(F Ab)',
    '(F# A)',
    '(G Bb)',
    '(G# B)',
    '(A C)',
    '(A# C#)',
    '(B D)',
  ],
};
SCALES[CATEGORY_WHOLE] = {
  attributes: [
    [CONTROL_LEGATO],
    [HANDS_TOGETHER, HANDS_LEFT, HANDS_RIGHT],
  ],
  names: [
    'Beginning on E',
  ],
};
SCALES[CATEGORY_ARPEGGIOS] = {
  attributes: [
    [INVERSION_ROOT, INVERSION_FIRST, INVERSION_SECOND],
    [CONTROL_LEGATO],
    [HANDS_TOGETHER, HANDS_LEFT, HANDS_RIGHT],
  ],
  names: [
    'C Major',
    'C Minor',
    'D Major',
    'D Minor',
    'B Major',
    'B Minor',
    'F# Major',
    'F# Minor',
    'F Major',
    'F Minor',
    'Eb Major',
    'Eb Major',
    'Ab Major',
    'G# Minor',
    'Db Major',
    'C# Minor',
  ],
};
SCALES[CATEGORY_DOMINANT] = {
  attributes: [
    [CONTROL_LEGATO],
    [HANDS_TOGETHER, HANDS_LEFT, HANDS_RIGHT],
  ],
  names: [
    'Key of C',
    'Key of D',
    'Key of B ',
    'Key of F#',
    'Key of F',
    'Key of Eb',
    'Key of Ab',
    'Key of Db',
  ],
};
SCALES[CATEGORY_DIMINISHED] = {
  attributes: [
    [CONTROL_LEGATO],
    [HANDS_TOGETHER, HANDS_LEFT, HANDS_RIGHT],
  ],
  names: [
    'Beginning on A',
    'Beginning on Bb',
    'Beginning on B',
    'Beginning on C',
    'Beginning on C#',
    'Beginning on D',
    'Beginning on Eb',
    'Beginning on E',
    'Beginning on F',
    'Beginning on F#',
    'Beginning on G',
    'Beginning on Ab',
  ],
};

$(document).ready(function() {
  let category = CATEGORY_NORMAL;
  let previous;

  previous = next(category, previous);

  $('.category').change(function() {
    category = $('.category').val();
    next(category);
  });

  $('.generate').click(function() {
    previous = next(category);
  });

  $(document).keypress(function(e) {
    if (e.key == ' ') {
      next(category);
    }
  });
});

function next(category, previous) {
  const scales = SCALES[category];

  let name;
  while (true) {
    name = scales.names[Math.floor((Math.random() * scales.names.length))];
    if (name != previous) {
      break
    }
  }

  let attributes = [];
  for (const attrs of scales.attributes) {
    attributes.push(randomAttribute(attrs));
  }

  const main = $('.main');
  main.empty();
  main.append($('<span></span>').addClass('name').text(name));
  for (const attribute of attributes) {
    main.append($('<span></span>').addClass('attribute').text(attribute));
  }

  return name;
}

function randomAttribute(attributes) {
  let sum = 0;
  for (const attribute of attributes) {
    sum += ATTRIBUTES[attribute];
  }
  let random = Math.floor(Math.random() * sum);
  for (const attribute of attributes) {
    random -= ATTRIBUTES[attribute];
    if (random < 0) {
      return attribute;
    }
  }
}
