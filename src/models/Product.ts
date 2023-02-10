import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class Product {
  @Field((type) => ID)
  id: string;
}
