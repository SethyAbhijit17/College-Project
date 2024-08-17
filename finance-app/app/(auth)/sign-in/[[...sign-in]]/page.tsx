import { Loader2 } from "lucide-react";
import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16">
          <h1 className="font-bold text-3xl text-muted-foreground">
            Welcom Back!
          </h1>
          <p className="text-base text-[#7E8CA0]">
            Login or Create an Account to get started
          </p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <ClerkLoaded>
            <SignIn path="/sign-in" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin text-muted-foreground " />
          </ClerkLoading>
        </div>
      </div>

      <div className="h-full hidden lg:flex items-center justify-center">
        <img src="https://designsolutionedu.com/wp-content/uploads/2023/11/2003.i105.015_isometric_bank_set-09-scaled.webp" alt="logo"/>
      </div>
    </div>
  );
}
