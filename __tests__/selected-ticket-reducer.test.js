import selectedTicketReducer from './../src/reducers/select-ticket-reducer';

describe('SelectedTicketReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(selectedTicketReducer({}, { type: null })).toEqual({});
  });

  test('Should record which ticket has been selected by user', () => {
    expect(selectedTicketReducer({}, { type: 'SELECT_TICKET', ticketId: 1})).toEqual(1);
  })


});
