export const mempoolFeeColors = [
  '557d00',
  '5d7d01',
  '637d02',
  '6d7d04',
  '757d05',
  '7d7d06',
  '867d08',
  '8c7d09',
  '957d0b',
  '9b7d0c',
  'a67d0e',
  'aa7d0f',
  'b27d10',
  'bb7d11',
  'bf7d12',
  'bf7815',
  'bf7319',
  'be6c1e',
  'be6820',
  'bd6125',
  'bd5c28',
  'bc552d',
  'bc4f30',
  'bc4a34',
  'bb4339',
  'bb3d3c',
  'bb373f',
  'ba3243',
  'b92b48',
  'b9254b',
  'b8214d',
  'b71d4f',
  'b61951',
  'b41453',
  'b30e55',
  'b10857',
  'b00259',
  'ae005b',
];

export const chartColors = [
  "#D81B60",
  "#8E24AA",
  "#5E35B1",
  "#3949AB",
  "#1E88E5",
  "#039BE5",
  "#00ACC1",
  "#00897B",
  "#43A047",
  "#7CB342",
  "#C0CA33",
  "#FDD835",
  "#FFB300",
  "#FB8C00",
  "#F4511E",
  "#6D4C41",
  "#757575",
  "#546E7A",
  "#b71c1c",
  "#880E4F",
  "#4A148C",
  "#311B92",
  "#1A237E",
  "#0D47A1",
  "#01579B",
  "#006064",
  "#004D40",
  "#1B5E20",
  "#33691E",
  "#827717",
  "#F57F17",
  "#FF6F00",
  "#E65100",
  "#BF360C",
  "#3E2723",
  "#212121",
  "#263238",
  "#801313",
];

export const poolsColor = {
  'unknown': '#FDD835',
};

export const feeLevels = [1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 30, 40, 50, 60, 70, 80, 90, 100, 125, 150, 175, 200,
  250, 300, 350, 400, 500, 600, 700, 800, 900, 1000, 1200, 1400, 1600, 1800, 2000];

export interface Language {
  code: string;
  name: string;
}

export const languages: Language[] = [
   { code: 'ar', name: 'العربية' },         // Arabic
// { code: 'bg', name: 'Български' },       // Bulgarian
// { code: 'bs', name: 'Bosanski' },        // Bosnian
// { code: 'ca', name: 'Català' },          // Catalan
   { code: 'cs', name: 'Čeština' },         // Czech
   { code: 'da', name: 'Dansk' },           // Danish
   { code: 'de', name: 'Deutsch' },         // German
// { code: 'et', name: 'Eesti' },           // Estonian
// { code: 'el', name: 'Ελληνικά' },        // Greek
   { code: 'en', name: 'English' },         // English
   { code: 'es', name: 'Español' },         // Spanish
// { code: 'eo', name: 'Esperanto' },       // Esperanto
// { code: 'eu', name: 'Euskara' },         // Basque
   { code: 'fa', name: 'فارسی' },           // Persian
   { code: 'fr', name: 'Français' },        // French
// { code: 'gl', name: 'Galego' },          // Galician
   { code: 'ko', name: '한국어' },          // Korean
// { code: 'hr', name: 'Hrvatski' },        // Croatian
// { code: 'id', name: 'Bahasa Indonesia' },// Indonesian
   { code: 'hi', name: 'हिन्दी' },             // Hindi
   { code: 'ne', name: 'नेपाली' },            // Nepalese
   { code: 'it', name: 'Italiano' },        // Italian
   { code: 'he', name: 'עברית' },           // Hebrew
   { code: 'ka', name: 'ქართული' },         // Georgian
// { code: 'lv', name: 'Latviešu' },        // Latvian
   { code: 'lt', name: 'Lietuvių' },        // Lithuanian
   { code: 'hu', name: 'Magyar' },          // Hungarian
   { code: 'mk', name: 'Македонски' },      // Macedonian
// { code: 'ms', name: 'Bahasa Melayu' },   // Malay
   { code: 'nl', name: 'Nederlands' },      // Dutch
   { code: 'ja', name: '日本語' },          // Japanese
   { code: 'nb', name: 'Norsk' },           // Norwegian Bokmål
// { code: 'nn', name: 'Norsk Nynorsk' },   // Norwegian Nynorsk
   { code: 'pl', name: 'Polski' },          // Polish
   { code: 'pt', name: 'Português' },       // Portuguese
// { code: 'pt-BR', name: 'Português (Brazil)' }, // Portuguese (Brazil)
   { code: 'ro', name: 'Română' },          // Romanian
   { code: 'ru', name: 'Русский' },         // Russian
// { code: 'sk', name: 'Slovenčina' },      // Slovak
   { code: 'sl', name: 'Slovenščina' },     // Slovenian
// { code: 'sr', name: 'Српски / srpski' }, // Serbian
// { code: 'sh', name: 'Srpskohrvatski / српскохрватски' },// Serbo-Croatian
   { code: 'fi', name: 'Suomi' },           // Finnish
   { code: 'sv', name: 'Svenska' },         // Swedish
   { code: 'th', name: 'ไทย' },             // Thai
   { code: 'tr', name: 'Türkçe' },          // Turkish
   { code: 'uk', name: 'Українська' },      // Ukrainian
   { code: 'vi', name: 'Tiếng Việt' },      // Vietnamese
   { code: 'zh', name: '中文' },            // Chinese
];

