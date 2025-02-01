export interface Team {
  _id?: string;
  name: string;
  members: string[]; // array of user IDs
  rankPoints: number;
  division?: number;
  wins: number;
  losses: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Match {
  _id?: string;
  teamA: string; // Team ID
  teamB: string; // Team ID
  isRanked: boolean;
  scheduledTime?: Date;
  status: 'pending' | 'in-progress' | 'completed';
  score?: {
    teamAScore: number;
    teamBScore: number;
  };
  highlights?: string[];
  mvp?: string; // user ID
  createdAt?: Date;
  updatedAt?: Date;
}

export interface User {
  _id?: string;
  username: string;
  email: string;
  team?: string; // ID of the team the user belongs to
  avatarUrl?: string;
}

export interface Invite {
  _id?: string;
  fromTeam: string;
  toTeam: string;
  matchId: string;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt?: Date;
}

export type MatchStatus = 'pending' | 'in-progress' | 'completed';
export type InviteStatus = 'pending' | 'accepted' | 'rejected'; 