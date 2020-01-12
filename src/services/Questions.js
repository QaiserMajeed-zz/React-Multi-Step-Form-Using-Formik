import RestUtilities from './RestUtilities';

const offered_services = [
    { label: "Ironing", text: 'Ironing' },
    { label: "Dish Washing", text: 'Ironing' },
    { label: "Cleaning", text: '3' },
    { label: "Dusting", text: 'Dusting' },
    { label: "Baby Sitting", text: '5' }
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

}

