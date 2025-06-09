const mongoose = require('mongoose');
const chat = require('./model/chats.js')

main()
  .then(() => {
    console.log("Connection successful");
  })
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let chats = ([
  {
    from: 'arjun',
    to: 'meera',
    message: 'send me your exam notes',
    time: Date.now()
  },
  {
    from: 'ravi',
    to: 'anita',
    message: 'sure, I’ll send them in 5 mins',
    time: Date.now()
  },
  {
    from: 'lisa',
    to: 'karan',
    message: 'thanks! also, did you get the assignment PDF?',
    time: Date.now()
  },
  {
    from: 'sahil',
    to: 'tanya',
    message: 'yes, received it yesterday',
    time: Date.now()
  },
  {
    from: 'neha',
    to: 'vikram',
    message: 'great, let’s meet at 3 PM to study',
    time: Date.now()
  }
])

chat.insertMany(chats)
   .then((res)=>{
    console.log(res)
   })
   .catch((err) =>{
    console.log(err)
})