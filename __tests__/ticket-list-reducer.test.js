import ticketListReducer from './../src/reducers/ticket-list-reducer'

describe('ticketListReducer', () => {

  let action;
  const sampleTicketData = {
    names: 'Tracy & Maly',
    location: '1D',
    issue: 'Tracy is falling asleep - unable to wake up',
    timeOpen: 1500000000000,
    id: 0
  };

  test('Should return dafault state if no action type is recognized', () => {
    expect(ticketListReducer({}, {type: null})).toEqual({});
  });

  test('Should successfully add new ticket data to masterTicketList', () => {
    const { names, location, issue, timeOpen, id } = sampleTicketData;
    action = {
      type: 'ADD_TICKET',
      names: names,
      location: location,
      issue: issue,
      timeOpen: timeOpen,
      id: id
    };
    expect(ticketListReducer({}, action)).toEqual({
      [id]: {
        names: names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        id: id
      }
    })
  });
});
