type Event_Base = {
    pubkey: string;
    id: string;
    sig: string;
};

export type CreateChannel = Event_Base & {
    kind: "CreateChannel";
    name: string;
    scope: "server";
};

// EditChannel is a different type from CreateChannel because
// a channel only has one creator but could have multiple admin to modify it
export type EditChannel = Event_Base & {
    kind: "EditChannel";
    name: string;
};

export type Event_V2 = CreateChannel | EditChannel;
