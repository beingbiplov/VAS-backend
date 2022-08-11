import jwt from "jsonwebtoken";

export const createAccessToken = (data: any): string => {
  const access_token = jwt.sign({ data }, process.env.JWT_SECRET as string, {
    expiresIn: process.env.JWT_EXPIRATION_INTERVAL as string,
  });
  return access_token;
};

export const createRefreshToken = (data: any): string => {
  const access_token = jwt.sign(
    { data },
    process.env.JWT_REFRESH_SECRET as string,
    {
      expiresIn: process.env.JWT_REFRESH_EXPIRATION_INTERVAL as string,
    }
  );
  return access_token;
};
