"use client";

import { GUEST } from "@/libs/sessionStatuses";
import { BasicLayout } from "@/ui/components/layouts/basicLayout";
import { SessionAuth } from "@/ui/components/session/session";

export default function ConnexionLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionAuth sessionStatus = {GUEST}>
      <BasicLayout>
        {children}
      </BasicLayout>
    </SessionAuth>
  );
}
