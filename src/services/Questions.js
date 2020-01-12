import RestUtilities from './RestUtilities';

const offered_services = [
    { label: "Ironing", value: '1' },
    { label: "Dish Washing", value: '2' },
    { label: "Cleaning", value: '3' },
    { label: "Dusting", value: '4' },
    { label: "Baby Sitting", value: '5' }
]
const questions = {
    "Ironing": [
        {
            "Question": "What is the name of the president of obama?",
            "Options": [
                "Barack",
                "Ghamdi",
                "Trump",
                "Millenia"
            ],
            "Answer": "Barack"
        },
        {
            "Question": "What  obama?",
            "Options": [
                "Barack",
                "Ghamdi",
                "Trump",
                "Millenia"
            ],
            "Answer": "Barack"
        },
        {
            "Question": "What is the name of the president of obama?",
            "Options": [
                "Barack",
                "Ghamdi",
                "Trump",
                "Millenia"
            ],
            "Answer": "Barack"
        },
        {
            "Question": "What is the name of the president of obama?",
            "Options": [
                "Barack",
                "Ghamdi",
                "Trump",
                "Millenia"
            ],
            "Answer": "Barack"
        },
        {
            "Question": "What is the name of the president of obama?",
            "Options": [
                "Barack",
                "Ghamdi",
                "Trump",
                "Millenia"
            ],
            "Answer": "Barack"
        }
    ],
    "Dusting": [
        {
            "Question": "Who made the bed color tea green?",
            "Options": [
                "Vegetable rice",
                "Munchurian",
                "The carpet because its jealous of the bed",
                "The sun"
            ],
            "Answer": "The sun"
        },
        {
            "Question": "Who made the bed color tea green?",
            "Options": [
                "Vegetable rice",
                "Munchurian",
                "The carpet because its jealous of the bed",
                "The sun"
            ],
            "Answer": "The sun"
        },
        {
            "Question": "Who made the bed color tea green?",
            "Options": [
                "Vegetable rice",
                "Munchurian",
                "The carpet because its jealous of the bed",
                "The sun"
            ],
            "Answer": "The sun"
        },
        {
            "Question": "Who made the bed color tea green?",
            "Options": [
                "Vegetable rice",
                "Munchurian",
                "The carpet because its jealous of the bed",
                "The sun"
            ],
            "Answer": "The sun"
        },
        {
            "Question": "Who made the bed color tea green?",
            "Options": [
                "Vegetable rice",
                "Munchurian",
                "The carpet because its jealous of the bed",
                "The sun"
            ],
            "Answer": "The sun"
        },
        {
            "Question": "Who made the bed color tea green?",
            "Options": [
                "Vegetable rice",
                "Munchurian",
                "The carpet because its jealous of the bed",
                "The sun"
            ],
            "Answer": "The sun"
        },
        {
            "Question": "Who made the bed color tea green?",
            "Options": [
                "Vegetable rice",
                "Munchurian",
                "The carpet because its jealous of the bed",
                "The sun"
            ],
            "Answer": "The sun"
        }
    ]
}

