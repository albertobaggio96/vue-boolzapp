const { createApp } = Vue

  createApp({
    data() {
      return {
        contacts: [
          {
            name: 'Michele',
            avatar: '_1',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                }
            ],
          },
          {
            name: 'Fabio',
            avatar: '_2',
            visible: true,
            messages: [
                {
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                }
            ],
          },
          {
            name: 'Samuele',
            avatar: '_3',
            visible: true,
            messages: [
                {
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
                }
            ],
          },
          {
            name: 'Alessandro B.',
            avatar: '_4',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
            ],
          },
          {
            name: 'Alessandro L.',
            avatar: '_5',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ricordati di chiamare la nonna',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Va bene, stasera la sento',
                    status: 'received'
                }
            ],
          },
          {
            name: 'Claudia',
            avatar: '_6',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao Claudia, hai novità?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Non ancora',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:51:00',
                    message: 'Nessuna nuova, buona nuova',
                    status: 'sent'
                }
            ],
          },
          {
            name: 'Federico',
            avatar: '_7',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Fai gli auguri a Martina che è il suo compleanno!',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Grazie per avermelo ricordato, le scrivo subito!',
                    status: 'received'
                }
            ],
          },
          {
            name: 'Davide',
            avatar: '_8',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao, andiamo a mangiare la pizza stasera?',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:51:00',
                    message: 'OK!!',
                    status: 'received'
                }
            ],
          }
        ],

        indexIndicated: 0,

        ring: true,

        search: "",

        writinText: "",
        
        answer : false,

      }
    },
    methods: {
// * order contact from last messsage send or recived to the oldest one
        getOrderOfContactList(){
            this.contacts.forEach((contact)=>{
                if(contact.messages.length > 0)
                this.contacts.sort(function (a, b) {
                    a = a.messages.length > 0 ? a.messages[a.messages.length - 1].date : ""
                    b = b.messages.length > 0 ? b.messages[b.messages.length - 1].date : ""
    
                    a = `${a.substring(6, 10)}/${a.substring(3, 5)}/${a.substring(0, 2)} ${a.substring(11)}`
                    b = `${b.substring(6, 10)}/${b.substring(3, 5)}/${b.substring(0, 2)} ${b.substring(11)}`

                    return a <= b ? 1 : -1;  
                });
            })

            return this.contacts
        },

// * search person from input text on recent chat
        searchOnChat(){
            this.contacts.forEach((contact) => {
                if (contact.name.toLowerCase().indexOf(this.search.toLocaleLowerCase())> -1){
                    contact.visible = true;
                } else{
                    contact.visible = false;
                }
              })
        },

// * get last message of every person
        lastMessage(contact){
            if(contact.messages.length > 0){
                if (contact.messages.length > 0) {
                    let element = contact.messages[contact.messages.length - 1].message
                    if (element.length > 16){
                       return element = element.substring(0, 14) + "...";
                    } else
                    return element; 
                } else{
                    return this.contacts[indexIndicated].messages = ""
                }
            } else{
                return contact.messages = ""
            }
        },

// * get index where i klicked
        getClickedIndex(index){
            this.indexIndicated = index;
            this.search = "";
        },

// * know if a message is sento or recived
        isSentOrReceived(status){
            if(status === "sent"){
                return "align-self-end me-5 sent";
            } else{
                return "bg-white mt-3 ms-5";
            }
        },

// * for send messages
        sendMessage(text){
            text = {
                date: `${luxon.DateTime.now().toFormat('D')} ${luxon.DateTime.now().toFormat('TT')}`,
                message: text,
                status: 'sent'
            }
            this.contacts[this.indexIndicated].messages.push(text);
            
            
            this.writinText = "";

            this.indexIndicated = 0

            answer = true;
            
            if(answer){
                this.getAnAswer()
            }
        },  

// * to get an answe after i sent a message
        getAnAswer(){
            setTimeout(() => {
                let textAnswer = {
                    date: `${luxon.DateTime.now().toFormat('D')} ${luxon.DateTime.now().toFormat('t')}`,
                    message: 'ok',
                    status: 'recived'
                }
                this.contacts[this.indexIndicated].messages.push(textAnswer);
                return answer = false
            }, 1000);
        },

// * to see the chat where i was clicked
        isClicked(index){
            this.searchOnChat()
            if(!this.contacts[index].visible){
                return "d-none";
            }
            if (this.indexIndicated === index){
                return "clicked";
            } 
        },

// * to get info about that message
        getMessageInfo(text){
            alert(text.date)
        },
    }
  }).mount('#app')