import React from "react";

interface Props {
  field: any;
}
function ErrorField({ field }: Props) {
  console.log("field");
  console.log(field);
  return (
    <>
      {field && typeof field !== "string" ? (
        field.map((error: string) => (
          <p className="mt-2 text-sm text-red-500" key={error}>
            {error}
          </p>
        ))
      ) : (
        <p className="mt-2 text-sm text-red-500" key={field}>
          {field}
        </p>
      )}
    </>
  );
}

export default ErrorField;
