import { gql } from "https://deno.land/x/graphql_tag@0.1.2/mod.ts";

export const typeDefs = gql`
  type Query {
    events(pubkey: String, offset: Int, limit: Int): Events
    event(id: String): Event
    policies: [Policy]
    relayInformation: RelayInformation
  }

  type Mutation {
    add_block(kind: Int, pubkey: String, ): Policy!
    remove_block(kind: Int, pubkey: String, ): Policy!
    add_allow(kind: Int, pubkey: String, ): Policy!
    remove_allow(kind: Int, pubkey: String, ): Policy!
    set_policy(kind: Int, read: Boolean, write: Boolean): Policy!
    set_relay_information(name: String, description: String, pubkey: String, contact: String, supported_nips: [Int], software: String, version: String, icon: String): RelayInformation!
  }

  type Events {
    count: Int!
    data: [Event]
  }
  type Event {
    id: String!
    content: String!
    pubkey: PublicKey!
    kind: Int!
    created_at: Int!
    sig: String!
    tags: [String!]!
  }
  type PublicKey {
    hex: String!
    bech32: String!
    events: [Event!]!
  }
  type Policy {
    kind: Int!
    read: Boolean!
    write: Boolean!
    allow: [String!]!
    block: [String!]!
  }
  type RelayInformation {
    name: String
    description: String
    pubkey: String
    contact: String
    supported_nips: [Int]
    software: String
    version: String
    icon: String
  }
`;
