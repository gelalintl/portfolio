export type SessionStatus = "guest" | "registred" | "public" | "onboarding";

export const SessionStatuses: Record<string, SessionStatus> = {
    GUEST : "guest",
    REGISTRED : "registred",
    PUBLIC : "public",
    ONBOARDING : "onboarding"
}

export const GUEST = SessionStatuses.GUEST
export const REGISTRED = SessionStatuses.REGISTRED
export const PUBLIC = SessionStatuses.PUBLIC
export const ONBOARDING = SessionStatuses.ONBOARDING