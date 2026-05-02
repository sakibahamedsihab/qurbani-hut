"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";
import { signOut } from "better-auth/api";

export default function Navbar() {
  const { data: session } = authClient.useSession();
  console.log(session);
  return (
    <nav className="flex  justify-between items-center px-20 py-5 shadow-sm bg-white">
      <h1 className="text-4xl font-bold text-[#1A6B3C]">Qurbani Estate</h1>

      <ul className="font-bold space-x-5">
        <Link href={"/"}>Home</Link>
        <Link href={"/all-animals"}>All Animals</Link>
      </ul>

      <div className="flex gap-3">
        {session ? (
          <div className="flex items-center gap-5">
            <h1>{session.user.name}</h1>
            <div className="relative w-15 h-15">
              <Image
                src={session.user.image}
                className="rounded-full"
                alt={session.user.name}
                fill
              />
            </div>
            <Button onClick={() => signOut()} variant="outline">
              Logout
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link href={"/login"}>
              <Button variant="outline">Login</Button>
            </Link>
            <Link href={"/register"}>
              <Button variant="outline">Register</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
