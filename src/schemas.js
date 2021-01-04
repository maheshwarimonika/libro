import { schema } from 'normalizr';

export const bookSchema = new Schema.Entity(
  "books" ,
  {} ,
  { idAttribute: '_id' }
)
