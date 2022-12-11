import React, { lazy, Suspense, useRef } from "react";
import { useDispatch } from "react-redux";
import actionCreators from "@/store/actionCreators/user";

const LazyUsers = lazy(() => import("@/components/Users"));

export default function UserList() {
  const dispatch = useDispatch();
  const resourceRef = useRef();

  if (!resourceRef.current) {
    const promise = dispatch(actionCreators.getUserList());
    const resource = wrapPromise(promise);
    resourceRef.current = resource;
  }

  return (
    <Suspense fallback={<div>Loading user list ...</div>}>
      <LazyUsers resource={resourceRef.current} />
    </Suspense>
  );
}

function wrapPromise(promise) {
  let status = "pending";
  let result;

  let suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (error) => {
      status = "error";
      result = error;
    }
  );

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
}
