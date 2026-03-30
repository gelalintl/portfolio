export type SessionStatus = "guest" | "registred" | "public";

export const SessionStatuses: Record<string, SessionStatus> = {
    GUEST : "guest",
    REGISTRED : "registred",
    PUBLIC : "public",
}

export const GUEST = SessionStatuses.GUEST
export const REGISTRED = SessionStatuses.REGISTRED
export const PUBLIC = SessionStatuses.PUBLIC