"use client";

import { AuthGuard } from "@/components/guards/authGuard";
import { UserAccountNavigation } from "@/components/navigation/userAccountNav";
import { Container } from "@/ui/components/container/container";

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGuard>
      <Container className="mt-20">
        <div className="grid grid-cols-12 gap-7">
           <div className="col-span-3">
              <UserAccountNavigation />
            </div>
            <div className="col-span-9">{children}</div>
        </div>
        </Container>
    </AuthGuard>
  );
}
