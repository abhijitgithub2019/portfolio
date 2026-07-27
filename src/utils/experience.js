// Years of professional experience, computed from career start so it
// auto-increments over time.
const CAREER_START = new Date('2014-01-01');

export const yearsOfExperience = Math.floor(
  (Date.now() - CAREER_START.getTime()) / (365.25 * 24 * 60 * 60 * 1000)
);
