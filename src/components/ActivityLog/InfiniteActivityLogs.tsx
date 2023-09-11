"use client";
import { GET_USER_ACTIVITIES_API_URL } from "@/client/common";
import { fetchData } from "@/client/helpers/utils";
import { InfniteActivitesResponse } from "@/client/types";
import { SUPPORTED_TAGS } from "@/lib/types";
import { useInfiniteQuery } from "@tanstack/react-query";
import ErrorMsg from "../Layout/ErrorMsg";
import SkeletonStrips from "../Ui/SkeletonStrips";
import React from "react";
import ActivityList from "./ActivityList";

const tag: SUPPORTED_TAGS = "user-activities";

const getUserActvities = async (cursor: string) => {
  return fetchData<InfniteActivitesResponse>(
    GET_USER_ACTIVITIES_API_URL + `?cursor=${cursor}`,
    { tags: [tag] }
  );
};

const InfiniteActivityLogs = () => {
  const {
    hasNextPage,
    isFetchingNextPage,
    isFetching,
    isError,
    error,
    data,
    fetchNextPage,
  } = useInfiniteQuery<InfniteActivitesResponse, Error>({
    queryKey: [tag],
    queryFn: async ({ pageParam = "" }) => {
      return getUserActvities(pageParam);
    },
    getNextPageParam: (lastPage) => {
      const lastCursor = lastPage?.metadata?.lastCursor;
      return lastCursor && lastPage.activities.length ? lastCursor : undefined;
    },
    refetchOnWindowFocus: false,
  });
  return (
    <section className="text-center my-4">
      {isError && <ErrorMsg error={error.message} />}
      {data?.pages.map((group, i) => (
        <React.Fragment key={i}>
          <ActivityList activities={group.activities || []} />
        </React.Fragment>
      ))}
      {(isFetching || isFetchingNextPage) && <SkeletonStrips count={4} />}
      {hasNextPage ? (
        <button
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage || !hasNextPage || isError}
          className="btn btn-ghost my-2"
        >
          load more
        </button>
      ) : (
        !isFetching && (
          <p className="menu-title capitalize">
            That's all you have done so far!
          </p>
        )
      )}
    </section>
  );
};

export default InfiniteActivityLogs;
