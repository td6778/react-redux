export function selectBook(book) {
// selectBook is an ActionCreator and it needs to return and action
// an object  with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book 
  }
}
