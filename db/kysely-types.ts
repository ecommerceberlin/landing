/**
 * This file was generated by kysely-codegen.
 * Please do not edit it manually.
 */

import type { ColumnType } from "kysely";

export type ArrayType<T> = ArrayTypeImpl<T> extends (infer U)[]
  ? U[]
  : ArrayTypeImpl<T>;

export type ArrayTypeImpl<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S[], I[], U[]>
  : T[];

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export type Int8 = ColumnType<string, bigint | number | string, bigint | number | string>;

export type Json = JsonValue;

export type JsonArray = JsonValue[];

export type JsonObject = {
  [x: string]: JsonValue | undefined;
};

export type JsonPrimitive = boolean | number | string | null;

export type JsonValue = JsonArray | JsonObject | JsonPrimitive;

export type ParticipantRole = "contestant" | "exhibitor" | "juror" | "party" | "presenter" | "representative" | "visitor";

export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export interface Account {
  access_token: string | null;
  expires_at: Int8 | null;
  id: Generated<string>;
  id_token: string | null;
  provider: string;
  providerAccountId: string;
  refresh_token: string | null;
  scope: string | null;
  session_state: string | null;
  token_type: string | null;
  type: string;
  userId: string;
}

export interface Chat {
  created_at: Generated<Timestamp>;
  event_id: Generated<number>;
  id: Generated<number>;
  isFirst: Generated<number>;
  message: string;
  poke_id: Generated<number>;
  read_at: Timestamp | null;
  source_external_id: Generated<number>;
  target_company_id: Generated<number>;
  target_external_id: Generated<number>;
  user_id: string;
}

export interface Company {
  account_user_id: string | null;
  company_data: Json | null;
  company_id: Generated<number>;
  created_at: Generated<Timestamp | null>;
  group_id: Generated<number | null>;
  is_featured: Generated<number | null>;
  is_premium: Generated<number | null>;
  lang: Generated<string | null>;
  organizer_id: Generated<number | null>;
  slug: string | null;
  updated_at: Generated<Timestamp | null>;
}

export interface Favorite {
  created_at: Generated<Timestamp>;
  event_id: Generated<number>;
  id: Generated<number>;
  is_deleted: Generated<number>;
  target_id: number;
  target_type: string;
  user_id: string;
}

export interface NeonAuthUsersSync {
  created_at: Generated<Timestamp | null>;
  deleted_at: Timestamp | null;
  email: Generated<string | null>;
  id: Generated<string>;
  name: Generated<string | null>;
  raw_json: Json;
  updated_at: Timestamp | null;
}

export interface Newsletter {
  context: string;
  created_at: Generated<Timestamp>;
  data: Json;
  id: Generated<number>;
  organizer_id: number;
}

export interface Notification {
  id: Generated<number>;
  name: string | null;
  organizer_id: Generated<number | null>;
  webhook: string | null;
}

export interface Participant {
  company_id: Generated<number>;
  created_at: Timestamp | null;
  email: string;
  event_id: number;
  external_id: number;
  group_id: number;
  important: Generated<number>;
  lc_hidden: Generated<number>;
  lc_identity: Generated<number>;
  lc_privacy: Generated<number>;
  organizer_id: number;
  parent_id: Generated<number>;
  roles: Generated<ArrayType<ParticipantRole>>;
  searchable_data: Json;
  token: string;
  unsubscribed: Generated<number>;
  updated_at: Generated<Timestamp | null>;
}

export interface Poke {
  auto: Generated<number>;
  company_id: Generated<number>;
  created_at: Generated<Timestamp>;
  edited_at: Generated<Timestamp>;
  event_id: number;
  exposed: Generated<number>;
  id: Generated<number>;
  responded_at: Timestamp | null;
  sent_at: Timestamp | null;
  source_external_id: Generated<number>;
  status: Generated<number>;
  target_company_id: Generated<number>;
  target_external_id: number;
  user_id: string;
}

export interface PokeComment {
  comment: string;
  created_at: Generated<Timestamp>;
  event_id: Generated<number>;
  id: Generated<number>;
  poke_id: number;
  source_company_id: number;
  source_external_id: number;
  user_id: string;
}

export interface Session {
  expires: Timestamp;
  id: Generated<string>;
  sessionToken: string;
  userId: string;
}

export interface Ticket {
  code: string;
  created_at: Generated<Timestamp>;
  event_id: number;
  external_id: number;
  gate_id: Generated<number>;
  going: number;
  id: Generated<number>;
  updated_at: Generated<Timestamp>;
}

export interface User {
  email: string;
  email_secondary: string | null;
  emailVerified: Timestamp | null;
  id: Generated<string>;
  image: string | null;
  linkedinId: string | null;
  name: string | null;
}

export interface UserPreference {
  created_at: Generated<Timestamp>;
  id: Generated<number>;
  key: string;
  updated_at: Generated<Timestamp>;
  user_id: string;
  value: string;
}

export interface VerificationCode {
  code: string;
  created_at: Generated<Timestamp>;
  email: string;
  expires_at: Timestamp;
  id: Generated<number>;
}

export interface VerificationToken {
  expires: Timestamp;
  identifier: string;
  token: string;
}

export interface VipInvite {
  code: string;
  company_id: number;
  created_at: Generated<Timestamp>;
  edited_at: Generated<Timestamp>;
  email: string;
  event_id: number;
  id: Generated<number>;
  responded_at: Timestamp | null;
  sent_at: Timestamp | null;
  source_external_id: number;
  status: number;
  user_id: string;
}

export interface DB {
  Account: Account;
  Chat: Chat;
  Company: Company;
  Favorite: Favorite;
  "neon_auth.users_sync": NeonAuthUsersSync;
  Newsletter: Newsletter;
  Notification: Notification;
  Participant: Participant;
  Poke: Poke;
  PokeComment: PokeComment;
  Session: Session;
  Ticket: Ticket;
  User: User;
  UserPreference: UserPreference;
  VerificationCode: VerificationCode;
  VerificationToken: VerificationToken;
  VipInvite: VipInvite;
}
