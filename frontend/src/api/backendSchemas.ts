/**
 * Generated by @openapi-codegen
 *
 * @version 1.0
 */
export type ApplicationUser = {
  id?: string;
  userName?: string | null;
  normalizedUserName?: string | null;
  email?: string | null;
  normalizedEmail?: string | null;
  emailConfirmed?: boolean;
  passwordHash?: string | null;
  securityStamp?: string | null;
  concurrencyStamp?: string | null;
  phoneNumber?: string | null;
  phoneNumberConfirmed?: boolean;
  twoFactorEnabled?: boolean;
  /**
   * @format date-time
   */
  lockoutEnd?: string | null;
  lockoutEnabled?: boolean;
  /**
   * @format int32
   */
  accessFailedCount?: number;
  teamPassword?: string | null;
};

export type CtfTask = {
  /**
   * @format uuid
   */
  id?: string;
  /**
   * @format date-time
   */
  createdAt: string;
  name?: string;
  flag?: string;
  /**
   * @format int32
   */
  points?: number;
  description?: string;
  successfullSolveAttempts?: SolvedTask[];
};

export type CtfTaskReadModel = {
  /**
   * @format uuid
   */
  id?: string;
  name?: string;
  /**
   * @format int32
   */
  points?: number;
  description?: string;
  isSolved?: boolean | null;
};

export type CtfTaskWriteModel = {
  name?: string;
  flag?: string;
  /**
   * @format int32
   */
  points?: number;
  description?: string;
};

export type LeaderboardEntry = {
  teamId?: string;
  /**
   * @format int32
   */
  points?: number;
};

export type LoginCredentials = {
  username?: string;
  password?: string;
};

export type NewTeam = {
  username?: string;
};

export type SolveTaskRequest = {
  flag?: string;
};

export type SolveTaskResponse = {
  success?: boolean;
  isBruteForceDetected?: boolean;
};

export type SolvedTask = {
  /**
   * @format uuid
   */
  id?: string;
  /**
   * @format date-time
   */
  createdAt: string;
  teamId?: string;
  task?: CtfTask;
  /**
   * @format uuid
   */
  taskId?: string;
};

export type SolvedTaskReadModel = {
  /**
   * @format uuid
   */
  id?: string;
  /**
   * @format date-time
   */
  createdAt: string;
  teamId?: string;
  task?: CtfTaskReadModel;
};
