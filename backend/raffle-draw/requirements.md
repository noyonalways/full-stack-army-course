## Lottery APP API

- sell lottery ticket
- update lottery ticket
- delete lottery ticket
- get all tickets
- get ticket by id
- bulk buy (user can by multiple tickets at a time)
- rafflw draw



## Ticket Model

- number (unique)
- username (String)
- price (Number)
- timestamp (Date)

## Routes

- /tickets/t/:ticketId GET - find single ticket
- /tickets/t/:ticketId PATCH - update ticket by id
- /tickets/t/:ticketId DELETE - delete ticket by id
- /tickets/u/:username GET - find tickets for a given username
- /tickets/u/:username PATCH - update tickets for a given username
- /tickets/u/:username DELETE - delete all tickets for a given user
- /tickets/sell  POST -  create ticket
- /ticktets/bulk POST -  bulk sell ticket
- /tickets/draw  GET  -  for draw winner
- /tickets/      GET  -  find all tickets
