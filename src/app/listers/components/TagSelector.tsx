"use client";

import React, { useState, useMemo } from "react";
import { Plus } from "lucide-react";
import { Paragraph1 } from "@/common/ui/Text";
import { ToolInfo } from "@/common/ui/ToolInfo";
import { useProductDraftStore } from "@/store/useProductDraftStore";
import { useTags, useCreateTag } from "@/lib/queries/tag/useTags";

export const TagSelector: React.FC = () => {
  const [query, setQuery] = useState("");
  const { data, setField } = useProductDraftStore();

  const selectedTagId: string | undefined = data.tagId;
  const { data: tags = [] } = useTags();
  const { mutate: createTag } = useCreateTag();

  const visibleTags = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return tags.slice(0, 10);
    return tags.filter((t) => t.name.toLowerCase().includes(q));
  }, [tags, query]);

  return (
    <div className="rounded-xl border border-gray-200 p-4">
      <div className="flex items-center gap-2 mb-1">
        <Paragraph1 className="text-xs font-bold text-black">Tag</Paragraph1>
        <ToolInfo content="Select a tag to categorize your item or add a new tag if one doesn't exist." />
      </div>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search tag..."
        className="mb-3 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-black"
      />

      <div className="flex flex-wrap gap-2">
        {visibleTags.map((tag) => {
          const active = selectedTagId === tag.id;
          return (
            <button
              key={tag.id}
              type="button"
              onClick={() => setField("tagId", tag.id)}
              className={`rounded-md border px-3 py-1.5 text-xs font-medium transition ${
                active
                  ? "border-black bg-black text-white"
                  : "border-gray-200 text-gray-700 hover:border-gray-400"
              }`}
            >
              {tag.name}
            </button>
          );
        })}

        {query &&
          !tags.some((t) => t.name.toLowerCase() === query.toLowerCase()) && (
            <button
              type="button"
              onClick={() => {
                const newId = `new-${query}`;
                createTag({ name: query });
                setField("tagId", newId);
                setQuery("");
              }}
              className="flex items-center gap-1 rounded-md border border-dashed border-gray-400 px-3 py-1.5 text-xs font-medium text-gray-700 hover:border-black"
            >
              <Plus className="h-3 w-3" />
              Add “{query}”
            </button>
          )}
      </div>
    </div>
  );
};
