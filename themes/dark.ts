import { themeI } from "./themeI";

export const dark: themeI = {
  shade0: "#111",
  shade1: "#1a1a1a",
  shade2: "#222",
  shade3: "#333",
  shade4: "#444",
  shade5: "#555",
  shade6: "#666",
  shade7: "#777",
  shade8: "#888",
  shade9: "#999",
  shade10: "#aaa",
  shade11: "#bbb",
  shade12: "#ccc",
  shade13: "#ddd",
  shade14: "#eee",
  shade15: "#fff",
  // primary: "#4fc3f7",
  primary: "#03a9f4",
  primaryLight: "#4fc3f7",
  primaryDark: "#4fc000",
  secondary: "#ff7961",
  secondaryLight: "#ff7961",
  secondaryDark: "#ef5350",
  genRandomColor: () => {
    const color: string = `hsl(${360 * Math.random()}, ${15 + 70 * Math.random()
      }%, ${60 + 10 * Math.random()}%)`;

    return color;
  }
};