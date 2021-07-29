# Data schema for the course platform

The course platform (like Blackboard) 


## Entity

Course
Lesson ("classes" scheduled time)
Topic
Submission (A deliverable: Assignment, Quiz, Labs, etc)
Rubric
Feedback (Grade)
Student
Instructors
Notes (Topic content, feedback, etc)




Until 11:10, Break and...
   Write a list of entities for your e-comm/product site



Product
   Combo
   Reviews
User (an account)
   Favourite (Is it different than a cart? A list? An order?)
Cart
Orders


const product = {
   id: 123
}

const user = {
   favourites: [123, 124]
}






Maybe:
- Brand
- PaymentMethod
- DeliveryTypes


Class/Lecture/Session: Definitely sync
Lesson: Could be sync, or async

8:55 - 11:35: LESSON 
TOPICS (each specific concept)
Data schemas
Firebase data





```json
//const course = 
{
  "name": "Applied Programming 1",
  "desc": "This is a description",
  "maxenrollment": 30,
  "slug": "applied-programming-1",
  "institute": "Humber",
  "program": "WDDM",
  "term": "Summer 2021",
  "lessons": [
    {
      "name": "Week 10 (Makeup)",
      "start": "July 27, 2021 8:55",
      "end": "July 27, 2021 11:35",
      "topics": [
        {
          "name": "Writing JSON",
          "tags": [
            "JSON",
            "Data"
          ],
          "notes": [
            {
              "author": {
                "name": "Rocco",
                "username": "juneate",
                "email": "roccopan@gmail.com"
              },
              "created": "DATE",
              "published": "DATE",
              "title": "Writing JSON",
              "content": "<!-- Markdown -->",
              "status": "author_only",
              "priority": 3
            }
          ]
        }
      ],
      "notes": [],
      "active": true
    }
  ],
  "assignments": [
    {
      "name": "First project",
      "value": 0.3,
      "total": 30,
      "rubric": [
        {
          "id": 124,
          "name": "Semantics",
          "points": [
            {
              "name": "good",
              "points": 1
            },
            {
              "name": "great",
              "points": 2
            }
          ]
        }
      ],
      "tags": [
        "JSON",
        "Data"
      ],
      "notes": [],
      "grades": [
        {
          "name": "Student Name",
          "points": [
            {
              "id": 123,
              "earned": 4
            },
            {
              "id": 124,
              "earned": 2
            }
          ]
        }
      ]
    }
  ],
  "participants": [
    {
      "name": "Student Name",
      "etc": "etc",
      "courses": []
    }
  ]
}
```