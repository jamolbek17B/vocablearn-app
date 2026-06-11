export interface Word {
  id: string;
  english: string;
  uzbek: string;
  transcription: string;
  exampleEn: string;
  exampleUz: string;
}

export interface Unit {
  id: number;
  title: string;
  description: string;
  words: Word[];
}

export const units: Unit[] = [
  {
    id: 1,
    title: "Greetings & Basics",
    description: "Essential greeting phrases",
    words: [
      {
        id: "1-1",
        english: "Hello",
        uzbek: "Salom",
        transcription: "sah-LOM",
        exampleEn: "Hello, how are you?",
        exampleUz: "Salom, siz qanday?"
      },
      {
        id: "1-2",
        english: "Good morning",
        uzbek: "Xayr otkani",
        transcription: "KHAIR ot-KAH-nee",
        exampleEn: "Good morning, everyone!",
        exampleUz: "Xayr otkani, hammayu!"
      },
      {
        id: "1-3",
        english: "Thank you",
        uzbek: "Rahmat",
        transcription: "RAH-maht",
        exampleEn: "Thank you for your help.",
        exampleUz: "Sizning yordam uchun rahmat."
      },
      {
        id: "1-4",
        english: "Please",
        uzbek: "Iltimos",
        transcription: "eel-TEE-mos",
        exampleEn: "Please sit down.",
        exampleUz: "Iltimos, o'tiring."
      },
      {
        id: "1-5",
        english: "Yes",
        uzbek: "Ha",
        transcription: "HAH",
        exampleEn: "Yes, I agree.",
        exampleUz: "Ha, men roziman."
      },
      {
        id: "1-6",
        english: "No",
        uzbek: "Yo'q",
        transcription: "YOH-k",
        exampleEn: "No, thank you.",
        exampleUz: "Yo'q, rahmat."
      },
      {
        id: "1-7",
        english: "Excuse me",
        uzbek: "Kechirasiz",
        transcription: "keh-chee-RAH-seez",
        exampleEn: "Excuse me, where is the bathroom?",
        exampleUz: "Kechirasiz, hammom qayerda?"
      },
      {
        id: "1-8",
        english: "Sorry",
        uzbek: "Afsuski",
        transcription: "ahf-SOO-skee",
        exampleEn: "I'm sorry, I didn't understand.",
        exampleUz: "Afsuski, men tushunmadim."
      },
      {
        id: "1-9",
        english: "Goodbye",
        uzbek: "Xayr",
        transcription: "KHAIR",
        exampleEn: "Goodbye, see you tomorrow!",
        exampleUz: "Xayr, ertaga ko'rishamiz!"
      },
      {
        id: "1-10",
        english: "Good night",
        uzbek: "Xush tun",
        transcription: "KOOSH TOON",
        exampleEn: "Good night, sleep well.",
        exampleUz: "Xush tun, yaxshi uxlay."
      },
      {
        id: "1-11",
        english: "Nice to meet you",
        uzbek: "Sizi tanishdim",
        transcription: "see-ZEE tah-NISH-deem",
        exampleEn: "Nice to meet you, friend!",
        exampleUz: "Sizi tanishdim, do'stim!"
      },
      {
        id: "1-12",
        english: "How are you?",
        uzbek: "Siz qanday?",
        transcription: "seez kah-NAH-eye",
        exampleEn: "How are you today?",
        exampleUz: "Siz bugun qanday?"
      },
      {
        id: "1-13",
        english: "I'm fine",
        uzbek: "Men yaxshiman",
        transcription: "men YAHKH-shee-man",
        exampleEn: "I'm fine, thanks for asking.",
        exampleUz: "Men yaxshiman, so'rashuv uchun rahmat."
      },
      {
        id: "1-14",
        english: "What's your name?",
        uzbek: "Sizning ismingiz nima?",
        transcription: "seez-NING ees-MING-eez NEE-mah",
        exampleEn: "What's your name, please?",
        exampleUz: "Sizning ismingiz nima, iltimos?"
      },
      {
        id: "1-15",
        english: "My name is...",
        uzbek: "Mening ismim...",
        transcription: "meh-NING ees-MEEM",
        exampleEn: "My name is John.",
        exampleUz: "Mening ismim Jahon."
      },
      {
        id: "1-16",
        english: "Welcome",
        uzbek: "Xush kelibsiz",
        transcription: "KOOSH keh-LEEB-seez",
        exampleEn: "Welcome to our home!",
        exampleUz: "Bizning uyimizga xush kelibsiz!"
      },
      {
        id: "1-17",
        english: "You're welcome",
        uzbek: "Qarama-qarshi",
        transcription: "kah-RAH-mah KAHR-shee",
        exampleEn: "You're welcome, anytime!",
        exampleUz: "Qarama-qarshi, har doim!"
      },
      {
        id: "1-18",
        english: "Cheers",
        uzbek: "Hurray",
        transcription: "hoo-RAHR",
        exampleEn: "Cheers to your success!",
        exampleUz: "Sizning muvaffaqiyatiga hurray!"
      },
      {
        id: "1-19",
        english: "Take care",
        uzbek: "O'zingizga qarang",
        transcription: "oh-ZIN-gee-zga kah-RAHNG",
        exampleEn: "Take care of yourself!",
        exampleUz: "O'zingizga qarang!"
      },
      {
        id: "1-20",
        english: "Have a nice day",
        uzbek: "Yaxshi kun",
        transcription: "YAHKH-shee KOON",
        exampleEn: "Have a nice day!",
        exampleUz: "Sizga yaxshi kun!"
      }
    ]
  },
  {
    id: 2,
    title: "Family Members",
    description: "Learn family relationships",
    words: [
      {
        id: "2-1",
        english: "Father",
        uzbek: "Ota",
        transcription: "OH-tah",
        exampleEn: "My father is a doctor.",
        exampleUz: "Mening otam shifokor."
      },
      {
        id: "2-2",
        english: "Mother",
        uzbek: "Ona",
        transcription: "OH-nah",
        exampleEn: "My mother loves cooking.",
        exampleUz: "Mening onam pishirishni yaxshi ko'radi."
      },
      {
        id: "2-3",
        english: "Brother",
        uzbek: "Aka",
        transcription: "AH-kah",
        exampleEn: "My brother plays football.",
        exampleUz: "Mening akam futbol o'ynaydi."
      },
      {
        id: "2-4",
        english: "Sister",
        uzbek: "Opa",
        transcription: "OH-pah",
        exampleEn: "My sister is a teacher.",
        exampleUz: "Mening opam o'qituvchi."
      },
      {
        id: "2-5",
        english: "Grandfather",
        uzbek: "Buva",
        transcription: "BOO-vah",
        exampleEn: "My grandfather tells great stories.",
        exampleUz: "Mening buvam zo'r hikoyalar aytadi."
      },
      {
        id: "2-6",
        english: "Grandmother",
        uzbek: "Bobo",
        transcription: "BOH-boh",
        exampleEn: "My grandmother bakes delicious bread.",
        exampleUz: "Mening bobom mazali non pisiradi."
      },
      {
        id: "2-7",
        english: "Son",
        uzbek: "O'g'il",
        transcription: "oh-GIL",
        exampleEn: "Their son is five years old.",
        exampleUz: "Ularning o'g'ili besh yoshli."
      },
      {
        id: "2-8",
        english: "Daughter",
        uzbek: "Qiz",
        transcription: "KEEZ",
        exampleEn: "Their daughter studies at university.",
        exampleUz: "Ularning qizi universitetda o'qiydi."
      },
      {
        id: "2-9",
        english: "Husband",
        uzbek: "Er",
        transcription: "ER",
        exampleEn: "Her husband is very kind.",
        exampleUz: "Uning eri juda mehriban."
      },
      {
        id: "2-10",
        english: "Wife",
        uzbek: "Xotun",
        transcription: "kho-TOON",
        exampleEn: "His wife is a nurse.",
        exampleUz: "Uning xotuni medsestra."
      },
      {
        id: "2-11",
        english: "Uncle",
        uzbek: "Amaki",
        transcription: "ah-mah-KEE",
        exampleEn: "My uncle lives in the city.",
        exampleUz: "Mening amamaki shaharda yasaydi."
      },
      {
        id: "2-12",
        english: "Aunt",
        uzbek: "Amaki xotun",
        transcription: "ah-mah-KEE kho-TOON",
        exampleEn: "My aunt is very generous.",
        exampleUz: "Mening amaki xotun juda saxiy."
      },
      {
        id: "2-13",
        english: "Cousin",
        uzbek: "Qurama",
        transcription: "koo-RAH-mah",
        exampleEn: "My cousin studies engineering.",
        exampleUz: "Mening qurama muhandislik o'qiydi."
      },
      {
        id: "2-14",
        english: "Child",
        uzbek: "Bola",
        transcription: "BOH-lah",
        exampleEn: "The child plays in the park.",
        exampleUz: "Bola parkda o'ynaydi."
      },
      {
        id: "2-15",
        english: "Baby",
        uzbek: "Chaqaloq",
        transcription: "chah-kah-LOHK",
        exampleEn: "The baby is sleeping.",
        exampleUz: "Chaqaloq uxlayapti."
      },
      {
        id: "2-16",
        english: "Parent",
        uzbek: "Ota-ona",
        transcription: "OH-tah OH-nah",
        exampleEn: "Parents care about their children.",
        exampleUz: "Ota-onalar o'z bolalari haqida g'amxo'r."
      },
      {
        id: "2-17",
        english: "Sibling",
        uzbek: "Aka-opa",
        transcription: "AH-kah OH-pah",
        exampleEn: "She has two siblings.",
        exampleUz: "Uning ikkita aka-opasi bor."
      },
      {
        id: "2-18",
        english: "Twin",
        uzbek: "Egizak",
        transcription: "eh-gee-ZAHK",
        exampleEn: "They are twins.",
        exampleUz: "Ular egizak."
      },
      {
        id: "2-19",
        english: "Family",
        uzbek: "Oila",
        transcription: "oh-ee-LAH",
        exampleEn: "Family is very important to us.",
        exampleUz: "Oila bizga juda muhim."
      },
      {
        id: "2-20",
        english: "Relative",
        uzbek: "Qarimdosh",
        transcription: "kah-REEM-dosh",
        exampleEn: "My cousin is my closest relative.",
        exampleUz: "Mening qurama mening yaqin qarimdosh."
      }
    ]
  },
  {
    id: 3,
    title: "Colors",
    description: "Master the color vocabulary",
    words: [
      {
        id: "3-1",
        english: "Red",
        uzbek: "Qizil",
        transcription: "kee-ZEL",
        exampleEn: "The red rose is beautiful.",
        exampleUz: "Qizil gul go'zal."
      },
      {
        id: "3-2",
        english: "Blue",
        uzbek: "Ko'k",
        transcription: "KOH-k",
        exampleEn: "The sky is blue today.",
        exampleUz: "Kunduz osmoni ko'k."
      },
      {
        id: "3-3",
        english: "Green",
        uzbek: "Yashil",
        transcription: "yah-SHEL",
        exampleEn: "The green trees are fresh.",
        exampleUz: "Yashil daraxtlar yangi."
      },
      {
        id: "3-4",
        english: "Yellow",
        uzbek: "Sariq",
        transcription: "sah-REEK",
        exampleEn: "The yellow sun is bright.",
        exampleUz: "Sariq quyosh yorqin."
      },
      {
        id: "3-5",
        english: "Orange",
        uzbek: "To'q sariq",
        transcription: "tohk SAH-reek",
        exampleEn: "The orange is delicious.",
        exampleUz: "Apelsin mazali."
      },
      {
        id: "3-6",
        english: "Purple",
        uzbek: "Qoralabot",
        transcription: "koh-rah-LAH-bot",
        exampleEn: "The purple flower is rare.",
        exampleUz: "Qoralabot gul kam."
      },
      {
        id: "3-7",
        english: "Pink",
        uzbek: "Pushti",
        transcription: "POOSH-tee",
        exampleEn: "She wore a pink dress.",
        exampleUz: "U pushti ko'ylak kiydi."
      },
      {
        id: "3-8",
        english: "Brown",
        uzbek: "Jigarrang",
        transcription: "jee-gar-RAHNG",
        exampleEn: "The brown table is sturdy.",
        exampleUz: "Jigarrang stol mustahkam."
      },
      {
        id: "3-9",
        english: "Black",
        uzbek: "Qora",
        transcription: "koh-RAH",
        exampleEn: "He has a black car.",
        exampleUz: "Uning qora mashinasi bor."
      },
      {
        id: "3-10",
        english: "White",
        uzbek: "Oq",
        transcription: "OK",
        exampleEn: "The white snow is cold.",
        exampleUz: "Oq qor sovuq."
      },
      {
        id: "3-11",
        english: "Gray",
        uzbek: "Kulrang",
        transcription: "kool-RAHNG",
        exampleEn: "The gray clouds are moving.",
        exampleUz: "Kulrang bulutlar harakat qilmoqda."
      },
      {
        id: "3-12",
        english: "Silver",
        uzbek: "Kumush",
        transcription: "koo-MOOSH",
        exampleEn: "The silver ring is precious.",
        exampleUz: "Kumush halqa qimmatli."
      },
      {
        id: "3-13",
        english: "Gold",
        uzbek: "Oltin",
        transcription: "ol-TEEN",
        exampleEn: "She has a gold necklace.",
        exampleUz: "Uning oltin bo'ynoq bor."
      },
      {
        id: "3-14",
        english: "Beige",
        uzbek: "Och sariq",
        transcription: "otch SAH-reek",
        exampleEn: "The beige walls are calm.",
        exampleUz: "Och sariq devorlar tinch."
      },
      {
        id: "3-15",
        english: "Turquoise",
        uzbek: "Firuzaviy",
        transcription: "fee-roo-zah-VEE",
        exampleEn: "The turquoise water is clear.",
        exampleUz: "Firuzaviy suv toza."
      },
      {
        id: "3-16",
        english: "Maroon",
        uzbek: "Qora-qizil",
        transcription: "koh-RAH kee-ZEL",
        exampleEn: "The maroon fabric is elegant.",
        exampleUz: "Qora-qizil to'quv o'rnatilgan."
      },
      {
        id: "3-17",
        english: "Navy",
        uzbek: "To'q ko'k",
        transcription: "tohk KOH-k",
        exampleEn: "He wore a navy blue suit.",
        exampleUz: "U to'q ko'k kostyum kiydi."
      },
      {
        id: "3-18",
        english: "Lime",
        uzbek: "Yangi yashil",
        transcription: "YAHNG-ee yah-SHEL",
        exampleEn: "The lime green shirt is bright.",
        exampleUz: "Yangi yashil ko'ylak yorqin."
      },
      {
        id: "3-19",
        english: "Tan",
        uzbek: "Och jigarrang",
        transcription: "otch jee-gar-RAHNG",
        exampleEn: "The tan color is neutral.",
        exampleUz: "Och jigarrang rang neytral."
      },
      {
        id: "3-20",
        english: "Copper",
        uzbek: "Mislang",
        transcription: "mes-LAHNG",
        exampleEn: "The copper pot is warm.",
        exampleUz: "Mislang to'pni iliq."
      }
    ]
  },
  {
    id: 4,
    title: "Numbers",
    description: "Count and calculate",
    words: [
      {
        id: "4-1",
        english: "Zero",
        uzbek: "Nol",
        transcription: "NOHL",
        exampleEn: "Zero means nothing.",
        exampleUz: "Nol hech narsa demak."
      },
      {
        id: "4-2",
        english: "One",
        uzbek: "Bir",
        transcription: "BEER",
        exampleEn: "I have one book.",
        exampleUz: "Menda bir kitob bor."
      },
      {
        id: "4-3",
        english: "Two",
        uzbek: "Ikki",
        transcription: "EEK-kee",
        exampleEn: "I have two cats.",
        exampleUz: "Menda ikki mushuk bor."
      },
      {
        id: "4-4",
        english: "Three",
        uzbek: "Uch",
        transcription: "OOCH",
        exampleEn: "Three apples please.",
        exampleUz: "Uch olma iltimos."
      },
      {
        id: "4-5",
        english: "Four",
        uzbek: "To'rt",
        transcription: "TOHRT",
        exampleEn: "I have four sisters.",
        exampleUz: "Menda to'rt opa bor."
      },
      {
        id: "4-6",
        english: "Five",
        uzbek: "Besh",
        transcription: "BESH",
        exampleEn: "Five plus five is ten.",
        exampleUz: "Besh plyus besh o'n."
      },
      {
        id: "4-7",
        english: "Six",
        uzbek: "Olti",
        transcription: "ol-TEE",
        exampleEn: "Six people are here.",
        exampleUz: "Olti odam shu yerda."
      },
      {
        id: "4-8",
        english: "Seven",
        uzbek: "Yetti",
        transcription: "YET-tee",
        exampleEn: "Seven days in a week.",
        exampleUz: "Haftada yetti kun."
      },
      {
        id: "4-9",
        english: "Eight",
        uzbek: "Sakkiz",
        transcription: "sak-KEEZ",
        exampleEn: "Eight hours of work.",
        exampleUz: "Sakkiz soat ish."
      },
      {
        id: "4-10",
        english: "Nine",
        uzbek: "To'qqiz",
        transcription: "tohk-KEEZ",
        exampleEn: "Nine months of pregnancy.",
        exampleUz: "Homila to'qqiz oylik."
      },
      {
        id: "4-11",
        english: "Ten",
        uzbek: "O'n",
        transcription: "OHN",
        exampleEn: "Ten fingers on hands.",
        exampleUz: "Qollarda o'n barmoq."
      },
      {
        id: "4-12",
        english: "Eleven",
        uzbek: "O'n bir",
        transcription: "OHN BEER",
        exampleEn: "Eleven players on a team.",
        exampleUz: "Jamada o'n bir o'yinchi."
      },
      {
        id: "4-13",
        english: "Twelve",
        uzbek: "O'n ikki",
        transcription: "OHN EEK-kee",
        exampleEn: "Twelve months in a year.",
        exampleUz: "Yilda o'n ikki oy."
      },
      {
        id: "4-14",
        english: "Twenty",
        uzbek: "Yigirma",
        transcription: "yee-GEAR-mah",
        exampleEn: "Twenty students in the class.",
        exampleUz: "Sinfda yigirma o'quvchi."
      },
      {
        id: "4-15",
        english: "Thirty",
        uzbek: "O'ttiz",
        transcription: "OHT-teez",
        exampleEn: "Thirty days in April.",
        exampleUz: "Aprelda o'ttiz kun."
      },
      {
        id: "4-16",
        english: "Fifty",
        uzbek: "Ellik",
        transcription: "EL-leek",
        exampleEn: "Fifty percent discount.",
        exampleUz: "Ellik foiz chegirma."
      },
      {
        id: "4-17",
        english: "Hundred",
        uzbek: "Yuz",
        transcription: "YOOZ",
        exampleEn: "One hundred dollars.",
        exampleUz: "Bir yuz dollar."
      },
      {
        id: "4-18",
        english: "Thousand",
        uzbek: "Ming",
        transcription: "MEENG",
        exampleEn: "One thousand people.",
        exampleUz: "Bir ming odam."
      },
      {
        id: "4-19",
        english: "Million",
        uzbek: "Million",
        transcription: "mee-lee-ON",
        exampleEn: "One million stars.",
        exampleUz: "Bir million yulduz."
      },
      {
        id: "4-20",
        english: "Count",
        uzbek: "Hisoblash",
        transcription: "hee-SOB-lahsh",
        exampleEn: "Can you count to ten?",
        exampleUz: "Siz o'ngacha hisoblay olasizmi?"
      }
    ]
  },
  {
    id: 5,
    title: "Food & Drinks",
    description: "Delicious vocabulary",
    words: [
      {
        id: "5-1",
        english: "Apple",
        uzbek: "Olma",
        transcription: "OHL-mah",
        exampleEn: "An apple a day keeps the doctor away.",
        exampleUz: "Har kun olma shifokorni yo'q qiladi."
      },
      {
        id: "5-2",
        english: "Bread",
        uzbek: "Non",
        transcription: "NOHN",
        exampleEn: "Fresh bread smells good.",
        exampleUz: "Yangi non yaxshi hidga ega."
      },
      {
        id: "5-3",
        english: "Water",
        uzbek: "Su",
        transcription: "SOO",
        exampleEn: "Drink plenty of water.",
        exampleUz: "Ko'p su iching."
      },
      {
        id: "5-4",
        english: "Milk",
        uzbek: "Sut",
        transcription: "SOOT",
        exampleEn: "Milk is good for bones.",
        exampleUz: "Sut suyaklar uchun yaxshi."
      },
      {
        id: "5-5",
        english: "Coffee",
        uzbek: "Qahva",
        transcription: "KAH-vah",
        exampleEn: "I drink coffee every morning.",
        exampleUz: "Har ertalab qahva ichaman."
      },
      {
        id: "5-6",
        english: "Tea",
        uzbek: "Choy",
        transcription: "CHOY",
        exampleEn: "Tea is a healthy drink.",
        exampleUz: "Choy sog'lom ichimlik."
      },
      {
        id: "5-7",
        english: "Rice",
        uzbek: "Guruch",
        transcription: "goo-ROOCH",
        exampleEn: "Rice is a staple food.",
        exampleUz: "Guruch asosiy ovqat."
      },
      {
        id: "5-8",
        english: "Chicken",
        uzbek: "Tovuq",
        transcription: "toh-VOOK",
        exampleEn: "Roasted chicken is delicious.",
        exampleUz: "Qovurilgan tovuq mazali."
      },
      {
        id: "5-9",
        english: "Fish",
        uzbek: "Baliq",
        transcription: "bah-LEEK",
        exampleEn: "Fish is rich in protein.",
        exampleUz: "Baliq oqsil bilan boyitilgan."
      },
      {
        id: "5-10",
        english: "Egg",
        uzbek: "Tuxum",
        transcription: "too-KHOOM",
        exampleEn: "Eggs are nutritious.",
        exampleUz: "Tuxumlar sof ovqat."
      },
      {
        id: "5-11",
        english: "Cheese",
        uzbek: "Pishloq",
        transcription: "pish-LOHK",
        exampleEn: "Cheese has calcium.",
        exampleUz: "Pishloqda kaltsiy bor."
      },
      {
        id: "5-12",
        english: "Butter",
        uzbek: "Sariyog'",
        transcription: "sah-ree-YOH-g",
        exampleEn: "Butter is made from milk.",
        exampleUz: "Sariyog' sutdan yasaladi."
      },
      {
        id: "5-13",
        english: "Oil",
        uzbek: "Yog'",
        transcription: "YOH-g",
        exampleEn: "Cooking oil is essential.",
        exampleUz: "Pishirish yog'i zarur."
      },
      {
        id: "5-14",
        english: "Sugar",
        uzbek: "Shakar",
        transcription: "shah-KAHR",
        exampleEn: "Sugar makes food sweet.",
        exampleUz: "Shakar ovqatni shirin qiladi."
      },
      {
        id: "5-15",
        english: "Salt",
        uzbek: "Namak",
        transcription: "nah-MAHK",
        exampleEn: "Add a pinch of salt.",
        exampleUz: "Bir ovchi namak qo'shing."
      },
      {
        id: "5-16",
        english: "Vegetable",
        uzbek: "Sabzi",
        transcription: "sahb-ZEE",
        exampleEn: "Vegetables are healthy.",
        exampleUz: "Sabzavotlar sog'lom."
      },
      {
        id: "5-17",
        english: "Fruit",
        uzbek: "Meva",
        transcription: "meh-VAH",
        exampleEn: "Eat more fruit daily.",
        exampleUz: "Har kuni ko'proq meva yеzing."
      },
      {
        id: "5-18",
        english: "Meat",
        uzbek: "Gusht",
        transcription: "GOOSHT",
        exampleEn: "Meat provides protein.",
        exampleUz: "Gusht oqsil beradi."
      },
      {
        id: "5-19",
        english: "Soup",
        uzbek: "Shorva",
        transcription: "SHOR-vah",
        exampleEn: "Hot soup warms you up.",
        exampleUz: "Issiq shorva sizni ilintiradi."
      },
      {
        id: "5-20",
        english: "Dessert",
        uzbek: "Shirin ovqat",
        transcription: "SHEE-reen OVK-aht",
        exampleEn: "Dessert is after the meal.",
        exampleUz: "Shirin ovqat ovqattan keyin."
      }
    ]
  },
  {
    id: 6,
    title: "Days & Time",
    description: "Master temporal vocabulary",
    words: [
      {
        id: "6-1",
        english: "Monday",
        uzbek: "Dushanba",
        transcription: "doo-SHAHN-bah",
        exampleEn: "Monday is the start of the week.",
        exampleUz: "Dushanba haftaning boshlanishi."
      },
      {
        id: "6-2",
        english: "Tuesday",
        uzbek: "Seshanba",
        transcription: "seh-SHAHN-bah",
        exampleEn: "Tuesday is my work day.",
        exampleUz: "Seshanba mening ish kunI."
      },
      {
        id: "6-3",
        english: "Wednesday",
        uzbek: "Chorshanba",
        transcription: "chor-SHAHN-bah",
        exampleEn: "Wednesday is midweek.",
        exampleUz: "Chorshanba hafta o'rtasi."
      },
      {
        id: "6-4",
        english: "Thursday",
        uzbek: "Payshanba",
        transcription: "pie-SHAHN-bah",
        exampleEn: "Thursday before Friday.",
        exampleUz: "Payshanba juma oldin."
      },
      {
        id: "6-5",
        english: "Friday",
        uzbek: "Juma",
        transcription: "JOO-mah",
        exampleEn: "Friday is a special day.",
        exampleUz: "Juma maxsus kun."
      },
      {
        id: "6-6",
        english: "Saturday",
        uzbek: "Shanba",
        transcription: "SHAHN-bah",
        exampleEn: "Saturday is fun day.",
        exampleUz: "Shanba qiziqarli kun."
      },
      {
        id: "6-7",
        english: "Sunday",
        uzbek: "Yakshanba",
        transcription: "yahk-SHAHN-bah",
        exampleEn: "Sunday is rest day.",
        exampleUz: "Yakshanba dam olish kunI."
      },
      {
        id: "6-8",
        english: "Morning",
        uzbek: "Ertalab",
        transcription: "er-tah-LAHB",
        exampleEn: "Good morning, sunshine!",
        exampleUz: "Ertalab salom, quyosh!"
      },
      {
        id: "6-9",
        english: "Afternoon",
        uzbek: "Tushlik",
        transcription: "TOOSH-leek",
        exampleEn: "Afternoon is after noon.",
        exampleUz: "Tushlik o'ldan keyin."
      },
      {
        id: "6-10",
        english: "Evening",
        uzbek: "Kechqurun",
        transcription: "kech-KOOR-oon",
        exampleEn: "Evening is my favorite time.",
        exampleUz: "Kechqurun mening sevimli vaqti."
      },
      {
        id: "6-11",
        english: "Night",
        uzbek: "Tun",
        transcription: "TOON",
        exampleEn: "Night is peaceful.",
        exampleUz: "Tun tinch."
      },
      {
        id: "6-12",
        english: "Hour",
        uzbek: "Soat",
        transcription: "so-AHT",
        exampleEn: "One hour has sixty minutes.",
        exampleUz: "Bir soat oltmish minutli."
      },
      {
        id: "6-13",
        english: "Minute",
        uzbek: "Minut",
        transcription: "mee-NOOT",
        exampleEn: "Wait one minute please.",
        exampleUz: "Bir minut kuting iltimos."
      },
      {
        id: "6-14",
        english: "Second",
        uzbek: "Sekund",
        transcription: "sek-OOND",
        exampleEn: "Just a second.",
        exampleUz: "Faqat bir sekund."
      },
      {
        id: "6-15",
        english: "Today",
        uzbek: "Bugun",
        transcription: "boo-GOON",
        exampleEn: "Today is a beautiful day.",
        exampleUz: "Bugun go'zal kun."
      },
      {
        id: "6-16",
        english: "Yesterday",
        uzbek: "Kecha",
        transcription: "KEH-chah",
        exampleEn: "Yesterday was interesting.",
        exampleUz: "Kecha qiziqarli edi."
      },
      {
        id: "6-17",
        english: "Tomorrow",
        uzbek: "Ertaga",
        transcription: "er-TAH-gah",
        exampleEn: "Tomorrow is Friday.",
        exampleUz: "Ertaga juma."
      },
      {
        id: "6-18",
        english: "Week",
        uzbek: "Hafta",
        transcription: "HAHF-tah",
        exampleEn: "One week has seven days.",
        exampleUz: "Bir haftada yetti kun."
      },
      {
        id: "6-19",
        english: "Month",
        uzbek: "Oy",
        transcription: "OY",
        exampleEn: "January is the first month.",
        exampleUz: "Yanvar birinchi oyI."
      },
      {
        id: "6-20",
        english: "Year",
        uzbek: "Yil",
        transcription: "YEEL",
        exampleEn: "Happy New Year everyone!",
        exampleUz: "Yangi yilga ibtidoiy!"
      }
    ]
  },
  {
    id: 7,
    title: "Body Parts",
    description: "Know your anatomy",
    words: [
      {
        id: "7-1",
        english: "Head",
        uzbek: "Bosh",
        transcription: "BOSH",
        exampleEn: "I have a headache.",
        exampleUz: "Mening bosh og'riyapti."
      },
      {
        id: "7-2",
        english: "Hair",
        uzbek: "Soch",
        transcription: "SOCH",
        exampleEn: "Her hair is long.",
        exampleUz: "Uning sochi uzun."
      },
      {
        id: "7-3",
        english: "Face",
        uzbek: "Yuz",
        transcription: "YOOZ",
        exampleEn: "Wash your face daily.",
        exampleUz: "Har kuni yuzni yuvish."
      },
      {
        id: "7-4",
        english: "Eye",
        uzbek: "Ko'z",
        transcription: "KOHZ",
        exampleEn: "Eyes are the window of soul.",
        exampleUz: "Ko'zlar ruhning derazasI."
      },
      {
        id: "7-5",
        english: "Nose",
        uzbek: "Burun",
        transcription: "boo-ROON",
        exampleEn: "Your nose is runny.",
        exampleUz: "Sizning burni oqib turibdi."
      },
      {
        id: "7-6",
        english: "Mouth",
        uzbek: "Og'iz",
        transcription: "oh-GEZ",
        exampleEn: "Mouth is for eating and talking.",
        exampleUz: "Og'iz ovqat va so'zlash uchun."
      },
      {
        id: "7-7",
        english: "Tooth",
        uzbek: "Tish",
        transcription: "TESH",
        exampleEn: "Brush your teeth twice daily.",
        exampleUz: "Tishni kun ikki marta arang."
      },
      {
        id: "7-8",
        english: "Tongue",
        uzbek: "Til",
        transcription: "TEEL",
        exampleEn: "Tongue helps taste food.",
        exampleUz: "Til ovqatning ta'mini biladi."
      },
      {
        id: "7-9",
        english: "Ear",
        uzbek: "Quloq",
        transcription: "koo-LOHK",
        exampleEn: "Ears hear sounds.",
        exampleUz: "Quloqlar tovushlarni eshitadi."
      },
      {
        id: "7-10",
        english: "Neck",
        uzbek: "Bo'yn",
        transcription: "BOYB-n",
        exampleEn: "He wore a tie around his neck.",
        exampleUz: "U bo'yni atrofida galstuk kiydi."
      },
      {
        id: "7-11",
        english: "Shoulder",
        uzbek: "Yelka",
        transcription: "yel-KAH",
        exampleEn: "Rest your head on my shoulder.",
        exampleUz: "Boshing mening yelkama yasalsin."
      },
      {
        id: "7-12",
        english: "Arm",
        uzbek: "Qo'l",
        transcription: "KOHL",
        exampleEn: "Strong arms are helpful.",
        exampleUz: "Kuchli qo'llar foydali."
      },
      {
        id: "7-13",
        english: "Elbow",
        uzbek: "Tirsak",
        transcription: "teer-SAHK",
        exampleEn: "Elbow joint is flexible.",
        exampleUz: "Tirsak bo'gini egiluvchi."
      },
      {
        id: "7-14",
        english: "Hand",
        uzbek: "Qo'l",
        transcription: "KOHL",
        exampleEn: "Hands are very useful.",
        exampleUz: "Qo'llar juda foydali."
      },
      {
        id: "7-15",
        english: "Finger",
        uzbek: "Barmoq",
        transcription: "bar-MOHK",
        exampleEn: "Fingers type on keyboard.",
        exampleUz: "Barmoqlar klaviaturada yozadi."
      },
      {
        id: "7-16",
        english: "Chest",
        uzbek: "Ko'krak",
        transcription: "kohk-RAHK",
        exampleEn: "Heart is in the chest.",
        exampleUz: "Yurak ko'krakda."
      },
      {
        id: "7-17",
        english: "Stomach",
        uzbek: "Qorin",
        transcription: "koh-REEN",
        exampleEn: "Stomach digests food.",
        exampleUz: "Qorin ovqatni hazm qiladi."
      },
      {
        id: "7-18",
        english: "Leg",
        uzbek: "Oyoq",
        transcription: "oh-YOK",
        exampleEn: "Legs help us run.",
        exampleUz: "Oyoqlar bizga yugirish uchun yordam beradi."
      },
      {
        id: "7-19",
        english: "Knee",
        uzbek: "Tizza",
        transcription: "tee-ZAH",
        exampleEn: "Knee joint is important.",
        exampleUz: "Tizza bo'gini muhim."
      },
      {
        id: "7-20",
        english: "Foot",
        uzbek: "Poyasi",
        transcription: "poh-yah-SEE",
        exampleEn: "Foot is at the end of leg.",
        exampleUz: "Poya oyoqning oxirida."
      }
    ]
  },
  {
    id: 8,
    title: "School & Education",
    description: "Academic vocabulary",
    words: [
      {
        id: "8-1",
        english: "School",
        uzbek: "Maktab",
        transcription: "mahk-TAHB",
        exampleEn: "I go to school every day.",
        exampleUz: "Men har kuni maktabga boramanT."
      },
      {
        id: "8-2",
        english: "Teacher",
        uzbek: "O'qituvchi",
        transcription: "oh-kee-TOOV-chee",
        exampleEn: "My teacher is very kind.",
        exampleUz: "Mening o'qituvchi juda mehriban."
      },
      {
        id: "8-3",
        english: "Student",
        uzbek: "O'quvchi",
        transcription: "oh-KOOV-chee",
        exampleEn: "Students study hard.",
        exampleUz: "O'quvchilar qat'iy o'qiydi."
      },
      {
        id: "8-4",
        english: "Book",
        uzbek: "Kitob",
        transcription: "kee-TOHB",
        exampleEn: "I read a book daily.",
        exampleUz: "Men har kuni kitob o'qiyaman."
      },
      {
        id: "8-5",
        english: "Pen",
        uzbek: "Qalam",
        transcription: "kah-LAHM",
        exampleEn: "Write with a pen.",
        exampleUz: "Qalamga yoz."
      },
      {
        id: "8-6",
        english: "Pencil",
        uzbek: "Qarandosh",
        transcription: "kah-RAHN-dosh",
        exampleEn: "Pencils are erasable.",
        exampleUz: "Qarandosh o'chirish mumkin."
      },
      {
        id: "8-7",
        english: "Paper",
        uzbek: "Qog'oz",
        transcription: "KOH-gohz",
        exampleEn: "Write on paper.",
        exampleUz: "Qog'ozga yoz."
      },
      {
        id: "8-8",
        english: "Desk",
        uzbek: "Stol",
        transcription: "STOHL",
        exampleEn: "Put your books on the desk.",
        exampleUz: "Kitoblarni stolga qo'y."
      },
      {
        id: "8-9",
        english: "Chair",
        uzbek: "Stul",
        transcription: "STOOL",
        exampleEn: "Sit on the chair.",
        exampleUz: "Stulga o'tir."
      },
      {
        id: "8-10",
        english: "Classroom",
        uzbek: "Sinf",
        transcription: "SENF",
        exampleEn: "The classroom is clean.",
        exampleUz: "Sinf toza."
      },
      {
        id: "8-11",
        english: "Exam",
        uzbek: "Imtihon",
        transcription: "eem-tee-HOHN",
        exampleEn: "The exam is difficult.",
        exampleUz: "Imtihon qiyin."
      },
      {
        id: "8-12",
        english: "Test",
        uzbek: "Test",
        transcription: "TEST",
        exampleEn: "Take the test tomorrow.",
        exampleUz: "Ertaga testni o'tkazing."
      },
      {
        id: "8-13",
        english: "Grade",
        uzbek: "Baho",
        transcription: "bah-HOH",
        exampleEn: "Good grades are important.",
        exampleUz: "Yaxshi baholar muhim."
      },
      {
        id: "8-14",
        english: "Homework",
        uzbek: "Uy vazifasi",
        transcription: "OOY vah-zee-FAH-see",
        exampleEn: "Complete your homework.",
        exampleUz: "O'z uy vazifasini tugatisham."
      },
      {
        id: "8-15",
        english: "Lesson",
        uzbek: "Dars",
        transcription: "DAHRS",
        exampleEn: "Today's lesson is interesting.",
        exampleUz: "Bugungi dars qiziqarli."
      },
      {
        id: "8-16",
        english: "Subject",
        uzbek: "Fan",
        transcription: "FAHN",
        exampleEn: "Math is my favorite subject.",
        exampleUz: "Matematika mening sevimli fanI."
      },
      {
        id: "8-17",
        english: "Library",
        uzbek: "Kutubxona",
        transcription: "koo-toob-KHOH-nah",
        exampleEn: "The library has many books.",
        exampleUz: "Kutubxonada ko'p kitob bor."
      },
      {
        id: "8-18",
        english: "University",
        uzbek: "Universitet",
        transcription: "oo-nee-ver-see-TET",
        exampleEn: "She studies at university.",
        exampleUz: "U universitetda o'qiydi."
      },
      {
        id: "8-19",
        english: "Education",
        uzbek: "Ta'lim",
        transcription: "tah-LEEM",
        exampleEn: "Education is important.",
        exampleUz: "Ta'lim muhim."
      },
      {
        id: "8-20",
        english: "Learn",
        uzbek: "O'rganmoq",
        transcription: "oh-GAN-moq",
        exampleEn: "We learn something new daily.",
        exampleUz: "Har kuni yangi narsani o'rganaymiz."
      }
    ]
  },
  {
    id: 9,
    title: "Animals",
    description: "Discover wildlife",
    words: [
      {
        id: "9-1",
        english: "Dog",
        uzbek: "It",
        transcription: "EET",
        exampleEn: "Dogs are loyal pets.",
        exampleUz: "Itlar sodiq hauvanlar."
      },
      {
        id: "9-2",
        english: "Cat",
        uzbek: "Mushuk",
        transcription: "moo-SHOOK",
        exampleEn: "Cats like to sleep.",
        exampleUz: "Mushuklar uxlashni yaxshi ko'radi."
      },
      {
        id: "9-3",
        english: "Bird",
        uzbek: "Qush",
        transcription: "KOOSH",
        exampleEn: "Birds sing in the morning.",
        exampleUz: "Qushlar ertalab qo'shiqlar."
      },
      {
        id: "9-4",
        english: "Fish",
        uzbek: "Baliq",
        transcription: "bah-LEEK",
        exampleEn: "Fish live in water.",
        exampleUz: "Baliqlar suvda yasaydi."
      },
      {
        id: "9-5",
        english: "Horse",
        uzbek: "Ot",
        transcription: "OHT",
        exampleEn: "Horses are strong animals.",
        exampleUz: "Otlar kuchli hayvonlar."
      },
      {
        id: "9-6",
        english: "Cow",
        uzbek: "Sigir",
        transcription: "see-GEER",
        exampleEn: "Cows give milk.",
        exampleUz: "Sigirlar sut beradi."
      },
      {
        id: "9-7",
        english: "Chicken",
        uzbek: "Tovuq",
        transcription: "toh-VOOK",
        exampleEn: "Chickens lay eggs.",
        exampleUz: "Tovuqlar tuxum beradi."
      },
      {
        id: "9-8",
        english: "Lion",
        uzbek: "Sher",
        transcription: "SHEHR",
        exampleEn: "Lions are kings of jungle.",
        exampleUz: "Sherlar o'rmonning shohi."
      },
      {
        id: "9-9",
        english: "Tiger",
        uzbek: "Qoplajoq",
        transcription: "kohp-lah-JOHK",
        exampleEn: "Tigers are striped cats.",
        exampleUz: "Qoplajoqlar chiziqli mushuklar."
      },
      {
        id: "9-10",
        english: "Elephant",
        uzbek: "Fil",
        transcription: "FEEL",
        exampleEn: "Elephants are huge animals.",
        exampleUz: "Fillar katta hayvonlar."
      },
      {
        id: "9-11",
        english: "Monkey",
        uzbek: "Majun",
        transcription: "mah-JOON",
        exampleEn: "Monkeys swing on trees.",
        exampleUz: "Majunlar daraxtlarda bulanadi."
      },
      {
        id: "9-12",
        english: "Bear",
        uzbek: "Ayiq",
        transcription: "ah-YEE-k",
        exampleEn: "Bears are dangerous.",
        exampleUz: "Ayiqlar xavfli."
      },
      {
        id: "9-13",
        english: "Snake",
        uzbek: "Ilon",
        transcription: "ee-LOHN",
        exampleEn: "Some snakes are poisonous.",
        exampleUz: "Ba'zi ilonlar zaharli."
      },
      {
        id: "9-14",
        english: "Spider",
        uzbek: "O'rgimchak",
        transcription: "ohr-GEEM-chahk",
        exampleEn: "Spiders have eight legs.",
        exampleUz: "O'rgimchaklar sakkiz oyoqli."
      },
      {
        id: "9-15",
        english: "Butterfly",
        uzbek: "Parpana",
        transcription: "par-pah-NAH",
        exampleEn: "Butterflies are beautiful.",
        exampleUz: "Parpanalar go'zal."
      },
      {
        id: "9-16",
        english: "Bee",
        uzbek: "Asalari",
        transcription: "ah-sah-LAH-ree",
        exampleEn: "Bees make honey.",
        exampleUz: "Asalari asal yasaydi."
      },
      {
        id: "9-17",
        english: "Ant",
        uzbek: "Chumoli",
        transcription: "choo-MOH-lee",
        exampleEn: "Ants are industrious.",
        exampleUz: "Chumoli mehnatsevar."
      },
      {
        id: "9-18",
        english: "Crocodile",
        uzbek: "Timsoh",
        transcription: "teem-SOH",
        exampleEn: "Crocodiles are fierce.",
        exampleUz: "Timsohlar shiddatli."
      },
      {
        id: "9-19",
        english: "Penguin",
        uzbek: "Pingvin",
        transcription: "peeng-VEEN",
        exampleEn: "Penguins live in ice.",
        exampleUz: "Pingvinlar muzda yasaydi."
      },
      {
        id: "9-20",
        english: "Animal",
        uzbek: "Hayvon",
        transcription: "hai-VOHN",
        exampleEn: "Animals deserve protection.",
        exampleUz: "Hayvonlar himoyani hak qiladi."
      }
    ]
  },
  {
    id: 10,
    title: "Weather & Nature",
    description: "Understand the environment",
    words: [
      {
        id: "10-1",
        english: "Sun",
        uzbek: "Quyosh",
        transcription: "koo-YOSH",
        exampleEn: "The sun is bright.",
        exampleUz: "Quyosh yorqin."
      },
      {
        id: "10-2",
        english: "Moon",
        uzbek: "Oy",
        transcription: "OY",
        exampleEn: "The moon shines at night.",
        exampleUz: "Oy tunning yoruqligini beradi."
      },
      {
        id: "10-3",
        english: "Star",
        uzbek: "Yulduz",
        transcription: "yool-DOOZ",
        exampleEn: "Stars twinkle in the sky.",
        exampleUz: "Yulduzlar osmonda pojchasish."
      },
      {
        id: "10-4",
        english: "Cloud",
        uzbek: "Bulut",
        transcription: "boo-LOOT",
        exampleEn: "White clouds float by.",
        exampleUz: "Oq bulutlar suzib o'tadi."
      },
      {
        id: "10-5",
        english: "Rain",
        uzbek: "Yomg'ir",
        transcription: "yohm-GIR",
        exampleEn: "Rain falls from clouds.",
        exampleUz: "Yomg'ir bulutlardan to'shadi."
      },
      {
        id: "10-6",
        english: "Snow",
        uzbek: "Qor",
        transcription: "KOHR",
        exampleEn: "Snow is cold.",
        exampleUz: "Qor sovuq."
      },
      {
        id: "10-7",
        english: "Wind",
        uzbek: "Shamol",
        transcription: "shah-MOHL",
        exampleEn: "The wind is strong.",
        exampleUz: "Shamol kuchli."
      },
      {
        id: "10-8",
        english: "Thunder",
        uzbek: "Momaqaldiroq",
        transcription: "moh-mah-kahl-dee-ROHK",
        exampleEn: "Thunder sounds scary.",
        exampleUz: "Momaqaldiroq qo'rqinchli ovoz."
      },
      {
        id: "10-9",
        english: "Lightning",
        uzbek: "Chaqnash",
        transcription: "chahk-NAHSH",
        exampleEn: "Lightning flashes across sky.",
        exampleUz: "Chaqnash osmonda chaqnamoqda."
      },
      {
        id: "10-10",
        english: "Weather",
        uzbek: "Ob-hava",
        transcription: "OHB-hah-vah",
        exampleEn: "What's the weather like?",
        exampleUz: "Ob-hava qanday?"
      },
      {
        id: "10-11",
        english: "Hot",
        uzbek: "Issiq",
        transcription: "ees-SEEK",
        exampleEn: "It's hot today.",
        exampleUz: "Bugun issiq."
      },
      {
        id: "10-12",
        english: "Cold",
        uzbek: "Sovuq",
        transcription: "soh-VOOK",
        exampleEn: "Winter is cold.",
        exampleUz: "Qish sovuq."
      },
      {
        id: "10-13",
        english: "Warm",
        uzbek: "Iliq",
        transcription: "ee-LEEK",
        exampleEn: "Spring weather is warm.",
        exampleUz: "Bahor ob-havasi iliq."
      },
      {
        id: "10-14",
        english: "Dry",
        uzbek: "Quruq",
        transcription: "koo-ROOK",
        exampleEn: "Desert air is dry.",
        exampleUz: "Cho'l havosi quruq."
      },
      {
        id: "10-15",
        english: "Wet",
        uzbek: "Nam",
        transcription: "NAHM",
        exampleEn: "Wet clothes need drying.",
        exampleUz: "Nam kiyimlar quritish kerak."
      },
      {
        id: "10-16",
        english: "Tree",
        uzbek: "Daraxt",
        transcription: "dah-RAHKHT",
        exampleEn: "Trees give us oxygen.",
        exampleUz: "Daraxtlar bizga kislorod beradi."
      },
      {
        id: "10-17",
        english: "Flower",
        uzbek: "Gul",
        transcription: "GOOL",
        exampleEn: "Flowers are beautiful.",
        exampleUz: "Gullar go'zal."
      },
      {
        id: "10-18",
        english: "Mountain",
        uzbek: "Tog'",
        transcription: "TOH-g",
        exampleEn: "Mountains are tall.",
        exampleUz: "Tog'lar baland."
      },
      {
        id: "10-19",
        english: "River",
        uzbek: "Daryo",
        transcription: "dar-YOH",
        exampleEn: "Rivers flow to the sea.",
        exampleUz: "Daryolar dengizga oqadi."
      },
      {
        id: "10-20",
        english: "Nature",
        uzbek: "Tabiat",
        transcription: "tah-bee-AHT",
        exampleEn: "We must protect nature.",
        exampleUz: "Biz tabiatni himoya qilishimiz kerak."
      }
    ]
  }
];
