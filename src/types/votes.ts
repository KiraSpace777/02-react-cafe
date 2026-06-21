export type VoteType = "good" | "neutral" | "bad";

export interface Votes {
  good: number;
  neutral: number;
  bad: number;
}

const initialVotes: Votes = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export default initialVotes;
