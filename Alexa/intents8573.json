{
    "interactionModel": {
        "languageModel": {
            "invocationName": "intents eight five seven three",
            "intents": [
                {
                    "name": "AMAZON.CancelIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.HelpIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.StopIntent",
                    "samples": []
                },
                {
                    "name": "HelloWorldIntent",
                    "slots": [],
                    "samples": [
                        "hello",
                        "how are you",
                        "say hi world",
                        "say hi",
                        "hi",
                        "say hello world",
                        "say hello"
                    ]
                },
                {
                    "name": "AMAZON.NavigateHomeIntent",
                    "samples": []
                },
                {
                    "name": "feelingsIntent",
                    "slots": [
                        {
                            "name": "feelings",
                            "type": "feelingsType",
                            "samples": [
                                "I feel {feelings}"
                            ]
                        }
                    ],
                    "samples": [
                        "I feel {feelings}"
                    ]
                },
                {
                    "name": "sleepIntent",
                    "slots": [
                        {
                            "name": "sleep",
                            "type": "sleepType",
                            "samples": [
                                "I slept {sleep}"
                            ]
                        }
                    ],
                    "samples": [
                        "I slept {sleep}"
                    ]
                },
                {
                    "name": "symptomIntent",
                    "slots": [
                        {
                            "name": "symptoms",
                            "type": "symptomType",
                            "samples": [
                                "{symptoms}",
                                "I have {symptoms}"
                            ]
                        }
                    ],
                    "samples": [
                        "{symptoms}",
                        "I have {symptoms}"
                    ]
                },
                {
                    "name": "brusqueIntent",
                    "slots": [
                        {
                            "name": "brusque",
                            "type": "brusqueType"
                        }
                    ],
                    "samples": [
                        "{brusque}"
                    ]
                }
            ],
            "types": [
                {
                    "name": "feelingsType",
                    "values": [
                        {
                            "name": {
                                "value": "bad"
                            }
                        },
                        {
                            "name": {
                                "value": "good"
                            }
                        }
                    ]
                },
                {
                    "name": "sleepType",
                    "values": [
                        {
                            "name": {
                                "value": "badly"
                            }
                        },
                        {
                            "name": {
                                "value": "well"
                            }
                        }
                    ]
                },
                {
                    "name": "symptomType",
                    "values": [
                        {
                            "name": {
                                "value": "no symptoms",
                                "synonyms": [
                                    "zero symptoms"
                                ]
                            }
                        },
                        {
                            "name": {
                                "value": "upset stomach",
                                "synonyms": [
                                    "stomach flu",
                                    "an upset stomach"
                                ]
                            }
                        },
                        {
                            "name": {
                                "value": "cold",
                                "synonyms": [
                                    "a flu",
                                    "the flu",
                                    "flu",
                                    "a cold"
                                ]
                            }
                        },
                        {
                            "name": {
                                "value": "fever",
                                "synonyms": [
                                    "a fever"
                                ]
                            }
                        }
                    ]
                },
                {
                    "name": "brusqueType",
                    "values": [
                        {
                            "name": {
                                "value": "bad",
                                "synonyms": [
                                    "horribly",
                                    "horrible",
                                    "awfully",
                                    "terribly",
                                    "terrible",
                                    "awful",
                                    "badly"
                                ]
                            }
                        },
                        {
                            "name": {
                                "value": "good",
                                "synonyms": [
                                    "excellent",
                                    "fantastic",
                                    "great",
                                    "well"
                                ]
                            }
                        },
                        {
                            "name": {
                                "value": "no",
                                "synonyms": [
                                    "not really",
                                    "none",
                                    "nope"
                                ]
                            }
                        },
                        {
                            "name": {
                                "value": "yes",
                                "synonyms": [
                                    "kind of",
                                    "sort of",
                                    "a little",
                                    "some",
                                    "yeah",
                                    "yep"
                                ]
                            }
                        }
                    ]
                }
            ]
        },
        "dialog": {
            "intents": [
                {
                    "name": "feelingsIntent",
                    "confirmationRequired": false,
                    "prompts": {},
                    "slots": [
                        {
                            "name": "feelings",
                            "type": "feelingsType",
                            "confirmationRequired": false,
                            "elicitationRequired": true,
                            "prompts": {
                                "elicitation": "Elicit.Slot.194192705126.1423823795265"
                            }
                        }
                    ]
                },
                {
                    "name": "sleepIntent",
                    "confirmationRequired": false,
                    "prompts": {},
                    "slots": [
                        {
                            "name": "sleep",
                            "type": "sleepType",
                            "confirmationRequired": false,
                            "elicitationRequired": true,
                            "prompts": {
                                "elicitation": "Elicit.Slot.1048143825734.1500765155924"
                            }
                        }
                    ]
                },
                {
                    "name": "symptomIntent",
                    "confirmationRequired": false,
                    "prompts": {},
                    "slots": [
                        {
                            "name": "symptoms",
                            "type": "symptomType",
                            "confirmationRequired": false,
                            "elicitationRequired": true,
                            "prompts": {
                                "elicitation": "Elicit.Slot.987524269915.79052327456"
                            }
                        }
                    ]
                },
                {
                    "name": "brusqueIntent",
                    "confirmationRequired": false,
                    "prompts": {},
                    "slots": [
                        {
                            "name": "brusque",
                            "type": "brusqueType",
                            "confirmationRequired": false,
                            "elicitationRequired": false,
                            "prompts": {}
                        }
                    ]
                }
            ],
            "delegationStrategy": "ALWAYS"
        },
        "prompts": [
            {
                "id": "Elicit.Slot.194192705126.1423823795265",
                "variations": [
                    {
                        "type": "PlainText",
                        "value": "How are you feeling?"
                    }
                ]
            },
            {
                "id": "Elicit.Slot.1048143825734.1500765155924",
                "variations": [
                    {
                        "type": "PlainText",
                        "value": "How did you sleep?"
                    }
                ]
            },
            {
                "id": "Elicit.Slot.230572748961.319744579290",
                "variations": [
                    {
                        "type": "PlainText",
                        "value": "What symptoms of sickness do you have?"
                    }
                ]
            },
            {
                "id": "Elicit.Slot.1161055504284.729979286313",
                "variations": [
                    {
                        "type": "PlainText",
                        "value": "How many meals did you eat today?"
                    }
                ]
            },
            {
                "id": "Elicit.Slot.987524269915.79052327456",
                "variations": [
                    {
                        "type": "PlainText",
                        "value": "What symptoms do you have?"
                    }
                ]
            }
        ]
    }
}
