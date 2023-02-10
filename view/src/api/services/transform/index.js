import { BASE_INSTANCE } from "../../constants";

export const encryptionService = (data) => {
    BASE_INSTANCE.post("/encrypt", data);
}

export const decryptionService = (data) => {
    BASE_INSTANCE.post("/encrypt", data);
}