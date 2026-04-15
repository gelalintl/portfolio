"use client";

import { ONBOARDING } from "@/libs/sessionStatuses";
import { SessionAuth } from "@/ui/components/session/session";

export default function OnboardingLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionAuth sessionStatus={ONBOARDING}>
      <div>
        {children}
      </div>
    </SessionAuth>
  );
}
