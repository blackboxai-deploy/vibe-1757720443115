"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
// @ts-ignore -- Ignoring type errors for now as packages are installed

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  mfaCode: z.string().min(6).optional(),
});

type FormData = z.infer<typeof formSchema>;

interface AuthFormProps {
  isSignup: boolean;
}

export function AuthForm({ isSignup }: AuthFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Auth submitted:", data); // Mock submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" {...register("email")} />
        {errors.email && <p className="text-destructive text-sm">{errors.email.message}</p>}
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" {...register("password")} />
        {errors.password && <p className="text-destructive text-sm">{errors.password.message}</p>}
      </div>
      {isSignup && (
        <div>
          <Label htmlFor="mfaCode">MFA Code (Optional)</Label>
          <Input id="mfaCode" {...register("mfaCode")} />
          {errors.mfaCode && <p className="text-destructive text-sm">{errors.mfaCode.message}</p>}
        </div>
      )}
      <Button type="submit" className="w-full">Submit</Button>
    </form>
  );
}