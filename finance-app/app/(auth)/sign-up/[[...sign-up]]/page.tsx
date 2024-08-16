import { Loader2 } from "lucide-react";
import { ClerkLoaded, ClerkLoading, SignUp } from "@clerk/nextjs";
export default function Page() {
  return (
    <div className="mmin-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col iteams-center justify-center px-4">
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
            <SignUp path="/sign-up" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin text-muted-foreground " />
          </ClerkLoading>
        </div>
      </div>

      <div className="h-full hidden lg:flex items-center justify-center">
        <img src="https://st4.depositphotos.com/5532432/22800/v/450/depositphotos_228002462-stock-illustration-office-reception-front-desk-flat.jpg" alt="logo"/>
      </div>
    </div>
  );
}