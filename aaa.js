

const fs = require("fs");
const path = require("path");

const directoryPath = path.resolve("./src/assets/data-dragon/16.4.1/data/img/spell/");

const suffixMap = {
  P: "Passive",
  q: "Q",
  w: "W",
  e: "E",
  r: "R"
};

const suffixes = [
  "q",
  "w",
  "e",
  "r",
  "Q",
  "W",
  "E",
  "R"
]

const champs = [
  "Aatrox",
    "Ahri",
    "Akali",
    "Akshan",
    "Alistar",
    "Ambessa",
    "Amumu",
    "Anivia",
    "Annie",
    "Aphelios",
    "Ashe",
    "AurelionSol",
    "Aurora",
    "Azir",
    "Bard",
    "Belveth",
    "Blitzcrank",
    "Brand",
    "Braum",
    "Briar",
    "Caitlyn",
    "Camille",
    "Cassiopeia",
    "Chogath",
    "Corki",
    "Darius",
    "Diana",
    "DrMundo",
    "Draven",
    "Ekko",
    "Elise",
    "Evelynn",
    "Ezreal",
    "Fiddlesticks",
    "Fiora",
    "Fizz",
    "Galio",
    "Gangplank",
    "Garen",
    "Gnar",
    "Gragas",
    "Graves",
    "Gwen",
    "Hecarim",
    "Heimerdinger",
    "Hwei",
    "Illaoi",
    "Irelia",
    "Ivern",
    "Janna",
    "JarvanIV",
    "Jax",
    "Jayce",
    "Jhin",
    "Jinx",
    "Kaisa",
    "Kalista",
    "Karma",
    "Karthus",
    "Kassadin",
    "Katarina",
    "Kayle",
    "Kayn",
    "Kennen",
    "Khazix",
    "Kindred",
    "Kled",
    "KogMaw",
    "KSante",
    "Leblanc",
    "LeeSin",
    "Leona",
    "Lillia",
    "Lissandra",
    "Lucian",
    "Lulu",
    "Lux",
    "Malphite",
    "Malzahar",
    "Maokai",
    "MasterYi",
    "Mel",
    "MonkeyKing",
    "Milio",
    "MissFortune",
    "Mordekaiser",
    "Morgana",
    "Naafiri",
    "Nami",
    "Nasus",
    "Nautilus",
    "Neeko",
    "Nidalee",
    "Nilah",
    "Nocturne",
    "Nunu",
    "Olaf",
    "Orianna",
    "Ornn",
    "Pantheon",
    "Poppy",
    "Pyke",
    "Qiyana",
    "Quinn",
    "Rakan",
    "Rammus",
    "RekSai",
    "Rell",
    "Renata",
    "Renekton",
    "Rengar",
    "Riven",
    "Rumble",
    "Ryze",
    "Samira",
    "Sejuani",
    "Senna",
    "Seraphine",
    "Sett",
    "Shaco",
    "Shen",
    "Shyvana",
    "Singed",
    "Sion",
    "Sivir",
    "Skarner",
    "Smolder",
    "Sona",
    "Soraka",
    "Swain",
    "Sylas",
    "Syndra",
    "TahmKench",
    "Taliyah",
    "Talon",
    "Taric",
    "Teemo",
    "Thresh",
    "Tristana",
    "Trundle",
    "Tryndamere",
    "TwistedFate",
    "Twitch",
    "Udyr",
    "Urgot",
    "Varus",
    "Vayne",
    "Veigar",
    "Velkoz",
    "Vex",
    "Vi",
    "Viego",
    "Viktor",
    "Vladimir",
    "Volibear",
    "Warwick",
    "Xayah",
    "Xerath",
    "XinZhao",
    "Yasuo",
    "Yone",
    "Yorick",
    "Yunara",
    "Yuumi",
    "Zaahen",
    "Zac",
    "Zed",
    "Zeri",
    "Ziggs",
    "Zilean",
    "Zoe",
    "Zyra"
]


function renameFilesInDirectory(dir) {
  if (!fs.existsSync(dir)) {
    throw new Error("Diretório não encontrado");
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  const files = entries.filter(entry => entry.isFile());

  console.log("Quantidade de arquivos:", files.length);


  for (const file of files) {
    const oldFileName = file.name;
    const oldFilePath = path.join(dir, oldFileName);

    const ext = path.extname(oldFileName);
    const baseName = path.basename(oldFileName, ext);

    const champName = champs.find(champ => baseName.includes(champ));

    if (!champName) continue;

    const rest = baseName.replace(champName, "");

    const suffixKey = rest.replace(/[^a-zA-Z]/g, "");

    // if (!suffixMap[suffixKey]) continue;

    // if (!baseName.includes(champs)) continue;

    // const [name, suffix] = baseName.split('_');

    // const newBaseName = `${champName}${suffixMap[suffixKey]}`;


    // if (!suffixMap[suffix]) continue;

    let newFileName = `${champName}${ext}`;
    let newFilePath = path.join(dir, newFileName);

    let counter = 1
    while (fs.existsSync(newFilePath)) {
      newFileName = `${champName}_${counter}${ext}`;
      newFilePath = path.join(dir, newFileName);
      counter++
    }

    if (fs.existsSync(newFilePath)) continue;

    fs.renameSync(oldFilePath, newFilePath);

    console.log(`Renomeado: ${oldFileName} -> ${newFileName}`);
  }
}

renameFilesInDirectory(directoryPath);
