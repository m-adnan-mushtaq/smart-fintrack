import { z } from "zod";

export const IdDto=z.string().nonempty().uuid()
