import React from "react";
import { tagIds, tagsById, tagPostMap } from "../database";

export const Home = () => {
  return (
    <div>
      {tagIds.map((id) => {
        const tag = tagsById.get(id)!;
        const postIds = tagPostMap.get(tag.id) ?? new Set();
        return (
          <div key={id}>
            <span className="tag">
              {tag.name} ({postIds.size})
            </span>
          </div>
        );
      })}
    </div>
  );
};
