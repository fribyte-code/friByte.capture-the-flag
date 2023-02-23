/**
 * Generated by @openapi-codegen
 *
 * @version 1.0
 */
import * as reactQuery from "@tanstack/react-query";
import { useBackendContext, BackendContext } from "./backendContext";
import type * as Fetcher from "./backendFetcher";
import { backendFetch } from "./backendFetcher";
import type * as Schemas from "./backendSchemas";

export type LoginError = Fetcher.ErrorWrapper<undefined>;

export type LoginVariables = {
  body?: Schemas.LoginCredentials;
} & BackendContext["fetcherOptions"];

export const fetchLogin = (variables: LoginVariables, signal?: AbortSignal) =>
  backendFetch<undefined, LoginError, Schemas.LoginCredentials, {}, {}, {}>({
    url: "/Api/Auth/Login",
    method: "post",
    ...variables,
    signal,
  });

export const useLogin = (
  options?: Omit<
    reactQuery.UseMutationOptions<undefined, LoginError, LoginVariables>,
    "mutationFn"
  >
) => {
  const { fetcherOptions } = useBackendContext();
  return reactQuery.useMutation<undefined, LoginError, LoginVariables>(
    (variables: LoginVariables) =>
      fetchLogin({ ...fetcherOptions, ...variables }),
    options
  );
};

export type LogoutError = Fetcher.ErrorWrapper<undefined>;

export type LogoutVariables = BackendContext["fetcherOptions"];

export const fetchLogout = (variables: LogoutVariables, signal?: AbortSignal) =>
  backendFetch<undefined, LogoutError, undefined, {}, {}, {}>({
    url: "/Api/Auth/Logout",
    method: "get",
    ...variables,
    signal,
  });

export const useLogout = <TData = undefined>(
  variables: LogoutVariables,
  options?: Omit<
    reactQuery.UseQueryOptions<undefined, LogoutError, TData>,
    "queryKey" | "queryFn"
  >
) => {
  const { fetcherOptions, queryOptions, queryKeyFn } =
    useBackendContext(options);
  return reactQuery.useQuery<undefined, LogoutError, TData>(
    queryKeyFn({ path: "/Api/Auth/Logout", operationId: "logout", variables }),
    ({ signal }) => fetchLogout({ ...fetcherOptions, ...variables }, signal),
    {
      ...options,
      ...queryOptions,
    }
  );
};

export type AllTasksError = Fetcher.ErrorWrapper<undefined>;

export type AllTasksResponse = Schemas.CtfTask[];

export type AllTasksVariables = BackendContext["fetcherOptions"];

export const fetchAllTasks = (
  variables: AllTasksVariables,
  signal?: AbortSignal
) =>
  backendFetch<AllTasksResponse, AllTasksError, undefined, {}, {}, {}>({
    url: "/Api/TaskAdmin",
    method: "get",
    ...variables,
    signal,
  });

export const useAllTasks = <TData = AllTasksResponse>(
  variables: AllTasksVariables,
  options?: Omit<
    reactQuery.UseQueryOptions<AllTasksResponse, AllTasksError, TData>,
    "queryKey" | "queryFn"
  >
) => {
  const { fetcherOptions, queryOptions, queryKeyFn } =
    useBackendContext(options);
  return reactQuery.useQuery<AllTasksResponse, AllTasksError, TData>(
    queryKeyFn({ path: "/Api/TaskAdmin", operationId: "allTasks", variables }),
    ({ signal }) => fetchAllTasks({ ...fetcherOptions, ...variables }, signal),
    {
      ...options,
      ...queryOptions,
    }
  );
};

export type AddTaskError = Fetcher.ErrorWrapper<undefined>;

export type AddTaskVariables = {
  body?: Schemas.CtfTaskWriteModel;
} & BackendContext["fetcherOptions"];

export const fetchAddTask = (
  variables: AddTaskVariables,
  signal?: AbortSignal
) =>
  backendFetch<
    Schemas.CtfTask,
    AddTaskError,
    Schemas.CtfTaskWriteModel,
    {},
    {},
    {}
  >({ url: "/Api/TaskAdmin", method: "post", ...variables, signal });

export const useAddTask = (
  options?: Omit<
    reactQuery.UseMutationOptions<
      Schemas.CtfTask,
      AddTaskError,
      AddTaskVariables
    >,
    "mutationFn"
  >
) => {
  const { fetcherOptions } = useBackendContext();
  return reactQuery.useMutation<
    Schemas.CtfTask,
    AddTaskError,
    AddTaskVariables
  >(
    (variables: AddTaskVariables) =>
      fetchAddTask({ ...fetcherOptions, ...variables }),
    options
  );
};

export type UpdateTaskPathParams = {
  /**
   * @format uuid
   */
  id: string;
};

export type UpdateTaskError = Fetcher.ErrorWrapper<undefined>;

export type UpdateTaskVariables = {
  body?: Schemas.CtfTaskWriteModel;
  pathParams: UpdateTaskPathParams;
} & BackendContext["fetcherOptions"];

export const fetchUpdateTask = (
  variables: UpdateTaskVariables,
  signal?: AbortSignal
) =>
  backendFetch<
    Schemas.CtfTask,
    UpdateTaskError,
    Schemas.CtfTaskWriteModel,
    {},
    {},
    UpdateTaskPathParams
  >({ url: "/Api/TaskAdmin/{id}", method: "put", ...variables, signal });

