"use client";

import { ONBOARDING } from "@/libs/sessionStatuses";
import { SessionAuth } from "@/ui/components/session/session";

export default function OnboardingLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionAuth sessionStatus={ONBOARDING}>
      <div className="mt-20">
        {children}
      </div>
    </SessionAuth>
  );
}
