import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { NgModule } from '@angular/core';
import { ApolloClientOptions, ApolloLink, InMemoryCache } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { environment } from 'src/assets/env';

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {

  const http = httpLink.create({ uri: environment.apiBase });

  const authLink = setContext(() => ({
    headers: {
      Authorization: `Bearer ${environment.apiToken}`,
    },
  }));

  const link = ApolloLink.from([authLink, http]);

  return {
    link,
    cache: new InMemoryCache()
  };
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink]
    },
  ],
})
export class GraphQLModule { }
