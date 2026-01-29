// src/app/listers/components/TagSelector.tsx
"use client";

import React, { useMemo, useState } from "react";
import { Plus } from "lucide-react";
import { Paragraph1, Paragraph3 } from "@/common/ui/Text";
import { useProductDraftStore } from "@/store/useProductDraftStore";
import { useTags, useCreateTag } from "@/lib/queries/tag/useTags";

export const TagSelector: React.FC = () => {
  const data = useProductDraftStore((s) => s.data);
  const mergeData = useProductDraftStore((s) => s.mergeData);

  const selected = data?.tags ?? [];
  const [query, setQuery] = useState("");

  const { data: tags = [] } = useTags();
  const { mutate: createTag } = useCreateTag();

  const normalizedTags = useMemo(
    () =>
      tags.map((t) => ({
        id: t.id,
        value: t.name,
      })),
    [tags],
  );

  const visibleTags = useMemo(() => {
    const q = query.trim().toLowerCase();

    if (!q) {
      return normalizedTags.slice(0, 10);
    }

    return normalizedTags.filter((t) => t.value.toLowerCase().includes(q));
  }, [normalizedTags, query]);

  const toggleTag = (tag: { id: string; value: string }) => {
    const exists = selected.some((t) => t.id === tag.id);

    if (exists) {
      mergeData({
        tags: selected.filter((t) => t.id !== tag.id),
      });
      return;
    }

    if (selected.length >= 10) return;

    mergeData({
      tags: [...selected, tag],
    });
  };

  const canAdd =
    query.length > 0 &&
    selected.length < 10 &&
    !normalizedTags.some(
      (t) => t.value.toLowerCase() === query.toLowerCase(),
    ) &&
    !selected.some((t) => t.value.toLowerCase() === query.toLowerCase());

  return (
    <div className="rounded-xl border border-gray-200 p-4">
      <Paragraph3 className="mb-1 text-xs font-bold text-black">
        Tags
      </Paragraph3>
      <Paragraph1 className="mb-3 text-xs text-gray-500">
        Select up to 10 tags
      </Paragraph1>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search tags..."
        className="mb-3 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-black"
      />

      <div className="flex flex-wrap gap-2">
        {visibleTags.map((tag) => {
          const active = selected.some((t) => t.id === tag.id);
          return (
            <button
              key={tag.id}
              type="button"
              onClick={() => toggleTag(tag)}
              className={`rounded-md border px-3 py-1.5 text-xs font-medium transition ${
                active
                  ? "border-black bg-black text-white"
                  : "border-gray-200 text-gray-700 hover:border-gray-400"
              }`}
            >
              <Paragraph1>{tag.value}</Paragraph1>
            </button>
          );
        })}

        {canAdd && (
          <button
            type="button"
            onClick={() => {
              createTag({ name: query });
              mergeData({
                tags: [
                  ...selected,
                  { id: `new-${query}`, value: query, isNew: true },
                ],
              });
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
