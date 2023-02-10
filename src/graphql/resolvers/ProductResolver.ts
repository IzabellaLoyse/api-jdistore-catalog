import { Query, Resolver } from 'type-graphql';

@Resolver()
export class ProductResolver {
  @Query(() => String)
  async product() {
    return 'hello';
  }
}
