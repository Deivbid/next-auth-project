"use server";

import { signOut } from "@/auth";

export const logout = async () => {
  // We can do some server stuff in here like clean or something
  await signOut();
};
