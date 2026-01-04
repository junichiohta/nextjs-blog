import { atom } from "jotai";
import { atomWithStorage, createJSONStorage } from "jotai/utils";

export enum SortOrder {
  Ascending,    // 昇順（古い順）
  Descending,   // 降順（新しい順）
}

const storage = createJSONStorage(() => sessionStorage);

export const sortOrderAtom = atomWithStorage(
  "sortOrder",
  SortOrder.Descending,
  storage
);
