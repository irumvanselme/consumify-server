import bcrypt from "bcrypt";

export async function hash(password: string){
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}