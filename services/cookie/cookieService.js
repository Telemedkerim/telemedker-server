const isProduction = process.env.NODE_ENV === "production";
const halfHour = 30 * 60 * 1000; // 30 minutes in milliseconds
const oneWeek = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

const cookieOptions = {
  production: {
    httpOnly: true,
    secure: true,
    sameSite: "None",
  },
  development: {
    httpOnly: false,
    secure: false,
    sameSite: "Lax",
  },
};

const getOptions = () =>
  isProduction ? cookieOptions.production : cookieOptions.development;

function setAuthCookies(res, accessToken, refreshToken) {
  const options = getOptions();

  res.cookie("accessToken", accessToken, {
    ...options,
    maxAge: halfHour,
  });

  res.cookie("refreshToken", refreshToken, {
    ...options,
    maxAge: oneWeek,
  });
}

function clearAuthCookies(res) {
  const options = getOptions();

  res.clearCookie("accessToken", options);
  res.clearCookie("refreshToken", options);
}

module.exports = {
  setAuthCookies,
  clearAuthCookies,
};
