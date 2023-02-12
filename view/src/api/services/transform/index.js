import { BASE_INSTANCE } from "../../constants";

export const encryptionService = (data) => {
    return BASE_INSTANCE.post("/encrypt", data);
};

export const decryptionService = (data) => {
    return BASE_INSTANCE.post("/decrypt", data);
};
