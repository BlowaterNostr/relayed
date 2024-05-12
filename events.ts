type Event_Base = {
    pubkey: string;
    id: string;
    sig: string;
};

export enum Kind_V2 {
    ChannelCreation = "ChannelCreation",
    ChannelEdition = "ChannelEdition",
    RelayMember = "RelayMember",
}

export type ChannelCreation = Event_Base & {
    kind: Kind_V2.ChannelCreation;
    name: string;
    scope: "server";
};

// EditChannel is a different type from CreateChannel because
// a channel only has one creator but could have multiple admin to modify it
export type ChannelEdition = Event_Base & {
    kind: Kind_V2.ChannelEdition;
    channel_id: string;
    name: string;
};

export type EventRelayMembers = Event_Base & {
    kind: Kind_V2.RelayMember;
    created_at: number;
    members: string[]; // the pubkey of members
};

export type Event_V2 = ChannelCreation | ChannelEdition;