export const specialBlocks = {
  '0': {
    labelEvent: 'Genesis',
    labelEventCompleted: 'The Genesis of Bells',
    networks: ['mainnet', 'testnet'],
  },
  '210000': {
    labelEvent: 'Bells\'s 1st Halving',
    labelEventCompleted: 'Block Subsidy has halved to 25 BEL per block',
    networks: ['mainnet', 'testnet'],
  },
  '420000': {
    labelEvent: 'Bells\'s 2nd Halving',
    labelEventCompleted: 'Block Subsidy has halved to 12.5 BEL per block',
    networks: ['mainnet', 'testnet'],
  },
  '630000': {
    labelEvent: 'Bells\'s 3rd Halving',
    labelEventCompleted: 'Block Subsidy has halved to 6.25 BEL per block',
    networks: ['mainnet', 'testnet'],
  },
  '709632': {
    labelEvent: 'Taproot 🌱 activation',
    labelEventCompleted: 'Taproot 🌱 has been activated!',
    networks: ['mainnet'],
  },
  '840000': {
    labelEvent: 'Bells\'s 4th Halving',
    labelEventCompleted: 'Block Subsidy has halved to 3.125 BEL per block',
    networks: ['mainnet', 'testnet'],
  },
  '1050000': {
    labelEvent: 'Bells\'s 5th Halving',
    labelEventCompleted: 'Block Subsidy has halved to 1.5625 BEL per block',
    networks: ['mainnet', 'testnet'],
  },
  '1260000': {
    labelEvent: 'Bells\'s 6th Halving',
    labelEventCompleted: 'Block Subsidy has halved to 0.78125 BEL per block',
    networks: ['mainnet', 'testnet'],
  },
  '1470000': {
    labelEvent: 'Bells\'s 7th Halving',
    labelEventCompleted: 'Block Subsidy has halved to 0.390625 BEL per block',
    networks: ['mainnet', 'testnet'],
  },
  '1680000': {
    labelEvent: 'Bells\'s 8th Halving',
    labelEventCompleted: 'Block Subsidy has halved to 0.1953125 BEL per block',
    networks: ['mainnet', 'testnet'],
  },
  '1890000': {
    labelEvent: 'Bells\'s 9th Halving',
    labelEventCompleted: 'Block Subsidy has halved to 0.09765625 BEL per block',
    networks: ['mainnet', 'testnet'],
  },
  '2100000': {
    labelEvent: 'Bells\'s 10th Halving',
    labelEventCompleted: 'Block Subsidy has halved to 0.04882812 BEL per block',
    networks: ['mainnet', 'testnet'],
  },
  '2310000': {
    labelEvent: 'Bells\'s 11th Halving',
    labelEventCompleted: 'Block Subsidy has halved to 0.02441406 BEL per block',
    networks: ['mainnet', 'testnet'],
  },
  '2520000': {
    labelEvent: 'Bells\'s 12th Halving',
    labelEventCompleted: 'Block Subsidy has halved to 0.01220703 BEL per block',
    networks: ['mainnet', 'testnet'],
  },
  '2730000': {
    labelEvent: 'Bells\'s 13th Halving',
    labelEventCompleted: 'Block Subsidy has halved to 0.00610351 BEL per block',
    networks: ['mainnet', 'testnet'],
  },
  '2940000': {
    labelEvent: 'Bells\'s 14th Halving',
    labelEventCompleted: 'Block Subsidy has halved to 0.00305175 BEL per block',
    networks: ['mainnet', 'testnet'],
  },
  '3150000': {
    labelEvent: 'Bells\'s 15th Halving',
    labelEventCompleted: 'Block Subsidy has halved to 0.00152587 BEL per block',
    networks: ['mainnet', 'testnet'],
  }
};

export const fiatCurrencies = {
  AUD: {
    name: 'Australian Dollar',
    code: 'AUD',
    indexed: true,
  },
  CAD: {
    name: 'Canadian Dollar',
    code: 'CAD',
    indexed: true,
  },
  CHF: {
    name: 'Swiss Franc',
    code: 'CHF',
    indexed: true,
  },
  EUR: {
    name: 'Euro',
    code: 'EUR',
    indexed: true,
  },
  GBP: {
    name: 'Pound Sterling',
    code: 'GBP',
    indexed: true,
  },
  JPY: {
    name: 'Japanese Yen',
    code: 'JPY',
    indexed: true,
  },
  USD: {
    name: 'US Dollar',
    code: 'USD',
    indexed: true,
  },
};
