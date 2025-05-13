"use client";

import { signIn } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState } from "react";

async function signInAction(prevState: { error: string } | null, formData: FormData) {
  return await signIn(prevState, formData);
}

export default function Login() {
  const [state, formAction, pending] = useActionState(signInAction, null);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        action={formAction}
        className="p-8 bg-white rounded-lg shadow-md w-96"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
        <div className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required placeholder="Masukkan email anda" autoComplete="off" className="mt-2 shadow focus:outline-0 focus:border-secondary focus:ring-1 focus:ring-secborder-secondary" />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" required placeholder="Masukkan password anda" autoComplete="off" className="mt-2 shadow focus:outline-0 focus:border-secondary focus:ring-1 focus:ring-secborder-secondary"/>
          </div>
          {state?.error && (
            <p className="text-red-500 text-sm">{state.error}</p>
          )}
          <Button type="submit" className="w-full text-white bg-secondary" disabled={pending}>
            Log In
          </Button>
        </div>
      </form>
    </div>
  );
}