export const useUpdateTask = (
  options?: Omit<
    reactQuery.UseMutationOptions<
      Schemas.CtfTask,
      UpdateTaskError,
      UpdateTaskVariables
    >,
    "mutationFn"
  >
) => {
  const { fetcherOptions } = useBackendContext();
  return reactQuery.useMutation<
    Schemas.CtfTask,
    UpdateTaskError,
    UpdateTaskVariables
  >(
    (variables: UpdateTaskVariables) =>
      fetchUpdateTask({ ...fetcherOptions, ...variables }),
    options
  );
};

export type DeleteTaskPathParams = {
  /**
   * @format uuid
   */
  id: string;
};

export type DeleteTaskError = Fetcher.ErrorWrapper<undefined>;

export type DeleteTaskVariables = {
  pathParams: DeleteTaskPathParams;
} & BackendContext["fetcherOptions"];

export const fetchDeleteTask = (
  variables: DeleteTaskVariables,
  signal?: AbortSignal
) =>
  backendFetch<
    undefined,
    DeleteTaskError,
    undefined,
    {},
    {},
    DeleteTaskPathParams
  >({ url: "/Api/TaskAdmin/{id}", method: "delete", ...variables, signal });

export const useDeleteTask = (
  options?: Omit<
    reactQuery.UseMutationOptions<
      undefined,
      DeleteTaskError,
      DeleteTaskVariables
    >,
    "mutationFn"
  >
) => {
  const { fetcherOptions } = useBackendContext();
  return reactQuery.useMutation<
    undefined,
    DeleteTaskError,
    DeleteTaskVariables
  >(
    (variables: DeleteTaskVariables) =>
      fetchDeleteTask({ ...fetcherOptions, ...variables }),
    options
  );
};

export type TasksError = Fetcher.ErrorWrapper<undefined>;

export type TasksResponse = Schemas.CtfTaskReadModel[];

export type TasksVariables = BackendContext["fetcherOptions"];

export const fetchTasks = (variables: TasksVariables, signal?: AbortSignal) =>
  backendFetch<TasksResponse, TasksError, undefined, {}, {}, {}>({
    url: "/Api/Tasks",
    method: "get",
    ...variables,
    signal,
  });

export const useTasks = <TData = TasksResponse>(
  variables: TasksVariables,
  options?: Omit<
    reactQuery.UseQueryOptions<TasksResponse, TasksError, TData>,
    "queryKey" | "queryFn"
  >
) => {
  const { fetcherOptions, queryOptions, queryKeyFn } =
    useBackendContext(options);
  return reactQuery.useQuery<TasksResponse, TasksError, TData>(
    queryKeyFn({ path: "/Api/Tasks", operationId: "tasks", variables }),
    ({ signal }) => fetchTasks({ ...fetcherOptions, ...variables }, signal),
    {
      ...options,
      ...queryOptions,
    }
  );
};

export type SolvePathParams = {
  /**
   * @format uuid
   */
  id: string;
};

export type SolveError = Fetcher.ErrorWrapper<undefined>;

export type SolveVariables = {
  body?: Schemas.SolveTaskRequest;
  pathParams: SolvePathParams;
} & BackendContext["fetcherOptions"];

export const fetchSolve = (variables: SolveVariables, signal?: AbortSignal) =>
  backendFetch<
    undefined,
    SolveError,
    Schemas.SolveTaskRequest,
    {},
    {},
    SolvePathParams
  >({ url: "/Api/Tasks/Solve/{id}", method: "post", ...variables, signal });

export const useSolve = (
  options?: Omit<
    reactQuery.UseMutationOptions<undefined, SolveError, SolveVariables>,
    "mutationFn"
  >
) => {
  const { fetcherOptions } = useBackendContext();
  return reactQuery.useMutation<undefined, SolveError, SolveVariables>(
    (variables: SolveVariables) =>
      fetchSolve({ ...fetcherOptions, ...variables }),
    options
  );
};

export type AddTeamError = Fetcher.ErrorWrapper<undefined>;

export type AddTeamVariables = {
  body?: Schemas.NewTeam;
} & BackendContext["fetcherOptions"];

export const fetchAddTeam = (
  variables: AddTeamVariables,
  signal?: AbortSignal
) =>
  backendFetch<undefined, AddTeamError, Schemas.NewTeam, {}, {}, {}>({
    url: "/add-team",
    method: "post",
    ...variables,
    signal,
  });

export const useAddTeam = (
  options?: Omit<
    reactQuery.UseMutationOptions<undefined, AddTeamError, AddTeamVariables>,
    "mutationFn"
  >
) => {
  const { fetcherOptions } = useBackendContext();
  return reactQuery.useMutation<undefined, AddTeamError, AddTeamVariables>(
    (variables: AddTeamVariables) =>
      fetchAddTeam({ ...fetcherOptions, ...variables }),
    options
  );
};

export type QueryOperation =
  | {
      path: "/Api/Auth/Logout";
      operationId: "logout";
      variables: LogoutVariables;
    }
  | {
      path: "/Api/TaskAdmin";
      operationId: "allTasks";
      variables: AllTasksVariables;
    }
  | {
      path: "/Api/Tasks";
      operationId: "tasks";
      variables: TasksVariables;
    };