open ApolloLinks;

open ApolloInMemoryCache;

/* Define type for InMemoryCache's dataIdFromObject option  */
type dataObject = {. "__typename": string, "id": string, "key": string};

let logout = () => ();

/* Create an HTTP Link */
let httpLink = createHttpLink(~uri=Constants.api.graphql, ());


/* Create a Link that handles 401 error responses */
/* let errorHandler = (errorResponse) =>
  switch errorResponse##networkError {
  | Some(error) =>
    if (error##statusCode == 401) {
      logout()
    } else {
      ()
    }
  | None => ()
  };

let errorLink = createErrorLink(errorHandler); */

/* let inMemoryCache =
  createInMemoryCache(
    ~dataIdFromObject=
      (obj: dataObject) =>
        if (obj##__typename === "Organization") {
          obj##key
        } else {
          obj##id
        },
    ()
  ); */

/*
  Default in memory cache
  */
let inMemoryCache = createInMemoryCache(());

/* Create the ApolloClient */
module Instance =
  ReasonApollo.CreateClient(
    {
      let apolloClient =
       ReasonApollo.createApolloClient(
         ~cache=inMemoryCache /* restore method can be piped e.g. inMemoryCache |> restore(window.__APOLLO__) */,
         ~link=from([|httpLink|]),
         /* ~link=from([|errorLink, httpLink|]), */
         ()
       );
    }
  );