"use client";

import { UserAccountNavigation } from "@/components/navigation/userAccountNav";
import { REGISTRED } from "@/libs/sessionStatuses";
import { Container } from "@/ui/components/container/container";
import { SessionAuth } from "@/ui/components/session/session";

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionAuth sessionStatus={REGISTRED}>
      <Container className="mt-20">
        <div className="grid grid-cols-12 gap-7">
           <div className="col-span-3">
              <UserAccountNavigation />
            </div>
            <div className="col-span-9">{children}</div>
        </div>
        </Container>
    </SessionAuth>
  );
}
