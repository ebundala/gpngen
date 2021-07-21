
import { SchemaDirectiveVisitor } from "graphql-tools";
import { defaultFieldResolver, GraphQLField } from 'graphql';

export const ThumbnailDirective =(
  next,
  src,
  args,
  context,
)  =>{
  //field: GraphQLField<any, any>
     debugger
    // const { resolve = defaultFieldResolver,args } = field;
    // field.resolve = async function(...args1) {
    //   const result = await resolve.apply(this, args1);
    //   const size=args[0];
    //   debugger;
    //   if (typeof result === 'string'&&size) {
          
    //     return `${result}.thumbnail-${size}.webp`;
    //   }
    //   return result;
    // };
    return next().then((url) => {
      if (typeof(url) === 'string') {
        const size=args['size'];
        return `${url}.thumbnail-${size}.webp`;
      }
      return url;
    });
}