const generalQuestions={
    "results": [
      {
        "category": "Mythology",
        "type": "multiple",
        "difficulty": "easy",
        "question": "The ancient Roman god of war was commonly known as which of the following?",
        "correct_answer": "Mars",
        "incorrect_answers": [
          "Jupiter",
          "Juno",
          "Ares"
        ]
      },
      {
        "category": "Politics",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Who was the British Prime Minister at the outbreak of the Second World War?",
        "correct_answer": "Neville Chamberlain",
        "incorrect_answers": [
          "Clement Attlee",
          "Winston Churchill",
          "Stanley Baldwin"
        ]
      },
      {
        "category": "History",
        "type": "multiple",
        "difficulty": "medium",
        "question": "During the Mongolian invasions of Japan, what were the Mongol boats mostly stopped by?",
        "correct_answer": "Typhoons",
        "incorrect_answers": [
          "Tornados",
          "Economic depression",
          "Samurai"
        ]
      },
      {
        "category": "Geography",
        "type": "multiple",
        "difficulty": "medium",
        "question": "On a London Underground map, what colour is the Circle Line?",
        "correct_answer": "Yellow",
        "incorrect_answers": [
          "Red",
          "Blue",
          "Green"
        ]
      },
      {
        "category": "Geography",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What state is the largest state of the United States of America?",
        "correct_answer": "Alaska",
        "incorrect_answers": [
          "California",
          "Texas",
          "Washington"
        ]
      },
      {
        "category": "Entertainment: Music",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Ringo Starr of The Beatles mainly played what instrument?",
        "correct_answer": "Drums",
        "incorrect_answers": [
          "Bass",
          "Guitar",
          "Piano"
        ]
      },
      {
        "category": "Entertainment: Film",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Who played Batman in the 1997 film &quot;Batman and Robin&quot;?",
        "correct_answer": "George Clooney",
        "incorrect_answers": [
          "Michael Keaton",
          "Val Kilmer",
          "Christian Bale"
        ]
      },
      {
        "category": "Geography",
        "type": "multiple",
        "difficulty": "hard",
        "question": "The mountainous Khyber Pass connects which of the two following countries?",
        "correct_answer": "Afghanistan and Pakistan",
        "incorrect_answers": [
          "India and Nepal",
          "Pakistan and India",
          "Tajikistan and Kyrgyzstan"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What is the highest belt you can get in Taekwondo?",
        "correct_answer": "Black",
        "incorrect_answers": [
          "White",
          "Red",
          "Green"
        ]
      },
      {
        "category": "Science & Nature",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Who developed the first successful polio vaccine in the 1950s?",
        "correct_answer": "Jonas Salk",
        "incorrect_answers": [
          "John F. Enders",
          "Thomas Weller",
          "Frederick Robbins"
        ]
      },
      {
        "category": "Geography",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Gibraltar, located just south of the Iberian peninsula, is a territory of which West Europe country?",
        "correct_answer": "United Kingdom",
        "incorrect_answers": [
          "Spain",
          "Portugal",
          "France"
        ]
      },
      {
        "category": "Entertainment: Video Games",
        "type": "multiple",
        "difficulty": "medium",
        "question": "When was &quot;Garry&#039;s Mod&quot; released?",
        "correct_answer": "December 24, 2004",
        "incorrect_answers": [
          "November 13, 2004",
          "December 13, 2004",
          "November 12, 2004"
        ]
      },
      {
        "category": "Entertainment: Music",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Who is the lead singer of the British pop rock band Coldplay?",
        "correct_answer": "Chris Martin",
        "incorrect_answers": [
          "Jonny Buckland",
          "Guy Berryman",
          "Will Champion"
        ]
      },
      {
        "category": "Animals",
        "type": "multiple",
        "difficulty": "hard",
        "question": "What is the scientific name of the cheetah?",
        "correct_answer": "Acinonyx jubatus",
        "incorrect_answers": [
          "Panthera onca",
          "Lynx rufus",
          "Felis catus"
        ]
      },
      {
        "category": "Entertainment: Music",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which artist collaborated with American DJ Dillon Francis to release the song 2016 &quot;Need You&quot;?",
        "correct_answer": "NGHTMRE",
        "incorrect_answers": [
          "LOUDPVCK",
          "KRNE",
          "DVBBS"
        ]
      },
      {
        "category": "Vehicles",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which of these companies does NOT manufacture motorcycles?",
        "correct_answer": "Toyota",
        "incorrect_answers": [
          "Honda",
          "Kawasaki",
          "Yamaha"
        ]
      },
      {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What is the name of the popular animatronic singing fish prop, singing such hits such as &quot;Don&#039;t Worry, Be Happy&quot;?",
        "correct_answer": "Big Mouth Billy Bass",
        "incorrect_answers": [
          "Big Billy Bass",
          "Singing Fish",
          "Sardeen"
        ]
      },
      {
        "category": "Entertainment: Video Games",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which Game Boy from the Game Boy series of portable video game consoles was released first?",
        "correct_answer": "Game Boy Color",
        "incorrect_answers": [
          "Game Boy Advance",
          "Game Boy Micro",
          "Game Boy Advance SP"
        ]
      },
      {
        "category": "Geography",
        "type": "boolean",
        "difficulty": "medium",
        "question": "There exists an island named &quot;Java&quot;.",
        "correct_answer": "True",
        "incorrect_answers": [
          "False"
        ]
      },
      {
        "category": "Entertainment: Video Games",
        "type": "boolean",
        "difficulty": "easy",
        "question": "The 2005 video game &quot;Call of Duty 2: Big Red One&quot; is not available on PC.",
        "correct_answer": "True",
        "incorrect_answers": [
          "False"
        ]
      },
      {
        "category": "Entertainment: Books",
        "type": "multiple",
        "difficulty": "medium",
        "question": "The novel &quot;Of Mice And Men&quot; was written by what author? ",
        "correct_answer": "John Steinbeck ",
        "incorrect_answers": [
          "George Orwell",
          "Mark Twain ",
          "Harper Lee"
        ]
      },
      {
        "category": "Entertainment: Video Games",
        "type": "multiple",
        "difficulty": "medium",
        "question": "In Cook, Serve, Delicious!, which food is NOT included in the game?",
        "correct_answer": "Pie",
        "incorrect_answers": [
          "Shish Kabob",
          "Hamburger",
          "Lasagna"
        ]
      },
      {
        "category": "Entertainment: Video Games",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What video game sparked controversy because of its hidden &quot;Hot Coffee&quot; minigame?",
        "correct_answer": "Grand Theft Auto: San Andreas",
        "incorrect_answers": [
          "Grand Theft Auto: Vice City",
          "Hitman: Blood Money",
          "Cooking Mama"
        ]
      },
      {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "hard",
        "question": "Which of these was the name of a bug found in April 2014 in the publicly available OpenSSL cryptography library?",
        "correct_answer": "Heartbleed",
        "incorrect_answers": [
          "Shellshock",
          "Corrupted Blood",
          "Shellscript"
        ]
      },
      {
        "category": "Entertainment: Video Games",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What is the name of the main character in &quot;Life is Strange&quot;?",
        "correct_answer": "Maxine Caulfield",
        "incorrect_answers": [
          "Victoria Chase",
          "Stella Hill",
          "Chloe Price"
        ]
      },
      {
        "category": "Entertainment: Japanese Anime & Manga",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What year did the anime &quot;Himouto! Umaru-chan&quot; air?",
        "correct_answer": "2015",
        "incorrect_answers": [
          "2014",
          "2012",
          "2013"
        ]
      },
      {
        "category": "Entertainment: Video Games",
        "type": "multiple",
        "difficulty": "hard",
        "question": "Which character, in the game &quot;Morenatsu&quot;, has the most possible endings to their route, at a total of four different endings?",
        "correct_answer": "Shin Kuroi",
        "incorrect_answers": [
          "Kouya Aotsuki",
          "Soutarou Touno",
          "Torahiko Ooshima"
        ]
      },
      {
        "category": "Entertainment: Video Games",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What is the maximum HP in Terraria?",
        "correct_answer": "500",
        "incorrect_answers": [
          "400",
          "1000",
          "100"
        ]
      },
      {
        "category": "Entertainment: Music",
        "type": "multiple",
        "difficulty": "medium",
        "question": "&quot;Drink the Sea&quot; is an album by which electronic music artist?",
        "correct_answer": "The Glitch Mob",
        "incorrect_answers": [
          "Avicii",
          "XXYYXX",
          "Flux Pavilion"
        ]
      },
      {
        "category": "Entertainment: Comics",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Who authored The Adventures of Tintin?",
        "correct_answer": "Herg&eacute;",
        "incorrect_answers": [
          "E.P. Jacobs",
          "Rin Tin Tin",
          "Chic Young"
        ]
      },
      {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "hard",
        "question": "How many calories are in a 355 ml can of Pepsi Cola?",
        "correct_answer": "150",
        "incorrect_answers": [
          "200",
          "100",
          "155"
        ]
      },
      {
        "category": "Entertainment: Film",
        "type": "multiple",
        "difficulty": "easy",
        "question": "When does &quot;Rogue One: A Star Wars Story&quot; take place chronologically in the series?",
        "correct_answer": "Between Episode 3 and 4",
        "incorrect_answers": [
          "After Episode 6",
          "Before Episode 1",
          "Between Episode 4 and 5"
        ]
      },
      {
        "category": "Entertainment: Film",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Who voiced Metalbeard in &quot;The Lego Movie&quot;?",
        "correct_answer": "Nick Offerman",
        "incorrect_answers": [
          "Liam Neeson",
          "Morgan Freeman",
          "Will Arnet"
        ]
      },
      {
        "category": "Entertainment: Television",
        "type": "multiple",
        "difficulty": "hard",
        "question": "In Star Trek, what is the name of Spock&#039;s father?",
        "correct_answer": "Sarek",
        "incorrect_answers": [
          "Tuvok",
          "T&#039;Pal",
          "Surak"
        ]
      },
      {
        "category": "Entertainment: Board Games",
        "type": "multiple",
        "difficulty": "medium",
        "question": "In Yu-Gi-Oh, how does a player perform an Xyz Summon?",
        "correct_answer": "Overlay at least 2 Monsters of the Same Level",
        "incorrect_answers": [
          "Activate a Spell and Send Monsters to the Graveyard",
          "Add the Monsters&#039; Levels Together to Match the Xyz Monster",
          "Banish A Number of Monsters From Your Hand And Deck"
        ]
      },
      {
        "category": "Politics",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Who was the 45th President of the United States?",
        "correct_answer": "Donald Trump",
        "incorrect_answers": [
          "Barack Obama",
          "Bill Clinton",
          "George Bush"
        ]
      },
      {
        "category": "History",
        "type": "multiple",
        "difficulty": "medium",
        "question": "In which year was Constantinople conquered by the Turks?",
        "correct_answer": "1453",
        "incorrect_answers": [
          "1435",
          "1454",
          "1440"
        ]
      },
      {
        "category": "Entertainment: Japanese Anime & Manga",
        "type": "multiple",
        "difficulty": "hard",
        "question": "In &quot;One Piece&quot;, who confirms the existence of the legendary treasure, One Piece?",
        "correct_answer": "Edward &quot;Whitebeard&quot; Newgate",
        "incorrect_answers": [
          "Former Marine Fleet Admiral Sengoku",
          "Pirate King Gol D Roger",
          "Silvers Rayleigh"
        ]
      },
      {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "When did the online streaming service &quot;Mixer&quot; launch?",
        "correct_answer": "2016",
        "incorrect_answers": [
          "2013",
          "2009",
          "2011"
        ]
      },
      {
        "category": "Entertainment: Cartoon & Animations",
        "type": "boolean",
        "difficulty": "easy",
        "question": "Waylon Smithers from &quot;The Simpsons&quot; was originally black when he first appeared in the series.",
        "correct_answer": "True",
        "incorrect_answers": [
          "False"
        ]
      },
      {
        "category": "Science & Nature",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What animal takes part in Schr&ouml;dinger&#039;s most famous thought experiment?",
        "correct_answer": "Cat",
        "incorrect_answers": [
          "Dog",
          "Bat",
          "Butterfly"
        ]
      },
      {
        "category": "Entertainment: Japanese Anime & Manga",
        "type": "multiple",
        "difficulty": "hard",
        "question": "In &quot;Jewelpet Sunshine&quot;, what is the song that plays when Kanon and her friends bust out of prison?",
        "correct_answer": "I Don&#039;t Want to Miss a Thing",
        "incorrect_answers": [
          "Eye Of The Tiger",
          "Born to be Wild",
          "Ruby Ring"
        ]
      },
      {
        "category": "Geography",
        "type": "multiple",
        "difficulty": "hard",
        "question": "What is the most common climbing route for the second highest mountain in the world, K2?",
        "correct_answer": "Abruzzi Spur",
        "incorrect_answers": [
          "Magic Line",
          "Cesen Route",
          "Polish Line"
        ]
      },
      {
        "category": "Entertainment: Video Games",
        "type": "multiple",
        "difficulty": "medium",
        "question": "On which planet does the game Freedom Planet (2014) take place?",
        "correct_answer": "Avalice",
        "incorrect_answers": [
          "Freedom",
          "Galaxytrail",
          "Shang Mu"
        ]
      },
      {
        "category": "Geography",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which country was NOT part of the Soviet Union?",
        "correct_answer": "Romania",
        "incorrect_answers": [
          "Turkmenistan",
          "Belarus",
          "Tajikistan"
        ]
      },
      {
        "category": "Entertainment: Music",
        "type": "multiple",
        "difficulty": "hard",
        "question": "Pamina and Papageno are characters in what Mozart opera?",
        "correct_answer": "The Magic Flute",
        "incorrect_answers": [
          "The Marriage of Figaro",
          "The Impresario",
          "The Goose of Cairo"
        ]
      },
      {
        "category": "Geography",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Bridgetown is the capital of which island country in the Carribean?",
        "correct_answer": "Barbados",
        "incorrect_answers": [
          "Cuba",
          "Jamaica&lrm;",
          "Dominica"
        ]
      },
      {
        "category": "Entertainment: Cartoon & Animations",
        "type": "boolean",
        "difficulty": "medium",
        "question": "Night on Bald Mountain was one of the musical pieces featured in Disney&#039;s 1940&#039;s film Fantasia.",
        "correct_answer": "True",
        "incorrect_answers": [
          "False"
        ]
      },
      {
        "category": "Sports",
        "type": "boolean",
        "difficulty": "medium",
        "question": "In 2008, Usain Bolt set the world record for the 100 meters with one shoelace untied.",
        "correct_answer": "True",
        "incorrect_answers": [
          "False"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Who won the premier league title in the 2015-2016 season following a fairy tale run?",
        "correct_answer": "Leicester City",
        "incorrect_answers": [
          "Tottenham Hotspur",
          "Watford",
          "Stoke City"
        ]
      }
    ]
  }

export default class QuestionsService {
    fetchAllQuestions() {
        //   return RestUtilities.get('/api/contacts');
        return { questions }
    }
    fetchAllServices() {
        return { offered_services }
    }

    fetchQuestionByServiceId(service) {
        debugger
        return  questions[service] 
    }
    fetchAllGeneralQuestion(){
        return generalQuestions.results;
    }

}

