import { gql } from 'apollo-server-express'
import { createPolicySchema, createRuleAst } from './rule.ast'
createPolicySchema()

const op = gql`
query {
    findManyAttachment(
      role: ANONYMOUS
      parent:[CONSUMER,PROVIDER,SUPERUSER],
      where: {id:{
        mode:deny,
        equals:allow
      }}) {
      message(action: allow)
      status(action: allow)
      data(action: allow) {
        id(action: allow)
        attachmentType(action: allow)
        createdAt(action: allow)
        downloadable(action: allow)
        duration(action: allow)
        encoding(action: allow)
        filename(action: deny)
        mimetype(action: allow)
        path(action: allow)
        placement(action: allow)
        size(action: allow)
        updatedAt(action: allow)
        users(action: allow,where:{disabled:{
          equals:deny
        }}) {
          id(action: allow)
          displayName(action: allow)
          disabled(action: allow)
          email(action: deny)
          emailVerified(action: allow)
          createdAt(action: allow)
          phoneNumber(action: allow)
          role(action: allow)
          updatedAt(action: allow)
          state(action: allow)
        }
      }
    }
  }`

//createRuleAst(op)