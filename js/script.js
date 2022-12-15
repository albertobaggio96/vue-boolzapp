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
        indexIndication: 0,

        writinText: "",

        answer : false,

        search: ""
      }
    },
    methods: {
        lastMessage(element){
            if (element.length > 16){
               return element = element.substring(0, 14) + "...";
            } else
            return element; 
        },
        getClickedIndex(index){
            this.indexIndication = index;
            console.log(this.indexIndication);
            this.search = "";
        },

        isSentOrReceived(status){
            if(status === "sent"){
                return "align-self-end me-5 sent";
            } else{
                return "bg-white mt-3 ms-5";
            }
        },
        sendMessage(text){
            text = {
                date: '10/01/2020 15:51:00',
                message: text,
                status: 'sent'
            }
            this.contacts[this.indexIndication].messages.push(text);
            
            this.writinText = "";

            answer = true;
            
            if(answer){
                setTimeout(() => {
                    let textAnswer = {
                        date: '10/01/2020 15:51:00',
                        message: 'ok',
                        status: 'recived'
                    }
                    this.contacts[this.indexIndication].messages.push(textAnswer);
                    answer = false
                }, 1000);
            }

            console.log(this.contacts);
        },  

        isClicked(index){
            if (this.indexIndication === index){
                return "clicked";
            } 
            this.searchOnChat()
            if(!this.contacts[index].visible){
                return "d-none";
            }
        },
        searchOnChat(){
            this.contacts.filter((contact) => {
                if (contact.name.toLowerCase().indexOf(this.search.toLocaleLowerCase())> -1){
                    contact.visible = true;
                } else{
                    contact.visible = false;
                }
              })
        },
        


    }
  }).mount('#app')