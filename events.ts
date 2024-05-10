type Event_Base = {
    pubkey: string;
    id: string;
    sig: string;
};

export enum Kind_V2 {
    ChannelCreation = "ChannelCreation",
    ChannelEdition = "ChannelEdition",
}

export type ChannelCreation = Event_Base & {
    kind: Kind_V2.ChannelCreation;
    name: string;
    scope: "server";
};

// EditChannel is a different type from CreateChannel because
// a channel only has one creator but could have multiple admin to modify it
export type EditChannel = Event_Base & {
    kind: Kind_V2.ChannelEdition;
    name: string;
};

export type Event_V2 = ChannelCreation | EditChannel;
