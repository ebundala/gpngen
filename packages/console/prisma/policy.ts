import { gql } from 'apollo-server-express'
import { createPolicySchema, createRuleAst } from './rule.ast'
const dir='packages/console/src/authorization/policy'
const schemaRelativePath='../../models/schema.graphql';
createPolicySchema(dir,schemaRelativePath)

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
  }

  mutation {
    updateOneUser(
      role: CONSUMER,
      parent: [ANONYMOUS],
      view: false,
      where: { id: allow },
      data: {
        displayName: { set: allow },
        avator: {
          connect: { id: allow },
          create: { path: allow }
        },
        staffOf: { disconnect: { id: allow } },
        location: { create: { name: allow } }
      }
    ) {
      status(action: allow)
      message(action: allow)
      data(action: allow) {
        id
        avator(action: allow) {
          attachmentType(action: allow)
          createdAt(action: allow)
          downloadable(action: allow)
          duration(action: allow)
          encoding(action: allow)
          filename(action: allow)
          id(action:allow)
          mimetype(action: allow)
          path(action: allow)
          placement(action: allow)
          size(action: allow)
          updatedAt(action: allow)
        }
        createdAt(action: allow)
        displayName(action: allow)
        email(action: allow)
        disabled(action: allow)
        phoneNumber(action: allow)
        role(action: allow)
        staffOf(action: allow) {
          createdAt(action: allow)
          description
          id(action:allow)
          logo(action: allow) {
            attachmentType(action: allow)
            createdAt(action: allow)
            id(action: allow)
            mimetype(action: allow)
            path(action: allow)
            size(action: allow)
            updatedAt(action: allow)
          }
          name(action: allow)
          updatedAt(action: allow)
        }
        state(action: allow)
        updatedAt(action: allow)
      }
    }
  }

  `

//createRuleAst(op)