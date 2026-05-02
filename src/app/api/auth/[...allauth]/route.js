import { auth } from "@/lib/auth"; // আমরা যে auth.js ফাইলটি বানিয়েছিলাম
import { toNextJsHandler } from "better-auth/next-js";

export const { POST, GET } = toNextJsHandler(auth);
