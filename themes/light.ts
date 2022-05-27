import { themeI } from "./themeI";

export const light: themeI = {
  shade0: '#fff',
  shade1: '#eee',
  shade2: '#ddd',
  shade3: '#ccc',
  shade4: '#bbb',
  shade5: '#aaa',
  shade6: '#999',
  shade7: '#888',
  shade8: '#777',
  shade9: '#666',
  shade10: '#555',
  shade11: '#444',
  shade12: '#333',
  shade13: '#222',
  shade14: '#111',
  shade15: '#000',
  primary: '#03a9f4',
  primaryLight: '#4fc3f7',
  primaryDark: '#4fc000',
  secondary: '#ff7961',
  secondaryLight: '#ff7961',
  secondaryDark: '#ef5350',
  genRandomColor: () => {
    const color: any = `hsl(${360 * Math.random()}, ${15 + 70 * Math.random()
      }%, ${60 + 10 * Math.random()}%)`;

    return color;
  }
}