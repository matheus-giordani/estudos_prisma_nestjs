import { z } from "zod";

export const UserSchema = z.object({
    email: z.string().email(),
    name: z.string().optional()
})

export type User = z.infer<typeof UserSchema>